import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
    distDir: 'dist',

  /* config options here */
//   plugins: [
//     dashboardTool({
//       widgets: [
//         netlifyWidget({
//             title: 'My Netlify deploys',
//             sites: [
//               {
//                 title: 'Sanity Studio',
//                 apiId: 'f3635d5f-d92d-4ede-bab0-32d5440dcf0d',
//                 buildHookId: 'https://api.netlify.com/build_hooks/6744693aa649eb271ce9fd8b',
//                 name: 'exigent upgrade',
//               },
//               {
//                 title: 'Website',
//                 apiId: 'f3635d5f-d92d-4ede-bab0-32d5440dcf0d',
//                 buildHookId: 'https://api.netlify.com/build_hooks/6744693aa649eb271ce9fd8b',
//                 name: 'exigentcapgroup',
//                 url: 'https://exigentcapgroup.netlify.app/',
//               }
//             ]
//         })
//       ]
//     })
//   ],
  images: {
		domains: ['cdn.sanity.io'],

		// loader: 'custom'
	}
};

export default nextConfig;
