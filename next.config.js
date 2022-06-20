/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      process.env.MAINTENANCE_MODE === "1"
        ? {
            source: "/((?!maintenance)(?!images).*)",
            destination: "/maintenance",
            permanent: false,
          }
        : {
            source: "/maintenance",
            destination: "/",
            permanent: false,
          },
    ];
  },
};

module.exports = nextConfig;
