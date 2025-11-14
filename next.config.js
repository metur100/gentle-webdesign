/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'upload.wikimedia.org',
      'modelviewer.dev',
      'cdn.readyplayer.me',
      'models.readyplayer.me',
      // Add any other domains you need for images
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'modelviewer.dev',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.readyplayer.me',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'models.readyplayer.me',
        pathname: '**',
      },
    ],
  },
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig