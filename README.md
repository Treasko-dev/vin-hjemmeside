# Vin-hjemmeside

En statisk, juletema vinbutik med produktgalleri, kurv, gaveindpakning og checkout-formular.

## Sådan kører du siden (vælg det der virker hos dig)
Alle filer ligger i roden (`index.html`, `style.css`, `script.js`).

### 0) Intet installeret (virker også på Windows)
- **Dobbeltklik** på `index.html` i mappen.
- På Windows kan du også dobbeltklikke `start.bat` eller `start.ps1`, som automatisk åbner `index.html` i din standardbrowser.
- Funktionen til filtre, kurv og checkout virker direkte fra filsystemet.

### 1) Node.js (hurtig lokal server)
1) Installer Node.js LTS fra https://nodejs.org (vælg "Add to PATH" på Windows-installeren).
2) Åbn et terminalvindue i projektmappen og kør:
```bash
npm start
```
3) Gå til `http://localhost:8000` i din browser. Terminalen fortæller, hvilken port der bruges.

### 2) Python (hvis du har Python 3)
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

## Fejlsøgning
- **"localhost kan ikke nås"**: Sørg for at server-kommandoen kører (terminalen skal blive åben). Kontrollér at du går til den port, du startede (standard 8000).
- **Hvid side**: Tjek at filnavnene `index.html`, `style.css` og `script.js` ligger i samme mappe. Reload siden (Ctrl+R / Cmd+R).
- **Billeder loader langsomt**: De hentes fra Unsplash; prøv et andet netværk eller vent et øjeblik.
- **Windows PermissionError / fil-tilgang-fejl i `python -m http.server`**: Flyt projektmappen til en skrivbar placering (fx `C:\Users\<brugernavn>\Documents\vin-hjemmeside`), og prøv igen. Alternativt: Brug `start.bat`/`start.ps1` (ingen server), eller installer Node og kør `npm start`.

## Struktur
- `index.html` – markup for hero, kategorier, produktgrid, smagskasse, policies og kurv.
- `style.css` – juletema, sne-animation, responsive grids, sticky kurv.
- `script.js` – data for vinene, filtrering/søgning, detaljer, kurvlogik og checkout-formular.

