import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: process.env.GITHUB_PAGES === "true" ? "/Levion-website" : undefined,
  basePath: process.env.GITHUB_PAGES === "true" ? "/Levion-website" : undefined,
  output: "export",
};

export default nextConfig;
