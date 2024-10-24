/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'minoos-space.sgp1.cdn',
      },
      {
        protocol: 'https',
        hostname: 'minoos-space.sgp1.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'minoos-space.sgp1.cdn.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'ap-south-1.graphassets.com',
      },
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
    ],
    unoptimized: true, // Cache images false and true means no cache
    // loader: "cloudinary",
    // path: "https://res.cloudinary.com/your-unique-account-id/",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['src'],
  },
  // headers() {
  //   return [
  //     {
  //       // Routes this applies to
  //       // source: "/api/(.*)",
  //       // for all routes
  //       source: "*",
  //       // Headers
  //       headers: [
  //         // Allow for specific domains to have access or * for all
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           // value: "*",
  //           // DOES NOT WORK
  //           // value: process.env.ALLOWED_ORIGIN,
  //           value: "https://breakingmv.com,",
  //         },
  //         // Allows for specific methods accepted
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET, POST, PUT, DELETE, OPTIONS",
  //         },
  //         // Allows for specific headers accepted (These are a few standard ones)
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value: "Content-Type, Authorization",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
