# CRAFT UPDATE 146 — 4 new games (28 → 32)

Added to the platform, each with the shared platform look (theme colours + "Box colors & looks", title font, settings workspace, home-page card, shared TikTok connection, live-event tools, autopilot entry):

| Game | Page | Notes |
|---|---|---|
| Blossom | `/blossom/` | seven-letter word flower; bundled word lists + 12,600 rounds |
| Sudoku | `/sudoku/` | chat fills the grid |
| Word Shuffle | `/wordshuffle/` | 112 categories (50+ answers each). Prebuilt: **no build step needed**. Source in `server/wordshuffle/client-src` (rebuild with `node build.mjs` only if you edit it) |
| Memory Match | `/memory/` | type two card numbers; 5 difficulties; teams |

Files: `server/<game>/…`, shared edits in `server.js`, `public/index.html`, `public/home*.js`, `public/shared/platform-sync.js`, `public/shared/game-chrome.css`, `public/shared/records-ui.js`, `server/autopilot/autopilot-config.js`, `server/shared/home-cards-store.js`, `server/engagement/engagement-hub.js`.
Saved data goes to `data/<game>/` (or `$DATA_DIR/<game>/`). Deploy exactly as before (`npm install`, `npm start`); no new dependencies.

## Fix (146b): Sudoku and Memory Match showed "This page isn't working"
Cause: both games registered an `app.get("/sudoku")` -> redirect to `/sudoku/` route before their static files. Express treats `/sudoku` and `/sudoku/` as the same route, so the page redirected to itself forever (ERR_TOO_MANY_REDIRECTS). The redundant redirect was removed from all four new games (Express's static handler already redirects `/game` to `/game/` and serves the page).
