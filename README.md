# 111HDIP Platform

This is a Next.js project that is hosted on GitHub Pages.

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the main branch. The site will be available at:

[https://senseihaiku.github.io/111hdip-platform/](https://senseihaiku.github.io/111hdip-platform/)

## Configuration

To make this project work on GitHub Pages, the following changes were made:

1. Added `output: 'export'` to `next.config.mjs`
2. Added `basePath` for production environment in `next.config.mjs`
3. Created GitHub Actions workflow in `.github/workflows/nextjs.yml`

## Local Build

To build the site locally:

```bash
npm run build
```

The static export will be in the `out` directory.
