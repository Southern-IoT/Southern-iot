# Southern IoT Digital Platform

Production-ready multi-page website for Southern IoT with static pages, a product catalog, and a static blog page called **The Edge Feed**.

## Structure

- `static-site/` contains the Home, About, Solutions, Products, Ecosystem, Blog, and Support pages.
- `blog/` contains a Hugo version staged for a later migration, but deployment currently serves `static-site/blog/`.
- `.github/workflows/deploy.yml` assembles the static site and deploys to GitHub Pages.
- `southern_iot_*` directories are Stitch references and are left unmodified.

## Local Development

Open `static-site/index.html` directly for the static pages, or serve the folder locally to test routes like `/blog/`:

```bash
python -m http.server 4173 --directory static-site
```

## GitHub Pages

The site is configured for the `ayman546525-boop/southern-website` GitHub Pages path.

## Routes

- `/` Home
- `/about/` About Us
- `/solutions/` Solutions
- `/products/` Product Catalog
- `/ecosystem/` Ecosystem
- `/blog/` The Edge Feed
- `/support/` Support
