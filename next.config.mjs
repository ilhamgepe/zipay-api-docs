import nextra from "nextra";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
});

export default withNextra({
  ...nextConfig,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
});
