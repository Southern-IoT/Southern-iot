# CODEX PROMPT — Southern IoT Digital Platform

> **Purpose**: This is a self-contained prompt for an AI coding agent to build the complete Southern IoT multi-page website with a Hugo blog, deployable to GitHub Pages. Everything the agent needs is in this document.

---

## 🎯 OBJECTIVE

Build a complete, production-ready multi-page website for **Southern IoT** — an industrial IoT connectivity company. The site consists of:

1. **5 Static HTML pages**: Home, About Us, Solutions, Ecosystem, Support
2. **1 Hugo Blog** ("The Edge Feed") with a custom theme matching the design system
3. **GitHub Actions workflow** to deploy everything to GitHub Pages

All pages must share a **consistent navigation bar, footer, design system**, and visual language. The design uses a **dark navy glassmorphism** aesthetic with Tailwind CSS via CDN.

---

## 📁 PROJECT STRUCTURE

Create the following directory structure in the project root:

```
stitch_southern_iot_digital_platform/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── static-site/
│   ├── index.html                      # Home/Landing page (CREATE NEW)
│   ├── about/
│   │   └── index.html                  # About Us page (CREATE NEW)
│   ├── solutions/
│   │   └── index.html                  # From southern_iot_solutions/code.html
│   ├── ecosystem/
│   │   └── index.html                  # From southern_iot_ecosystem/code.html
│   ├── support/
│   │   └── index.html                  # From southern_iot_support/code.html
│   └── css/
│       └── shared.css                  # Shared custom styles (glass-panel, animations)
├── blog/                               # Hugo site
│   ├── hugo.toml
│   ├── archetypes/
│   │   └── posts.md
│   ├── content/
│   │   └── posts/
│   │       ├── optimizing-lorawan-gateway-placement/
│   │       │   └── index.md
│   │       ├── zero-trust-architecture-network-edge/
│   │       │   └── index.md
│   │       └── 5g-vs-lorawan-selecting-right-protocol/
│   │           └── index.md
│   ├── layouts/
│   │   ├── _default/
│   │   │   ├── baseof.html
│   │   │   ├── list.html
│   │   │   └── single.html
│   │   ├── partials/
│   │   │   ├── head.html
│   │   │   ├── header.html
│   │   │   ├── footer.html
│   │   │   └── post-card.html
│   │   └── index.html                  # Blog homepage
│   └── static/
│       └── css/
│           └── blog.css
├── southern_iot/                       # (existing) Stitch design reference — DO NOT MODIFY
├── southern_iot_blog/                  # (existing) Stitch blog reference — DO NOT MODIFY
├── southern_iot_ecosystem/             # (existing) Stitch ecosystem reference — DO NOT MODIFY
├── southern_iot_solutions/             # (existing) Stitch solutions reference — DO NOT MODIFY
├── southern_iot_support/               # (existing) Stitch support reference — DO NOT MODIFY
└── README.md
```

---

## 🎨 DESIGN SYSTEM (from Stitch DESIGN.md)

### Brand Identity
- **Company**: Southern IoT
- **Tagline**: "Precision Connectivity"
- **Style**: Corporate Modern + Glassmorphism
- **Personality**: Technical precision, reliability, forward-thinking innovation
- **Audience**: Engineers, industrial operators, tech-forward stakeholders

### Color Palette (Dark Mode)
```
Background:           #131313
Surface:              #131313
Surface Container:    #201f1f
Surface Container Low:#1c1b1b
Surface Container High:#2a2a2a
Surface Bright:       #393939

Primary:              #a9c7ff  (Electric Blue — main action color)
Primary Container:    #002b5b  (Dark Navy)
On Primary:           #073060

Secondary:            #83cfff  (Cyan accent)
Secondary Container:  #03a8e8

Tertiary:             #c3c7cb
On Surface:           #e5e2e1
On Surface Variant:   #c4c6d0
Outline:              #8d909a
Outline Variant:      #43474f

Error:                #ffb4ab
```

### Typography
```
Headlines:  Space Grotesk (Google Fonts)
Body:       Inter (Google Fonts)

Display:      48px, weight 700, line-height 1.1, letter-spacing -0.02em
Headline LG:  32px, weight 600, line-height 1.2
Headline MD:  24px, weight 600, line-height 1.3
Body LG:      18px, weight 400, line-height 1.6
Body MD:      16px, weight 400, line-height 1.5
Body SM:      14px, weight 400, line-height 1.5
Label Caps:   12px, weight 700, line-height 1, letter-spacing 0.08em
```

### Required External Resources (include in ALL pages)
```html
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
```

### Tailwind Config (include in ALL pages via inline script)
```js
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-container": "#002b5b",
        "on-secondary": "#00344b",
        "surface-bright": "#393939",
        "tertiary-fixed": "#dfe3e7",
        "tertiary": "#c3c7cb",
        "surface-container-highest": "#353534",
        "on-secondary-fixed-variant": "#004c6b",
        "inverse-surface": "#e5e2e1",
        "on-surface-variant": "#c4c6d0",
        "on-primary": "#073060",
        "background": "#131313",
        "primary-fixed-dim": "#a9c7ff",
        "on-tertiary-container": "#8f9397",
        "secondary-fixed": "#c6e7ff",
        "on-tertiary-fixed-variant": "#43474b",
        "surface-container-low": "#1c1b1b",
        "outline-variant": "#43474f",
        "inverse-primary": "#405f91",
        "surface-container-high": "#2a2a2a",
        "surface-variant": "#353534",
        "surface-dim": "#131313",
        "tertiary-container": "#272c2f",
        "tertiary-fixed-dim": "#c3c7cb",
        "primary": "#a9c7ff",
        "on-secondary-fixed": "#001e2d",
        "error-container": "#93000a",
        "error": "#ffb4ab",
        "secondary-fixed-dim": "#83cfff",
        "secondary": "#83cfff",
        "on-background": "#e5e2e1",
        "primary-fixed": "#d6e3ff",
        "on-tertiary-fixed": "#171c1f",
        "on-surface": "#e5e2e1",
        "on-primary-container": "#7594ca",
        "surface-tint": "#a9c7ff",
        "surface-container-lowest": "#0e0e0e",
        "outline": "#8d909a",
        "surface": "#131313",
        "surface-container": "#201f1f",
        "on-tertiary": "#2c3134",
        "on-error-container": "#ffdad6",
        "on-primary-fixed-variant": "#264778",
        "on-error": "#690005",
        "inverse-on-surface": "#313030",
        "secondary-container": "#03a8e8",
        "on-secondary-container": "#003952",
        "on-primary-fixed": "#001b3d"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: { gutter: "24px", md: "16px", xxl: "48px", sm: "8px", xl: "32px", "container-max": "1440px", xs: "4px", unit: "8px", lg: "24px" },
      fontFamily: { "headline-md": ["Space Grotesk"], "body-lg": ["Inter"], "body-sm": ["Inter"], "label-caps": ["Inter"], "headline-lg": ["Space Grotesk"], "display": ["Space Grotesk"], "body-md": ["Inter"] },
      fontSize: {
        "headline-md": ["24px", {lineHeight: "1.3", fontWeight: "600"}],
        "body-lg": ["18px", {lineHeight: "1.6", fontWeight: "400"}],
        "body-sm": ["14px", {lineHeight: "1.5", fontWeight: "400"}],
        "label-caps": ["12px", {lineHeight: "1", letterSpacing: "0.08em", fontWeight: "700"}],
        "headline-lg": ["32px", {lineHeight: "1.2", fontWeight: "600"}],
        "display": ["48px", {lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700"}],
        "body-md": ["16px", {lineHeight: "1.5", fontWeight: "400"}]
      }
    }
  }
}
```

### Shared CSS Classes (include in ALL pages)
```css
.glass-panel {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
.glow-hover:hover {
    box-shadow: 0 0 20px rgba(169, 199, 255, 0.2);
}
.gradient-text {
    background: linear-gradient(135deg, #a9c7ff 0%, #03a8e8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.status-pulse {
    animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: .5; transform: scale(1.2); }
}
.industrial-grid {
    background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0);
    background-size: 40px 40px;
}
```

### Icon System
Use **Google Material Symbols Outlined** icons everywhere. Reference: https://fonts.google.com/icons

---

## 🧭 SHARED NAVIGATION BAR (use on EVERY page)

The nav is **identical** on every page, with only the **active page** highlighted.

**Active link class**: `text-blue-400 border-b-2 border-blue-500 pb-1`
**Inactive link class**: `text-slate-400 hover:text-white transition-colors duration-200 hover:bg-white/5 rounded-md px-3 py-2`

Nav links (replace hrefs with actual relative paths based on each page's location):
- Home → `/`
- About → `/about/`
- Solutions → `/solutions/`
- Ecosystem → `/ecosystem/`
- Blog → `/blog/`
- Support → `/support/`

Include:
- Logo "Southern IoT" linking to `/`
- Dark mode toggle icon (decorative)
- Language icon (decorative)
- "Get Started" CTA button
- Mobile hamburger menu with JS toggle for screens below `md` breakpoint

Mobile menu JS:
```js
document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  menu?.classList.toggle('hidden');
  menu?.classList.toggle('flex');
});
```

---

## 🦶 SHARED FOOTER (use on EVERY page)

Use the footer pattern from the existing Stitch pages. 4 columns:
1. **Southern IoT** — brand, tagline "Precision Connectivity", social icons (Material Symbols: `public`, `terminal`, `rss_feed`)
2. **Company** — About, Privacy Policy, Terms of Service, Compliance
3. **Support** — Contact Us, Global Support, Status Dashboard
4. **Contact** — Sales phone, HQ location

Bottom bar: `© 2024 Southern IoT. Precision Connectivity.` + `ALL SYSTEMS OPERATIONAL` in blue

---

## 📄 PAGE 1: HOME (CREATE NEW — `static-site/index.html`)

Build a premium landing page matching the dark glassmorphism design. Sections:

### Hero Section
- Full-width dark gradient overlay on tech image
- Headline: "Precision Connectivity for the Industrial Edge"  
- Sub-headline: short value proposition
- CTAs: "Explore Solutions" (filled) + "View Documentation" (ghost glass)
- Stats bar: "1.2B+ Connections" | "99.99% Uptime" | "142+ Countries"

### Trusted By (Logo Bar)
- Muted text company names: EdgeForce Systems, CloudStream Data, SecureLayer IoT, Apex Solar, IndustrialNet, TerraLink

### Platform Overview (3 glass cards)
- Edge Intelligence, Unified Connectivity, Zero-Trust Security

### Products Showcase (3 product cards)
- SIOT Gateway Pro, SIOT Sensor Array, SIOT Cloud Bridge
- Each with specs row using `label-caps`

### By The Numbers
- Stats: "1.2B+" Connections | "99.99%" Uptime | "142+" Countries | "10ms" Latency

### Latest Blog Posts
- 3 blog post preview cards (static HTML matching blog card design)
- "View All Posts →" link to `/blog/`

### CTA Section
- "Ready to Connect?" + Get Started button + ghost button

Use placeholder images: `https://placehold.co/800x400/131313/a9c7ff?text=IoT+Hardware`

---

## 📄 PAGE 2: ABOUT US (CREATE NEW — `static-site/about/index.html`)

### Hero
- "Precision Engineered by People"
- "Behind every connection is a team dedicated to reliability."

### Our Story (2-column: text + image)
- Founding in 2018, mission to democratize industrial IoT

### Leadership Team (large glass cards, 2-col grid)
Each: colored initials circle, name, title, short bio

| Name | Title | Initials | Bio |
|---|---|---|---|
| Rafiq Hasan | CEO & Co-Founder | RH | Former VP at Cisco IoT. 20+ years in industrial networking. |
| Nadia Chowdhury | CTO & Co-Founder | NC | PhD in Distributed Systems. Led edge computing at AWS. |
| David Park | VP of Engineering | DP | Ex-Google, low-latency network protocol specialist. |
| Elena Vasquez | Head of Product | EV | Built IoT platforms for 500M+ devices at Qualcomm. |

### Engineering Team (smaller cards, 3-col grid)

| Name | Title | Initials |
|---|---|---|
| James Okonkwo | Senior RF Engineer | JO |
| Priya Sharma | Cloud Infrastructure Lead | PS |
| Marcus Lee | Hardware Design Engineer | ML |
| Fatima Al-Rashid | Security Architect | FA |
| Tom Eriksen | DevOps Engineer | TE |
| Aisha Mbeki | Data Platform Engineer | AM |

### Company Values (4 glass cards)
- Innovation, Reliability, Precision, Openness

### Careers CTA
- "Join the Team" + "View Open Positions" button

---

## 📄 PAGES 3-5: SOLUTIONS, ECOSYSTEM, SUPPORT

### Solutions (`static-site/solutions/index.html`)
**Source**: Copy ALL HTML from `southern_iot_solutions/code.html` in the workspace.
**Modify**: Update nav (mark "Solutions" active, fix hrefs), update footer, add mobile menu, add meta tags.
**Keep**: ALL existing sections intact — Hero, Application Architectures cards (Smart Manufacturing, Precision Agriculture, Urban Infrastructure), Unified Connectivity Fabric, Operational Excellence case studies.

### Ecosystem (`static-site/ecosystem/index.html`)
**Source**: Copy ALL HTML from `southern_iot_ecosystem/code.html` in the workspace.
**Modify**: Update nav (mark "Ecosystem" active, fix hrefs), update footer, add mobile menu, add meta tags.
**Keep**: ALL existing sections — Hero, Connectivity Protocols (LoRaWAN, NB-IoT, LTE-M, Satellite), Certified Partners bento, API section with code preview.

### Support (`static-site/support/index.html`)
**Source**: Copy ALL HTML from `southern_iot_support/code.html` in the workspace.
**Modify**: Update nav (mark "Support" active, fix hrefs), update footer, add mobile menu, add meta tags.
**Keep**: ALL existing sections — Search hero, Technical Documentation, Community Forum, Knowledge Base, Ticket form, Hardware visual.

**CRITICAL**: Do NOT lose any section content from the original Stitch HTML. Only modify the nav, footer, and head.

---

## 📝 HUGO BLOG SETUP

### Initialize
```bash
cd blog && hugo new site . --force
```

### hugo.toml
```toml
baseURL = "https://YOUR_USERNAME.github.io/stitch_southern_iot_digital_platform/blog/"
languageCode = "en-us"
title = "The Edge Feed | Southern IoT"
paginate = 9

[params]
  description = "Precision insights into the industrial edge."
  author = "Southern IoT"

[taxonomies]
  tag = "tags"
  category = "categories"

[markup.goldmark.renderer]
  unsafe = true

[markup.highlight]
  style = "dracula"
```

### Layouts

**baseof.html**: HTML skeleton with Tailwind CDN, fonts, shared CSS, `{{ block "main" . }}{{ end }}`, partials for header/footer.

**head.html**: Meta charset, viewport, dynamic title, description, CDN links, Tailwind config.

**header.html**: Exact same nav as static pages, "Blog" marked active. Use absolute paths accounting for `/blog/` subpath.

**footer.html**: Same footer as static pages.

**index.html** (Blog home): Replicate `southern_iot_blog/screen.png` design:
1. Hero with pulsing "LIVE UPDATES" dot, "The Edge Feed" title, search bar
2. Category filter pills
3. Article grid: `{{ range .Pages }}` with post-card partial
4. Whitepaper CTA + Newsletter signup

**list.html**: Same as index.html

**single.html**: Individual post — back link, category, title, author card, featured image, `.Content` with blog-content class, tags, related posts.

**post-card.html**: Glass-panel card with image, category, title, excerpt, author avatar.

### Blog Content
3 posts with 600-1000 words of realistic IoT content (see PAGE sections above for frontmatter).

### blog.css
Prose-like styles for `.blog-content` — headings, paragraphs, code blocks, blockquotes, lists, links, images. All matching the dark theme.

---

## 🚀 GITHUB ACTIONS (`.github/workflows/deploy.yml`)

```yaml
name: Deploy Southern IoT Platform
on:
  push:
    branches: [main]
  workflow_dispatch:
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
      - uses: actions/checkout@v4
        with: { submodules: true, fetch-depth: 0 }
      - uses: peaceiris/actions-hugo@v3
        with: { hugo-version: 'latest', extended: true }
      - name: Build Hugo Blog
        working-directory: ./blog
        run: hugo --minify
      - name: Assemble Final Site
        run: |
          mkdir -p _site
          cp -r static-site/* _site/
          mkdir -p _site/blog
          cp -r blog/public/* _site/blog/
      - uses: actions/upload-pages-artifact@v3
        with: { path: ./_site }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## ⚠️ CRITICAL RULES

1. **DO NOT modify** the `southern_iot_*` reference directories
2. **DO NOT use npm/yarn** for Tailwind — use CDN only
3. **ALL pages**: `<html class="dark" lang="en">`
4. **Use Material Symbols Outlined** for ALL icons
5. **Team avatars**: Use colored initial circles, NOT images
6. **Hugo must build standalone**: `cd blog && hugo` = no errors
7. **Every nav link must work** across all pages
8. **Blog URL is `/blog/`** — Hugo baseURL must match

## 🔧 EXECUTION ORDER

1. Create `static-site/solutions/index.html` from Stitch (update nav/footer)
2. Create `static-site/ecosystem/index.html` from Stitch (update nav/footer)
3. Create `static-site/support/index.html` from Stitch (update nav/footer)
4. Create `static-site/index.html` — Home page (new)
5. Create `static-site/about/index.html` — About Us (new)
6. Initialize Hugo in `blog/`
7. Create all Hugo layouts + partials
8. Create blog CSS
9. Write 3 blog posts
10. Create `.github/workflows/deploy.yml`
11. Create `README.md`
12. Test everything
