# Miami + Icon 2026 Guide

Mobilny przewodnik PWA dla podróży **9–20 grudnia 2026**: Miami + **Icon of the Seas**.

**Current:** v0.9.0 — modernization pass, 2026-11-06.

## Co zmienia v0.9.0

- 📍 **Stateful navigation:** wybrany dzień i widok są zapisane w URL; Back/Forward i odświeżenie zachowują kontekst. Navigation API działa jako progressive enhancement z fallbackiem do History API.
- ⚠️ **Plan B jako native bottom sheet:** otwiera się nad bieżącym widokiem, zachowuje kontekst dnia i oddziela „Decyzję teraz” od „Reguły dnia”.
- ⚡ **Render-on-demand:** aplikacja renderuje jeden pełny dzień zamiast wszystkich 12 naraz; dodatkowo używa `content-visibility`.
- ☀️ **Wake Lock:** opcjonalny przycisk w Trybie Dzisiaj może utrzymywać ekran aktywny podczas wykonywania planu.
- 🎞️ **View Transitions:** subtelne przejścia na wspieranych przeglądarkach, z poszanowaniem `prefers-reduced-motion`.
- 🔄 **PWA update hardening:** service worker używa `updateViaCache: "none"`, navigation preload i mocniejszego fallbacku offline.
- 🧩 **Rozdzielona architektura bez frameworka:** `trip-data.js`, `app.js`, `styles.css`, cienki `index.html`.
- 📲 **PWA shortcuts:** Dziś / LIVE / Plan B jako opcjonalne skróty launchera.

## Architektura

- `index.html` — szkielet UI.
- `styles.css` — wygląd i responsive/mobile ergonomics.
- `trip-data.js` — publiczne dane operacyjne planu.
- `app.js` — nawigacja, renderowanie, Plan B, Wake Lock, aktualizacje PWA.
- `service-worker.js` — offline/cache/update.
- `scripts/qa.py` — regresja struktury, tras, PWA i prywatności.

## Dane operacyjne

- 🎭 Potwierdzone show i Royal SHOREX są odzwierciedlone w `trip-data.js`.
- 🏨 Hotele pozostają odwoływalnym baseline; zmiana tylko przy wyraźnie lepszym bilansie ceny, lokalizacji, śniadania i transportu.
- 🚇 Miami: publiczny transport i chodzenie jako baza; Uber Car Seat / transfer z fotelikiem jako fallback.

## Prywatność

Repo jest publiczne. Nie przechowuje nazwisk, numerów rezerwacji, numeru kabiny, danych paszportowych ani innych danych wrażliwych.
