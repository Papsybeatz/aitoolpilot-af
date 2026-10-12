# AIToolPilot — Launch Checklist

Domain: **www.aitoolpilot.xyz** · Host: **Vercel** (static)

---

## ✅ Done in code (launch fixes)

- [x] Domain switched from `aitoolpilot.com` → `www.aitoolpilot.xyz` across all 31 pages
- [x] Canonical + OG URLs use **clean URLs** (no `.html`), matching Vercel `cleanUrls: true`
- [x] `sitemap.xml` rebuilt — now lists all **31 pages** (was missing 5 blog posts, 5 category
      pages, and 3 comparison pages)
- [x] `robots.txt` sitemap URL updated
- [x] Blog affiliate links: `rel="nofollow"` → `rel="noopener sponsored"` (FTC/SEO compliance)
- [x] Analytics wired via one file — set `ga4Id` in `assets/js/config.js`
- [x] Newsletter wired via one file — set `newsletterEndpoint` in `assets/js/config.js`
- [x] Favicon + apple-touch-icon + 11 branded OG images generated in `assets/img/`
- [x] Stale `migration-from-tgm-2026-07-06/` archive removed (duplicate content + broken links)
- [x] README updated with the new config + affiliate instructions

---

## 🔴 Blockers still on you (nothing earns until these are done)

1. **Replace the placeholder affiliate links** — see the table below. Until then every "Try X"
   button points at the tool's homepage and pays you $0.
2. **DNS + Vercel** — add the domain in Vercel and create the DNS records (see DNS section).
3. **GA4 ID** → paste into `assets/js/config.js`.
4. **Newsletter endpoint** → paste into `assets/js/config.js` (ConvertKit recommended).
5. **Contact mailbox** → `hello@aitoolpilot.xyz` (update `contact.html`, `privacy.html`).

---

## Affiliate programs — apply here

> Commission rates change. Treat the numbers as "last reported" and confirm in the dashboard
> after you're approved.

### Tools already reviewed on the site

| Tool | Program / apply URL | Reported commission | Notes |
|------|--------------------|--------------------|-------|
| **Make** | https://www.make.com/en/affiliate | 35% for 12 months | Easiest approval — anyone with a Make account can join. **Your strongest link.** |
| **Durable** | https://partners.dub.co/durable | up to 30% for 1 year | Manual approval, quality-gated |
| **Descript** | https://www.descript.com/affiliate | $25 per new subscriber | Now on PartnerStack — may need to reapply there |
| **SurferSEO** | https://surferseo.com/affiliate-program/ | recurring (verify) | High retention, trusted brand |
| **Pictory** | https://pictory.ai/partnernow | 20–50% | Video niche, high engagement |
| **Jasper** | Apply via the **Impact** network; contact `affiliates@jasper.ai` | 25% recurring, first 12 months | ⚠️ No standalone page right now (`/partners/affiliates` redirects home). Program has had payout complaints. |
| **Copy.ai** | ⚠️ Route unverified — `copy.ai/affiliates` 404s. Check the site footer / Impact | ~45% reported | Verify before relying on it |
| **Canva** | https://www.canva.com/affiliates | ~$36 per annual Pro sale (**one-time**) | ⚠️ Original program sunset in 2024; now the selective "Empower Canvassador" program via Impact. No recurring. |
| **Zapier** | ❌ **No public affiliate program.** Only a referral benefit inside the Experts program: https://zapier.com/l/new-experts | — | Keep the Zapier review for SEO traffic, but **route its money links to Make / Pabbly Connect** instead. |

### High-value programs worth adding (new review pages)

| Tool | Apply URL | Reported commission | Cookie |
|------|-----------|--------------------|--------|
| Semrush | https://www.semrush.com/lp/affiliate-program/en/ | up to $200 / sale | 120 days |
| HubSpot | https://www.hubspot.com/partners/affiliates | 30% recurring (first year) | 180 days |
| Grammarly | https://www.grammarly.com/affiliates | $0.20 free signup / $20 Pro | 90 days |
| Anyword | https://anyword.com/affiliates/ | 40% recurring | 90 days |
| Synthesia | https://www.synthesia.io/partners | 20% recurring | 60 days |
| Speechify | https://speechify.com/affiliates/ | recurring (verify) | — |
| Pabbly Connect | https://www.pabbly.com/affiliate/ | ~30% | — |

**Practical note:** a brand-new domain gets rejected by the pickier programs. Apply to
**Make, Pabbly, and SurferSEO** first (fast/easy approval), get a couple of live links,
then apply to the gated ones (Durable, Jasper, Canva) once the site has traffic.

---

## DNS configuration (at your domain registrar / host)

Add these records for `aitoolpilot.xyz`, then add the domain in
**Vercel → Project → Settings → Domains**.

| Type | Name / Host | Value / Points to | TTL |
|------|-------------|-------------------|-----|
| `A` | `@` (or blank) | `76.76.21.21` | 3600 (or Auto) |
| `CNAME` | `www` | `cname.vercel-dns.com` | 3600 (or Auto) |

- **Always use the exact values Vercel shows on the domain card** — newer projects may get a
  different A IP (e.g. `216.198.79.1`) or a project-specific CNAME.
- Delete any pre-existing `A`/`CNAME` records for `@` and `www` first — stale records block
  verification.
- Set `www.aitoolpilot.xyz` as the **primary** domain so the apex redirects to it (matches the
  site's canonicals).
- Wait for the domain card to show **Valid Configuration**; Vercel then issues the SSL cert.

---

## After DNS is live (order matters)

1. Verify `https://www.aitoolpilot.xyz` loads and the apex redirects to it.
2. Submit `https://www.aitoolpilot.xyz/sitemap.xml` in Google Search Console.
3. Confirm favicon + a social share preview (paste a URL into a Slack/Twitter composer).
4. Paste the GA4 ID and newsletter endpoint into `assets/js/config.js`.
5. Apply to affiliate programs → swap each real tracking URL into its review page **and** its
   blog mentions.
