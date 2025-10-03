/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // For OpenNext on Cloudflare Workers we run full Next runtime at the edge.
  // Remove static export output so Next can build normally.
  trailingSlash: true,
}

module.exports = nextConfig
