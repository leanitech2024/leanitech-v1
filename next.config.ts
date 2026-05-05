import { withContentCollections } from '@content-collections/next';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  experimental: {
    typedEnv: true,
  },
  typedRoutes: true,
  generateEtags: true,
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
    incomingRequests: true,
  },
  reactCompiler: true,

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // turbopack: {
  //   // rules: {
  //   //   '*.svg': {
  //   //     loaders: [
  //   //       {
  //   //         loader: '@svgr/webpack',
  //   //         options: {
  //   //           icon: true,
  //   //         },
  //   //       },
  //   //     ],
  //   //     as: '*.js',
  //   //   },
  //   // },
  //   // root: path.join(__dirname, '..'),
  //   rules: {
  //     '*.svg': {
  //       loaders: ['@svgr/webpack'],
  //       as: '*.js',
  //     },
  //   },
  // },
};

// export default nextConfig;
export default withContentCollections(nextConfig);
