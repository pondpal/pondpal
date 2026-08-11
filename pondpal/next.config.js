/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'pondpal.space' }],
        destination: 'https://www.pondpal.space/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'pondpal.vercel.app' }],
        destination: 'https://www.pondpal.space/:path*',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
