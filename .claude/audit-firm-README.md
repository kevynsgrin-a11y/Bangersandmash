# Site Audit Firm — Claude Code Subagent Handoff System

A simulated high-dollar web development firm for Claude Code. One command takes a live URL through five parallel specialist critiques, an architect's prioritized fix plan, a human approval gate, four build agents executing in the repo, and an adversarial QA gate — with a shared file-based handoff ledger the whole way.

## Installed files

```
.claude/commands/site-audit.md          ← the /site-audit orchestrator
.claude/agents/audit-firm/*.md          ← 11 specialist subagents
.claude/SITE_BRIEF.template.md          ← optional per-site config
.claude/audit-firm-README.md            ← this file
```

To make the firm available in every project instead, move the agent files to `~/.claude/agents/audit-firm/` (the command file can stay per-project or move to `~/.claude/commands/`). If `.claude/agents/` didn't exist before this session started, restart Claude Code once so it's discovered; after that, edits to agent files hot-reload.

Three agents (design-critic, ux-auditor, qa-verifier) declare an inline Playwright MCP server, so they get a real rendering browser scoped to themselves — it never pollutes your main session's context. Requires Node/npx; first run downloads the package. If you'd rather not use it, delete the `mcpServers:` block from those three files — they fall back to HTML analysis and honestly cap their visual scores at 74 (PROVISIONAL) per protocol.

## Run

```
/site-audit https://example.com                     # full pipeline, default
/site-audit https://example.com critique            # phases 0–2 only: all 5 critics + plan, no builds
/site-audit https://example.com quick               # phases 0–2 with 3 critics (design, SEO, revenue)
/site-audit https://example.com repo=sites/example  # point at the source explicitly
/site-audit https://example.com auto                # skip the human gate before implementation
```

If no repo is found, the run still completes — build agents emit **paste-ready build prompts** per fix item instead of code edits, ready to drop into Manus/Lovable/v0/Bolt verbatim.

## Pipeline

```
Phase 0  Intake (main thread)      → .audit/<domain>/<date>/00-intake.md + _protocol.md
Phase 1  Critique (parallel)       → 01-findings-{design-critic,ux-auditor,market-analyst,
                                       seo-auditor,revenue-auditor}.md
Phase 2  Synthesis                 → site-architect → 02-master-fix-plan.md
         ── HUMAN GATE (approve / strike / add items; skipped with `auto`) ──
Phase 3  Build (sequenced)         → backend-debugger → frontend-engineer ∥ monetization-engineer
                                       → ui-visual-coder → 03-implementation-log.md
Phase 4  Verification              → qa-verifier → 04-verification-report.md
                                       SHIP, or FIX-AND-RETEST delta loop (max 2), then escalate
```

Handoffs are file-based because every subagent runs in its own context window: `_protocol.md` (severity ladder, 0–100 scoring bands, harshness contract, finding format, revenue-congruence rule, 100%-accuracy rule) is the single source of truth every agent reads first. Agents return only summaries to the orchestrator, so eleven specialists don't flood the main context.

## What keeps the critiques harsh but real

- Scores start at 60 and move only with cited evidence; ≥85 requires a named competitor benchmark; unrendered visual judgments cap at 74.
- Banned weasel words; every finding must be falsifiable, with location, evidence, impact, an executable fix spec, and an owner.
- Under 5 findings requires a written certification that the auditor tried and failed to find more — but inventing defects to hit a quota is equally a violation.

## Revenue congruence

All four streams (display ads, affiliate, partnerships, paid tiers) are audited on every run — every monetized link is curl-verified, dead plumbing is automatic P0 — but each stream gets a STRONG/WEAK/NONE fit ruling, and building a NONE-rated stream is a protocol violation. No square pegs in round holes: a site whose job doesn't support a paid tier will never have one proposed.

## Customization

- **Per-site config:** copy `.claude/SITE_BRIEF.template.md` into a site as `SITE_BRIEF.md`. This is where real AdSense client/slot IDs and affiliate tag formats live — the monetization-engineer is forbidden from inventing IDs and will emit `TODO-AFFILIATE-ID` placeholders without them.
- **Models:** everything defaults to `model: inherit`. To cheapen a run, set `model: haiku` on market-analyst/seo-auditor, or `model: sonnet` on build agents, in their frontmatter.
- **Memory:** design-critic, site-architect, and qa-verifier carry `memory: project` (`.claude/agent-memory/`) — they accumulate your portfolio's design systems, fit rulings, and recurring failure patterns across runs. Check that directory into git if you want the knowledge to travel; delete the `memory:` line to disable.
- **Audit trail:** `.audit/` is a useful before/after history worth committing; add it to `.gitignore` if you'd rather not.
- **Ad-hoc use:** every agent also works solo — "Use the revenue-auditor subagent on https://…" runs just the link-verification sweep.

## Cost note

A `full` run spins up ~11 subagent contexts plus browser rendering. Use `quick` for routine portfolio sweeps and save `full` for launches and overhauls.
