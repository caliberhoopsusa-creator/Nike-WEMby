/* ────────────────────────────────────────────────────────────
   Netlify serverless function — Anthropic API proxy
   Endpoint: /.netlify/functions/generate   (POST)

   The API key NEVER reaches the browser. It lives only here, read
   from the ANTHROPIC_API_KEY environment variable you set in the
   Netlify dashboard (Site settings → Environment variables).

   Zero npm dependencies — uses the global fetch in Netlify's
   Node 18+ runtime.
   ──────────────────────────────────────────────────────────── */

const MODEL = "claude-sonnet-4-6";

const SAFE = (s, max) => String(s == null ? "" : s).slice(0, max);

function buildPrompt({ product, audience, angle }) {
  return `You are a senior creative strategist at Nike Basketball working on Victor Wembanyama campaigns. Wemby: 7'4", San Antonio Spurs, signed with Nike pre-2023 draft (~$100M), "Alien" logo revealed on the April 8 2024 total solar eclipse, GT Hustle 2 "Alien" was his first signature PE, the Nike A.I.R. Paris prototype drew on his love of science fiction and the bismuth stone he wore on draft night. Voice: bold, declarative, cultural, never corporate. No clichés ("unleash", "elevate your game", "to the next level").

Brief inputs:
- PRODUCT LINE: ${SAFE(product, 120)}
- AUDIENCE: ${SAFE(audience, 120)}
- CULTURAL ANGLE: ${SAFE(angle, 120)}

Produce THREE distinct strategic creative directions for this brief. Each must take a genuinely different strategic bet — not three rewordings of one idea.

Return ONLY the block below, no preamble, no closing remarks, exactly this format and these delimiters:

===VARIANT 1===
NAME: <bold campaign name, 2-4 words, no quotes>
IDEA: <the strategic bet in 2 tight sentences — the insight and why it lands>
HEADLINE: <one billboard headline, max 8 words>
CHANNELS:
- <channel> — <one-line activation>
- <channel> — <one-line activation>
- <channel> — <one-line activation>
===VARIANT 2===
NAME: ...
IDEA: ...
HEADLINE: ...
CHANNELS:
- ...
- ...
- ...
===VARIANT 3===
NAME: ...
IDEA: ...
HEADLINE: ...
CHANNELS:
- ...
- ...
- ...

Keep each IDEA under 45 words. Be specific and confident.`;
}

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Server is missing ANTHROPIC_API_KEY. Set it in Netlify → Site settings → Environment variables." }),
    };
  }

  let input;
  try {
    input = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON body" }) };
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1400,
        messages: [{ role: "user", content: buildPrompt(input) }],
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      const msg = (data && data.error && data.error.message) || `Anthropic API error (${res.status})`;
      return { statusCode: res.status, headers, body: JSON.stringify({ error: msg }) };
    }

    const text = (data.content || [])
      .map((b) => (b && b.type === "text" ? b.text : ""))
      .join("");

    return { statusCode: 200, headers, body: JSON.stringify({ text, model: MODEL }) };
  } catch (err) {
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({ error: "Upstream request failed: " + (err && err.message ? err.message : String(err)) }),
    };
  }
};
