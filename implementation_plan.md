# Southern IoT Digital Platform — Implementation Plan

## Overview

Build and deploy the **Southern IoT** multi-page digital platform using designs generated from Google Stitch, with a **Hugo-powered blog** section, all deployed to **GitHub Pages** via GitHub Actions.

---

## Current State Analysis

### What Stitch Has Already Generated

You already have 5 screens exported from Stitch:

| Screen | Files | Description |
|---|---|---|
| `southern_iot/` | `DESIGN.md` | Design system (colors, typography, spacing, components) |
| `southern_iot_blog/` | `code.html` + `screen.png` | "The Edge Feed" — blog listing page |
| `southern_iot_ecosystem/` | `code.html` + `screen.png` | Ecosystem page — partners, protocols, API |
| `southern_iot_solutions/` | `code.html` + `screen.png` | Solutions page — manufacturing, agriculture, infrastructure |
| `southern_iot_support/` | `code.html` + `screen.png` | Support page — docs, forum, ticket system |

> [!NOTE]
> There is **no Home/Landing page** design exported yet. We will need to either generate one via Stitch MCP or build it manually from the DESIGN.md specs.

### Stitch Design DNA

The design system uses:
- **Fonts**: Space Grotesk (headlines) + Inter (body)
- **Colors**: Dark navy theme (#131313 bg) with Electric Blue (#a9c7ff primary, #83cfff secondary)
- **Style**: Corporate Modern + Glassmorphism, base-8 spacing grid
- **Components**: Glass panels, pulsing status dots, gradient buttons, spec-row cards

---

## Proposed Architecture

```
stitch_southern_iot_digital_platform/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions: build Hugo + merge static → deploy
├── static-site/                    # Static HTML pages (from Stitch)
│   ├── index.html                  # Home/Landing page
│   ├── about/
│   │   └── index.html              # About Us page (team, mission)
│   ├── solutions/
│   │   └── index.html              # Solutions page
│   ├── ecosystem/
│   │   └── index.html              # Ecosystem page
│   ├── support/
│   │   └── index.html              # Support page
│   ├── css/
│   │   └── main.css                # Shared design system CSS
│   ├── js/
│   │   └── main.js                 # Shared JS (nav, dark mode, animations)
│   └── assets/
│       └── images/                 # Optimized images
├── blog/                           # Hugo site for the blog
│   ├── hugo.toml                   # Hugo configuration
│   ├── content/
│   │   └── posts/                  # Blog markdown posts
│   │       ├── lorawan-gateway-placement.md
│   │       ├── zero-trust-edge.md
│   │       └── 5g-vs-lorawan.md
│   ├── archetypes/
│   │   └── posts.md                # Post template
│   ├── layouts/
│   │   ├── _default/
│   │   │   ├── baseof.html         # Base layout matching Stitch design
│   │   │   ├── list.html           # Blog listing (matches blog screen.png)
│   │   │   └── single.html         # Individual post
│   │   ├── partials/
│   │   │   ├── header.html         # Shared nav
│   │   │   ├── footer.html         # Shared footer
│   │   │   ├── head.html           # <head> meta tags
│   │   │   └── post-card.html      # Blog card component
│   │   └── index.html              # Blog homepage
│   ├── static/
│   │   ├── css/
│   │   │   └── blog.css            # Blog-specific styles
│   │   └── js/
│   │       └── blog.js             # Blog-specific JS
│   └── assets/                     # Hugo pipes (images, SCSS)
├── southern_iot/                   # (existing) Stitch design specs
├── southern_iot_blog/              # (existing) Stitch blog design reference
├── southern_iot_ecosystem/         # (existing) Stitch ecosystem design reference
├── southern_iot_solutions/         # (existing) Stitch solutions design reference
├── southern_iot_support/           # (existing) Stitch support design reference
└── README.md
```

---

## Phase 1: Stitch MCP Setup

### What It Does
The Stitch MCP server allows this AI agent to interact with Google Stitch to generate new designs, extract design DNA, and export code — all programmatically.

### Configuration

> [!IMPORTANT]
> The MCP server configuration you provided uses a **direct API key** approach (no Google Cloud project required). This is the simplest method.

Your MCP config:
```json
{
  "mcpServers": {
    "stitch": {
      "serverUrl": "https://stitch.googleapis.com/mcp",
      "headers": {
        "X-Goog-Api-Key": "REDACTED"
      }
    }
  }
}
```

**Action**: This configuration needs to be added to Antigravity's MCP settings. You should:
1. Open Antigravity → Agent Panel → `...` (More Options) → **MCP Servers**
2. Add the Stitch server with the config above
3. Restart Antigravity for the connection to activate

> [!WARNING]
> I (as an AI agent) cannot directly configure MCP servers on your IDE — this requires manual setup through the Antigravity UI. Once configured, I'll be able to use Stitch tools like `list_screens`, `generate_screen`, and `extract_design_dna` in future interactions.

### What We Can Do After MCP Is Connected
- Generate a **Home/Landing page** design from Stitch
- Extract design DNA for consistent theme across all pages
- Generate additional screens (e.g., Products page, individual blog post layout)

---

## Phase 2: Static Site Pages (From Stitch HTML)

### 2.1 Shared Design System CSS
Extract and unify the Tailwind config + custom CSS from all Stitch HTML files into a shared `main.css` design system. This replaces the CDN Tailwind approach with **vanilla CSS** for production.

### 2.2 Convert Stitch HTML → Production Pages
For each Stitch screen (`solutions`, `ecosystem`, `support`):
1. Extract the HTML structure from `code.html`
2. Replace Tailwind CDN with our shared CSS
3. Add proper navigation linking all pages together
4. Ensure responsive behavior
5. Add SEO meta tags

### 2.3 Create Home/Landing Page
Since no Home page was exported from Stitch, I will build one from scratch using:
- The DESIGN.md design system
- Visual patterns from the other Stitch screens
- Standard IoT company landing page patterns (hero, features, stats, CTA)

### Pages to Build
| Page | Source | Route |
|---|---|---|
| Home | New (from design system) | `/` |
| About Us | New (from design system) | `/about/` |
| Solutions | `southern_iot_solutions/code.html` | `/solutions/` |
| Ecosystem | `southern_iot_ecosystem/code.html` | `/ecosystem/` |
| Support | `southern_iot_support/code.html` | `/support/` |
| Blog | **Hugo** (see Phase 3) | `/blog/` |

### About Us Page — Content Structure
Built from scratch using the DESIGN.md design system. Sections:

1. **Hero**: "Precision Engineered by People" tagline + mission statement
2. **Our Story**: Brief company origin narrative (placeholder text)
3. **Leadership Team** (glass cards with photos, name, title, short bio):
   - **Rafiq Hasan** — CEO & Co-Founder
   - **Nadia Chowdhury** — CTO & Co-Founder
   - **David Park** — VP of Engineering
   - **Elena Vasquez** — Head of Product
4. **Engineering Team** (smaller grid of cards):
   - **James Okonkwo** — Senior RF Engineer
   - **Priya Sharma** — Cloud Infrastructure Lead
   - **Marcus Lee** — Hardware Design Engineer
   - **Fatima Al-Rashid** — Security Architect
   - **Tom Eriksen** — DevOps Engineer
   - **Aisha Mbeki** — Data Platform Engineer
5. **Company Values**: 3-4 value cards (Innovation, Reliability, Precision, Openness)
6. **Careers CTA**: "Join the Team" section with link

> [!NOTE]
> All names and bios are **dummy placeholders** — you can edit them later. Photos will be generated avatar-style to match the design.

---

## Phase 3: Hugo Blog

### 3.1 Initialize Hugo Site
```bash
hugo new site blog
cd blog
```

### 3.2 Custom Theme (No 3rd-Party Theme)
Build a **custom Hugo theme from scratch** that matches the Stitch blog design (`southern_iot_blog/screen.png`). This ensures visual consistency with the rest of the static site.

Key layouts:
- **`baseof.html`**: Dark navy theme, Space Grotesk + Inter fonts, glassmorphism nav
- **`list.html`**: Blog listing with category filters, glass article cards, whitepaper CTA, newsletter signup — directly replicating the Stitch blog design
- **`single.html`**: Individual blog post with syntax highlighting, reading time, author cards, related posts
- **Partials**: Shared header/footer/head matching the static site nav

### 3.3 Content Structure
```
content/
└── posts/
    ├── lorawan-gateway-placement/
    │   ├── index.md             # Post content
    │   └── featured.jpg         # Post image
    ├── zero-trust-edge/
    │   ├── index.md
    │   └── featured.jpg
    └── 5g-vs-lorawan/
        ├── index.md
        └── featured.jpg
```

### 3.4 Hugo Configuration (`hugo.toml`)
```toml
baseURL = "https://USERNAME.github.io/stitch_southern_iot_digital_platform/blog/"
languageCode = "en-us"
title = "The Edge Feed | Southern IoT"

[params]
  description = "Precision insights into the industrial edge"
  author = "Southern IoT"

[taxonomies]
  tag = "tags"
  category = "categories"

[markup.goldmark.renderer]
  unsafe = true
```

> [!IMPORTANT]
> **Question**: What is your GitHub username? This is needed for the `baseURL` configuration and the deployment URL.

---

## Phase 4: GitHub Pages Deployment

### 4.1 Repository Setup
1. Create a GitHub repository (e.g., `stitch_southern_iot_digital_platform`)
2. Set GitHub Pages source to **GitHub Actions** (Settings → Pages → Source → GitHub Actions)

### 4.2 GitHub Actions Workflow (`.github/workflows/deploy.yml`)

The workflow will:
1. **Checkout** the repository
2. **Build Hugo** blog in `blog/` → outputs to `blog/public/`
3. **Assemble final site**: Copy static pages + Hugo output into a unified `_site/` directory
4. **Deploy** to GitHub Pages

```yaml
name: Deploy Southern IoT Platform

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: true
          fetch-depth: 0

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build Hugo Blog
        working-directory: ./blog
        run: hugo --minify

      - name: Assemble Final Site
        run: |
          mkdir -p _site
          cp -r static-site/* _site/
          mkdir -p _site/blog
          cp -r blog/public/* _site/blog/

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./_site

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4.3 Final URL Structure
```
https://USERNAME.github.io/REPO_NAME/
├── /                    → Home (static)
├── /about/              → About Us (static)
├── /solutions/          → Solutions (static)
├── /ecosystem/          → Ecosystem (static)
├── /support/            → Support (static)
└── /blog/               → Blog (Hugo)
    ├── /                → Blog listing
    └── /posts/slug/     → Individual posts
```

---

## User Review Required

> [!IMPORTANT]
> ### Decisions Needed Before I Proceed
>
> 1. **GitHub Username/Org**: What is your GitHub username (or organization name)? This determines the `baseURL` for Hugo and the deployment URL.
>
> 2. **Repository Name**: Should I use `stitch_southern_iot_digital_platform` as the repo name, or do you prefer something different (like `southern-iot` or `southern-iot-platform`)?
>
> 3. **Home Page**: There's no Home/Landing page design from Stitch. Should I:
>    - **(A)** Build one from scratch using the DESIGN.md specs and design patterns from other pages? ← *Recommended*
>    - **(B)** Wait until MCP is connected and generate one via Stitch first?
>
> 4. **MCP Setup**: The MCP configuration needs to be added through the Antigravity UI manually. Would you like to do that now, or should I proceed with building the site first and set up MCP later?
>
> 5. **Products Page**: The nav shows a "Products" link but there's no Products page design. Should I create one, or leave it as a placeholder for now?
>
> 6. **Blog Content**: The Stitch design shows 3 sample blog posts. Should I create them with realistic sample content, or would you prefer to write your own posts?

---

## Open Questions

> [!WARNING]
> ### Critical: Tailwind vs Vanilla CSS
> The Stitch-exported HTML uses **Tailwind CSS via CDN**. For production:
> - **(A)** Keep Tailwind CDN (faster development, but CDN dependency) ← *Simpler*
> - **(B)** Convert to vanilla CSS (no CDN dependency, full control) ← *More work, cleaner production*
> 
> Recommendation: Keep Tailwind CDN for the static pages since Stitch generates Tailwind classes, and use vanilla CSS only for the Hugo blog templates. This hybrid approach minimizes rework.

---

## Verification Plan

### Automated Tests
1. Run `hugo --minify` to verify blog builds without errors
2. Run the GitHub Actions workflow and verify deployment succeeds
3. Test all page links work correctly

### Manual Verification
1. Open each page locally and verify visual match to Stitch `screen.png` designs
2. Test responsive behavior on mobile/tablet/desktop
3. Verify navigation links between static pages ↔ Hugo blog work correctly
4. Check GitHub Pages live URL after deployment

---

## Execution Order

| Step | Task | Estimated Effort |
|---|---|---|
| 1 | Set up project structure & shared navigation | Low |
| 2 | Convert Stitch HTML → static pages (Solutions, Ecosystem, Support) | Medium |
| 2.5 | Build About Us page with team profiles | Medium |
| 3 | Build Home/Landing page from design system | Medium |
| 4 | Initialize Hugo & build custom blog theme | High |
| 5 | Create blog post templates & sample content | Medium |
| 6 | Set up GitHub Actions deployment workflow | Low |
| 7 | Test locally & push to GitHub | Low |
| 8 | Configure GitHub Pages & verify live deployment | Low |
