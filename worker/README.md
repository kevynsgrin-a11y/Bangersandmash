# bangersandmash-v2 (edge Worker)

This directory holds the Cloudflare Worker that serves **bangersandmash.uk** — 92 English heritage
recipes rendered from an embedded dataset, with static assets proxied from
bangersandmash.pages.dev.

## Why this repo exists

Until 2026-09-28 this Worker lived only as a deployed script with no source
repo (built in a lost session). This bootstrap commit is a byte-for-byte
rescue of the running code so it can be reviewed, tested, and fixed through
PRs like every other portfolio site.

- Rescued: 2026-09-28, via the Cloudflare API (multipart download).
- Provenance: `worker.js` sha256
  `ed0b977b586f39cf021ae7310d17899003b7b4875d91b8e64254211e3938ae6f`
  (130,876 bytes UTF-8 / 129,976 chars) — matches the live script at rescue time.
- Live settings: no bindings, compat date 2026-09-01, standard usage model,
  no workers.dev URL. Routes: `bangersandmash.uk/*` and
  `www.bangersandmash.uk/*` on the bangersandmash.uk zone (dashboard-managed).

## Known issue carried at rescue time

The rescued page CSP was `script-src 'none'; connect-src 'none'`, which silently
blocked ALL analytics — including the ga4-inject edge injection and a
hand-pasted inline gtag snippet left inside the template. PR #7 includes the
in-page fix in the current source (per-site
G-BHGK3T9M5L + roll-up G-Z389F0DBM8W, same-origin /ga4.js bootstrap, Batch 2
CSP pattern). A merged PR is not proof that the owner deployed it; verify
the live `/ga4.js` response before retiring an edge injection route.

## Deploy

Owner-only, from a checkout:

    cd worker
    npx wrangler deploy

Agents never deploy. Routes stay dashboard-managed.

The Worker forwards every unhandled path to `bangersandmash.pages.dev`,
including `/images`, `/videos` and `/assets`. This checkout does **not** contain
that Pages deployment's static application source: the earlier Astro rebuild
was reverted in PR #4. Preserve the existing Pages asset deployment; do not
attempt to rebuild it from this repository root or bind the public domain to
it as a substitute for the Worker. Its current project settings and deployment
revision require owner account inspection.
