# Project Wemby

An interactive marketing **system** showing how Nike activates Victor
Wembanyama with AI — a live cultural signal engine and a working
campaign co-pilot. Built as an application piece for a Nike internship.

## What's in it

- **Live Signal Engine** — a simulated real-time feed that ranks cultural
  moments tied to Wemby (the "discovery" layer).
- **Campaign Co-Pilot** — an in-browser generation engine that returns
  **three distinct strategic directions** from a brief (Product ×
  Audience × Angle), with a "thinking" sequence, staggered reveal,
  type-on, copy-to-clipboard, and a working "Regenerate alternatives."
  No API, no key, no server — it cannot break and works offline.
- Editorial dark design, Futura-style type (Jost), cinematic hero,
  refined motion (staggered hero, parallax, scroll reveals).

## Project structure

```
.
├── index.html        ← The whole site + the generation engine
├── config.js         ← EDIT ME: your name, email, links
├── netlify.toml      ← Minimal static-site config
├── public/           ← Images (add the hi-res photos here)
├── README.md         ← You are here
└── CLAUDE.md         ← Original briefing
```

## Before you send it anywhere

1. **Edit `config.js`** — replace the placeholder email, LinkedIn, and
   Caliber links with your real ones. Footer/title update automatically.
   Until then those links are auto-disabled (no dead links shipped).
2. **Add the photos** to `public/` with these names, or the hero falls
   back to the small original image and the photo bands stay hidden:
   `wemby-dunk.jpg`, `wemby-dream.jpg`, `wemby-portrait.jpg`,
   `wemby-air.jpg`.

## See it locally (no tools, no accounts)

The site is fully static — the Co-Pilot runs in the browser.

- **Simplest:** double-click `index.html`. That's the whole site.
- Or serve it: `python3 -m http.server 8000` → http://localhost:8000

Everything works the same way offline as deployed: the generator
produces a different, specific brief for every Product × Audience ×
Angle combination, and Regenerate gives fresh alternatives.

## Deploy

Any static host works (Netlify, GitHub Pages, Vercel, etc.) — there is
no build step and no server.

- **Netlify:** connect the repo (or `netlify deploy --prod`). `netlify.toml`
  already sets the publish directory. No environment variables needed.
- **GitHub Pages:** Settings → Pages → Deploy from branch → root.

You'll get a free URL like `your-site.netlify.app`. Custom domain
optional but worth it for a recruiter link.

### About the Co-Pilot (be accurate if asked)

The generator is a deterministic-with-variation engine written into
`index.html` — it composes Nike-voice briefs from a curated content
model keyed to the three inputs. It does **not** call an LLM at runtime.
That's intentional: zero cost, zero accounts, and it can never fail on
the one click that matters. If you ever want it to call a live model,
that's a serverless function we can add back later.

## Notes for Merk

- The Co-Pilot is the moment of the site — click Generate and Regenerate
  a few times, change the dropdowns, and read the output before sending.
- Test on mobile — Nike people open links on their phones. Layout stacks
  to one column and the signal feed simplifies on small screens.
- Don't send it with the placeholder links in `config.js` still in place.
- Lead with **Founder, Caliber** — that's the strongest credibility line.
- Consider a privacy-light analytics snippet (Plausible, Fathom) so you
  know if someone from Nike actually opens it.
