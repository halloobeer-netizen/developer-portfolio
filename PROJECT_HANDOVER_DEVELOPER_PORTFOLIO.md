# PROJECT HANDOVER — DEVELOPER PORTFOLIO (GITHUB-BASED)

## Repository
- Repository: `halloobeer-netizen/developer-portfolio`
- Branch: `main`
- Project identity: Jagavre Labs developer portfolio
- Type: Static portfolio / landing page

## Source of Truth
This handover is based on the current GitHub repository.

The latest repository content is the source of truth. Do not rebuild the site from scratch or migrate frameworks unless explicitly requested.

## Verified Current Architecture
The project is a static website using:
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts / Inter

There is no current Next.js, React, Vue, Angular, database, or backend architecture in this repository.

Important root files:
- `index.html`
- `styles.css`
- `brand.css`
- `hero-polish.css`
- `contact-icons.css`
- `script.js`
- `i18n.js`
- `assets/`

Do not introduce a build system or framework without a clear product requirement.

## Current Brand Identity
The page is branded as:

`Jagavre Labs`

Current document title:

`Jagavre Labs — Rekayasa Perangkat Lunak & Solusi AI`

Current positioning includes:
- Software Engineering
- Full-Stack Development
- AI & Automation
- Data Platforms

Preserve this positioning unless explicitly changed.

## SEO / Social Metadata
`index.html` currently contains:
- meta description
- author
- theme color
- canonical URL
- Open Graph metadata
- Twitter card metadata

Current canonical / social URL points to:

`https://jagavre-labs.vercel.app/`

Current OG image points to:

`assets/portfolio-og.png`

When changing deployment domain or social preview assets, update canonical, OG, and Twitter metadata together.

## Visual Direction
The current site uses a dark, minimal, professional visual system.

Important characteristics visible in the current source:
- dark background
- restrained blue accent
- Inter typography
- thin borders
- card-based project presentation
- generous spacing
- subtle reveal animation
- professional software/AI/data positioning

Do not introduce neon, gaming-style effects, excessive gradients, heavy glow, or multiple random accent colors.

## Navigation
Current primary navigation includes:
- Karya
- Keahlian
- Tentang
- Kontak

There is also a contact CTA in the header.

The mobile navigation is controlled by `script.js`.

Preserve:
- accessible menu toggle
- `aria-expanded`
- Escape-key close behavior
- automatic close after clicking a nav link

## Bilingual System — CRITICAL
The portfolio has a working bilingual ID/EN system.

Files:
- `i18n.js`
- language buttons in `index.html`

Current languages:
- Indonesian (`id`)
- English (`en`)

The source uses attributes such as:
- `data-i18n`
- `data-i18n-aria`
- `data-i18n-alt`

When adding or changing visible content, update both language dictionaries and relevant accessibility labels.

Do not hard-code new text in only one language if the content should be translated.

## Hero Section
Current hero presents Jagavre Labs / personal software engineering positioning around:
- full-stack applications
- AI & automation
- data platforms

The hero includes:
- eyebrow text
- main headline
- supporting description
- project CTA
- contact CTA
- technology/domain meta labels
- brand panel

Preserve the clean, compact, product-focused style.

## Project Showcase
The portfolio currently showcases real projects and GitHub repositories.

Verified examples in `index.html` include:

### Karputindo.net
- Customer data & mapping platform
- Links to live production site
- Links to `halloobeer-netizen/karputindo-net`
- Screenshots for desktop/mobile/map/customer management

### Jagad Stockis
- Inventory & order management platform
- Links to `halloobeer-netizen/jagad-stokis`
- Product, storefront, admin login, and admin dashboard screenshots

### Peatland Intelligence Platform
- Environmental survey & spatial data platform
- Project screenshots and field-data positioning

When adding or editing projects:
- use real project facts
- keep repository links correct
- keep image paths valid
- keep Indonesian and English descriptions aligned
- do not exaggerate technologies or production status

## Project Images / Gallery
Project screenshots live under `assets/projects/...`.

`script.js` adds lightbox behavior to:
- `.project-main-image`
- `.project-gallery figure`

The lightbox supports:
- click
- keyboard Enter / Space
- Escape to close
- focus restoration
- image alt text

Do not break accessibility when changing galleries.

## Reveal Animation
`script.js` uses `IntersectionObserver` for `.reveal` elements.

It respects:

`prefers-reduced-motion: reduce`

If reduced motion is enabled, content becomes visible without observer animation.

Preserve this accessibility behavior.

## Accessibility
Current source includes several accessibility measures:
- skip link
- semantic navigation
- aria labels
- keyboard-operable lightbox
- Escape handling
- focus restoration
- reduced motion support
- translated accessibility labels

Do not remove these during UI refactors.

## Contact Area
Recent Git history shows contact improvements including:
- Instagram updated to `@jagavre.labs`
- WhatsApp contact link added
- WhatsApp icon styling added

Before changing social/contact details, verify the current URLs in `index.html`.

Do not accidentally restore older social handles from previous commits.

## Recent Development History
Recent commits include:
- WhatsApp contact link
- WhatsApp icon styling
- Instagram handle change to `@jagavre.labs`
- ID/EN language switch in header
- bilingual translation system
- Indonesian accessibility labels
- Indonesian landing-page content
- footer Jagavre Labs blue styling

These areas are recently stabilized and should not be overwritten casually.

## CSS Structure
The current CSS is intentionally split by concern:

### `styles.css`
Main layout and overall styling.

### `brand.css`
Brand lockup, language switch, navigation CTA styling.

### `hero-polish.css`
Hero-specific refinement.

### `contact-icons.css`
Contact/social icon styling.

Do not merge everything into one file without a clear maintainability reason.

## Brand Header Details
`brand.css` currently styles:
- `.brand-lockup`
- `.brand-mark`
- `.brand-name`
- `.brand-contact-cta`
- `.lang-switch`

Current brand mark in the header is text-based `JL` in `index.html`.

Before replacing it with another logo asset, verify desired identity and mobile behavior.

## Responsive Design
The site is designed for desktop and mobile.

When changing layout, test at minimum:
- 360px
- 390px
- 430px
- tablet
- desktop

Verify:
- mobile menu
- language switch
- project galleries
- contact actions
- lightbox
- hero layout
- images do not overflow

## Deployment
Current canonical metadata references Vercel:

`https://jagavre-labs.vercel.app/`

The repository itself is a static site.

Before changing deployment configuration, verify the active hosting connection.

Do not assume a backend or server runtime is needed.

## Content Integrity
This portfolio represents real project work.

Rules:
- do not invent project features
- do not claim technologies not present in project repositories
- do not claim production status without evidence
- preserve repository links
- preserve screenshot/project mapping
- keep copy professional and concise

## Git Workflow
Before editing:

```bash
git status
git log --oneline
```

Use clear commit messages, for example:
- `content: update portfolio project description`
- `feat: add new project gallery`
- `style: refine mobile hero spacing`
- `fix: preserve bilingual aria labels`
- `seo: update canonical and og metadata`

## Mandatory Takeover Audit
Before making significant changes, the next AI/developer must report:

1. Current repository structure
2. Current static architecture
3. SEO/meta configuration
4. Current brand identity
5. Navigation implementation
6. Mobile menu behavior
7. ID/EN translation system
8. Project list and repository links
9. Screenshot/image asset structure
10. Lightbox behavior
11. Reveal animation behavior
12. Accessibility implementation
13. Contact/social links
14. Responsive behavior
15. Current deployment URL
16. Broken links or missing assets
17. Technical debt
18. Recommended smallest safe next task

Do not immediately rewrite the site.

## Locked / Preserved Principles
Treat these as preserved unless explicitly changed:
- Project remains a Jagavre Labs developer portfolio.
- Current architecture is static HTML/CSS/JavaScript.
- Inter is the current primary font.
- Visual style remains minimal, dark, professional, and restrained.
- Blue remains the primary accent direction.
- ID/EN bilingual support must remain.
- Accessibility behavior must remain.
- Project descriptions must reflect real repositories.
- Project gallery/lightbox must remain keyboard accessible.
- SEO/OG metadata must remain valid.
- Do not introduce unnecessary frameworks or dependencies.
- Do not redesign unrelated parts when making a small change.

## Correct Continuation Workflow

```text
READ REPOSITORY
→ AUDIT INDEX.HTML
→ AUDIT CSS FILES
→ AUDIT SCRIPT.JS
→ AUDIT I18N.JS
→ VERIFY ASSETS
→ VERIFY LINKS
→ VERIFY MOBILE
→ VERIFY ACCESSIBILITY
→ MAKE SMALLEST SAFE CHANGE
→ TEST ID + EN
→ TEST DESKTOP + MOBILE
→ COMMIT
→ DEPLOY
```

Do not:

```text
REWRITE EVERYTHING
→ BREAK TRANSLATIONS
→ BREAK PROJECT LINKS
→ BREAK MOBILE / ACCESSIBILITY
```

## Final Instruction
This is an existing static developer portfolio with a defined Jagavre Labs identity, bilingual content, project galleries, and accessibility behavior.

Preserve the current lightweight architecture and visual identity.

Improve the portfolio incrementally and keep all project claims grounded in the actual linked repositories.

**GitHub repository is the source of truth.**