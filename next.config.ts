import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages (https://bahaa-eddine.github.io).
 * `npm run build` writes the whole site to ./out, which the GitHub Actions
 * workflow (.github/workflows/deploy.yml) publishes on every push to main.
 *
 * GitHub Pages serves plain files, so there is no server-side image
 * optimisation, redirects or custom headers: images are pre-optimised in
 * /public, and old routes (/research, /resume) are small redirect pages.
 */
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
