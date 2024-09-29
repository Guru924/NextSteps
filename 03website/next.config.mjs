/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'soliloquywp.com',
          },
        ],
      },
};

export default nextConfig;
