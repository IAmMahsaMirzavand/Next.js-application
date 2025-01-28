/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'dummyjson.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.dummyjson.com',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'en.wikipedia.org',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'as1.ftcdn.net',
      // },
      {
        protocol: 'https', 
        hostname: '**', 
      },
    ],
  },
};


export default nextConfig;
