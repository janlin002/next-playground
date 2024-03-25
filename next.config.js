/** @type {import('next').NextConfig} */

// import { plugins } from './build/plugins'
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  // plugins: plugins()
  i18n,
};

module.exports = nextConfig;
