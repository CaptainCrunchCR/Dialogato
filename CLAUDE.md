# Dialogato

Next.js 14 landing page (App Router, TypeScript, Tailwind), deployed to Cloudflare Pages as a static export.

## Product rules

- SEO first: every page must be fully indexable.
- Landing page only, in Spanish (`/`, always default), English (`/en`) and Chinese (`/zh`).
- No PWA. Future assets come from DigitalOcean Spaces via one base-URL setting.
- WhatsApp CTAs are disabled behind a flag, never deleted. Contact: hola@dialogato.com.
- No Markdown files except this one.

## Architecture

- Static export only: no API routes, middleware, cookies or runtime server code.
- `app/[[...locale]]/` is the root layout; `dynamicParams = false`, `<html lang>` set per locale.
- Translations: `locales/*.json`, loaded server-only in `lib/dictionaries.ts`; never fetched at runtime. Every locale must have every Spanish key (type-checked, fails the build).
- Use `locales`, `defaultLocale` and `localePath()` from `lib/i18n.ts`; locale comes from the URL only (no `localStorage`).

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
