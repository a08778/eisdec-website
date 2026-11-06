# EISDEC Corporate Website

Official corporate website of EISDEC, an emerging technology company.

## Development status

Phase 1.1 initializes the frontend and development tooling. The application only
renders “EISDEC — Website under development” on a temporary dark background.
Website design, content sections, and the final design system are deferred to
later phases.

## Technology stack

- Vite, React, and TypeScript with strict mode
- CSS Modules and CSS custom properties
- ESLint for React and TypeScript
- Prettier for formatting
- npm with a committed lockfile for reproducible installs

## Local setup

Use Node.js 24 (24.14.1 or later in the 24.x series) and npm 11.
The `.nvmrc` pins the version used for initial validation.

```sh
nvm install
nvm use
npm ci
npm run dev
```

If you do not use nvm, install the documented Node.js version before running the
npm commands. Open the local URL printed by Vite.

## Available scripts

| Command                | Purpose                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| `npm run dev`          | Start the development server                                          |
| `npm run build`        | Typecheck and generate the static production build in `dist/`         |
| `npm run preview`      | Preview the production build locally after building                   |
| `npm run lint`         | Check React, TypeScript, and configuration code with ESLint           |
| `npm run typecheck`    | Check application and Vite configuration types without emitting files |
| `npm run format`       | Format supported project files with Prettier                          |
| `npm run format:check` | Check formatting without changing files                               |

## Project structure

```text
public/             Static assets copied into the build
src/
  assets/           Future imported assets
  App.tsx           Development placeholder
  App.module.css    Scoped placeholder styles
  main.tsx          React entry point
  index.css         Minimal global styles
index.html          HTML entry point
vite.config.ts      Vite and React configuration
tsconfig.json       Strict TypeScript configuration
eslint.config.js    ESLint flat configuration
.prettierrc.json     Formatting configuration
package.json        Dependencies and npm scripts
package-lock.json   Locked dependency versions
```

## Validation

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Static hosting

The build is compatible with Cloudflare Pages static hosting. For a future
deployment, use the repository root, build command `npm run build`, output
directory `dist`, and the documented Node.js version. No server runtime, backend,
or database is required. No deployment or DNS configuration is part of Phase 1.1.
