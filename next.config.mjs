/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30, // Set the stale time for dynamic pages to 30 seconds
    },
  },
  serverExternalPackages: ["@node-rs/argon2"], // Include native package
  images: {
    domains: ["fileinfo.com"], // Add the domain you need to whitelist
  },
  rewrites: async () => {
    return [
      {
        source: "/hashtag/:tag", // Match the hashtag route
        destination: "/search?q=%23:tag", // Redirect to the search route with the hashtag query
      },
      {
        source: "/api/:path*", // Proxy to backend
        destination: "http://localhost:5000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
