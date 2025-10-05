import dotenv from 'dotenv';
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SITE_TITLE: process.env.SITE_TITLE,
    ANNOUNCEMENTS_URL: process.env.ANNOUNCEMENTS_URL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    ENABLE_ADMIN: process.env.ENABLE_ADMIN,
    SHOW_ANNOUNCEMENTS: process.env.SHOW_ANNOUNCEMENTS,
  },
};

export default nextConfig;
