# Project Wemby — Claude Code Briefing

## What this is

An interactive marketing showcase site I'm building to land a Nike internship. It's a strategic case study for how Nike uses AI to activate Victor Wembanyama as a generational brand asset — built as a live web experience that recruiters can actually click through.

The site has:
1. A hero with Wemby's image and a bold campaign-style headline
2. An "Intelligence" section with stats and the core strategic insight
3. A **working AI campaign generator** (calls the Anthropic API to write Nike-voice creative briefs)
4. A "Strategic Brief" laying out 4 AI systems I'd build at Nike on day one
5. A builder/about section

Current state: working prototype, but it looks too generic — I want it to feel premium, editorial, designed. Like something from the Nike A.I.R. showcase or Off-White's site, not a startup landing page.

## Who I am

Matthew Oppenheim ("Merk"). Marketing junior at University of Montana. Founder of Caliber (AI basketball scouting platform). Building this to apply for Nike Digital / Nike Sports Marketing internship.

## What I want Claude Code to do

Take `index.html` as the starting point and elevate it dramatically. Specifically:

### 1. Make it actually beautiful (the main ask)
- The current design is functional but generic. I want it to feel like a premium Nike-tier editorial site
- References to study: Nike A.I.R. campaign site, Off-White, Jordan Brand site, Aesop, Studio Lumière. Editorial fashion magazines online.
- Bigger, more confident typography. The hero headline should feel monumental.
- More texture and depth — right now the dark backgrounds feel flat. Add subtle grain, layered transparencies, possibly a hint of color gradient on key sections (NOT generic purple gradients — think the orange tones from the Wemby hero image bleeding into the page).
- The image is currently small and floats. Consider making it bleed off the page edge, or treating it as a fullscreen element with text overlay.

### 2. Fix the blank spots
- Bottom contact section has placeholder email and links — make them editable variables at the top of the file or in a `config.js` so I can swap in my real info
- The "Sample Output Mockups" section is basic — make them feel like real Nike creative work. Reference actual Nike out-of-home, social, and print aesthetics
- Add a small footer credit or watermark with my name + the year

### 3. Add motion that earns its place
- Hero: stagger the headline reveal on load, slight parallax on the Wemby image
- Section transitions: subtle, never gimmicky
- The marquee is fine but could be more refined (smaller, slower, more typographic personality)
- Generator output: type-on effect when AI response arrives would be a nice touch

### 4. Make the AI generator more impressive
- Currently outputs one campaign brief. Consider: a "regenerate alternative" button, or output 3 variants side-by-side
- Better loading state (currently just a pulsing dot — could be a more interesting "thinking" animation)
- The output formatting could be richer — section headers feel like they belong in a real strategy doc, not just bolded text

### 5. Deployment-ready
- Set up so I can deploy to Netlify or Vercel with one command
- Add a basic `package.json` if useful, or keep it as plain static HTML — I'm open
- Add a `README.md` with deploy instructions for me
- IMPORTANT: The AI generator currently calls the Anthropic API directly from the browser. For production deployment, that won't work safely (the API key would be exposed). Options:
  - Set up a simple serverless function (Vercel/Netlify) that proxies to the Anthropic API with the key hidden server-side
  - Or pre-generate 5-10 example outputs and have the "generator" cycle through them with a realistic delay (cheaper, works without server)
  - **My preference: real API via serverless function.** Walk me through getting it working.

### 6. Mobile
- It's responsive but mobile could be better. The hero especially needs love on smaller screens.

## Design constraints

- Keep it dark (the orange-on-black contrast is doing a lot of work)
- Keep the typography pairing of Bebas Neue (display) + Instrument Serif (italic accents) + Inter (body) + JetBrains Mono (labels) — or recommend a better one and tell me why
- Keep the orange accent (`#FF6B1A`) — it ties to the Wemby image and reads as Nike-energy without literally copying their red
- No generic AI-design tells: no purple gradients, no glassmorphism, no overused "modern startup" patterns

## Key facts to keep accurate

Real facts from the research, do not hallucinate:
- Wemby signed with Nike before the 2023 NBA Draft, reported ~$100M deal
- Nike unveiled his "Alien" logo timed to the April 8, 2024 total solar eclipse
- His first signature PE was the GT Hustle 2 "Alien" colorway (May 2024 release, $170)
- The prototype shoe at the Nike A.I.R. Paris showcase was inspired by his love for science fiction and the bismuth stone he wore on draft night
- He's 7'4", plays for the San Antonio Spurs
- LeBron called him "an alien" in October 2022 — that's where the nickname comes from
- Nike has 160M+ Nike app members

## The bigger goal

This isn't just a portfolio piece. It's a wedge to start conversations with Nike recruiters and hiring managers. The site should make someone at Nike Digital go "wait, who built this?" within 10 seconds of opening it.

The interactive AI generator is the differentiator — almost no candidate ships working AI in their application. Make that section feel like the moment of the site.

## Files in this handoff

- `index.html` — the current working version
- `public/wemby-hero.png` — the hero image (low-res, consider replacing or upscaling)
- This briefing

## What to do first

1. Read `index.html` end to end
2. Suggest 3 concrete directions you'd take it (visual, structural, or both)
3. Wait for me to pick one before rebuilding — don't just start refactoring everything

Let's make this thing real.

— Merk
