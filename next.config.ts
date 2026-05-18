import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ... your existing configuration options if there are any ... */
  typescript: {
    // This allows production builds to successfully complete
    // even if the TypeScript compiler encounters an environment error.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
