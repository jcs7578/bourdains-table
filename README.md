# Eat Like Anthony

An interactive world map of every restaurant Anthony Bourdain visited across all of his TV shows — *A Cook's Tour*, *No Reservations*, *The Layover*, and *Parts Unknown*.

![Screenshot placeholder](assets/screenshot.png)

## Features

- **Interactive world map** with 120+ restaurants plotted across 30+ countries, powered by Leaflet.js with a vintage watercolor tile layer
- **Zip code proximity search** — enter a US zip code to find the nearest Bourdain restaurants, sorted by distance
- **"Use My Location"** — browser geolocation to instantly find spots near you
- **Filter by show** — stamp-style toggle buttons for each of Bourdain's four shows
- **Text search** — search by restaurant name, city, or dish
- **Map ↔ sidebar sync** — click a marker to highlight the sidebar card, click a card to fly to the marker
- **Marker clustering** — 120+ markers gracefully cluster at low zoom levels
- **Grungy passport aesthetic** — parchment textures, typewriter fonts, coffee ring stains, stamp-style labels
- **Fully responsive** — works on desktop, tablet, and mobile

## Tech Stack

- **Leaflet.js** — interactive mapping (loaded from CDN)
- **Leaflet.markercluster** — marker clustering plugin (loaded from CDN)
- **Stamen Watercolor tiles** via Stadia Maps — vintage hand-painted map aesthetic
- **Vanilla HTML/CSS/JS** — no frameworks, no build tools, no npm
- **Zippopotam.us API** — free zip code geocoding
- **Google Fonts** — Special Elite (typewriter), Libre Baskerville (body), Courier Prime (mono)
- **GitHub Pages** — static file hosting

## Data Sources

Restaurant data was compiled from:

- [Anthony Bourdain World Map](https://www.anthonybourdainworldmap.com/)
- [Eat Like Bourdain](https://eatlikebourdain.com/)
- [No Reservations Locations](https://www.noreservationslocations.com/)
- Wikipedia episode guides for each show
- Various food journalism articles and fan databases

## How to Deploy

1. Clone or download this repository
2. Push to a GitHub repository
3. Go to **Settings → Pages** → set source to `main` branch, root (`/`)
4. Your site will be live at `https://<username>.github.io/bourdains-table/`

Or just open `index.html` in a browser — it works locally with no server needed (zip code lookup requires internet for the API call).

## Project Structure

```
bourdains-table/
├── index.html          # Main HTML page
├── css/
│   └── styles.css      # All styles — passport/journal aesthetic
├── js/
│   ├── app.js          # Map init, events, rendering, interactions
│   ├── data.js         # 120+ restaurant dataset
│   └── utils.js        # Haversine distance, geocoding, helpers
├── assets/             # Favicon, screenshots
└── README.md
```

## AI Tools Used

This project was built using **Claude** (by Anthropic) as the primary agentic coding tool. Claude was used for code generation, dataset compilation, and project architecture. Restaurant data was cross-referenced against multiple fan-maintained databases and episode guides.

---

*"Your body is not a temple, it's an amusement park. Enjoy the ride."*
— Anthony Bourdain
