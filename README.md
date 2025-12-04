# Vin-hjemmeside

En statisk, juletema vinbutik med produktgalleri, kurv, gaveindpakning og checkout-formular.

## Sådan kører du siden
Vælg den metode der passer bedst til dit miljø. Alle filer ligger i roden (index.html, style.css, script.js).

### 1) Åbn direkte uden server (hurtigst)
1. Dobbeltklik på `index.html` (eller højreklik → "Åbn med" → din browser).
2. Hvis du ser en advarsel om "for meget sikkerhed", vælg at tillade lokale filer. Siden bruger kun eksterne billeder fra Unsplash.

### 2) Brug en simpel lokal server (anbefalet til søgning/filtrering)
Du kan køre en lille server for at sikre, at alle scripts loader ens på tværs af browsere.

**Windows (PowerShell):**
```powershell
cd <stien til mappen vin-hjemmeside>
python -m http.server 8000
```
- Hvis `python` ikke findes, installer Python fra https://python.org og prøv igen.
- Åbn derefter `http://localhost:8000` i din browser.

**macOS / Linux (Terminal):**
```bash
cd /sti/til/vin-hjemmeside
python3 -m http.server 8000
```
- Åbn `http://localhost:8000` i browseren.

### 3) Brug Node (alternativ)
Hvis du har Node.js installeret:
```bash
npx http-server . -p 8000
```
- Åbn `http://localhost:8000` i browseren.

## Fejlsøgning
- **"localhost kan ikke nås"**: Sørg for at server-kommandoen kører (terminalen skal blive åben). Kontrollér at du går til den port, du startede (standard 8000).
- **Hvid side**: Tjek at filnavnene `index.html`, `style.css` og `script.js` ligger i samme mappe. Reload siden (Ctrl+R / Cmd+R).
- **Billeder loader langsomt**: De hentes fra Unsplash; prøv et andet netværk eller vent et øjeblik.

## Struktur
- `index.html` – markup for hero, kategorier, produktgrid, smagskasse, policies og kurv.
- `style.css` – juletema, sne-animation, responsive grids, sticky kurv.
- `script.js` – data for vinene, filtrering/søgning, detaljer, kurvlogik og checkout-formular.

