# Southern IoT Digital Platform

Production-ready static website for Southern IoT with a product catalog and static blog pages.

## Structure

- `static-site/` contains the Home, About, Solutions, Products, Ecosystem, Blog, and Support pages.
- `.github/workflows/deploy.yml` assembles the static site and deploys to GitHub Pages.

## Local Development

Open `static-site/index.html` directly for the static pages, or serve the folder locally to test routes like `/blog/`:

```bash
python -m http.server 4173 --directory static-site
```

## GitHub Pages

The site is configured for GitHub Pages from the `main` branch workflow.

## Routes

- `/` Home
- `/about/` About Us
- `/solutions/` Solutions
- `/products/` Product Catalog
- `/ecosystem/` Ecosystem
- `/blog/` The Edge Feed
- `/support/` Support
