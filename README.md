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

**Current affiliate links to replace** (search for `utm_source=aitoolpilot` across all files):

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

## Newsletter Integration

The newsletter form in `index.html` uses a `data-endpoint` attribute:

```html
<form class="newsletter-form" data-endpoint="YOUR_ENDPOINT_URL">
```

**To connect your email provider:**

1. Get your form submission endpoint URL from your provider:
   - **Mailchimp**: Use their embedded form POST URL
   - **ConvertKit**: Use their form API endpoint
   - **Beehiiv**: Use their subscribe API URL
2. Set `data-endpoint="https://your-endpoint-url"` on the form in `index.html`
3. The JS in `assets/js/script.js` handles the POST request and shows success/error states

If `data-endpoint` is empty, the form shows a success message without submitting (useful for testing).

## Analytics Setup

The site is pre-wired for Google Analytics. Add your GA4 measurement ID by inserting this snippet before `</head>` in every page:

```html
<!-- REPLACE: G-XXXXXXXXXX with your GA4 Measurement ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Affiliate click events are automatically tracked via `gtag('event', 'affiliate_click', ...)` in `script.js` once GA is loaded.

## MCP Integration

To integrate with tgm-checkmate or any MCP-compatible system, expose the site's content via a JSON feed or webhook. The simplest approach:

1. Create a `api/tools.json` file listing all reviewed tools with their affiliate URLs, ratings, and categories
2. Point your MCP integration at `https://aitoolpilot.com/api/tools.json`
3. The MCP can then surface tool recommendations based on user queries

## What to Update Before Going Live

Search the codebase for `REPLACE` comments — these mark every placeholder that needs a real value:

```bash
grep -r "REPLACE" --include="*.html" --include="*.md" .
```

Key items:
- `https://aitoolpilot.com` → your actual domain (if different)
- `hello@aitoolpilot.com` → your actual contact email
- `data-endpoint=""` → your newsletter provider endpoint
- GA4 measurement ID → add to all pages
- OG image paths → add actual images to `assets/img/`
- Affiliate URLs → replace placeholder UTM URLs with real affiliate tracking URLs
