/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Linting and TypeScript settings
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Supported experimental features (only include what you use)
  experimental: {
    serverActions: {}, // Use empty object (not true) to avoid config error
  },

  // ✅ Core Next.js config
  reactStrictMode: false,

  // ✅ Disable image optimization warnings
  images: {
    unoptimized: true,
  },

  // ✅ Customize allowed page extensions
  pageExtensions: ["tsx", "ts", "jsx", "js"].filter(
    (ext) => !ext.includes("spec")
  ),

  // ✅ Webpack configuration
  webpack: (config, { isServer, dev }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      sharp$: false,
      canvas$: false,
    };
    return config;
  },

  // ✅ Improve dev performance by limiting active page entries
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // ✅ Moved out of experimental in Next.js 15
  skipMiddlewareUrlNormalize: true,
};

export default nextConfig;
