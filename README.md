# EISDEC Corporate Website

Official corporate website of EISDEC, an emerging technology company.

## Development status

Phase 2.3 adds Projects & Research after Hero, About, and Expertise. Doc4Org is
presented as a Research Project. The Header remains logo-only with a working
homepage link. Full navigation, Contact, and Privacy Notice remain deferred.
The brand foundation, minimal Footer, skip link, and full-height shell remain.

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
public/                 Original favicon and browser icons
src/
  app/                  Application shell and scoped styles
  assets/brand/         Original SVG logos and approved palette.json
  components/
    Header/             Responsive logo header
    Hero/               Approved heading and description with fluid typography
    About/              Approved purpose statement
    Expertise/          Three proposed focus areas in a fluid grid
    Projects/           Research initiatives rendered from local typed data
    Footer/             Minimal company name and dynamic year
  config/projects.ts    Project entries and external URL validation
  config/site.ts        Shared site details; unknown destinations remain null
  styles/tokens.css     Semantic and provisional UI tokens
  styles/global.css     Global base, focus, and reduced-motion rules
  main.tsx              Palette loading and React entry point
eisdec-brand-v4/         Unmodified source brand package
index.html              HTML entry and icon references
vite.config.ts          Vite and React configuration
tsconfig.json           Strict TypeScript configuration
eslint.config.js        ESLint flat configuration
.prettierrc.json         Formatting configuration
package.json            Dependencies and npm scripts
package-lock.json       Locked dependency versions
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
or database is required. No deployment or DNS configuration is part of Phase 2.3.

## Project entries

`src/config/projects.ts` contains the typed project collection. Add future entries
with unique stable IDs. Doc4Org's URL comes only from `siteConfig.doc4orgUrl`, which
remains `null` pending confirmation. Null or invalid URLs produce no link or button;
cards are never clickable containers. Valid absolute HTTPS URLs without embedded
credentials produce a named external link with a visible new-tab notice and
`rel="noopener noreferrer"`. URL validation checks syntax and scheme, not site
availability or approval. No external requests are made to validate destinations.

The grid reserves space for future entries and caps each card at 34rem, so the
single research initiative does not stretch across the full desktop content width.

## Brand integration

The approved source files are retained unchanged. Production copies are byte-for-byte
identical. Prettier excludes the brand package and copied brand assets so formatting
cannot rewrite them. The Header uses `logo-dark.svg`, which embeds the approved navy
background; `logo.svg` is transparent with the same gradient and `logo-monochrome.svg`
is a white monochrome alternative. All wordmarks have viewBox `340 215 1380 260` and
intrinsic dimensions 1400 × 260; the Header preserves the original intrinsic ratio.

`src/assets/brand/palette.json` is the sole application source of brand color values.
Before rendering, `main.tsx` loads its background and gradient stops into CSS custom
properties. `tokens.css` maps those properties to semantic tokens without repeating
brand hex values. Approved colors are background `#070D22` and gradient stops
`#80B5EB` (0%), `#B1B5E8` (34%), `#D9B2CD` (61%), `#F5B18D` (100%).

Provisional UI colors (implementation choices, not brand specifications): secondary
background `#0C142C`, surface `#121E38`, primary text `#F4F6FC`, secondary text
`#BDC6DA`, muted text `#96A4BE`, subtle border `#27334D`, strong border `#566581`.
Typography, spacing, radii, and motion values are also provisional implementation
tokens. Focus and interactive colors reuse the approved palette.

Fluid padding, heading size, Header height, and logo width adapt without layout
breakpoints. A flex shell keeps the Footer at the viewport bottom for short content
and lets it flow after longer content. There are no inactive navigation links.
A keyboard-visible skip link targets Main; global focus styles and reduced-motion
support are included. No external fonts, tracking, manifests, or service workers
are used. The 192px and 512px icons are retained without adding PWA functionality.

The brand package README requests comparison with the approved raster before final
production signoff; this phase does not grant or replace that signoff.
