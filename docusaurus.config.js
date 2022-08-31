// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
console.log(process.env.DOCS_ENTRY_POINT);
/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      // Plugin / TypeDoc options
      {
        entryPoints: process.env.DOCS_ENTRY_POINT.split(','),
        tsconfig: process.env.DOCS_TS_CONFIG,
        name: 'NEAR JavaScript API',
        includeVersion: true,
        entryPointStrategy: 'expand',
        excludeNotDocumented: false,
        out: '.',
        basePath: process.env.DOCS_BASE_PATH,
        readme: process.env.DOCS_README,
        // readme: 'none',
        githubPages: true,
        hideGenerator: false,
        searchInComments: true,
        commentStyle: 'jsdoc',
        sidebar: {
          fullNames: false,
        },
        entryDocument: 'index.md',
        frontmatter: {
          pagination_prev: null,
          pagination_next: null
        },
        hideMembersSymbol: true,
      },
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexPages: false,
        indexBlog: false,
        docsRouteBasePath: ['/'],
        docsDir: ['docs'],
        language: ['en'],
      },
    ]
  ],
  title: 'NEAR JavaScript API',
  url: 'https://near.github.io/',
  baseUrl: '/near-api-js/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=Source+Code+Pro:ital,wght@0,400;0,600;1,400;1,600&display=swap',
  ],
  // GitHub pages deployment config.
  organizationName: 'near',
  projectName: 'near-api-js',
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
          routeBasePath: '/'
        },
        theme: {
          customCss: [
            require.resolve('./static/css/copy-code-button.css'),
            require.resolve('./static/css/near.min.css'),
            require.resolve('./src/css/customTheme.css'),
          ],
        },
        googleAnalytics: {
          trackingID: 'G-QSBR7X2LN9',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'NEAR JavaScript API Reference',
        logo: {
          alt: 'near-api-js',
          src: 'img/near_logo.svg',
          srcDark: 'img/near_logo_white.svg',
        },
        items: [
          // {
          //     type: 'doc',
          //     docId: 'modules',
          //     position: 'left',
          //     label: 'Exports',
          // },
          {
            href: 'https://docs.near.org/tools/near-api-js/quick-reference',
            label: '💻 Using the library',
          },
          {
            href: 'https://docs.near.org/',
            label: '📖 NEAR Docs',
          },
          {
            href: 'https://docs.near.org/api/rpc/introduction',
            label: '🔌 RPC API',
          },
          {
            href: 'https://github.com/near/near-api-js',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [],
        copyright: 'Copyright © 2022 NEAR Protocol',
        logo: {
          src: 'img/near_logo.svg',
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
