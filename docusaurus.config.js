// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Avesha Docs',
  tagline: 'Avesha Open Source Documentation',
  url: 'https://docs.avesha.io',
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
          lastVersion: '0.2.0',
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
            '0.2.0':{
              label: '0.2.0',
              path: '0.2.0',
              banner: 'none'
            }
          }
        },
        blog: false,
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
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
      // The application ID provided by Algolia
        appId: 'HCZPZKPV7',

        // Public API key: it is safe to commit it
        apiKey: '82399216c0fe06bfa662affa5d2fbf46',

        indexName: 'avesha',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
    },
    }),
};

module.exports = config;
