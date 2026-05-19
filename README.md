# Project Wemby

A strategic marketing showcase pitching how Nike activates Victor Wembanyama using AI. Built as an application piece for a Nike internship.

## Quick start

```bash
# Just open it
open index.html

# Or serve it locally
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Project structure

```
.
├── CLAUDE.md           ← Briefing for Claude Code (read this first)
├── README.md           ← You are here
├── index.html          ← The site
└── public/
    └── wemby-hero.png  ← Hero image
```

## Working on this with Claude Code

1. Open this folder in your terminal
2. Run `claude` (Claude Code CLI)
3. Tell it: *"Read CLAUDE.md and let's start."*

Claude Code will pick up the full context and we can iterate from there.

## Current state

- Single-file HTML site, no build step
- Uses Google Fonts (loaded via CDN)
- AI generator currently calls the Anthropic API directly from the browser — **fine for local development, needs a serverless proxy for production**

## Next steps (rough order)

1. Elevate the visual design (the main ask — see CLAUDE.md)
2. Set up a serverless function to safely call the Anthropic API
3. Deploy to Vercel or Netlify
4. Replace placeholder contact info at the bottom of `index.html`
5. Consider a higher-res hero image

## Deploy options

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
# Drag and drop the folder at app.netlify.com
# Or use the CLI:
npm i -g netlify-cli
netlify deploy --prod
```

Both will give you a free URL like `project-wemby.vercel.app`. Custom domain optional but worth it.

## Notes for Merk

- The AI generator is the moment of the site — make sure it works flawlessly before sending to anyone
- Test on mobile before sending — Nike people open links on their phones
- Don't send this anywhere with the placeholder email at the bottom still in place
- Consider adding a small analytics snippet (Plausible, Fathom) so you know if someone from Nike actually opens it
