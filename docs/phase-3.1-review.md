# Phase 3.1 — SEO & Metadata

## Files

Modified: index.html.

Created: public/robots.txt, public/sitemap.xml, docs/phase-3.1-review.md. The approved public/og-image.png was manually supplied by the user and remains unchanged.

The starting working tree was clean. Existing design, approved copy, React components, site configuration, icons, EISDEC brand assets, and Doc4Org logo were preserved. Contact remains disabled; Doc4Org URL remains null.

## HTML metadata

Metadata is static in the HTML head and present in dist/index.html, without runtime rewriting:

- Title: EISDEC — Technology Company | Digital Products & Solutions
- Description: EISDEC develops digital products, services, and technology solutions that solve practical problems, simplify complexity, and improve efficiency.
- Canonical: https://eisdec.com/
- HTML language: en; UTF-8 encoding and responsive viewport retained.
- Open Graph: website type, EISDEC site name, exact title/description above, https://eisdec.com/ URL, en_US locale.
- Twitter/X: summary_large_image card and exact title/description above. No invented account or username.

Production HTML parsing verified one title, one description, one canonical, and one of each required Open Graph/Twitter property. HTML entity decoding and normal title whitespace collapsing preserve the exact approved title.

The existing siteConfig.url uses https://eisdec.com, the same origin as the slash-terminated canonical. No configuration change or second runtime metadata system was introduced.

## Social preview asset

The user-provided public/og-image.png is integrated unchanged. Verified PNG signature, all chunk CRCs, successful IDAT decompression, valid scanline filter bytes, and exactly 1200×630 pixels (8-bit RGB, non-interlaced; 41,688 bytes).

Open Graph image metadata:

- og:image: https://eisdec.com/og-image.png
- og:image:width: 1200
- og:image:height: 630
- og:image:type: image/png
- og:image:alt: EISDEC corporate logo on a dark navy background

Twitter/X uses summary_large_image, with twitter:image pointing to the same absolute HTTPS URL and twitter:image:alt using the same description.

The production build copies the asset to dist/og-image.png byte-for-byte. SHA-256 comparison confirms the source image was not modified during integration. Production HTML parsing verified each image property occurs once. A comparison with the pre-integration HTML confirmed all prior metadata, canonical and favicon links, title, and JSON-LD were preserved; only twitter:card was changed, as requested. No live-domain availability or social-platform rendering claim is made.

## Favicons

Existing integration retained unchanged:

| Reference     | Verification                                  |
| ------------- | --------------------------------------------- |
| /favicon.svg  | Valid SVG; image/svg+xml declared             |
| /icon-32.png  | PNG header confirms 32×32; image/png declared |
| /icon-64.png  | PNG header confirms 64×64; image/png declared |
| /icon-180.png | Apple touch icon; PNG header confirms 180×180 |

All referenced files exist in dist. The 192×192 and 512×512 icons also exist and are copied by Vite; no manifest or unnecessary icon links were added. Icon artwork was not modified.

## Discovery files

public/robots.txt, copied unchanged to dist/robots.txt:

```text
User-agent: *
Allow: /

Sitemap: https://eisdec.com/sitemap.xml
```

public/sitemap.xml, copied to dist/sitemap.xml and parsed successfully:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://eisdec.com/</loc>
  </url>
</urlset>
```

The site currently has one public route; section anchors are not pages. No Privacy Notice, Doc4Org route, preview domain, or invented last-modified date is included. Add the Privacy Notice canonical URL when that route is implemented in a later phase.

## Structured data and semantics

Added one minimal inline JSON-LD WebSite object: schema.org context, WebSite type, EISDEC name, https://eisdec.com/ URL, and en language. JSON parsing verified its exact values. The schema context is an identifier, not an external script fetch. Organization schema was omitted to avoid unsupported legal/company claims. No address, founding date, social account, employees, or other speculative details.

Source review confirms one main landmark, one homepage h1, four h2 section headings, h3 card headings, semantic navigation, and matching about/expertise/projects/contact anchors. The EISDEC image has name-based alt text. Doc4Org's image has empty alt because its adjacent heading names the project; decorative architecture and outline icons are hidden from assistive technology. No semantic or layout change was needed.

## Production verification

All passed:

- npm run lint
- npm run typecheck
- npm run format:check
- npm run build
- git diff --check

A separate parser checked dist/index.html metadata values and uniqueness, JSON-LD, language, charset, viewport, local HTML resource existence, favicon PNG dimensions/SVG validity, robots.txt exact contents, and homepage-only sitemap namespace/URL. The first verification attempt did not normalize Prettier's multiline title whitespace; correcting the verification parser allowed it to check the browser-equivalent title successfully. No implementation defect was found.

Production output: HTML 2.72 kB (0.82 kB gzip), CSS 14.63 kB (3.24 kB gzip), JavaScript 230.98 kB (72.44 kB gzip). CSS and JavaScript bundles are unchanged by this phase. All executable/style/favicon resource references are local; social image metadata points to the approved production origin; source inspection found no fetch, XMLHttpRequest, or sendBeacon usage. No tracking, third-party script, font, embed, or dependency was added. This is static artifact/source verification, not a runtime network trace or live-domain check.

## Limits and outstanding work

- No browser, social-platform debugger, external schema validator, live hosting/header, or indexing verification was performed.
- Existing body content remains client-rendered React. Metadata and JSON-LD are present in initial production HTML; prerendering was not introduced in this bounded metadata phase.
- Production discovery files allow crawling when deployed, as requested; nothing was deployed or submitted for indexing.

Social preview finalization: all five required validation commands passed again, and production HTML/image preservation checks passed. Phase 3.1 integration is complete locally.

No publication, DNS changes, Privacy Notice, later phase work, commit, or push. Work stops for review.
