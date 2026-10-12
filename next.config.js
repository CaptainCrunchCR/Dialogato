/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // Import .properties translation files as raw strings at build time
    config.module.rules.push({ test: /\.properties$/, type: "asset/source" });
    return config;
  },
};

module.exports = nextConfig;
