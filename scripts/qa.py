from pathlib import Path
import json, re, sys
from html.parser import HTMLParser

ROOT=Path(__file__).resolve().parents[1]
errors=[]
warnings=[]

required=[
    "index.html","styles.css","app.js","trip-data.js","manifest.webmanifest",
    "service-worker.js","version.json","offline.html","icon-192.png","icon-512.png"
]
for name in required:
    if not (ROOT/name).exists():
        errors.append(f"Missing required file: {name}")

def load_json(name):
    try:
        return json.loads((ROOT/name).read_text(encoding="utf-8"))
    except Exception as e:
        errors.append(f"{name} invalid JSON: {e}")
        return {}

manifest=load_json("manifest.webmanifest")
version=load_json("version.json")
index=(ROOT/"index.html").read_text(encoding="utf-8") if (ROOT/"index.html").exists() else ""
app=(ROOT/"app.js").read_text(encoding="utf-8") if (ROOT/"app.js").exists() else ""
data=(ROOT/"trip-data.js").read_text(encoding="utf-8") if (ROOT/"trip-data.js").exists() else ""
styles=(ROOT/"styles.css").read_text(encoding="utf-8") if (ROOT/"styles.css").exists() else ""

if manifest:
    for key in ("name","short_name","start_url","display","icons"):
        if key not in manifest: errors.append(f"manifest missing: {key}")
    if manifest.get("display")!="standalone":
        warnings.append("manifest display is not standalone")
    if len(manifest.get("shortcuts",[]))<3:
        warnings.append("manifest shortcuts missing or incomplete")

if version and not re.fullmatch(r"\d+\.\d+\.\d+",str(version.get("version",""))):
    errors.append("version.json version must be semver x.y.z")

for day in range(9,21):
    date=f"2026-12-{day:02d}"
    if date not in data:
        errors.append(f"Trip day missing from trip-data.js: {date}")

for token in ("TRYB DZISIAJ","LIVE CENTER","PLAN B","HARD / RETURN","PLAN SIĘ ZMIENIŁ"):
    if token not in index+app:
        errors.append(f"Required UI layer missing: {token}")

bad_route="Government Center → Green Line southbound → Earlington Heights"
good_route="Government Center → Green Line northbound"
if bad_route in data:
    errors.append("CRITICAL ROUTE ERROR: Dec20 Government Center → Earlington Heights cannot be southbound.")
if good_route not in data or "kierunku Palmetto" not in data:
    errors.append("Dec20 transit backup must state Green Line northbound toward Palmetto to Earlington Heights.")

for token in ("id=\"planbDialog\"","id=\"wakeBtn\"","id=\"dayDetail\"","type=\"module\" src=\"app.js\""):
    if token not in index:
        errors.append(f"Modern UI hook missing: {token}")
for token in ("updateViaCache:'none'","window.navigation","document.startViewTransition","navigator.wakeLock","renderDayDetail"):
    if token not in app:
        errors.append(f"Modern behavior missing: {token}")

secret_patterns={
    "Google API key":r"AIza[0-9A-Za-z\-_]{30,}",
    "GitHub token":r"gh[pousr]_[0-9A-Za-z]{20,}",
    "OpenAI-style key":r"\bsk-[0-9A-Za-z\-_]{20,}",
}
combined="\n".join([index,app,data,styles])
for label,pat in secret_patterns.items():
    if re.search(pat,combined):
        errors.append(f"Possible secret found: {label}")

for forbidden in ("Ireneusz","Anna","Oliwia","2610882","8YTGKX","8544","1148-540-550"):
    if forbidden in combined:
        errors.append(f"Known PII / booking identifier found in public app: {forbidden}")

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=set(); self.hrefs=[]
    def handle_starttag(self,tag,attrs):
        d=dict(attrs)
        if "id" in d: self.ids.add(d["id"])
        if tag=="a" and "href" in d: self.hrefs.append(d["href"])

p=LinkParser(); p.feed(index)
for href in p.hrefs:
    if href.startswith("http://"):
        errors.append(f"Insecure external link: {href}")

sw=(ROOT/"service-worker.js").read_text(encoding="utf-8") if (ROOT/"service-worker.js").exists() else ""
for name in ("index.html","styles.css","app.js","trip-data.js","manifest.webmanifest","version.json","offline.html","icon-192.png","icon-512.png"):
    if name not in sw:
        errors.append(f"service-worker core does not mention: {name}")
if "SKIP_WAITING" not in sw:
    errors.append("service-worker missing update activation handler")
if "navigationPreload.enable" not in sw:
    errors.append("service-worker missing navigation preload")

print("Miami + Icon guide QA")
print("=====================")
for w in warnings: print("WARN:",w)
for e in errors: print("ERROR:",e)
if errors:
    print(f"\nFAILED: {len(errors)} error(s)")
    sys.exit(1)
print("\nPASS: modular app shell, trip coverage, route invariant, PWA hooks and privacy checks are OK.")
