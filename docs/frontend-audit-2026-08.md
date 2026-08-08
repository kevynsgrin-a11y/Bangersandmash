# Front-end audit — August 2026

Repository: `kevynsgrin-a11y/bangersandmash` · Branch: `claude/frontend-audit-fixes-rvc2zm`
Audit date: 2026-08-08 · Node 22.22.2

---

## Evidence coverage

**Read this before any finding.** Three of the capabilities a front-end audit normally rests on were
unavailable, and I have not substituted impressions for them.

| Capability | Status | Evidence |
|---|---|---|
| Build and serve the site locally | **NO** | The repo contains no front-end source. `find` over all 24 tracked files returns 0 `.jsx`, `.tsx`, `.html`, `.css`, `vite.config`, `next.config`. |
| Drive a real browser | **Installed, nothing to drive** | Chromium 1194 + Playwright 1.56.1 at `/opt/pw-browsers`. No local site; remote host unreachable. |
| Fetch the live public URL | **NO** | `curl` → `CONNECT tunnel failed, response 403` for `gastropub-table.preview.emergentagent.com:443`. `WebFetch` → `EGRESS_BLOCKED`. The proxy logs it in its own `recentRelayFailures`. `app.emergent.sh` is blocked too. |

The site is confirmed to exist and be serving — the Emergent job API (reachable, read-only) reports
`{"env_slug":"gastropub-table","serving":true}` for job `45d462fa-7fcf-4712-a1cb-bfab4383874b`. I
simply could not see it.

**Lenses degraded as a result:**

- **Visual design** — no findings possible. Nothing in this repo determines hierarchy, type scale,
  spacing, or colour. Not audited.
- **Accessibility** — reduced to what the *data* determines. Computed contrast, focus order, live
  regions and landmark semantics were **not** measured. One a11y finding survives (alt text) because
  it is decided in the schema, not the template.
- **Responsive** — no findings possible. No viewport was measured. Any pixel value in this document
  would be fabricated, so there are none.
- **Client-side function** — reduced to the data contracts that constrain it (quantity types for the
  serves adjuster, slug resolution for hero images). No code path was exercised in a browser.
- **Performance** — arithmetic only, from recorded file sizes. No Lighthouse, no LCP, no TTFB.
- **SEO / share previews / cache headers / favicons** — not audited. All are served by a front end
  that is not in this repository.

What *was* fully auditable is the content pipeline and both quality gates, and that is where this
audit concentrates. The brief's four "checks reviews usually skip" were all executable, and all four
returned findings.

**Grade mix across the 29 findings below:** 22 MEASURED, 6 OBSERVED, 1 INFERRED.
**Discarded on re-verification: 9.** See the appendix — several were plausible and wrong.

---

## Verdict

### What is genuinely good here, in specifics

This is not a weak repository, and the parts that are strong are strong for reasons worth naming.

**The content is better than the machinery that checks it.** I went looking for the classic
regional-food failure — an Americanism smuggled into a British recipe — and found the opposite. Champ
is a Northern Irish dish definitionally made with scallions. The corpus writes
`"spring onions (scallions in Ulster)"` (`content/recipes-expansion.js:2339`) and then explains
itself in the provenance note: *"scallion is the local word for spring onion"*. That is a writer who
knows the difference between a spelling error and a regional lexical item. The gate did not know the
difference, and I had to fix the gate to stop it failing the content.

**The provenance discipline is real and unusual.** All 32 recipes carry an `authenticityNote`, 13,380
characters in total, and they hedge where hedging is honest: the Forfar Bridie note declines to
assert the Margaret Bridie attribution, the Welsh Rarebit note concedes the attribution rests on
naming convention. `CONTENT_ADDITION_PLAN.md:153-155` states the principle exactly — *"flagged
uncertainty is professional, fabricated certainty is not"*.

**The ratings decision was made correctly and refused.** Faced with an existing schema carrying
fabricated `rating` + `ratingCount` pairs on a site with no backend, the content round declined to
propagate it (`CONTENT_ADDITION_PLAN.md:121`, *"I did not propagate it"*). Measured: `ratingCount`
appears on 0 of 32 new recipes, and the gate makes it a P0 to bring it back
(`content/validate.js:122`). Refusing to add a fabrication is the hardest thing on this list to do
under delivery pressure.

**The integration guide leads with its own weakest point.** `INTEGRATION.md:8` opens §1 with
"The schema is INFERRED — reconcile it before you merge" and labels it "the highest-risk step". It
then separates what was verified from the build record from what was assumed. Documentation that
foregrounds its own uncertainty is rarer than it should be.

**The audit protocol has real anti-fabrication teeth.** `.claude/commands/site-audit.md:90` —
*"Harsh ≠ fabricated. Never invent a defect to hit a quota."* — and line 84 caps un-screenshotted
visual scores at 74 and marks them PROVISIONAL. Both are correct instincts, and line 84 is precisely
the right *shape* of rule. Its gap (below) is that it stops at visuals.

**The coverage contract is the right idea.** `validate.js:231` fails the build on an empty
region × category cell, on the stated reasoning that a filter combination reachable in two clicks
must not return nothing. That is a UX invariant encoded as a build rule, which is where UX invariants
belong.

### What a visitor actually meets on arrival

**I do not know, and I will not guess.** The host returned 403 to every request I made. Any
description of the landing experience in this document would be fiction.

What I can state is what a *contributor* meets on arrival, which is its own finding: a repository
named for a site whose source it does not contain, whose README opens by saying so
(`README.md:5-7`), holding 20 markdown documents and 3 JavaScript files. The most valuable content
here — 2,844 lines of verified recipe data — cannot be seen working, because the thing that would
render it lives in an Emergent job and has never been pushed.

---

## Severity counts

| Severity | Count |
|---|---|
| Critical | 5 |
| High | 12 |
| Medium | 9 |
| Low | 3 |
| **Total** | **29** |

Shipped fixes: **13 commits**, one per finding, each revertable alone. Of those, **2 are flagged for
human review**. **16 findings were reported without a fix** — the ones where the correct behaviour is
a judgement rather than a defect.

Final state: `npm test --prefix content` → **66 tests, 66 pass**. `npm run validate --prefix content`
→ exit 0.

---

## Every critical in full

### CRIT-01 — The repository has no front end, and nothing says so except prose

**Evidence (MEASURED).** `find` over the working tree, excluding `.git`, returns 24 tracked files:
`README.md`, `SITE_BRIEF.md`, 7 files under `content/`, 14 under `.claude/`, and this document.
Zero are front-end source — no `.jsx`, `.tsx`, `.html`, `.css`, `.vue`, `vite.config`, `next.config`,
`package-lock.json`. The application is at `/app/frontend/` inside Emergent job
`45d462fa-7fcf-4712-a1cb-bfab4383874b`. The job's own transcript records the push that would have
changed this being requested and never completed: *"No commits made this run."*

**Consequence.** Every downstream problem in this document inherits from it. No CI can build this.
No test can render it. No audit can measure it. The 32 recipes cannot be seen in the grid they were
written for. `/site-audit` in `full` mode dispatches build agents at a repository that contains
nothing to build, and the README correctly tells you to use `critique` mode instead
(`README.md:46`) — which is a workaround documented in place of the fix.

**Fix.** Push `/app/frontend/` from the Emergent job to this repository. Nothing else in this
document is worth doing first, and several items cannot be verified at all until it lands.

**Effort.** Minutes to push; the job is paused and reachable via the Emergent API. Hours to
reconcile if the working tree there has drifted from what the trajectory records.

---

### CRIT-02 — Nothing gates anything

**Evidence (MEASURED).** There is no CI and no hook of any kind:

```
.github/                 does not exist
*.yml / *.yaml           0 files
.git/hooks (non-sample)  0
```

`content/validate.js` is described throughout the documentation as the thing to run "before merging
into mockData.js, and again after" (`validate.js:9`), and the README presents it as the content
pipeline's check (`README.md:30`). It is an honour-system script. Nothing runs it, nothing fails
without it, and nothing notices if it is skipped.

**Second half of the same problem (MEASURED).** Even when run, it blocks on P0 only —
`process.exit(result.p0.length ? 1 : 0)`. Every voice rule, every spelling rule, every timing and
range check is P1, so all of them are advisory. I verified this end-to-end: injecting `flavor`,
`color`, `game-changer` and `delicious` into a recipe now correctly reports 4 P1 findings, and still
exits **0**.

**Consequence.** The brief asks what the deploy gate is coupled to. The honest answer is that there
is no deploy gate. A redesign that breaks every rule in this repository ships green, because there is
no green to break.

**Fix.** Add a workflow running `npm test --prefix content` and `npm run validate --prefix content`.
Then decide, deliberately, which severities block — that is a policy call, which is why I did not
change the exit contract myself.

**Effort.** 30 minutes for the workflow. The severity policy is a conversation, not a task.

---

### CRIT-03 — The merge adapter re-creates the exact dishonesty the plan exists to remove

**Evidence (MEASURED).** `content/recipes-expansion.js:2820`:

```js
rating: r.editorialRating,
```

I executed `toSiteShape()` and diffed the key sets. The honest `editorialRating` (32/32 recipes,
min 4.3, max 4.9, mean 4.644) is emitted into a field named `rating` — the field
`CONTENT_ADDITION_PLAN.md:118` calls *"the single most damaging thing on the site, because it is the
one defect that is actively dishonest rather than merely incomplete."*

The condition that makes the mapping honest — that the caption must then read "Editors' score" and
`ratingCount` must be dropped from the card — exists **only as a code comment**
(`recipes-expansion.js:2817-2819`) and as prose in two documents. Nothing enforces it. Nothing can:
the card component is in the front end, which is not in this repository.

**Consequence.** Follow the documented merge path literally and the honest number lands in the
dishonest field, on a grid where the existing 23 cards still render fabricated review counts beside
it. `INTEGRATION.md:135` predicts the visible symptom precisely — *"the grid shows some cards with
review counts and some without, which reads as broken rather than principled"* — and then the
default code path walks into it.

**Fix.** Not mine to make. This is a copy and honesty decision about numbers a visitor acts on. See
the draft under "Reported without a fix".

**Effort.** 1 hour to apply, once someone with authority over the site's copy has chosen between the
plan's three options.

---

### CRIT-04 — The recommended remedy relabels fabricated numbers rather than removing them

**Evidence (OBSERVED).** `CONTENT_ADDITION_PLAN.md:126-127`, option 1, marked **Recommended**:

> *"Relabel to editorial. Keep the stars, change the caption to 'Editors' score'. One copy change,
> the number becomes true, the visual stays. Also applies retroactively to the existing 23."*

The existing 23 ratings are, by the same document's account four paragraphs earlier, numbers
"somebody typed into `mockData.js`" with no backend behind them. Relabelling a fabricated 4.8 as an
"Editors' score" does not make it an editors' score. It makes it a fabricated number with a new
caption. The clause *"the number becomes true"* is the load-bearing error: the caption changed, the
number did not, and nobody scored those 23 dishes.

The plan's own option 2 (editorial badges on the `mostLoved` set) has none of this problem and is
ranked second.

**Consequence.** The single most damaging defect on the site has a recommended fix that preserves it
under better branding — and because the recommendation is retroactive, it would extend an unearned
editorial imprimatur across all 55 recipes rather than 32.

**Fix.** Reported, not shipped. This is publisher-identity territory.

**Effort.** Option 2 is roughly a day across 55 cards. Option 1 is an hour and I do not recommend it.

---

### CRIT-05 — The merge snippet everyone will copy bypassed the adapter — **fixed**

**Evidence (MEASURED).** `INTEGRATION.md` §2 is the only runnable code block in the merge guide, and
it read:

```js
import { EXPANSION_RECIPES } from "./recipes-expansion";
export const RECIPES = [...EXISTING_RECIPES, ...EXPANSION_RECIPES];
```

Three other places say to use the adapter instead: §1 (`INTEGRATION.md:45`), §5 step 2, and the
adapter's own docstring at `recipes-expansion.js:2794-2795`, which shows
`[...EXISTING_RECIPES, ...toSiteShape()]`.

I executed both and diffed the key sets. The raw array carries the **authoring** schema —
`prepMinutes`, `cookMinutes`, `cooksNote`, `editorialRating`. The site reads `prep`, `cook`, `notes`,
`rating`. The four fields the site needs are absent from the array the snippet merges.

**Consequence.** Following the guide's own code produces 32 cards with no prep time, no cook time, no
cook's note and no rating — and it throws no error, because the fields are present under different
names. It is the same silent-failure class the guide already warns about for region casing, sitting
in the guide's own snippet.

**Fix.** Shipped in `09cb906`. The snippet now spreads `toSiteShape()`, with a note explaining why,
since the failure produces no error message to search for. A test asserts the merge block spreads
`toSiteShape()` and never `EXPANSION_RECIPES`, so they cannot drift apart again.

**Effort.** 15 minutes, done.

---

## High findings

| # | Finding | file:line | Grade | Status |
|---|---|---|---|---|
| H-01 | Voice rules scanned 3 of 8 prose fields — `authenticityNote`, titles, tags and ingredient items were exempt from British-spelling and banned-word enforcement | `content/validate.js:181` | MEASURED | **Fixed** `d32c502` |
| H-02 | The gate passed a batch with every hero image missing; `image` was emitted by all 32 recipes but absent from the required-field list | `content/validate.js:102` | MEASURED | **Fixed** `6c185ae` |
| H-03 | A duplicate *title* was reported as a *slug* error, and obeying the message produced 2 P0s from 1 P2 | `content/validate.js:174` | MEASURED | **Fixed** `10d39e2` |
| H-04 | String-typed numbers bypassed every numeric check; `editorialRating: "9.9"` passed silently | `content/validate.js:158` | MEASURED | **Fixed** `72acbfc` |
| H-05 | The duplicate-slug check was blind to merge collisions — it reports OK while the merged array carries a genuine duplicate | `content/INTEGRATION.md:74` | MEASURED | **Fixed** `d422795` |
| H-06 | `toSiteShape()` silently dropped all 32 `authenticityNote` values — 13,380 characters of provenance | `content/recipes-expansion.js:2797` | MEASURED | **Fixed (flagged)** `6432168` |
| H-07 | `fifteens` declares 20 min prep / 0 cook against a method mandating a 4-hour-to-overnight set | `content/recipes-expansion.js:2649` | MEASURED | Reported — NEVER |
| H-08 | `faggots-with-peas-and-onion-gravy` declares prep 30 / cook 65 against a 12-hour soak in step 1 and 45–60 min of peas starting at step 5 | `content/recipes-expansion.js:1400` | MEASURED | Reported — NEVER |
| H-09 | `welsh-oggie` declares 45 min prep against 50 min of chilling its own method mandates (30 + 20) | `content/recipes-expansion.js:1125` | MEASURED | Reported — NEVER |
| H-10 | `VERIFICATION-LOG.md` certifies *"Every prep and cook figure reconciles exactly against the method as written"* — falsified by H-07, H-08, H-09 | `content/VERIFICATION-LOG.md:210` | MEASURED | Reported |
| H-11 | The three agents contractually required to be read-only are the only three with no `tools:` restriction | `.claude/agents/audit-firm/qa-verifier.md:1-12` | MEASURED | Reported — see note |
| H-12 | 19 of the gate's 30 rules could be deleted with the test suite still green — the suite covered only the rules this audit touched | `content/validate.test.js` | MEASURED | **Fixed** `c3f358e` |

**Note on H-11.** `qa-verifier.md:16` states the constraint in its own words: *"You verify; you never
fix — a defect you quietly patch is a defect the process never learns from."* The frontmatter does
not enforce it. `design-critic`, `ux-auditor` and `qa-verifier` carry no `tools:` line and inherit
everything, including `Write`, `Edit` and `Bash`; the other 8 agents all declare explicit tool lists.
I did **not** fix this: all three also declare `mcpServers: playwright`, and adding a `tools:` line
risks stripping the MCP browser tools that are the entire point of those agents. I could not verify
MCP inheritance in this session, so the correct tool list is not provable from the code and the fix
fails the FIX NOW bar. Draft below.

---

## Medium and low findings

| # | Finding | file:line | Grade | Status |
|---|---|---|---|---|
| M-01 | The `imagePrompt` check enforced 55–130 words while its failure message said "want 60-110" | `content/validate.js:144` | MEASURED | **Fixed** `f23d5ad` |
| M-02 | The documented test command ran zero tests and exited 1 — self-inflicted in the first commit of this audit | `content/validate.test.js:4` | MEASURED | **Fixed** `be523f0` |
| M-03 | README claims the expansion fills "all 28 region × category filter cells"; this module covers 21. England's 7 cells contain 0 recipes here and cannot be verified from this repo at all | `README.md:33` | MEASURED | Reported |
| M-04 | No alt-text field exists in the recipe schema. Probed all 32 for `alt`, `imageAlt`, `altText`, `heroAlt`, `caption`: 0/32. WCAG 2.2 A 1.1.1 is decided here, in the data, not in the template | `content/recipes-expansion.js` (schema) | MEASURED | Reported |
| M-05 | 32 heroes at the recorded 738–859 KB add 23.1–26.8 MB; the full 55-recipe library reaches 39.6–46.1 MB. Nothing in this repo pins format, dimensions, `srcset` or lazy-loading | `content/INTEGRATION.md:113` | MEASURED | Reported |
| M-06 | `qa-verifier` has no `REPO=NONE` branch, while `frontend-engineer` is given one explicitly at `site-audit.md:51`. In `full` mode against this repo, every code item fails verification for reasons unrelated to the work | `.claude/agents/audit-firm/qa-verifier.md:22` | OBSERVED | Reported |
| M-07 | Both documented image-generation commands ended in a literal `...` and were unrunnable; no document carried the full 32-slug list, though `IMAGE_PROMPTS.md` called itself "ready to paste" | `content/IMAGE_PROMPTS.md:15` | MEASURED | **Fixed** `5387d74` |
| M-08 | `CONTENT_ADDITION_PLAN.md` §3's "Total after" column sums to 54 against its own stated total of 55 — the Wales row reads ~11 where the build record implies 12 | `content/CONTENT_ADDITION_PLAN.md:62-66` | MEASURED | Reported |
| M-09 | The Phase 2 occasion table is date-anchored but carries no year and no review date. The doc is stamped `Prepared: 2026-07-25` with no expiry, and several of its occasions have already passed relative to this audit | `content/CONTENT_ADDITION_PLAN.md:3` | MEASURED | Reported |
| L-01 | `CONTENT_ADDITION_PLAN.md:140` states "Metric first, imperial in brackets" as binding. Met on 3 of 344 ingredient rows (0.9%). 28 oven temperatures are °C with zero °F and zero gas marks | `content/CONTENT_ADDITION_PLAN.md:140` | MEASURED | Reported — NEVER |
| L-02 | 9 of 344 ingredient quantities ("a pinch", "a little") cannot be scaled by the serves adjuster the brief describes; the other 335 parse cleanly | `content/recipes-expansion.js` (ingredients) | MEASURED | Reported |
| L-03 | The voice gate listed "scallion" as an Americanism, which would have failed the corpus's correct Ulster gloss once coverage was extended | `content/validate.js:48` | MEASURED | **Fixed (flagged)** `94f6cf0` |

---

## The pattern underneath

Twelve of these findings share one root cause, and once you see it the rest of the audit reads
differently.

**Every check in this repository is scoped to the artefact that is finished and static. Nothing is
scoped to the operation that is unfinished and dynamic.**

- `validate.js` imports `EXPANSION_RECIPES` and nothing else (`validate.js:12`). All 28 of its
  assertions target the source module. `toSiteShape()` — the function that produces what a user
  actually sees, and the one `INTEGRATION.md:45` instructs every contributor to hand-edit — had
  **zero**. That is where the dropped provenance (H-06) and the `rating` remapping (CRIT-03) both
  live, unwatched.
- The duplicate-slug check maps over the expansion alone, so it cannot see the only collision the
  merge can introduce (H-05).
- The coverage matrix iterates 3 regions, so England's 7 cells — the 18 recipes already live — are
  outside its field of view entirely (M-03).
- The voice rules scanned the three fields that were written first and never grew to the five added
  later (H-01).

The corpus is finished, so it is thoroughly checked. The merge is the part nobody has done yet, so it
is the part nothing checks — and it is the only part that can break the live site.

**A second, smaller pattern:** three separate documents certify work that measurement contradicts.
The previous build round self-certified *"100% pass, zero console errors, zero design issues, zero UI
bugs"* while 15 orphaned components were open. `VERIFICATION-LOG.md:210` certifies that every prep
and cook figure reconciles; three do not (H-07 to H-09). Certification here is a genre, not a result.
Treat any "verified" claim in this repository as a hypothesis with a file path attached.

---

## Redesign blocker list

Resolve these before any visual work begins. Not "should" — a redesign that starts before these are
settled will produce work that cannot be verified or shipped.

1. **CRIT-01 — push the front-end source.** A redesign cannot begin against a repository with no
   front end. Everything else on this list is blocked behind it.
2. **CRIT-02 — establish a gate that runs.** Without CI, a redesign has no signal. The first red
   build should happen before the first colour change, not after.
3. **CRIT-03 / CRIT-04 — settle the ratings question.** Every card carries a number. A redesign will
   restyle that number, and restyling a fabrication entrenches it. Decide first, then design.
4. **Resolve the 15 orphaned components before touching them.** `SITE_BRIEF.md:68` records that the
   previous round wrote `RecipeHero`, `ServesAdjuster`, `IngredientList` and 12 more, then died
   before importing any. A redesigner will find two implementations of every component and no way to
   tell which one renders. Delete or wire them — either is fine, ambiguity is not.
5. **M-04 — decide where alt text lives.** If it belongs in the recipe schema, it must be added
   before the grid is rebuilt, not retrofitted after.
6. **H-11 — restrict the read-only agents.** A QA verifier that can edit the code it judges will,
   eventually, quietly fix something and report a pass.

---

## Undocumented constraints a redesigner must be told

Harvested from `content/validate.js` and `content/validate.test.js`, not from the documentation.
Every one of these fails the build (or would, once CRIT-02 is fixed) and appears in no contributor
document.

| Constraint | Where enforced | Severity if broken |
|---|---|---|
| Hero images resolve **only** at `/generated/<slug>.jpg`. The path is derived, not free-form — change a slug and the image 404s with no other symptom | `validate.js:113` | P0 |
| Slugs must equal `slugify(title)`: lowercase, `&`→`and`, non-alphanumerics collapsed to single hyphens, no leading or trailing hyphen | `validate.js:174` | P2, but see H-03 |
| `ratingCount` may never reappear on any recipe, in any form | `validate.js:122` | P0 |
| Every region × category cell must be non-empty across 7 categories × 3 regions | `validate.js:231` | P0 |
| Titles must be unique across the corpus | `validate.js:214` (added by this audit) | P0 |
| `prepMinutes`, `cookMinutes`, `serves`, `editorialRating` must be **numbers**, not numeric strings. Pre-formatted times like `"55 min"` fail | `validate.js:158` (added by this audit) | P1 |
| `editorialRating` must sit in 4.0–5.0 | `validate.js:164` | P1 |
| 7–14 ingredients · 4–6 method steps · story 45–80 words · 3–5 lowercase tags · method steps ≥12 words each | `validate.js:125-147` | P1/P2 |
| `imagePrompt` must be 55–130 words | `validate.js:144` | P2 |
| Banned words and American **spellings** are forbidden in story, cook's note, method, provenance note, title, tags and ingredient items — 8 fields, not 3 | `validate.js:181` (extended by this audit) | P1 |
| American **vocabulary** (`scallion`, `skillet`, `broil`) is permitted *only* in a sentence that also carries the British equivalent — the gloss pattern | `validate.js:196` (added by this audit) | P1 |
| Nothing enforces alt text, imperial conversions, gas marks, passive-wait declaration, or HTML-safety of prose. These are unguarded | — | — |

---

## If you do only five things

| # | Do this | Effort | Why this one |
|---|---|---|---|
| 1 | **Push the front-end source to this repository** | 1–4 h | Unblocks everything. Four of six audit lenses are currently unrunnable, not failing — unrunnable. |
| 2 | **Add CI running `npm test --prefix content` and `npm run validate --prefix content`** | 30 min | The gate exists, is now tested (66 tests, 0 of 30 rules deletable) and still never runs. Cheapest permanent gain here — the draft workflow is below. |
| 3 | **Correct the three recipes whose declared times contradict their own methods** (H-07, H-08, H-09) | 2 h | This is the only category of defect that reaches a cook's evening. Someone starts `fifteens` at 8pm expecting 20 minutes. |
| 4 | **Settle the ratings question, and do not pick option 1** (CRIT-03, CRIT-04) | 1 d | Every card carries the number. Deciding after the redesign means restyling a fabrication and then removing it twice. |
| 5 | **Add alt text to the recipe schema before the grid is rebuilt** (M-04) | 3 h | 32 heroes, 0 alt attributes, decided in the data. Retrofitting after a redesign costs more and usually does not happen. |

---

## What to defend

Some of what follows looks like a flaw and is a decision. A redesign must not "fix" these.

**The absence of `ratingCount` on the 32 new recipes.** It looks like missing data beside the
existing 23. It is a deliberate refusal, argued at `CONTENT_ADDITION_PLAN.md:121`. Anyone who
"completes" the schema by adding review counts has reintroduced the site's worst defect while
believing they tidied up.

**`editorialRating` as a separate field name from `rating`.** The distinction is the whole point. It
is not redundancy to be normalised away.

**The hedged provenance notes.** *"which is not firmly documented"*, *"which I cannot date with
confidence"* — these read as weak copy to an editor optimising for confidence. They are the audit
trail, and `CONTENT_ADDITION_PLAN.md:153-155` is explicit that flagged uncertainty is the professional
posture. Do not let a copy pass tighten them into assertions.

**`"spring onions (scallions in Ulster)"`.** Both terms are load-bearing. The gloss is correct
regional writing and I had to correct the validator to protect it. Do not simplify to either term
alone.

**The `--` em-dash-free, banned-word-free house voice.** The banned list at `validate.js:28` is not
prudishness; it is what keeps this from reading like every other recipe site. "Delicious" is banned
for a reason.

**The coverage-matrix P0.** Failing a build because a filter combination would return nothing looks
disproportionate. It is the correct severity — a dead filter state is a user hitting a wall in two
clicks.

**`SITE_BRIEF.md`'s `[VERIFIED]` / `[UNKNOWN]` tagging.** It looks like an unfinished document. It is
a document being honest about its own provenance, and it is the reason this audit could separate what
was known from what was assumed.

---

## Reported without a fix — drafts attached

### CRIT-03 / CRIT-04 — the ratings decision

Do not apply option 1. The draft I would put forward instead:

- Adopt option 2 from `CONTENT_ADDITION_PLAN.md:128`: drop numeric scores entirely, use an
  "Editor's Pick" badge on the `mostLoved` set (9 of 32 in this batch, measured).
- Delete `rating` and `ratingCount` from the card component for all 55 recipes.
- Keep `editorialRating` in the data as an internal sort key if a "best of" row is wanted; do not
  render it as a number.

This removes every unverifiable number from the page rather than recaptioning it. It costs the star
visual, which is a real loss and a fair trade.

### H-07 / H-08 / H-09 — the timing defects

I have not changed these numbers. Changing a cooking time is changing a number a user acts on, and a
wrong correction is worse than the defect. The measured facts, for whoever holds the recipes:

- `fifteens` — declares `prepMinutes: 20`, `cookMinutes: 0`. Method step 5 mandates 4 hours to
  overnight in the fridge. Neither field carries it.
- `faggots-with-peas-and-onion-gravy` — declares `prepMinutes: 30`, `cookMinutes: 65`. Step 1 opens
  *"The night before"* with a 12-hour soak. Step 5 simmers the peas 45–60 minutes, starting after the
  30-minute bake, so the dish cannot complete inside 65 minutes of cooking.
- `welsh-oggie` — declares `prepMinutes: 45`. Step 1 chills 30 minutes, step 5 chills 20 more: 50
  minutes of mandated chilling inside a 45-minute prep figure.

The general fix is a `restMinutes` or `totalMinutes` field, plus a gate check that any method
mentioning "overnight", "the night before" or a multi-hour wait must declare it. I did not add that
check, because it would fail 7 recipes on a corpus that currently passes, and making it pass would
require changing the times — which is the decision above, not a fix.

### H-11 — the unrestricted read-only agents

Draft, to be applied only after verifying that MCP tools survive an explicit `tools:` list in this
Claude Code version:

```yaml
# design-critic.md, ux-auditor.md
tools: Read, Glob, Grep, WebFetch, WebSearch
# qa-verifier.md — needs Bash to run builds, but must not Write or Edit
tools: Read, Glob, Grep, Bash, WebFetch
```

If MCP servers are excluded by an explicit list, the correct fix is upstream in the agent framework,
not in these files.

### CRIT-02 — the missing gate

```yaml
# .github/workflows/content.yml
name: content
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '22' }
      - run: npm test --prefix content
      - run: npm run validate --prefix content
```

I did not add this. Introducing a required check is a repository-policy change with consequences for
everyone who pushes, and the severity question (should P1 block?) has to be answered first.

---

## Appendix — findings discarded on re-verification

Nine. Each was plausible, and each failed when I went to reproduce it — five of my own, four from the
audit lenses. Recording them because the reasoning that produced them will recur.

| Discarded claim | Why it failed |
|---|---|
| `INTEGRATION.md:49`'s `node -e "require('./recipes-expansion.js')"` breaks on an ESM module | Ran it. Exit 0. Node 22 supports `require()` of ESM. Would fail below 22.12 — an environment caveat, not a defect. |
| `INTEGRATION.md:74`'s duplicate-slug command is broken for the same reason | Ran it. Printed `OK`, exit 0. (It is broken for a *different* reason — H-05 — which is the finding that survived.) |
| The adapter `INTEGRATION.md:45` promises does not exist | It exists, `recipes-expansion.js:2797`, and works. |
| Prose contains HTML-unsafe characters that will break rendering | Counted across 88,877 characters of prose: `<` 0, `>` 0, `&` 0. Only 4 × `½`, 28 × `°`, 1 em dash, 1 en dash. No finding. |
| The `.claude/` audit firm locates things by presentational selector, so redesign failures will misreport their cause | Grepped all 11 agents plus the orchestrator. Two incidental mentions; `site-audit.md:95` asks the *reporter* to record a selector, which is correct. The brief predicted this and it is not there. |
| Slug/title mismatches will break hero images | 0 of 32 mismatch. |
| Ingredients are missing units | 0 of 344 missing. |
| All 344 quantities are unscalable strings | 335 of 344 parse as numbers. Only 9 do not (L-02). The severity was wrong, not the observation. |
| The audit protocol has no degraded-evidence rung at all | `site-audit.md:84` caps un-screenshotted visual scores at 74 and marks them PROVISIONAL, and line 90 forbids inventing findings. The real gap is narrower: no rung for a *wholly unreachable* host, where "start every category at 60" still emits a full score table. Reported at that reduced scope, not as claimed. |

---

## The four checks that reviews usually skip

All four were executable against this repository, and all four returned findings.

**1. Audit the gate.** Two gates exist. `content/validate.js` gates content merges; `.claude/` gates
site quality. The headline result is CRIT-02 — neither is wired to anything, so neither is a gate.
Beyond that, the specific "rename this and the gate says that" mapping the brief asked for is H-03:
give two recipes the same **title** and the gate's only complaint names the **slug**; follow that
instruction and you get a duplicate slug and a broken hero image. One P2 becomes two P0s by doing
exactly what the tool asked. Fixed in `10d39e2`.

The brief predicted the gate would locate things by presentational selector. **It does not.** I
grepped all 11 agents and the orchestrator; the only selector reference is `site-audit.md:95` asking
the *reporter* to record one, which is correct. Recorded as a discard, not a finding.

**2. Docs against code.** Six contradictions survived verification, of which two were shipped as
fixes (CRIT-05, M-07) and four reported. The sharpest is CRIT-05: three documents say "use the
adapter" and the one runnable code block did not.

**3. Time-travel the data.** **There is no executable date logic in this repository.** Measured three
ways: `grep -nwE 'Date|Intl|Temporal'` across all three JavaScript files returns 0 hits; there is no
`new Date`, `Date.now`, `getFullYear`, or `toLocale*` anywhere; and the corpus contains no computed
field of any kind. That is a clean negative and I am recording it as one rather than manufacturing a
finding to fill the slot.

Date-*dependence* does exist, in content rather than code, and it has a date attached (M-09):
`CONTENT_ADDITION_PLAN.md:3` is stamped `Prepared: 2026-07-25` with no review or expiry date, and its
Phase 2 occasion table (Burns Night, St David's Day, Christmas) carries occasion names with **no
year**. That table is a plan for content that must exist *before* its date — the doc says so itself
at `:176` — so it silently inverts from "upcoming work" to "missed window" as each date passes, with
nothing in the document marking the transition. Five shipping recipes already carry occasion tags for
occasions the plan has no collection for.

The date-dependence that will *arrive* is Phase 4's seasonal larder calendar
(`CONTENT_ADDITION_PLAN.md:197`, "what is in season, linked to recipes"). That is the first thing in
this project that will compute against the clock, and it does not exist yet. Grade INFERRED; what
would confirm it is the Phase 4 implementation.

**4. Find the untested file.** This produced the audit's most uncomfortable finding, H-12, because it
was about work shipped an hour earlier in this same session. A mutation sweep — instrument every one
of the 30 `fail()` callsites in `validate.js`, neutralise each in turn, run the suite — showed **19
rules could be deleted with the suite still reporting green**. Every rule that *was* covered was one
this audit had personally broken. Rules nobody had attacked had no coverage at all: exactly the gap
this audit had just reported in the gate, reproduced in its own tests. Fixed in `c3f358e`; re-running
the sweep now gives **0 of 30**.

The structural version of the same question: `toSiteShape()` is the function every contributor is
told to hand-edit (`INTEGRATION.md:45`) and the one that shapes what users see. It had zero
assertions. That is where CRIT-03, CRIT-05 and H-06 all live.

---

## Method, and what did not finish

Six audit lenses were fanned out over the repository in parallel — gate, content data, docs, time and
tests, front-end consequence, architecture — each scoped so findings would not duplicate, each
required to grade every finding MEASURED / OBSERVED / INFERRED and cite `file:line`.

**Four of the six lenses completed** (gate, data, docs, time-and-tests), returning 52 raw findings.
**The architecture and front-end-consequence lenses, and the automated adversarial verification
stage, had not completed when this report was written.** The run was capped at two concurrent agents,
and the remaining work was still queued.

I have not reported anything on that basis that I did not verify myself. Every finding in this
document was re-derived by hand before entry: I re-ran the commands, recomputed the numbers, and read
the cited lines. Several agent findings were **corrected downward** in that process — one claimed
1 of 344 ingredients carried imperial units where the true figure is 3; one claimed the audit
protocol had no degraded-evidence rung when `site-audit.md:84` plainly has one; one reported a
failing test that was a transient mid-edit state and passed on re-run. Those corrections are in the
appendix.

What that means for coverage: the architecture and front-end-consequence lenses are represented here
only by the findings I produced myself (CRIT-01, M-04, M-05, L-02 and the naming-drift note). They
are thinner than the other four, and a second pass would likely find more.

Every number in this document was produced by executing code in this repository or by a command whose
output is quoted above it. Nothing was measured in a browser, because there was nothing to point one
at.

---

## Verification of the fixes

Each of the 13 commits carries a test that fails before it and passes after. Spot-check evidence:

| Fix | Before | After |
|---|---|---|
| GATE-02 voice coverage | 4 banned/American terms in an `authenticityNote` → "Clean — no findings", PASS | same mutation → 4 P1 findings |
| GATE-03 image required | all 32 `image:` paths stripped → PASS, exit 0 | same mutation → FAIL (P0 32), exit 1 |
| GATE-09 duplicate title | duplicate title → "slug does not derive from title" | → "duplicate titles: … — rename the title, not the slug" |
| GATE-10 string numbers | `editorialRating: "9.9"` → nothing reported | → `editorialRating is string "9.9", not a number` |
| CRIT-05 merge snippet | snippet spread `EXPANSION_RECIPES` | test fails if it ever does again |
| TEST-01 rule coverage | 19 of 30 rules deletable, suite green | 0 of 30 |

The GATE-05 refactor that made all of this testable was verified non-behavioural: CLI output is
byte-identical before and after, md5 `9d967d6e3550b9112b02a69ce9231495` both times.

**No test was weakened, skipped or deleted to make a fix pass.** One test was *tightened* mid-flight:
my first DOC-02 test flagged `--only <slug,slug,...>`, which is a legitimate signature description
rather than a command. I narrowed it to actual invocations and re-confirmed it still fails when the
real regression is reintroduced.
