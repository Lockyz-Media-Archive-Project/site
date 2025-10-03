// Simple Cloudflare Worker to inject header/footer HTML into HTML responses
// Useful if you want to update header/footer without rebuilding the Next site.

const HEADER_HTML = `<nav class="navbar">[Injected Navbar] <a href="/">Home</a></nav>`;
const FOOTER_HTML = `<footer class="footer">[Injected Footer] &copy; ${new Date().getFullYear()}</footer>`;

addEventListener('fetch', event => {
  event.respondWith(handle(event.request));
});

async function handle(request) {
  const res = await fetch(request);
  const ct = res.headers.get('content-type') || '';
  if (!ct.includes('text/html')) return res;

  let html = await res.text();
  // Replace our markers if present
  html = html.replace('<!-- HEADER_MARKER -->', HEADER_HTML);
  html = html.replace('<!-- FOOTER_MARKER -->', FOOTER_HTML);

  const headers = new Headers(res.headers);
  headers.set('content-type', 'text/html; charset=utf-8');
  headers.delete('content-length');
  return new Response(html, { status: res.status, headers });
}
