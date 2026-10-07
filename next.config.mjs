// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/**
// /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.classbon.com",
      },
      {
        protocol: "https",
        hostname: "minio-classbon.darkube.app.com",
      },
    ],
  },
};

export default nextConfig;
