// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Avesha Docs',
  tagline: 'Avesha Open Source Documentation',
  url: 'https://kubeslice.io',
  baseUrl: '/documentation/open-source/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/kubeslice.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kubeslice', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kubeslice/docs/tree/master/',
          routeBasePath: '/',
          includeCurrentVersion: false,
          lastVersion: '0.3.0',
          versions:{

            /***
             * 
             *  version: {
             *      label: <Version Label>
             *      path: <Version lable to be shown in url>
             *      banner: 
             *            1) none
             *            2) unreleased
             *            3) unmaintained 
             * }
             * 
             */
             '0.3.0':{
              label: '0.3.0',
              path: '0.3.0',
              banner: 'none'
            },
            '0.2.0':{
              label: '0.2.0',
              path: '0.2.0',
              banner: 'none'
            }
          }
        },
        blog: {
          path: 'blog',
          // Simple use-case: string editUrl
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          // Advanced use-case: functional editUrl
          editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
            `https://github.com/kubeslice/docs/tree/master/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogTitle: 'Blog title',
          blogDescription: 'Blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 'ALL',
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: true,
          feedOptions: {
            type: 'rss',
            title: '',
            description: '',
            copyright: '',
            language: 'en',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'KubeSlice',
        logo: {
          alt: 'KubeSlice logo',
          src: 'img/kubeslice-logo.svg',
          srcDark: 'img/kubeslice-logo-bg.svg',
        },
        items: [
          {
            type : 'docsVersionDropdown',
            position: 'right'
          },
          {
            href: 'https://github.com/kubeslice',
            label: 'GitHub',
            position: 'right',
          },
		  {
			to: 'blog',
			label: "Blog",
			position: "left",
		  },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
      },
      algolia: {
      // The application ID provided by Algolia
        appId: 'HCZPZKPV7K',

        // Public API key: it is safe to commit it
        apiKey: '07cc26575616425e88d3dc1f38c8fc91',

        indexName: 'avesha',

        // Optional: see doc section below
        contextualSearch: false,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        //searchPagePath: 'search',

        //... other Algolia params
    },
    }),
};

module.exports = config;
