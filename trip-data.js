// Public operational trip data only. No PII / booking identifiers.
export const trip=[
  {
    "date": "2026-12-09",
    "label": "9 XII • środa",
    "title": "Przylot do Miami",
    "theme": "Podróż + regeneracja",
    "status": "READY • HOTEL TBD",
    "hard": "Lot ląduje 17:35 • hotel pozostaje TBD do końcowego porównania",
    "now": "MIA → hotel (wybór końcowy później)",
    "next": "Kolacja tylko jeśli macie siłę",
    "core": [
      "Immigration + bagaż",
      "MIA Mover → Metrorail / transport publiczny jako baza",
      "Uber Car Seat tylko gdy jest dostępny i realnie upraszcza przejazd"
    ],
    "food": [
      [
        "A",
        "Kolacja blisko wybranego hotelu",
        "bez dodatkowego przejazdu po długim locie",
        "Downtown Miami, FL"
      ],
      [
        "B",
        "Take-away / szybki lokalny posiłek",
        "priorytet: sen i regeneracja",
        "Downtown Miami, FL"
      ]
    ],
    "live": [
      "Miami transit",
      "Uber",
      "Pogoda"
    ],
    "planb": "Jeśli wyjdziecie z lotniska późno: hotel + jedzenie + sen. Nie dokładamy zwiedzania.",
    "maps": [
      [
        "Downtown hub",
        "Government Center, Miami, FL",
        "transit"
      ]
    ]
  },
  {
    "date": "2026-12-10",
    "label": "10 XII • czwartek",
    "title": "South Beach + Art Deco",
    "theme": "Klasyczne Miami w spokojnym tempie",
    "status": "READY",
    "hard": "Kończymy aktywną część dnia około 16:30–17:00",
    "now": "Hotel → South Pointe / South Beach",
    "next": "Plaża → Lummus → Ocean Drive",
    "core": [
      "South Pointe Park",
      "Plaża i promenada",
      "Lummus Park + Ocean Drive / Art Deco"
    ],
    "food": [
      [
        "A",
        "Puerto Sagua",
        "klasyczny kubański diner",
        "700 Collins Ave, Miami Beach, FL"
      ],
      [
        "B",
        "Lokalny fallback na South Beach",
        "wybieramy blisko aktualnej trasy, bez specjalnego dojazdu",
        "South Beach, Miami Beach, FL"
      ]
    ],
    "live": [
      "Google Maps transit",
      "Uber",
      "Pogoda",
      "South Beach Trolley"
    ],
    "planb": "Jeśli plaża jest hitem — zostajecie dłużej. Jeśli energia spada — skracamy spacer, nie dokładamy kolejnej dzielnicy.",
    "maps": [
      [
        "South Pointe",
        "South Pointe Park, 1 Washington Ave, Miami Beach, FL",
        "transit"
      ],
      [
        "Ocean Drive",
        "Art Deco Welcome Center, 1001 Ocean Dr, Miami Beach, FL",
        "walking"
      ]
    ]
  },
  {
    "date": "2026-12-11",
    "label": "11 XII • piątek",
    "title": "Little Havana + Vizcaya",
    "theme": "Lokalne Miami + ogrody",
    "status": "READY",
    "hard": "Maksymalnie 2 klastry • powrót do hotelu około 16:00",
    "now": "Hotel → Calle Ocho",
    "next": "Lunch → Vizcaya → powrót",
    "core": [
      "Domino Park + Calle Ocho",
      "Lokalny lunch",
      "Vizcaya Museum & Gardens"
    ],
    "food": [
      [
        "A",
        "Sanguich",
        "kubańskie kanapki / szybki lunch",
        "2057 SW 8th St, Miami, FL"
      ],
      [
        "B",
        "El Rey De Las Fritas",
        "frita / klasyczne lokalne jedzenie",
        "1821 SW 8th St, Miami, FL"
      ]
    ],
    "live": [
      "Miami transit",
      "Uber",
      "Pogoda"
    ],
    "planb": "Jeśli rano tempo jest wolniejsze: zostawiamy Little Havana jako CORE, a Vizcaya może wypaść. Bez dokładania Wynwood.",
    "maps": [
      [
        "Calle Ocho",
        "Domino Park, 1444 SW 8th St, Miami, FL 33135",
        "transit"
      ],
      [
        "Vizcaya",
        "Vizcaya Museum & Gardens, 3251 S Miami Ave, Miami, FL",
        "transit"
      ]
    ]
  },
  {
    "date": "2026-12-12",
    "label": "12 XII • sobota",
    "title": "Icon of the Seas — embarkation",
    "theme": "Wejście na statek + sail away + wieczorny show",
    "status": "HARD",
    "hard": "Odpłynięcie 16:30 • Headliner Showtime 19:15 RESERVED • terminal i arrival slot sprawdzamy LIVE",
    "now": "Hotel → PortMiami",
    "next": "Muster → lunch → sail away → 19:15 Headliner Showtime",
    "core": [
      "Spokojne śniadanie + checkout",
      "Uber Car Seat / wcześniej uzgodniony transfer do portu",
      "Muster + kabina + lunch",
      "19:15 Headliner Showtime — Royal Theater, Deck 4 Forward • 50 min • rezerwacja potwierdzona"
    ],
    "food": [
      [
        "A",
        "AquaDome Market",
        "casual lunch po wejściu",
        "Icon of the Seas"
      ],
      [
        "B",
        "Surfside Eatery",
        "łatwo rodzinnie",
        "Icon of the Seas"
      ]
    ],
    "live": [
      "Royal App",
      "Uber",
      "PortMiami",
      "Pogoda"
    ],
    "planb": "Brak zwiedzania rano. Jeśli terminal się przeciąga — DAY-1 BAG ma wystarczyć do kabiny.",
    "maps": [
      [
        "PortMiami",
        "PortMiami, Miami, FL",
        "driving"
      ]
    ]
  },
  {
    "date": "2026-12-13",
    "label": "13 XII • niedziela",
    "title": "Sea Day #1 — STARBURST",
    "theme": "Poznajemy Icon bez pośpiechu",
    "status": "READY",
    "hard": "STARBURST 19:00 RESERVED • 50 min • pozostałe godziny sprawdzamy LIVE",
    "now": "Surfside rano",
    "next": "Odpoczynek → rodzinne aktywności → STARBURST 19:00",
    "core": [
      "Surfside",
      "Basen / spokojne rodzinne atrakcje",
      "19:00 STARBURST — 50 min — rezerwacja potwierdzona"
    ],
    "food": [
      [
        "A",
        "Surfside Eatery",
        "wygodnie rodzinnie",
        "Icon of the Seas"
      ],
      [
        "B",
        "AquaDome Market",
        "większy wybór",
        "Icon of the Seas"
      ]
    ],
    "live": [
      "Royal App",
      "Showtimes",
      "Dining availability"
    ],
    "planb": "Jeśli dziecko nie chce Adventure Ocean — rezygnujemy bez konsekwencji. Jeden główny show wystarczy.",
    "maps": []
  },
  {
    "date": "2026-12-14",
    "label": "14 XII • poniedziałek",
    "title": "Costa Maya — Chacchoben Mayan Ruins",
    "theme": "Royal SHOREX + Majowie",
    "status": "RESERVED",
    "hard": "Chacchoben Mayan Ruins 08:30 • 4 h • RESERVED • $110.99/paying guest",
    "now": "Royal SHOREX — Chacchoben Mayan Ruins 08:30",
    "next": "Powrót około 12:30 → lunch / spokojny Icon",
    "core": [
      "Royal SHOREX zarezerwowany: Chacchoben Mayan Ruins, 08:30, 4 h",
      "Dziecko $0; płatne 2 osoby dorosłe",
      "Aktualny benchmark oferty: 2 × $110.99 = $221.98"
    ],
    "food": [
      [
        "A",
        "Lunch w ramach wybranej opcji",
        "jeśli obejmuje lokalny posiłek",
        "Costa Maya, Mexico"
      ],
      [
        "B",
        "Lunch na Icon",
        "najprostszy wariant po powrocie",
        "Icon of the Seas"
      ]
    ],
    "live": [
      "Royal App",
      "Meeting point",
      "Pogoda",
      "Port status"
    ],
    "planb": "Jeśli rozważamy zmianę, najpierw sprawdzamy order history i warunki anulowania; nie anulujemy działającej rezerwacji przed zabezpieczeniem lepszej opcji.",
    "maps": [
      [
        "Port Costa Maya",
        "Costa Maya Cruise Port, Mahahual, Mexico",
        "driving"
      ]
    ]
  },
  {
    "date": "2026-12-15",
    "label": "15 XII • wtorek",
    "title": "Roatán — Chocolate Factory + Monkey & Sloth Park",
    "theme": "Zarezerwowana wycieczka + elastyczny powrót",
    "status": "RESERVED • PRICE CHECK",
    "hard": "Accessible Chocolate Factory, Monkey & Sloth Park, and Scenic Tour • 08:00 • 3 h • RESERVED",
    "now": "Royal SHOREX 08:00 — Accessible Chocolate Factory, Monkey & Sloth Park, and Scenic Tour",
    "next": "Po około 11:00 krótki lunch / spacer albo wcześniejszy powrót",
    "core": [
      "Royal SHOREX zarezerwowany: 08:00, 3 h",
      "Dziecko $0; płatne 2 osoby dorosłe",
      "Aktualny benchmark oferty: 2 × $126.99 = $253.98"
    ],
    "food": [
      [
        "A",
        "Baleada / lokalny lunch",
        "krótko i lokalnie, jeśli naturalnie wypada na trasie",
        "Roatan, Honduras"
      ],
      [
        "B",
        "Lunch na Icon",
        "pewny fallback",
        "Icon of the Seas"
      ]
    ],
    "live": [
      "Royal App",
      "Meeting point",
      "Pogoda"
    ],
    "planb": "Order history i zasady anulowania sprawdzamy dopiero przed ewentualną zmianą rezerwacji.",
    "maps": [
      [
        "Port Roatán",
        "Coxen Hole Cruise Port, Roatan, Honduras",
        "driving"
      ]
    ]
  },
  {
    "date": "2026-12-16",
    "label": "16 XII • środa",
    "title": "Cozumel — Scenic Open Top Bus + Mayan Heritage + Beach",
    "theme": "Zarezerwowana 5-godzinna wycieczka",
    "status": "RESERVED • PRICE CHECK",
    "hard": "Best of Cozumel: Scenic Open Top Bus, Mayan Heritage & Beach Escape • 09:30 • 5 h • RESERVED",
    "now": "Royal SHOREX 09:30 — Best of Cozumel: Scenic Open Top Bus, Mayan Heritage & Beach Escape",
    "next": "Około 14:30 późny lunch / krótki port → spokojny powrót",
    "core": [
      "Royal SHOREX zarezerwowany: 09:30, 5 h",
      "Dziecko $0; płatne 2 osoby dorosłe",
      "Aktualny benchmark oferty: 2 × $57.99 = $115.98"
    ],
    "food": [
      [
        "A",
        "Lokalne tacos / mała restauracja",
        "wybieramy po trasie, bez resortowego pakietu",
        "San Miguel de Cozumel, Quintana Roo, Mexico"
      ],
      [
        "B",
        "Lunch na Icon",
        "jeśli nie trafimy na dobry lokalny moment",
        "Icon of the Seas"
      ]
    ],
    "live": [
      "Taxi / Google Maps",
      "Pogoda",
      "Warunki morza",
      "Royal App"
    ],
    "planb": "Po zakończeniu około 14:30 nie dokładamy drugiego dużego programu. Order history i anulowanie sprawdzamy tylko przed ewentualną zmianą.",
    "maps": [
      [
        "Port Cozumel",
        "Cozumel Cruise Port, Cozumel, Mexico",
        "walking"
      ]
    ]
  },
  {
    "date": "2026-12-17",
    "label": "17 XII • czwartek",
    "title": "Sea Day #2 — AQUA ACTION!",
    "theme": "Powtarzamy tylko to, co wygrało",
    "status": "READY",
    "hard": "AQUA ACTION! 19:45 RESERVED • 1 h",
    "now": "Rodzinny poranek",
    "next": "Odpoczynek → spokojny dzień → AQUA ACTION! 19:45",
    "core": [
      "Powtórka najlepszych rodzinnych atrakcji z pierwszego sea day",
      "Czas rodzinny / odpoczynek",
      "19:45 AQUA ACTION! — 1 h — rezerwacja potwierdzona"
    ],
    "food": [
      [
        "A",
        "Surfside Eatery",
        "łatwy rodzinny fallback",
        "Icon of the Seas"
      ],
      [
        "B",
        "AquaDome Market",
        "elastycznie",
        "Icon of the Seas"
      ]
    ],
    "live": [
      "Royal App",
      "Showtimes",
      "Dining availability"
    ],
    "planb": "Nie nadrabiamy atrakcji kosztem energii. Zachowujemy siły na zarezerwowany show 19:45.",
    "maps": []
  },
  {
    "date": "2026-12-18",
    "label": "18 XII • piątek",
    "title": "Perfect Day at CocoCay + The Wizard of Oz",
    "theme": "Included family day",
    "status": "READY",
    "hard": "CocoCay 07:00–17:00 • The Wizard of Oz 19:00 RESERVED • 1 h 40 min",
    "now": "Harbor Beach / rodzinne strefy",
    "next": "Plaża / rodzinne strefy → powrót → kolacja → The Wizard of Oz 19:00",
    "core": [
      "Spokojna plaża + rodzinne strefy CocoCay",
      "Included lunch; bez płatnych dodatków jako default",
      "19:00 The Wizard of Oz — Royal Theater — 1 h 40 min — rezerwacja potwierdzona"
    ],
    "food": [
      [
        "A",
        "Snack Shack",
        "included",
        "Perfect Day at CocoCay, Bahamas"
      ],
      [
        "B",
        "Chill Grill",
        "included",
        "Perfect Day at CocoCay, Bahamas"
      ]
    ],
    "live": [
      "Royal App",
      "Pogoda",
      "All aboard"
    ],
    "planb": "Wracamy ze spokojnym buforem. Jeśli dzień na wyspie się przeciągnie, skracamy ostatni blok na CocoCay; show 19:00 pozostaje zarezerwowany.",
    "maps": [
      [
        "CocoCay",
        "Perfect Day at CocoCay, Bahamas",
        "walking"
      ]
    ]
  },
  {
    "date": "2026-12-19",
    "label": "19 XII • sobota",
    "title": "Miami po rejsie — Frost Science",
    "theme": "Lekki dzień po zejściu ze statku",
    "status": "READY • HOTEL TBD",
    "hard": "Statek przypływa około 06:00 • najpierw bagaże i luggage drop",
    "now": "PortMiami → zostawienie bagażu → Frost Science",
    "next": "Odpoczynek + wczesna kolacja",
    "core": [
      "Zostawić bagaże w finalnie wybranym hotelu",
      "Frost Science około 10:00–14:00",
      "Wczesna kolacja i spokojny wieczór"
    ],
    "food": [
      [
        "A",
        "La Camaronera",
        "seafood, jeśli transport jest wygodny",
        "1952 W Flagler St, Miami, FL"
      ],
      [
        "B",
        "Garcia's Seafood Grille & Fish Market",
        "alternatywa nad rzeką",
        "398 NW North River Dr, Miami, FL"
      ]
    ],
    "live": [
      "Miami transit",
      "Uber",
      "Pogoda"
    ],
    "planb": "Jeśli zejście ze statku się przeciąga: skracamy Frost / lunch, nie dokładamy kolejnej dzielnicy.",
    "maps": [
      [
        "Frost Science",
        "Phillip and Patricia Frost Museum of Science, 1101 Biscayne Blvd, Miami, FL",
        "transit"
      ]
    ]
  },
  {
    "date": "2026-12-20",
    "label": "20 XII • niedziela",
    "title": "Downtown / Brickell + wylot",
    "theme": "Bardzo lekki ostatni dzień",
    "status": "HARD",
    "hard": "Lot MIA 19:35 • cel: być na lotnisku około 16:00",
    "now": "Lekki spacer / Metromover zależnie od hotelu",
    "next": "MIA bez pośpiechu",
    "core": [
      "Bagaże zostają w hotelu do wyjazdu",
      "Metromover / Bayfront / Brickell — tylko blisko i łatwo",
      "Wyjazd w stronę MIA około 15:30–16:00"
    ],
    "food": [
      [
        "A",
        "Lunch blisko hotelu",
        "bez specjalnego dojazdu",
        "Downtown Miami, FL"
      ],
      [
        "B",
        "Lekki posiłek przed lotniskiem",
        "jeśli dzień idzie wolniej",
        "Downtown Miami, FL"
      ]
    ],
    "live": [
      "Miami transit",
      "Uber",
      "MIA status",
      "Pogoda"
    ],
    "planb": "Nie dokładamy Everglades, Key Biscayne ani odległej atrakcji. Jeśli transport publiczny wygląda słabo: Uber Car Seat.",
    "maps": [
      [
        "MIA",
        "Miami International Airport, Miami, FL",
        "transit"
      ]
    ]
  }
];

export const decisionAlerts={
  "2026-12-09": [
    {
      "id": "mia-arrival-transit",
      "level": "yellow",
      "title": "MIA → hotel: sprawdź trasę dopiero po finalnym wyborze hotelu",
      "text": "Hotel nie jest jeszcze ustalony. Publiczny transport jest baseline, ale finalna trasa zależy od lokalizacji.",
      "action": "Przed wyjazdem zapisz finalny adres hotelu i sprawdź LIVE Metrorail / Uber Car Seat.",
      "url": "https://www.miamidade.gov/global/transportation/home.page",
      "source": "Miami-Dade"
    }
  ],
  "2026-12-10": [
    {
      "id": "beach-transit",
      "level": "yellow",
      "title": "South Beach: sprawdź transit / trolley przed wyjściem",
      "text": "Korki i realny czas powrotu są ważniejsze niż planowany rozkład.",
      "action": "Jeśli publiczny transport przestaje działać sensownie: Uber Car Seat.",
      "url": "https://www.miamibeachfl.gov/trolleytracker/",
      "source": "Miami Beach"
    }
  ],
  "2026-12-11": [
    {
      "id": "little-havana-vizcaya",
      "level": "yellow",
      "title": "Little Havana → Vizcaya: sprawdź LIVE po lunchu",
      "text": "Vizcaya jest drugim klastrem dnia, nie obowiązkiem.",
      "action": "Jeśli energia lub transport są słabe: kończymy na Little Havana.",
      "url": "https://www.miamidade.gov/global/transportation/home.page",
      "source": "Miami-Dade"
    }
  ],
  "2026-12-12": [
    {
      "id": "port-terminal",
      "level": "red",
      "title": "Embarkation: terminal + arrival slot",
      "text": "Przed wyjazdem sprawdź Royal App i terminal PortMiami. To HARD dependency.",
      "action": "Dopiero potem zamawiamy Uber Car Seat / transfer.",
      "url": "https://www.miamidade.gov/portmiami/cruise-terminals.page",
      "source": "PortMiami"
    },
    {
      "id": "headliner-day1",
      "level": "yellow",
      "title": "Headliner Showtime 19:15 — rezerwacja potwierdzona",
      "text": "Royal Theater, Deck 4 Forward • 50 min. Drzwi otwierają się 45 min przed rozpoczęciem.",
      "action": "W dniu rejsu sprawdź w Royal App, czy godzina i teatr nie uległy zmianie.",
      "url": "https://www.royalcaribbean.com/booked",
      "source": "Royal"
    }
  ],
  "2026-12-13": [
    {
      "id": "starburst-day2",
      "level": "yellow",
      "title": "STARBURST 19:00 — rezerwacja potwierdzona",
      "text": "Day 2 • 50 min. Godzinę i venue sprawdź ponownie w Royal App w dniu rejsu.",
      "action": "Kolację zaplanuj odpowiednio wcześniej, bez ścigania się z show.",
      "url": "https://www.royalcaribbean.com/booked",
      "source": "Royal"
    }
  ],
  "2026-12-14": [
    {
      "id": "exc-costa-reserved",
      "level": "red",
      "title": "Chacchoben 08:30 — Royal SHOREX zarezerwowany",
      "text": "4 h • $110.99 za płacącego gościa • dziecko $0 • benchmark rodziny $221.98.",
      "action": "Order history i cancellation terms sprawdzamy tylko przed ewentualną zmianą rezerwacji.",
      "url": "https://www.royalcaribbean.com/booked",
      "source": "Royal / Cruise Planner"
    }
  ],
  "2026-12-15": [
    {
      "id": "exc-roatan-reserved",
      "level": "red",
      "title": "Roatán 08:00 — Royal SHOREX zarezerwowany",
      "text": "Accessible Chocolate Factory, Monkey & Sloth Park, and Scenic Tour • 3 h • $126.99 za płacącego gościa • dziecko $0 • benchmark rodziny $253.98.",
      "action": "Order history i cancellation terms sprawdzamy tylko przed ewentualną zmianą.",
      "url": "https://www.royalcaribbean.com/booked",
      "source": "Royal / Cruise Planner"
    }
  ],
  "2026-12-16": [
    {
      "id": "cozumel-reserved",
      "level": "red",
      "title": "Cozumel 09:30 — Royal SHOREX zarezerwowany",
      "text": "Best of Cozumel: Scenic Open Top Bus, Mayan Heritage & Beach Escape • 5 h • $57.99 za płacącego dorosłego • dziecko $0 • benchmark rodziny $115.98.",
      "action": "Order history i cancellation terms sprawdzamy tylko przed ewentualną zmianą.",
      "url": "https://www.royalcaribbean.com/booked",
      "source": "Royal / Cruise Planner"
    }
  ],
  "2026-12-17": [
    {
      "id": "aqua-action-day6",
      "level": "yellow",
      "title": "AQUA ACTION! 19:45 — rezerwacja potwierdzona",
      "text": "Day 6 • 1 h. Godzinę i venue sprawdź ponownie w Royal App w dniu rejsu.",
      "action": "Kolację ustaw wcześniej; nie przebudowuj całego dnia wokół dodatkowych atrakcji.",
      "url": "https://www.royalcaribbean.com/booked",
      "source": "Royal"
    }
  ],
  "2026-12-18": [
    {
      "id": "wizard-day7",
      "level": "yellow",
      "title": "The Wizard of Oz 19:00 — rezerwacja potwierdzona",
      "text": "Day 7 • Royal Theater • 1 h 40 min.",
      "action": "Po powrocie z CocoCay zostaw bufor na prysznic, kolację i dojście do teatru; sprawdź Royal App w dniu show.",
      "url": "https://www.royalcaribbean.com/booked",
      "source": "Royal"
    }
  ],
  "2026-12-19": [
    {
      "id": "disembark-hotel",
      "level": "yellow",
      "title": "Disembarkation: finalny hotel + luggage drop",
      "text": "Hotel po rejsie nadal jest TBD, więc nie hardkodujemy trasy.",
      "action": "Po zejściu najpierw bagaże, potem Frost Science.",
      "url": "https://www.google.com/maps",
      "source": "Maps"
    }
  ],
  "2026-12-20": [
    {
      "id": "mia-return",
      "level": "red",
      "title": "Powrót na MIA: sprawdź LIVE trasę i czas",
      "text": "Cel to lotnisko około 16:00. Hotel finalny może zmienić punkt startu.",
      "action": "Publiczny transport jako baseline; Uber Car Seat jako fallback.",
      "url": "https://www.miamidade.gov/global/transportation/home.page",
      "source": "Miami-Dade"
    }
  ]
};

export const routeProfiles={
  "2026-12-09": {
    "anchor": "Government Center, Miami, FL",
    "primary": "transit",
    "primary_label": "🚇 Downtown hub",
    "return": "Downtown Miami, FL",
    "offline": [
      "Finalna trasa zależy od wybranego hotelu — nie hardkodujemy dziś adresu.",
      "Baseline z MIA: baggage claim → MIA Mover → Miami Intermodal Center.",
      "Dalej Metrorail / Metromover / spacer wybieramy po finalnej lokalizacji hotelu.",
      "Uber Car Seat jest fallbackiem, nie gwarantowanym środkiem podstawowym."
    ],
    "pills": [
      "HOTEL TBD",
      "MIA MOVER",
      "PUBLIC TRANSIT",
      "CAR SEAT FALLBACK"
    ]
  },
  "2026-12-10": {
    "anchor": "South Pointe Park, 1 Washington Ave, Miami Beach, FL 33139",
    "primary": "transit",
    "primary_label": "🏖 South Pointe",
    "return": "Downtown Miami, FL",
    "offline": [
      "Jedziemy na South Beach transportem publicznym; LIVE decyduje o konkretnej linii.",
      "Dzień prowadzimy liniowo: South Pointe → plaża → Lummus → Ocean Drive.",
      "Miami Beach trolley jest darmowym lokalnym connector'em, jeśli pasuje do trasy.",
      "Jeśli energia spada, skracamy spacer zamiast dodawać kolejną dzielnicę."
    ],
    "pills": [
      "SOUTH BEACH",
      "ART DECO",
      "TROLLEY LIVE",
      "RETURN ~17:00"
    ]
  },
  "2026-12-11": {
    "anchor": "Domino Park, 1444 SW 8th St, Miami, FL 33135",
    "primary": "transit",
    "primary_label": "🇨🇺 Calle Ocho",
    "return": "Downtown Miami, FL",
    "offline": [
      "Pierwszy klaster: Domino Park / Calle Ocho + lokalny lunch.",
      "Drugi klaster: Vizcaya tylko jeśli energia i transport nadal działają.",
      "Sanguich / El Rey są kandydatami na lunch — wybieramy wg kolejki i wygody.",
      "Wynwood nie jest częścią baseline tego dnia."
    ],
    "pills": [
      "CALLE OCHO",
      "LOCAL FOOD",
      "VIZCAYA OPTIONAL",
      "NO WYNWOOD"
    ]
  },
  "2026-12-12": {
    "anchor": "PortMiami, Miami, FL",
    "primary": "driving",
    "primary_label": "⚓ PortMiami",
    "return": "PortMiami, Miami, FL",
    "offline": [
      "Rano tylko śniadanie, packing i checkout.",
      "Najpierw w Royal sprawdź arrival slot i terminal.",
      "Dopiero potem zamów Uber Car Seat / transfer.",
      "DAY-1 BAG zostaje z Wami.",
      "Wieczorem: Headliner Showtime 19:15, Royal Theater — Deck 4 Forward. Rezerwacja potwierdzona; show trwa 50 min. Przyjdźcie wcześniej — drzwi otwierają się 45 min przed show."
    ],
    "pills": [
      "ROYAL APP",
      "TERMINAL LIVE",
      "HEADLINER 19:15",
      "RESERVED"
    ]
  },
  "2026-12-13": {
    "anchor": "Icon of the Seas",
    "primary": "walking",
    "primary_label": "🚢 Royal / showtimes",
    "return": "Icon of the Seas",
    "offline": [
      "Surfside jest rodzinną bazą.",
      "Adventure Ocean jest opcją, nie obowiązkiem.",
      "19:00 STARBURST — rezerwacja potwierdzona, 50 min.",
      "Dining dopasowujemy do show i bieżącej energii."
    ],
    "pills": [
      "SURFSIDE",
      "STARBURST 19:00",
      "RESERVED",
      "50 MIN"
    ]
  },
  "2026-12-14": {
    "anchor": "Costa Maya Cruise Port, Mahahual, Mexico",
    "primary": "walking",
    "primary_label": "🗿 Costa Maya",
    "return": "Costa Maya Cruise Port, Mahahual, Mexico",
    "offline": [
      "Royal SHOREX: Chacchoben Mayan Ruins — 08:30, 4 h, RESERVED.",
      "Aktualnie $110.99 za płacącego gościa; dziecko $0; 2 dorosłych = $221.98.",
      "Meeting point i instrukcje z Royal App / biletu mają pierwszeństwo.",
      "Po powrocie zachowujemy spokojny bufor przed 17:00."
    ],
    "pills": [
      "RESERVED",
      "08:30",
      "4 H",
      "$221.98"
    ]
  },
  "2026-12-15": {
    "anchor": "Coxen Hole Cruise Port, Roatan, Honduras",
    "primary": "walking",
    "primary_label": "🌿 Roatán",
    "return": "Coxen Hole Cruise Port, Roatan, Honduras",
    "offline": [
      "Royal SHOREX: Accessible Chocolate Factory, Monkey & Sloth Park, and Scenic Tour — 08:00, 3 h, RESERVED.",
      "Aktualnie $126.99 za płacącego gościa; dziecko $0; 2 dorosłych = $253.98.",
      "Meeting point i instrukcje z Royal App / biletu mają pierwszeństwo.",
      "Po zakończeniu około 11:00 zostawiamy elastyczność; odpłynięcie 16:00."
    ],
    "pills": [
      "RESERVED",
      "08:00",
      "3 H",
      "$253.98"
    ]
  },
  "2026-12-16": {
    "anchor": "Cozumel Cruise Port, Cozumel, Mexico",
    "primary": "walking",
    "primary_label": "🚢 Port Cozumel",
    "return": "Cozumel Cruise Port, Cozumel, Mexico",
    "offline": [
      "Royal SHOREX: Best of Cozumel: Scenic Open Top Bus, Mayan Heritage & Beach Escape — 09:30, 5 h, RESERVED.",
      "Aktualnie $57.99 za płacącego dorosłego; dziecko $0; 2 dorosłych = $115.98.",
      "Meeting point i instrukcje z Royal App / biletu mają pierwszeństwo.",
      "Po zakończeniu około 14:30 zostawiamy czas na prosty posiłek i powrót; odpłynięcie 18:00."
    ],
    "pills": [
      "RESERVED",
      "09:30",
      "5 H",
      "$115.98"
    ]
  },
  "2026-12-17": {
    "anchor": "Icon of the Seas",
    "primary": "walking",
    "primary_label": "🎭 Royal / showtimes",
    "return": "Icon of the Seas",
    "offline": [
      "Powtarzamy tylko atrakcje, które faktycznie wygrały pierwszy sea day.",
      "Rodzinny odpoczynek ma pierwszeństwo przed checklistą.",
      "19:45 AQUA ACTION! — rezerwacja potwierdzona, 1 h.",
      "Dining i resztę aktywności dopasowujemy do show."
    ],
    "pills": [
      "REST",
      "AQUA ACTION 19:45",
      "RESERVED",
      "1 H"
    ]
  },
  "2026-12-18": {
    "anchor": "Perfect Day at CocoCay, Bahamas",
    "primary": "walking",
    "primary_label": "🏝 CocoCay",
    "return": "Perfect Day at CocoCay, Bahamas",
    "offline": [
      "Default na CocoCay: bez płatnego Thrill Waterpark, cabany i Coco Beach Club.",
      "Spokojna plaża + rodzinne strefy są wystarczającym CORE; korzystamy z included dining.",
      "Wracamy na statek z zapasem, żeby spokojnie przygotować się na wieczór.",
      "19:00 The Wizard of Oz — Royal Theater — RESERVED, 1 h 40 min."
    ],
    "pills": [
      "COCOCAY INCLUDED",
      "WIZARD 19:00",
      "RESERVED",
      "1H40"
    ]
  },
  "2026-12-19": {
    "anchor": "Phillip and Patricia Frost Museum of Science, 1101 Biscayne Blvd, Miami, FL",
    "primary": "transit",
    "primary_label": "🔬 Frost Science",
    "return": "Downtown Miami, FL",
    "offline": [
      "Po zejściu ze statku najpierw bagaże i luggage drop w finalnym hotelu.",
      "Frost Science jest głównym blokiem dnia.",
      "Po muzeum odpoczynek, nie kolejna duża dzielnica.",
      "Kolację dobieramy pod finalny hotel i wygodny transport."
    ],
    "pills": [
      "HOTEL TBD",
      "LUGGAGE DROP",
      "FROST",
      "REST"
    ]
  },
  "2026-12-20": {
    "anchor": "Miami International Airport, Miami, FL",
    "primary": "transit",
    "primary_label": "✈️ MIA",
    "return": "Miami International Airport, Miami, FL",
    "offline": [
      "Ostatni dzień utrzymujemy lokalnie wokół finalnego hotelu / Downtown / Brickell.",
      "Cel MIA około 16:00 na lot 19:35.",
      "Transit backup w niedzielę: Government Center → Green Line northbound w kierunku Palmetto → Earlington Heights.",
      "Na Earlington Heights przesiadka na Orange Line Airport Shuttle do MIA. Jeśli LIVE wygląda słabo: Uber Car Seat."
    ],
    "pills": [
      "LIGHT DAY",
      "MIA 16:00",
      "NORTHBOUND PALMETTO",
      "CAR SEAT FALLBACK"
    ]
  }
};
