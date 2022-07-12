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
  favicon: 'img/avesha.png',

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
        title: 'Docs',
        logo: {
          alt: 'Avesha logo',
          src: 'img/avesha-big.svg',
          srcDark: 'img/avesha-big-dark.svg',
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
    }),
};

module.exports = config;
