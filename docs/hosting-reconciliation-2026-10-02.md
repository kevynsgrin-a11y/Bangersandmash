# Hosting reconciliation — bangersandmash.uk — 2026-10-02

## Decision

Do not rebind the public domain to Pages based on the nightly audit.
The established production application is the Cloudflare Worker
`bangersandmash-v2`. Pages is a fallback origin for unhandled paths, including
static assets, and the old public-domain attachment is not proof of application
hosting.

This record identifies the restoration path; it does not authorize deployment,
DNS edits, route edits, or domain-binding changes.

## Evidence and limits

| Surface | Verified repository evidence |
| --- | --- |
| Repository | `kevynsgrin-a11y/Bangersandmash` |
| Default branch | `claude/frontend-site-audit-g8zkms`; no `main` branch in the branch inventory |
| Baseline revision | `282f4009511374f5e49fd0648034e88d53449f37`, merged PR #7, 2026-09-28 |
| Application | `worker/worker.js`: embedded 92-recipe corpus and server-rendered routes |
| Build | No root application package, Astro source, or root build script. The Astro rebuild was reverted by PR #4 |
| Deployment directory | `worker/` |
| Deployment configuration | `worker/wrangler.toml`: name `bangersandmash-v2`, entry `worker.js`, compatibility date `2026-09-01`, no bindings, `workers_dev = false` |
| Recorded routes | `bangersandmash.uk/*` and `www.bangersandmash.uk/*` → `bangersandmash-v2`, dashboard-managed |
| Fallback | Every unhandled path forwards to `https://bangersandmash.pages.dev` with its path and query |
| DNS management | Cloudflare zone listed active in the current GscOps inventory; actual DNS record values were not readable in this session |
| Public observation | The public fetch service returned the 92-recipe homepage on October 2; this confirms retrieval from that service, not global availability or a raw HTTP/TLS measurement |

Sources:

- [Merged PR #7](https://github.com/kevynsgrin-a11y/Bangersandmash/pull/7)
- [Baseline Worker settings](https://github.com/kevynsgrin-a11y/Bangersandmash/blob/282f4009511374f5e49fd0648034e88d53449f37/worker/wrangler.toml)
- [Recorded route snapshot](https://github.com/kevynsgrin-a11y/GscOps/blob/0b1e86ec791b6875d9a13955eeb7026aa137654a/data/zone-worker-routes-2026-09-21.json), generated 2026-09-22T04:44:07.905Z
- [Foundry hosting evidence](https://github.com/kevynsgrin-a11y/Foundry/blob/db278ff083be9c3d36ce8ae0511b40043359c0cd/docs/ZCODE.md), account sync dated September 26
- [GscOps inventory](https://github.com/kevynsgrin-a11y/GscOps/blob/0b1e86ec791b6875d9a13955eeb7026aa137654a/data/portfolio-inventory.json), labeled October 2 but explicitly awaiting a full re-snapshot
- [Nightly audit](https://docs.google.com/document/d/1FdGZs0DvcF2xC1nu8UzbuNDUq4DZZ6mj6FjLZYmz8Io/edit), executed 2026-10-02T06:25:25Z

The audit's `FETCH_ERROR: No canonical URL found` is not a DNS lookup result.
The current session's command-line public-domain probes were denied by its
egress policy. Their 403s/resolution errors are environment limitations, not
proof that the domains are down. Live account state, raw public DNS, TLS,
`www` availability, and the Pages fallback's current deployment remain
unverified.

## Safe repository correction

The root and Worker READMEs previously implied that the production source was
absent or that the repo root contained the Pages Astro application. Both
statements are stale after PRs #4 and #7 and are corrected in this change.

A focused offline check also found that the Worker's not-found response
placed `status: 404` in its headers, returning HTTP 200. The response helper
now passes status through the Response initializer and retains the security
headers. Unknown recipe and collection paths are regression-checked. This
repair addresses soft 404s; it does not establish an outage root cause.

## Exact owner-only recovery actions

1. In the existing Cloudflare account, select the `bangersandmash.uk` zone
   and `bangersandmash-v2` Worker. Record the current Worker deployment ID,
   route table, apex/www DNS values and proxy status, and relevant Pages
   deployment ID before changing anything.
2. Verify the two route assignments independently:
   - `bangersandmash.uk/*` → `bangersandmash-v2`
   - `www.bangersandmash.uk/*` → `bangersandmash-v2`

   Check more-specific exclusions or competing routes, including any
   `ga4-inject` route. Both hostnames need a proxied DNS record to invoke
   these routes. Restore a missing assignment or proxy setting only after
   the owner approves the actual before/after values. Do not substitute a
   Pages custom-domain attachment.
3. If the Worker version is absent, broken, or needs this PR's source fixes,
   approve the source and deploy from this repository's current default branch:

   ```bash
   git checkout claude/frontend-site-audit-g8zkms
   npm test --prefix worker
   cd worker
   npx wrangler deploy --dry-run
   npx wrangler deploy
   ```

   The final command is production and is owner-only. The configuration
   deliberately leaves route management in the dashboard.
4. Preserve and test the current `bangersandmash.pages.dev` deployment with
   a real asset path from a live page. If that fallback is broken, recover
   its known-good deployment or original source separately. This repo root
   cannot supply its missing static application.
5. Verify apex and www over HTTPS, a known recipe, a collection, robots,
   sitemap, a real fallback asset, and unknown recipe/collection paths.
   Confirm canonical URLs name the apex and unknown recipe/collection paths
   return 404. Separately verify `/ga4.js` before retiring an analytics
   injection route.

If current production checks pass, no restoration DNS change is warranted.
Treat the stale Pages attachment as a separate cleanup task after its asset
dependencies and rollback state are recorded.

