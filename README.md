# Project Wemby

An interactive marketing **system** showing how Nike activates Victor
Wembanyama with AI — a live cultural signal engine and a working AI
campaign co-pilot. Built as an application piece for a Nike internship.

## What's in it

- **Live Signal Engine** — a simulated real-time feed that ranks cultural
  moments tied to Wemby (the "discovery" layer).
- **Campaign Co-Pilot** — a real Anthropic-powered tool that returns
  **three distinct strategic directions** from a brief, with a streamed
  reveal and copy-to-clipboard. The API key stays server-side.
- Editorial dark design, the small hero shot treated as an intentional
  framed plate, refined motion (staggered hero, parallax, scroll reveals).

## Project structure

```
.
├── index.html                  ← The site (single file)
├── config.js                   ← EDIT ME: your name, email, links
├── netlify.toml                ← Netlify config (functions + redirect)
├── netlify/functions/
│   └── generate.js             ← Serverless Anthropic proxy (key hidden)
├── public/wemby-hero.png       ← Hero image
├── README.md                   ← You are here
└── CLAUDE.md                   ← Original briefing
```

## Before you send it anywhere

1. **Edit `config.js`** — replace the placeholder email, LinkedIn, and
   Caliber links with your real ones. The footer/title update automatically.
2. **Deploy with the API key set** (below). Until then the generator shows
   a built-in *sample* output so it never looks broken — but for the real
   "wow" it needs to be live.

## Run it locally

Plain preview (signal engine works; generator falls back to sample output):

```bash
python3 -m http.server 8000
# http://localhost:8000
```

Full local run **with the live AI generator** (recommended before sending):

```bash
npm i -g netlify-cli
export ANTHROPIC_API_KEY=sk-ant-...      # your key, kept local
netlify dev
# http://localhost:8888  → the Co-Pilot now calls the real API
```

## Deploy (Netlify)

```bash
npm i -g netlify-cli
netlify deploy --prod
```

Then set the API key so the serverless function can use it (it is **never**
exposed to the browser):

- Netlify dashboard → **Site settings → Environment variables**
- Add `ANTHROPIC_API_KEY` = your Anthropic key
- Trigger a redeploy (`netlify deploy --prod` again, or push to the repo)

You can also do it from the CLI:

```bash
netlify env:set ANTHROPIC_API_KEY sk-ant-...
netlify deploy --prod
```

You'll get a free URL like `project-wemby.netlify.app`. Custom domain
optional but worth it for a recruiter link.

### How the proxy works

The browser calls `/.netlify/functions/generate` (alias `/api/generate`)
with just the three dropdown values. The function builds the prompt,
calls the Anthropic API with the secret key from `ANTHROPIC_API_KEY`, and
returns only the text. The key never reaches the client.

To change the model, edit `MODEL` at the top of
`netlify/functions/generate.js` (currently `claude-sonnet-4-6`).

## Notes for Merk

- The Co-Pilot is the moment of the site — deploy with the key set and
  click Generate a few times before sending to anyone.
- Test on mobile — Nike people open links on their phones. Layout stacks
  to one column and the signal feed simplifies on small screens.
- Don't send it with the placeholder links in `config.js` still in place.
- Consider a privacy-light analytics snippet (Plausible, Fathom) so you
  know if someone from Nike actually opens it.
- A higher-res hero image would let us go bigger later, but the framed
  "plate" treatment is deliberate and works at the current resolution.
