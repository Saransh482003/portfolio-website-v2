import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/projects', destination: '/#systems', permanent: true },
      { source: '/learn', destination: '/#teardowns', permanent: true },
      { source: '/about', destination: '/#pedigree', permanent: true },
      { source: '/contact', destination: '/#dispatch', permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
