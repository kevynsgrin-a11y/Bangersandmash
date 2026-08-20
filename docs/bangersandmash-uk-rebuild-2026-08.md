# bangersandmash.uk — rebuild and remediation, 20 August 2026

Follows `bangersandmash-uk-audit-verification-2026-08.md`, which verified the uploaded audit against
the live site. This records what was actually changed.

---

## 1. Analytics beacon disabled on production — done, verified

**The one change made to the live site.** The audit's P1-14 was the only finding with a compliance
dimension: the site loaded Cloudflare Insights with a live token while its own privacy policy
promised consent first, and no consent UI existed.

Established by measurement, not assumption:

- The beacon token in the page, `2fd3063…`, maps to Web Analytics site `1c96f6b7…` for the
  `bangersandmash.uk` zone.
- It was **edge-injected at the zone**, not built into the deployment. Proof: `bangersandmash.uk`
  served the beacon while `bangersandmash.pages.dev` — the same deployment, outside the zone — did
  not.

Disabling it took three attempts, and the first two are worth recording because each *looked* right:

| Attempt | Control-plane result | Live result |
|---|---|---|
| `auto_install: false` | applied | beacon still served |
| rule `is_paused: true` + cache purge | applied | beacon still served |
| `auto_install: true` + `enabled: false` | `ruleset_enabled: false` | **beacon gone** |

Final verification, cache-busted: `/` and `/recipes` both serve with no `cloudflareinsights`
reference. Home dropped from 72,223 to 71,814 bytes — 409 bytes, the script tag.

This is **reversible in one call** and **non-destructive**: the Web Analytics site and its historical
data are retained; only collection is off. Analytics stays off until a consent banner ships.

---

## 2. Front end rebuilt — deployed to preview, production untouched

### Why a Worker and not Cloudflare Pages

Pages direct upload is **not reachable from this environment**, and that is a measured constraint
rather than a preference:

- `GET …/pages/projects/bangersandmash/upload-token` succeeds and returns a 969-character JWT.
- `POST /pages/assets/check-missing` returns **403 `Authorization failed`** — the only HTTP channel
  available here signs requests with the account API token, and the asset endpoints require the
  deployment JWT as bearer. There is no way to override that header.
- Direct HTTP from this environment is blocked entirely, so `wrangler` is not an option either.

`PUT /accounts/{id}/workers/scripts/{name}` **does** accept the account token. That was verified with
a throwaway probe worker, which was deleted afterwards.

So the rebuild ships as a Cloudflare Worker that renders every route server-side.

### What it is

**`https://bangersandmash-v2.kevynsgrin.workers.dev`** — 129 KB Worker, no build step, no client
JavaScript at all.

All 92 recipes were recovered from the live bundle and re-parsed: the objects live in
`assets/index-xjExql9f.js` across several adjacent arrays. Extraction needed a string-aware bracket
walker, a JS-object-literal-to-JSON converter, and a cp1252 reverse map to undo a mojibake layer —
without that last step every em dash, curly apostrophe, `×` and `°` in the corpus came back corrupted.
Spot-checked: `breakfasts — back bacon, butcher's sausages`, `1 × 400g tin baked beans`,
`240°C / 465°F`.

Design tokens were taken from the live stylesheet rather than guessed: racing green `#1e3a2a`
(`--primary: 149 32% 17%`), brass `#b08d57` (`--accent: 36 36% 52%`), parchment `#f6f1e6`
(`--background: 43 38% 93%`), with Playfair Display, Source Serif 4 and Libre Franklin.

Routes: `/`, `/recipes`, `/recipe/<slug>` × 92, `/collections/<id>` × 9, `/heritage`, `/robots.txt`,
`/sitemap.xml`, `/site.webmanifest`, and a real 404.

### Verified against the audit — 16 of 16

Every check run live through Cloudflare Browser Rendering against the deployed preview:

| Audit finding | Result on the rebuild |
|---|---|
| P0-01 recipe URLs cold-load empty | Content in the first response: `1.8kg beef sirloin…` present, 2,467 chars of body text |
| P0-01 relative `./assets/` paths | **0** — the CSS is inlined, so the failure class cannot recur |
| P0-02 robots.txt is app HTML | `text/plain`, with `Sitemap:` |
| P0-03 sitemap.xml is app HTML | `application/xml`, 104 canonical URLs |
| P0-04 client-only JSON-LD | Server-visible `@type: Recipe` with `recipeIngredient`, `HowToStep`, `prepTime`, `cookTime` |
| P0-05 shared title/description | Unique per route, verified different between home and recipe |
| P0-06 no canonical/OG/Twitter | Canonical + 6 `og:` + 4 `twitter:` per page |
| P0-07 failures masked as 200 | Own 404 page on unknown routes |
| P1-08 monolithic 404 KB bundle | **No client JS at all** |
| P1-09 2.33 MB autoplay hero video | Removed; poster image only |
| P1-11 render-blocking font trickery | Plain stylesheet, `display=swap`, **0 inline event handlers** |
| P1-12 / P1-13 labels, state, skip link | Skip link to `#main-content`, `aria-current` on filters |
| P1-14 analytics before consent | **No analytics of any kind** |
| P1-15 missing security headers | HSTS, CSP, `X-Frame-Options: DENY`, Permissions-Policy, COOP, nosniff |
| P1-17 no PWA foundation | `manifest` + `theme-color` |
| P2-20 no results announcement | `aria-live="polite"` result count |

`/recipes` serves all 92 cards with `ItemList` JSON-LD. Print stylesheet included.

Two defects were found in the rebuild itself and fixed before this was written: collection titles were
double-escaped (`Pies &amp;amp;`), and the CSP `script-src 'none'` silently blocked the inline
`onload` that was supposed to upgrade the font stylesheet — so fonts would never have applied. Both
verified fixed live.

---

## 3. What is deliberately not done

**Production still serves the old SPA.** The rebuild is a preview. Nothing was cut over.

**Images are referenced at their current production URLs.** Binary files cannot be moved from this
environment — there is no egress, and the Cloudflare API channel carries text only. The preview
therefore points at `https://bangersandmash.uk/images/recipes/…`, which works precisely because
production is untouched. **This is the one thing that must change before cutover**: the ~100 image
files need to be uploaded alongside the new build, and the image base path changed to `/images/…`.

**Canonical URLs point at the preview host.** Correct for a preview, wrong for production. One
constant (`ORIGIN`) changes on cutover.

**Google Fonts is still a third party.** Self-hosting needs the `.woff2` binaries, same constraint as
the images. The dependency is now non-blocking rather than render-blocking, which is the achievable
half.

**P1-10, P1-15 and P1-16 on production remain unverified by me.** They are response-header claims and
this route returns content, not headers. The rebuild sets its own headers correctly, but I have not
reproduced the original measurements and am not recording them as confirmed.

---

## 4. Cutover checklist

1. Upload the image directory into the new build and change the image base to `/images/recipes/`.
2. Set `ORIGIN` to `https://bangersandmash.uk`.
3. Point the zone at the Worker (route or Workers Custom Domain), keeping the Pages project intact
   so rollback is one DNS change.
4. Re-run the 16 checks above against the live domain.
5. Submit the new `sitemap.xml` in Search Console.
6. Ship a consent banner before re-enabling Web Analytics — the setting is off, not removed.
