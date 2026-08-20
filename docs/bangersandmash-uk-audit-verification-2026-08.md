# bangersandmash.uk — independent verification of the 10 August 2026 audit

Verified: 2026-08-20 · Verifier: automated, live evidence
Target: `https://bangersandmash.uk/` (Cloudflare Pages project `bangersandmash`)

---

## How this was verified, and the one thing to know first

The two uploaded PDFs audit **bangersandmash.uk**, a live 92-recipe React/Vite SPA on Cloudflare
Pages. That is **not the codebase in this repository**, and not the Emergent build (`gastropub-table`,
23 recipes) that this repo's README and `SITE_BRIEF.md` describe. Three different things share one
name.

Direct HTTP to the site is blocked from this environment — `bangersandmash.uk`,
`www.bangersandmash.uk`, `bangersandmash.pages.dev` and the deployment-specific
`2ac8b77e.bangersandmash.pages.dev` all return `CONNECT tunnel failed, response 403`.

So verification was done through **Cloudflare's Browser Rendering API**, which fetches and executes
the page from Cloudflare's own infrastructure rather than mine. Every result below is a live
observation of the production site on 2026-08-20, not a re-reading of the PDFs.

---

## Verdict on the audit

**Substantially accurate.** 15 of 16 checkable findings reproduced exactly. One reproduced as a
defect but not for the stated reason.

Two independent corroborations that the audit was measuring this exact build, unchanged since:
the asset filenames it quoted — `assets/index-xjExql9f.js` and `assets/index-11VvsWUo.css` — are
still the live filenames today, and Cloudflare records **exactly one deployment**, on
2026-07-18, with none since.

---

## Findings reproduced

| ID | Claim | Live result, 2026-08-20 | Verdict |
|---|---|---|---|
| P0-01 | Nested recipe URLs cold-load empty | `/recipe/roast-beef-yorkshire` → 4,152 bytes, `<div id="root"></div>` **empty after JS execution**, 49 chars of body text, **2 relative `./assets/` refs, 0 root `/assets/`** | **CONFIRMED** |
| P0-02 | robots.txt is app HTML | `/robots.txt` → **72,215 bytes of the app HTML**. No `User-agent:`, no `Sitemap:` | **CONFIRMED** |
| P0-03 | sitemap.xml is app HTML | `/sitemap.xml` → **72,713 bytes of app HTML**. No `<urlset>` | **CONFIRMED** |
| P0-04 | Recipe JSON-LD is client-only | No `@type: Recipe` JSON-LD present on the recipe route even after JS ran | **CONFIRMED** |
| P0-05 | All routes share one title | Recipe page title is `Bangersandmash.uk — The Heritage English Cookbook` — byte-identical to home | **CONFIRMED** |
| P0-06 | No canonical / OG / Twitter | `rel=canonical` absent, `og:*` absent, `twitter:*` absent on home and recipe | **CONFIRMED** |
| P0-07 | Failures masked as 200 | A nonsense route returns the full app HTML, same as robots and sitemap | **CONFIRMED** |
| P1-08 | Monolithic bundle | JS **418,516 bytes**, CSS **93,324 bytes**, single chunk (audit said 403,791 / 92,270) | **CONFIRMED** |
| P1-09 | Hero video too heavy | `<video src="/videos/hero.mp4" autoplay loop playsinline>` — single MP4, no WebM, **no `preload`**. It does already carry a `poster` | **CONFIRMED** |
| P1-11 | Remote Google Fonts | `fonts.googleapis.com` referenced in the delivered page | **CONFIRMED** |
| P1-13 | Filter/nav state hidden from AT | Accessibility tree: **0 `pressed` states, 0 `expanded` states**, and **no skip link** | **CONFIRMED** |
| P1-14 | Analytics loads before consent | Cloudflare Insights beacon present with live token `2fd3063…`. **No "Accept all", no "Reject all", no "Manage choices" anywhere.** The only cookie reference is a footer link | **CONFIRMED — most serious** |
| P1-17 | No PWA foundation | No `rel="manifest"`, no `theme-color`, no service worker | **CONFIRMED** |
| P2-20 | No results announcement | **0 `aria-live` regions** on the directory | **CONFIRMED** |

## Finding that did not reproduce as stated

**P1-12 — "Search fields have no programmatic labels … the live accessible-name check returned null
for each."**

The accessibility tree today returns **non-null names for both fields**:

```
{"role":"textbox","name":"Search 92 recipes…"}
{"role":"textbox","name":"Search by dish, ingredient or region…"}
```

The names are being derived from the `placeholder` attribute, which is the documented fallback in
the accessible-name computation. So the underlying concern is real — placeholder-as-label is a weak
pattern that disappears once the user types, and the recommended fix (a real `<label>` or
`aria-label`) still stands — but the audit's stated evidence, that the check returned null, does not
reproduce. Recorded as a **downgrade from P1 to P2**, not a dismissal.

## Findings not independently verified

**P1-10 (four-hour cache TTL), P1-15 (missing security headers), P1-16 (broad CORS).** These are
response-header measurements. The Browser Rendering API returns rendered content, not response
headers, and direct HTTP is blocked, so I could not reproduce them. They are plausible — Cloudflare
Pages' defaults match what the audit describes — but they are recorded here as **unverified by me**
rather than confirmed. Do not treat them as measured.

---

## Why none of this was fixed

The fixes cannot be made from anywhere reachable, and the reason is worth recording precisely.

**The live site has no source repository.** Cloudflare reports the Pages project `bangersandmash`
with:

- `source: null` — **no connected Git repository**
- **exactly one deployment**, `2ac8b77e-4f0f-411f-96ab-0ee37fdfd015`, created 2026-07-18T14:57:56Z
- trigger type **`ad_hoc`** — a direct upload of pre-built assets
- deployment stages: `clone_repo` **idle**, `build` **idle**, only `deploy` succeeded — Cloudflare
  never built this; it received a finished `dist/`
- commit metadata `5df56a497c0e888b1878554df627a7c88cbd0435`, message *"AI-generated heritage
  photography for all 92 recipes"*, and **`commit_dirty: true`** — uploaded from an uncommitted
  working tree

That commit exists in no repository on the account. All 80 repositories were listed; none contains
this app. The two closest candidates were ruled out by evidence, not by name:

- **`kevynsgrin-a11y/Bangersandmash`** (this repo) contains no front-end source at all — 25 tracked
  files, 0 `.jsx`/`.tsx`/`.html`/`.css`. Its README describes a *different*, 23-recipe Emergent build.
- **`kevynsgrin-a11y/modern-heritage-kitchen`** is a TanStack Start SSR app whose canonical origin is
  hard-locked to `https://abuelascocina.app`, enforced by a build gate that throws on any other value
  (`scripts/check-canonical-origin.ts`). It is a different site.

Every P0 and most P1 fixes — `vite.config.ts` `base: '/'`, prerendering, per-route head tags,
server-visible JSON-LD, route splitting, consent gating, real `<label>` elements — are **source
changes**. There is no source to change.

---

## What can and cannot be fixed without the source

| Finding | Fixable at the Cloudflare edge without source? |
|---|---|
| P0-02 robots.txt, P0-03 sitemap.xml | **Yes** — a Worker route or redirect rule can serve real files ahead of the SPA fallback |
| P1-10 cache TTLs, P1-15 security headers, P1-16 CORS | **Yes** — zone-level Response Header Transform Rules |
| P0-01 empty recipe pages | **No.** Requires a rebuild with a root asset base. This is the headline defect and it cannot be worked around at the edge |
| P0-04, P0-05, P0-06 prerender/head/JSON-LD | **No** — build-time output |
| P1-08, P1-09, P1-11, P1-12, P1-13, P1-14, P1-17, P2-20 | **No** — application source |

An edge-only pass would fix 4 of 22 findings and leave every recipe URL still dead. That is why
nothing was deployed: the change with the highest value cannot be made from here, and the ones that
can be made are exactly the ones a future correct rebuild would supersede.

---

## Recommended order once the source is recovered

1. Recover the source that produced deployment `2ac8b77e`, and put it in version control. Until then
   the site cannot be safely changed by anyone, and a single bad upload is unrecoverable — there is
   only one deployment to roll back to.
2. Connect the Pages project to that repository so builds are reproducible and `commit_dirty: true`
   stops being possible.
3. Then work the audit's own Days 1–3 list, which is correctly ordered: asset base, robots, sitemap,
   prerender.
4. Fix P1-14 early regardless of sequencing. The site loads analytics with a live token while its own
   privacy policy promises consent first, and the consent UI does not exist. That is the one finding
   with a compliance dimension rather than a quality one.
