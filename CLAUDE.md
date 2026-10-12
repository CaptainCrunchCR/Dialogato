# Dialogato

Next.js 14 landing page (App Router, TypeScript, Tailwind), deployed to Cloudflare Workers as static assets (static export).

## Product rules

- SEO first: every page must be fully indexable.
- Landing page only, in Spanish (`/`, always default), English (`/en`) and Chinese (`/zh`).
- No PWA. Future assets come from DigitalOcean Spaces via one base-URL setting.
- WhatsApp contact goes to a temporary business line while the AI agent is in development; number and email (hola@dialogato.com, single address) live only in `lib/contact.ts`.
- No Markdown files except this one.

## Architecture

- Static export only (`output: "export"` → `out/`): no API routes, middleware, cookies or runtime server code. Cloudflare Workers Builds: build `npx next build`, deploy `npx wrangler deploy` (serves `out/` per `wrangler.jsonc`).
- `app/[[...locale]]/` is the root layout; `dynamicParams = false`, `<html lang>` set per locale.
- Translations: `locales/*.json`, loaded server-only in `lib/dictionaries.ts`; never fetched at runtime. Every locale must have every Spanish key (type-checked, fails the build).
- Use `locales`, `defaultLocale` and `localePath()` from `lib/i18n.ts`; locale comes from the URL only (no `localStorage`).

## Core Web Vitals

- Top priority, on par with SEO: fix every proven CLS/LCP issue. Changes that need a bigger visual change are tested by the user before code-gate approval.
- Prove the root cause (measure which element shifts or paints late, when and why) before fixing; never apply CSS that only hides the symptom.
- Keep the blast radius minimal: avoid changing shared keyframes, utilities or global rules; when unavoidable, list every affected place and screenshot it.
- Measure before/after on `/`, `/en`, `/zh` at desktop and mobile widths.

## Commands

```bash
NEXT_TELEMETRY_DISABLED=1 npx next build
npx tsc --noEmit
npx eslint --no-eslintrc -c .eslintrc.json --ext .ts,.tsx app components contexts lib
```

- Telemetry must be disabled locally (`EXDEV` error). Use the explicit ESLint config (worktrees nest inside the repo).
- Git stores LF, working copies are CRLF; avoid `sed -i` or restore with `git checkout -- <file>` after staging.

## Workflow

- Tracking: https://github.com/users/CaptainCrunchCR/projects/9 (group issues, tickets as sub-issues).
- One branch and PR per group: `<type>/<group#>-<slug>`; at least one commit per ticket with `Closes #<ticket>`.
- Gates, each needing human review and explicit approval: **plan** (no code before approval) → **code** (review the uncommitted diff; no commit before approval) → **push** (approval also opens the PR; no auto-merge) → **next ticket**.
- Never rewrite `main`.
- Commit subjects ≤ 50 chars. No AI attribution.
