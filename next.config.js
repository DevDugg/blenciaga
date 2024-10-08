/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "store.baggashe.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
