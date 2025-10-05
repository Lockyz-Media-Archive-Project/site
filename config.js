export const config = {
  siteTitle: process.env.SITE_TITLE || "Lockyz Media Archive",
  announcementsUrl: process.env.ANNOUNCEMENTS_URL || "/data/announcements.json",
  adminPassword: process.env.ADMIN_PASSWORD || "changeme",
  enableAdmin: process.env.ENABLE_ADMIN === "true",
  showAnnouncements: process.env.SHOW_ANNOUNCEMENTS === "true",
};
