# AIToolPilot

Affiliate marketing site reviewing AI tools for small businesses. Static HTML/CSS/JS — no build step required.

## Tech Stack

- Vanilla HTML5, CSS3, ES6 JavaScript
- No framework, no bundler, no dependencies
- Deployed on Vercel (static hosting)

## Project Structure

```
/
├── index.html              # Homepage
├── about.html
├── contact.html
├── privacy.html
├── affiliate-disclosure.html
├── sitemap.xml
├── robots.txt
├── vercel.json
├── reviews/
│   ├── jasper-ai.html
│   ├── copy-ai.html
│   ├── zapier.html
│   ├── make.html
│   ├── durable.html
│   ├── surferseo.html
│   ├── pictory.html
│   ├── descript.html
│   └── canva-pro.html
├── blog/
│   ├── index.html
│   ├── zapier-vs-make.html
│   ├── jasper-surferseo-workflow.html
│   └── 100-dollar-ai-stack.html
└── assets/
    ├── css/style.css
    └── js/script.js
```

## Running Locally

No build step needed. Open any `.html` file directly in a browser, or serve with any static file server:

```bash
# Python (built-in)
python3 -m http.server 8080

# Node (if installed)
npx serve .
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework Preset: **Other** (static site)
4. No build command needed
5. Output directory: leave blank (root)
6. Click Deploy

The `vercel.json` handles clean URLs, caching headers, and security headers automatically.

## Adding Affiliate Links

All affiliate links follow this pattern:

```html
<a href="https://tool.com/?utm_source=aitoolpilot&utm_medium=affiliate"
   target="_blank"
   rel="noopener sponsored"
   class="affiliate-btn"
   data-affiliate="toolname">
  Try Tool Name <span class="affiliate-badge">Free Trial</span>
</a>
```

**To update an affiliate link:**
1. Find the tool's review page in `/reviews/`
2. Replace the `href` URL with your actual affiliate tracking URL
3. Keep the `data-affiliate` attribute — it's used for click tracking
4. Keep `rel="noopener sponsored"` for SEO compliance

**Current affiliate links to replace** — these are still PLACEHOLDER links (they point at the tool's homepage and earn nothing). Search for `utm_source=aitoolpilot` across all files, or open each review page below:

| Tool | File | Replace URL With |
|------|------|-----------------|
| Jasper AI | `reviews/jasper-ai.html` | Your Jasper affiliate URL |
| Copy.ai | `reviews/copy-ai.html` | Your Copy.ai affiliate URL |
| Zapier | `reviews/zapier.html` | Your Zapier affiliate URL |
| Make | `reviews/make.html` | Your Make affiliate URL |
| Durable | `reviews/durable.html` | Your Durable affiliate URL |
| SurferSEO | `reviews/surferseo.html` | Your SurferSEO affiliate URL |
| Pictory | `reviews/pictory.html` | Your Pictory affiliate URL |
| Descript | `reviews/descript.html` | Your Descript affiliate URL |
| Canva Pro | `reviews/canva-pro.html` | Your Canva affiliate URL |

## Site Configuration (analytics + newsletter)

Everything is wired through one file: **`assets/js/config.js`**. Every page already
loads it. Edit it once and the whole site updates.

```js
window.ATP_CONFIG = {
  ga4Id: "",              // e.g. "G-ABC123XYZ" — leave "" to disable analytics
  newsletterEndpoint: ""  // e.g. a ConvertKit form endpoint — leave "" for demo mode
};
```

### Analytics (GA4)

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com) →
   **Admin → Data streams → Web** and copy the **Measurement ID** (`G-XXXXXXXXXX`).
2. Paste it into `ga4Id` in `assets/js/config.js`. That's it — `assets/js/analytics.js`
   loads gtag on every page.

Affiliate clicks are tracked automatically: `script.js` fires a
`gtag('event', 'affiliate_click', { event_label: <tool> })` event for every link with a
`data-affiliate` attribute.

### Newsletter

1. Get a form POST endpoint from your provider (ConvertKit/Kit is recommended):
   - **ConvertKit**: `https://app.convertkit.com/forms/<FORM_ID>/subscriptions`
   - **Beehiiv**: your subscribe API URL
   - **Mailchimp**: embedded-form POST URL (note: Mailchimp needs form-encoded data,
     not JSON — ConvertKit/Beehiiv work with the current JSON payload out of the box)
2. Paste it into `newsletterEndpoint` in `assets/js/config.js`.

Until an endpoint is set, the form runs in **demo mode** (shows success, stores nothing).

## MCP Integration

To integrate with tgm-checkmate or any MCP-compatible system, expose the site's content via a JSON feed or webhook. The simplest approach:

1. Create a `api/tools.json` file listing all reviewed tools with their affiliate URLs, ratings, and categories
2. Point your MCP integration at `https://www.aitoolpilot.xyz/api/tools.json`
3. The MCP can then surface tool recommendations based on user queries

## What to Update Before Going Live

Search the codebase for `REPLACE` comments — these mark every placeholder that needs a real value:

```bash
grep -r "REPLACE" --include="*.html" --include="*.md" .
```

Key items:
- Affiliate URLs → replace placeholder UTM URLs with real affiliate tracking URLs
  (the single biggest blocker — the site earns nothing until this is done)
- `ga4Id` in `assets/js/config.js` → your GA4 Measurement ID
- `newsletterEndpoint` in `assets/js/config.js` → your provider endpoint
- Contact email → `hello@aitoolpilot.xyz` (update in `contact.html`, `privacy.html`)
  once the mailbox exists
- OG images + favicon → already present in `assets/img/`; regenerate if you rebrand
