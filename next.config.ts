import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    MICROCMS_SERVICE_DOMAIN: "gq5p1o46ck",
    MICROCMS_API_KEY: "pdbxIrmtR68VQFL1innuMNJL1QRyOhIN2cjI",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
};

export default nextConfig;
