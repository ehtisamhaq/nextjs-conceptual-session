/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
        // pathname: "/id/1408387701/photo/**",
      },
    ],
  },
  //   experimental: {
  //     ppr: true,
  //   },
};

export default nextConfig;
