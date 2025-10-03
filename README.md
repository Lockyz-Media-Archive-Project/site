# Lockyz Media Archive — Next.js Conversion

This repository is a converted Next.js version of the original static site.

What I changed
- Added a minimal Next.js scaffold (pages, components, styles).
- Copied the original `css/styles.css` into `styles/globals.css` and imported it in `pages/_app.js`.
- Created routes for the index, a games listing at `/games`, dynamic game pages at `/games/[slug]`, and a custom 404 page.

Quick start (Windows PowerShell)

1. Install dependencies:

   npm install

2. Run the development server:

   npm run dev

3. Open http://localhost:3000 in your browser.

Notes & manual steps
- Static assets (images, favicon, Template screenshots, game screenshots) should be moved into the Next.js `public/` directory. For example:

  public/images/favicon.png
  public/Template/screenshots/screen1.jpg

- I left original files in place — consider removing or moving them once you confirm the Next app works.
- The download links and some pages are placeholders. You may want to wire them to real assets or downloads.

Next steps (recommended)
- Move the `images/` and `Template/screenshots/` folders into `public/` so image paths like `/Template/screenshots/screen1.jpg` work correctly.
- Replace placeholder download links with actual files in `public/` and update the `pages/games/[slug].js` page to point to them.
- Add meta tags and improve accessibility as needed.
# Cloudflare Workers / Pages deployment

This project is configured to output a fully static site using Next's export feature which produces a folder suitable for deploying to Cloudflare Pages or Cloudflare Workers Sites.

Basic steps to create a static export and deploy:

1. Build and export static files:

   npm run export

   The exported static files will be in the `out/` directory.

2. Deploy to Cloudflare Pages:

   - In Cloudflare Pages, create a new project and connect your repository.
   - Set the build command to `npm run export` and the build output directory to `out`.

3. Deploy to Cloudflare Workers Sites (optional):

   - Use `wrangler` to upload the `out/` folder to Workers Sites. Example: `wrangler pages publish out` (you'll need Wrangler v2 configured and authenticated).

Notes
- Because the app is exported statically, any dynamic server-only logic must be adapted (for example, replace server APIs with client-side fetches or Cloudflare Workers endpoints).
- Ensure all image and static asset references point to files under `public/` before exporting.

Template changes


The project now uses a centralized `Layout` component which acts as the site's template. `Layout` includes `Head` metadata, the `Navbar` and the `Footer` components so individual pages no longer include duplicated nav or footer HTML. This structure is compatible with static exports for Cloudflare.

Cleaning original HTML files

The original `.html` files have been removed from the repository to avoid duplication; the site is now served from the Next.js pages. Screenshots and the favicon were moved/copied into `public/` under:

- `public/screenshots/<slug>/` (one directory per game)
- `public/images/favicon.png`

If you'd like a backup, I can move the removed HTML files into an `archive/` folder instead of deleting them. Let me know.

# site