import { trip, decisionAlerts, routeProfiles } from './trip-data.js';

const APP_VERSION='0.9.0';
const $=s=>document.querySelector(s);
let selectedIndex=0;
let selectedView='today';
let swRegistration=null;
let deferredInstallPrompt=null;
let suppressDialogNavigation=false;
let wakeLock=null;
let wakeLockWanted=false;

function mapsUrl(dest,mode='walking'){return 'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(dest)+'&travelmode='+mode;}
function gmaps(dest,mode='walking'){return 'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(dest)+'&travelmode='+mode+'&dir_action=navigate';}
function stateHref(idx,view='today'){
  const u=new URL(location.href); u.hash=''; u.search='';
  u.searchParams.set('view',view);
  if(trip[idx]) u.searchParams.set('day',trip[idx].date);
  return u.pathname+u.search;
}
function dayIndexByPhoneDate(){
  const local=new Date();
  const key=`${local.getFullYear()}-${String(local.getMonth()+1).padStart(2,'0')}-${String(local.getDate()).padStart(2,'0')}`;
  return trip.findIndex(x=>x.date===key);
}
function readUrlState(url=new URL(location.href)){
  let idx=trip.findIndex(x=>x.date===url.searchParams.get('day'));
  if(idx<0){const phoneIdx=dayIndexByPhoneDate();idx=phoneIdx>=0?phoneIdx:0;}
  const allowed=new Set(['today','day','live','planb']);
  const raw=url.searchParams.get('view');
  return {idx,view:allowed.has(raw)?raw:'today'};
}
function prefersReducedMotion(){return window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;}
function withViewTransition(update){
  if(document.startViewTransition&&!prefersReducedMotion()) return document.startViewTransition(update);
  update(); return null;
}
function navigateApp(idx,view,{replace=false}={}){
  const url=new URL(stateHref(idx,view),location.origin);
  if('navigation' in window&&window.navigation&&typeof window.navigation.navigate==='function'){
    window.navigation.navigate(url.href,{history:replace?'replace':'push',state:{day:trip[idx]?.date,view}});
  }else{
    history[replace?'replaceState':'pushState']({day:trip[idx]?.date,view},'',url.href);
    withViewTransition(()=>applyState(idx,view));
  }
}
function setupNavigation(){
  if('navigation' in window&&window.navigation&&window.navigation.addEventListener){
    window.navigation.addEventListener('navigate',event=>{
      const dest=new URL(event.destination.url);
      const sameDocument=dest.origin===location.origin&&dest.pathname===location.pathname;
      if(!sameDocument||!event.canIntercept) return;
      event.intercept({handler:async()=>{const s=readUrlState(dest);withViewTransition(()=>applyState(s.idx,s.view));}});
    });
  }else{
    window.addEventListener('popstate',()=>{const s=readUrlState();withViewTransition(()=>applyState(s.idx,s.view));});
  }
}
function copyText(text,btn){
  if(navigator.clipboard&&window.isSecureContext) navigator.clipboard.writeText(text).then(()=>flashCopy(btn)).catch(()=>fallbackCopy(text,btn));
  else fallbackCopy(text,btn);
}
function fallbackCopy(text,btn){
  const ta=document.createElement('textarea'); ta.value=text; document.body.appendChild(ta); ta.select();
  document.execCommand('copy'); ta.remove(); flashCopy(btn);
}
function flashCopy(btn){const old=btn.textContent;btn.textContent='✓ Skopiowano';setTimeout(()=>btn.textContent=old,1200);}
function operationalHtml(d){
  const p=routeProfiles[d.date]; if(!p) return '';
  const royalDay=['2026-12-13','2026-12-17','2026-12-18'].includes(d.date);
  const primaryHref=royalDay?'https://www.royalcaribbean.com/booked':gmaps(p.anchor,p.primary);
  const returnHref=royalDay?'https://www.royalcaribbean.com/booked':gmaps(p.return,p.primary==='transit'?'transit':'driving');
  return `<section class="card"><div class="kicker">🧭 WYKONANIE</div><h2>Najkrótsza droga do działania</h2>
    <div class="quickbar"><a class="btn primary" href="${primaryHref}">${p.primary_label}</a><a class="btn" href="${returnHref}">↩ Powrót / baza</a><a class="btn green" data-app-view="live" href="${stateHref(selectedIndex,'live')}">🔴 LIVE</a></div>
    <div class="pillrow">${p.pills.map(x=>`<span class="pill">${x}</span>`).join('')}</div>
    <div class="routebox">${p.offline.map((s,i)=>`<div class="step"><span class="n">${i+1}</span><div class="small">${s}</div></div>`).join('')}</div>
    <div class="copyline"><span class="copytxt">${p.anchor}</span><button class="checkbtn mini" data-copy-address=${JSON.stringify(p.anchor)}>📋 Kopiuj adres</button></div></section>`;
}
function liveLinks(items){
  const links={
    'Miami transit':['🚋 Transit','https://www.google.com/maps/dir/?api=1&destination=Miami%2C%20FL&travelmode=transit'],
    'Google Maps transit':['🚋 Transit','https://www.google.com/maps/dir/?api=1&destination=Miami%2C%20FL&travelmode=transit'],
    'Uber':['🚕 Uber','https://m.uber.com/ul/'],'Pogoda':['🌦 Pogoda','https://weather.com/weather/today/l/Miami+FL'],
    'Trolley':['🚎 Trolley','https://www.miami.gov/Transportation-Roadways/Trolley-Information'],
    'South Beach Trolley':['🚎 Trolley','https://www.miamibeachfl.gov/city-hall/transportation/trolley/'],
    'Royal App':['🚢 Royal','https://www.royalcaribbean.com/booked'],'Showtimes':['🎭 Show','https://www.royalcaribbean.com/booked'],
    'Dining availability':['🍽 Dining','https://www.royalcaribbean.com/booked'],'Meeting point':['📍 Royal','https://www.royalcaribbean.com/booked'],
    'Port status':['⚓ Port','https://www.royalcaribbean.com/booked'],'PortMiami':['⚓ PortMiami','https://www.miamidade.gov/portmiami/'],
    'MIA status':['✈️ MIA','https://www.miami-airport.com/'],'Taxi / Google Maps':['🚕 Mapa','https://www.google.com/maps'],
    'Warunki morza':['🌊 Pogoda','https://weather.com/'],'All aboard':['🚢 Royal','https://www.royalcaribbean.com/booked']
  };
  return items.map(x=>links[x]||['🔗 '+x,'https://www.google.com/search?q='+encodeURIComponent(x)]).map(x=>`<a class="btn green" href="${x[1]}">${x[0]}</a>`).join('');
}
function isAlertChecked(id){return localStorage.getItem('travelAlert:'+id)==='1';}
function toggleAlert(id){
  const key='travelAlert:'+id; if(isAlertChecked(id)) localStorage.removeItem(key); else localStorage.setItem(key,'1');
  renderTodayCompact(selectedIndex); renderDayDetail(selectedIndex);
}
function alertHtml(d){
  const list=decisionAlerts[d.date]||[]; if(!list.length) return '';
  return `<section class="card"><div class="kicker">⚠️ ALERTY DECYZYJNE</div><h2>${list.length} rzecz do sprawdzenia</h2>
  ${list.map(a=>{const checked=isAlertChecked(a.id);return `<div class="alertbox ${checked?'checked':''}"><div class="alerthead"><div><span class="badge ${a.level==='red'?'red':''}">${a.level==='red'?'HARD':'LIVE CHECK'}</span><div class="alerttitle" style="margin-top:7px">${a.title}</div></div><button class="checkbtn" data-alert-id="${a.id}">${checked?'↩ Przywróć':'✓ Sprawdzone'}</button></div><div class="small" style="margin-top:8px">${a.text}<br><b>${a.action}</b></div><div class="row"><a class="btn green" href="${a.url}">🔎 ${a.source}</a></div></div>`;}).join('')}</section>`;
}
function renderDayGrid(){
  $('#daygrid').innerHTML=trip.map((d,i)=>`<a class="daylink ${i===selectedIndex?'active':''}" data-day-index="${i}" data-app-view="day" href="${stateHref(i,'day')}"><b>${d.label}</b><span>${d.title}</span></a>`).join('');
}
function renderDayDetail(idx){
  const d=trip[idx],host=$('#dayDetail'); if(!d||!host) return;
  const foods=d.food.map(f=>`<div class="choice"><b>${f[0]} • ${f[1]}</b><div class="small">${f[2]}</div><div class="row"><a class="btn" href="${mapsUrl(f[3]||f[1],'walking')}">🚶 Maps</a></div></div>`).join('');
  const maps=d.maps.map(m=>`<a class="btn primary" href="${mapsUrl(m[1],m[2])}">🗺 ${m[0]}</a>`).join('');
  host.innerHTML=`<section class="hero"><div class="kicker">${d.label} • ${d.status}</div><h1>${d.title}</h1><div class="muted">${d.theme}</div><div class="status">${d.hard}</div></section>
  <section class="card"><div class="kicker">TERAZ</div><h2>${d.now}</h2><div class="small">Następnie: ${d.next}</div><div class="row">${maps}</div></section>
  ${operationalHtml(d)}
  <section class="card"><div class="kicker">CORE</div><ul class="core">${d.core.map(x=>'<li>'+x+'</li>').join('')}</ul></section>
  <section class="card"><div class="kicker">JEDZENIE A / B</div>${foods}</section>
  <section class="card live"><div class="kicker">🔴 LIVE</div><h2>Sprawdź tylko to, co może zmienić decyzję</h2><div class="row">${liveLinks(d.live)}</div></section>
  ${alertHtml(d)}
  <section class="card hard"><div class="kicker">PLAN B / TRIGGER</div><h2>⚠️ Gdy dzień przestaje działać</h2><div class="small">${d.planb}</div><div class="row"><button class="btn yellow" data-open-planb>Otwórz Plan B dla tego dnia</button></div></section>`;
}
function fillSelectors(){
  const options=trip.map((d,i)=>`<option value="${i}">${d.label} — ${d.title}</option>`).join('');
  $('#previewDay').innerHTML=options; $('#planbDay').innerHTML=options;
}
function renderTodayCompact(idx){
  const d=trip[idx]; if(!d) return; const p=routeProfiles[d.date]||{};
  const alertCount=(decisionAlerts[d.date]||[]).filter(a=>!isAlertChecked(a.id)).length;
  const royalDay=['2026-12-13','2026-12-17','2026-12-18'].includes(d.date);
  const primaryHref=royalDay?'https://www.royalcaribbean.com/booked':gmaps(p.anchor||d.title,p.primary||'walking');
  const returnHref=royalDay?'https://www.royalcaribbean.com/booked':gmaps(p.return||p.anchor||d.title,(p.primary==='transit'?'transit':'driving'));
  const foods=d.food.slice(0,2).map(f=>`${f[0]} • ${f[1]}`).join(' / ');
  $('#todayTitle').textContent=d.label+' — '+d.title; $('#previewDay').value=idx; $('#planbDay').value=idx;
  $('#todayBody').innerHTML=`<div class="today-card"><div class="kicker">TERAZ</div><strong>${d.now}</strong><div class="small">Następnie: ${d.next}</div></div>
  <div class="today-card"><div class="kicker">NAWIGACJA</div><div class="today-actions"><a class="btn primary" href="${primaryHref}">🧭 Jedziemy / idziemy</a><a class="btn" href="${returnHref}">↩ Powrót / baza</a></div></div>
  <div class="today-card"><div class="kicker">JEDZENIE</div><strong>${foods||'Included / elastycznie'}</strong><div class="small">Pełne A/B są w karcie dnia.</div></div>
  <div class="today-card"><div class="kicker">LIVE</div><strong>${alertCount?'⚠️ '+alertCount+' check do wykonania':'✅ Brak otwartych checków'}</strong><div class="today-actions"><a class="btn green" data-app-view="live" href="${stateHref(idx,'live')}">🔴 LIVE Center</a><a class="btn" data-app-view="day" href="${stateHref(idx,'day')}">Pełny dzień</a></div></div>
  <div class="today-card hardline"><span class="harddot"></span><div><div class="kicker">HARD / RETURN</div><strong>${d.hard}</strong></div></div>`;
}
function syncNav(){document.querySelectorAll('[data-app-view]').forEach(el=>el.classList.toggle('active',el.dataset.appView===selectedView));}
function scrollForView(view){
  const target=view==='live'?$('#live-center'):view==='day'?$('#dayDetail'):$('#todayCard');
  if(target) target.scrollIntoView({behavior:prefersReducedMotion()?'auto':'smooth',block:'start'});
}
function applyState(idx,view,{scroll=true}={}){
  selectedIndex=idx; selectedView=view; renderTodayCompact(idx); renderDayGrid(); renderDayDetail(idx); syncNav();
  if(view==='planb') openPlanBSheet(idx,false); else closePlanBSheet(false);
  if(scroll&&view!=='planb') requestAnimationFrame(()=>scrollForView(view));
}
function planBReturnHref(d,p){
  if(['2026-12-13','2026-12-17','2026-12-18'].includes(d.date)) return 'https://www.royalcaribbean.com/booked';
  return gmaps((p&&p.return)||(p&&p.anchor)||d.title,(p&&p.primary)==='transit'?'transit':'driving');
}
function buildReplan(d,p,e,t){
  const foodB=d.food&&d.food[1]?d.food[1][1]:(d.food&&d.food[0]?d.food[0][1]:'najprostsze dostępne jedzenie');
  const core0=d.core&&d.core[0]?d.core[0]:d.now;
  let title='Wersja skrócona',decision='Kończymy po jednym prostym bloku i wracamy do bazy.',keep='Zachowujemy najważniejszy CORE: '+core0+'.',drop='Nie dokładamy nic spoza planu.';
  if(e==='low'){title='Kończymy aktywną część dnia';decision='Wracamy do bazy / na statek przy najbliższej sensownej okazji. Jeśli trzeba zjeść: '+foodB+'.';keep='Zachowujemy tylko rzeczy HARD, których nie chcemy stracić bez osobnej decyzji.';drop='Wszystkie atrakcje opcjonalne i dodatkowe klastry odpadają.';}
  else if(t<=30){title='Mamy tylko 30 minut';decision='Nie rozpoczynamy nic nowego. Kończymy to, co jest pod ręką, albo wracamy.';keep='Najbliższy prosty krok; jeśli potrzebne jedzenie: '+foodB+'.';drop='Nowy klaster, długi przejazd i dodatkowa atrakcja odpadają.';}
  else if(e==='mid'||t<=60){title='Zostaje jeden prosty blok';decision='Zostawiamy tylko jeden najważniejszy element dnia, potem jedzenie / powrót.';keep=core0+'. Potem '+foodB+' i powrót.';drop='Drugi klaster / bonus / dokładanie nowych punktów odpada.';}
  else if(e==='good'&&t>=120){title='Plan bazowy nadal działa';decision='Następnie: '+d.next;keep='Zostaje obecny plan. Nie dokładamy nowej dzielnicy ani dodatkowej wycieczki.';drop='Plan B nie jest potrzebny, dopóki nie zmieni się energia, czas albo warunki LIVE.';}
  return {title,decision,keep,drop,dayRule:d.planb};
}
function replan(){
  const idx=Number($('#planbDay').value),d=trip[idx]; if(!d) return; const p=routeProfiles[d.date]||{};
  const r=buildReplan(d,p,$('#energy').value,Number($('#timeleft').value));
  $('#result').innerHTML=`<div class="result"><div class="kicker">PLAN B • ${d.label}</div><h3>${r.title}</h3><div class="planbline"><b>Decyzja teraz:</b> ${r.decision}</div><div class="planbline"><b>Reguła dnia:</b> ${r.dayRule}</div><div class="planbline"><b>Zostaje:</b> ${r.keep}</div><div class="planbline"><b>Odpuszczamy:</b> ${r.drop}</div><div class="planbline"><b>HARD / nie zgubić:</b> ${d.hard}</div><div class="planbactions"><a class="btn" href="${planBReturnHref(d,p)}">↩ Powrót / baza</a><a class="btn green" data-app-view="day" href="${stateHref(idx,'day')}">Pełny plan dnia</a></div></div>`;
}
function updatePlanBContext(idx){
  const d=trip[idx]; $('#planbContext').innerHTML=d?`<b>${d.label} — ${d.title}</b><br><span class="small">${d.hard}</span>`:'Wybierz dzień.';
}
function openPlanBSheet(idx=selectedIndex,navigate=true){
  $('#planbDay').value=idx; updatePlanBContext(idx); const dlg=$('#planbDialog');
  if(!dlg.open){if(typeof dlg.showModal==='function') dlg.showModal(); else dlg.setAttribute('open','');}
  if(navigate&&selectedView!=='planb') navigateApp(idx,'planb');
}
function closePlanBSheet(navigate=true){
  const dlg=$('#planbDialog'); if(dlg&&dlg.open){suppressDialogNavigation=!navigate;if(typeof dlg.close==='function') dlg.close(); else dlg.removeAttribute('open');}
}
async function requestWakeLock(){
  if(!('wakeLock' in navigator)||document.visibilityState!=='visible') return;
  try{wakeLock=await navigator.wakeLock.request('screen');wakeLock.addEventListener('release',()=>{wakeLock=null;updateWakeButton();});}
  catch(e){wakeLock=null;wakeLockWanted=false;}
  updateWakeButton();
}
async function toggleWakeLock(){
  wakeLockWanted=!wakeLockWanted;
  if(wakeLockWanted) await requestWakeLock(); else if(wakeLock){await wakeLock.release();wakeLock=null;}
  updateWakeButton();
}
function updateWakeButton(){
  const b=$('#wakeBtn');if(!b)return;const active=!!wakeLock&&!wakeLock.released;
  b.textContent=active?'☀️ Ekran aktywny: wł.':'☀️ Ekran aktywny: wył.';b.classList.toggle('wake-on',active);b.setAttribute('aria-pressed',active?'true':'false');
}
function setupWakeLock(){
  const b=$('#wakeBtn');if('wakeLock' in navigator){b.hidden=false;b.addEventListener('click',toggleWakeLock);document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&wakeLockWanted&&!wakeLock) requestWakeLock();});}
}
function updateNetworkBadge(){const b=$('#netBadge');if(!b)return;if(navigator.onLine){b.textContent='● ONLINE';b.classList.remove('offline');}else{b.textContent='● OFFLINE';b.classList.add('offline');}}
function versionParts(v){return String(v).split('.').map(x=>parseInt(x,10)||0);}
function isNewerVersion(remote,local){const a=versionParts(remote),b=versionParts(local);for(let i=0;i<Math.max(a.length,b.length);i++){const x=a[i]||0,y=b[i]||0;if(x>y)return true;if(x<y)return false;}return false;}
async function checkGuideVersion(){
  if(!navigator.onLine)return;try{const r=await fetch('./version.json?ts='+Date.now(),{cache:'no-store'});if(!r.ok)return;const v=await r.json();if(v&&v.version&&isNewerVersion(v.version,APP_VERSION)){$('#updateText').textContent=`Nowa wersja: ${v.version}${v.note?' — '+v.note:''}`;$('#updateBanner').classList.add('show');}}catch(e){}
}
async function applyUpdate(){try{if(swRegistration){await swRegistration.update();if(swRegistration.waiting){swRegistration.waiting.postMessage({type:'SKIP_WAITING'});return;}}}catch(e){}location.reload();}
function setupInstall(){
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;$('#installBox').style.display='block';});
  $('#installBtn').addEventListener('click',async()=>{if(!deferredInstallPrompt)return;deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;$('#installBox').style.display='none';});
  $('#installLaterBtn').addEventListener('click',()=>$('#installBox').style.display='none');
}
async function setupServiceWorker(){
  if(!('serviceWorker' in navigator)||!(location.protocol==='https:'||location.hostname==='localhost'))return;
  try{swRegistration=await navigator.serviceWorker.register('./service-worker.js',{updateViaCache:'none'});navigator.serviceWorker.addEventListener('controllerchange',()=>location.reload());await swRegistration.update();checkGuideVersion();}catch(e){}
}
function setupEvents(){
  document.addEventListener('click',e=>{
    const appLink=e.target.closest('[data-app-view]');if(appLink){e.preventDefault();const idx=Number(appLink.dataset.dayIndex??selectedIndex);navigateApp(Number.isNaN(idx)?selectedIndex:idx,appLink.dataset.appView||'today');return;}
    const alertBtn=e.target.closest('[data-alert-id]');if(alertBtn){toggleAlert(alertBtn.dataset.alertId);return;}
    const copyBtn=e.target.closest('[data-copy-address]');if(copyBtn){copyText(copyBtn.dataset.copyAddress,copyBtn);return;}
    if(e.target.closest('[data-open-planb]')){openPlanBSheet(selectedIndex,true);return;}
  });
  $('#previewDay').addEventListener('change',e=>navigateApp(Number(e.target.value),'today'));
  $('#planbDay').addEventListener('change',e=>{const idx=Number(e.target.value);updatePlanBContext(idx);if(selectedView==='planb')navigateApp(idx,'planb',{replace:true});if($('#result').innerHTML.trim())replan();});
  $('#energy').addEventListener('change',()=>{if($('#result').innerHTML.trim())replan();});
  $('#timeleft').addEventListener('change',()=>{if($('#result').innerHTML.trim())replan();});
  $('#replanBtn').addEventListener('click',replan);$('#planbNav').addEventListener('click',()=>openPlanBSheet(selectedIndex,true));$('#closePlanB').addEventListener('click',()=>closePlanBSheet(true));
  $('#planbDialog').addEventListener('close',()=>{if(suppressDialogNavigation){suppressDialogNavigation=false;return;}if(selectedView==='planb')navigateApp(selectedIndex,'today',{replace:true});});
  $('#applyUpdateBtn').addEventListener('click',applyUpdate);$('#dismissUpdateBtn').addEventListener('click',()=>$('#updateBanner').classList.remove('show'));
  window.addEventListener('online',()=>{updateNetworkBadge();checkGuideVersion();});window.addEventListener('offline',updateNetworkBadge);
}
function init(){
  fillSelectors();setupNavigation();setupEvents();setupWakeLock();setupInstall();updateNetworkBadge();
  const state=readUrlState(),normalized=stateHref(state.idx,state.view);
  if(location.pathname+location.search!==normalized)history.replaceState({day:trip[state.idx].date,view:state.view},'',normalized);
  applyState(state.idx,state.view,{scroll:false});setupServiceWorker();checkGuideVersion();
}
init();
