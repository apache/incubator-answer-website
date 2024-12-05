// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const asfLinks = [
  {to: 'https://www.apache.org', label: 'Foundation'},
  {to: 'https://www.apache.org/licenses/', label: 'License'},
  {to: 'https://www.apache.org/events/current-event.html', label: 'Events'},
  {to: 'https://www.apache.org/foundation/sponsorship.html', label: 'Sponsorship'},
  {to: 'https://privacy.apache.org/policies/privacy-policy-public.html', label: 'Privacy'},
  {to: 'https://www.apache.org/security/', label: 'Security'},
  {to: 'https://www.apache.org/foundation/thanks.html', label: 'Thanks'},
];
const redirectPaths = require('./redirects.js');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache Answer',
  tagline: 'Build Q&A Community with Answer',
  url: 'https://answer.apache.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'apache', // Usually your GitHub org/user name.
  projectName: 'incubator-answer', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      'zh-CN': {
        label: '简体中文',
        direction: 'ltr',
      },
    }
  },

  markdown: {
    // mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            if (locale !== 'en') {
              return `https://crowdin.com/project/answer-website/zh-CN`;
            }
            return `https://github.com/apache/incubator-answer-website/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'Free, Open-source, Q&A Platform, Knowledge Sharing Platform, Community Forum, Knowledge Base, Developer Hub, Support Center'},
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'ALIEPVY5A0',
        apiKey: 'a7f83132b511548fc8fbc44f83239bf9',
        indexName: 'answer',
        container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',
        debug: true
      },
      navbar: {
        logo: {
          alt: 'Answer Logo',
          src: 'img/logo.svg',
        },
        style: 'primary',
        items: [
          {
            label: 'Docs',
            to: '/docs',
          },
          {
            label: 'Plugins',
            to: '/plugins',
          },
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            label: 'Download',
            to: '/download',
          },
          {
            type: 'dropdown',
            label: 'Community',
            to: 'community/support',
            items: [
              {
                label: 'Support',
                to: 'community/support',
              },
              {
                label: 'Q&A Community',
                to: 'https://meta.answer.dev',
              },
              {
                label: 'Team',
                to: 'community/team',
              },
              {
                label: 'Security',
                to: 'community/security',
              },
              {
                label: 'Contributing',
                to: 'community/contributing',
              },
              {
                label: 'Roadmap',
                to: 'https://github.com/apache/incubator-answer/projects',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'ASF',
            to: 'https://www.apache.org/',
            items: asfLinks.map(link => ({
              label: link.label,
              to: link.to,
            })),
          },
          {
            type: 'localeDropdown',
            className: 'bi bi-translate',
            position: 'right',
          },
          {
            href: 'https://twitter.com/answerdev',
            position: 'right',
            className: 'bi bi-twitter-x navbar-icon-link',
          },
          {
            href: 'https://discord.gg/a6PZZbfnFx',
            position: 'right',
            className: 'bi bi-discord navbar-icon-link',
          },
          {
            href: 'https://github.com/apache/incubator-answer',
            position: 'right',
            className: 'bi bi-github navbar-icon-link',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'img/head-icon.png',
    }),

  stylesheets: [
    '/fonts/fonts.css',
  ],
  plugins: [
    // Use custom blog plugin
    [
      './plugins/blog-plugin',
      {
        blogTitle: 'Answer Blog',
        blogDescription: 'Learn everything about Answer and leverage your Q&A community.',
        blogSidebarCount: 0,
        postsPerPage: 16,
        showReadingTime: true,
        remarkPlugins: [math],
        editUrl: ({locale, blogDirPath, blogPath}) => {
          if (locale !== 'en') {
            return `https://crowdin.com/project/answer-website/zh-CN`;
          }
          return `https://github.com/apache/incubator-answer-website/edit/main/${blogDirPath}/${blogPath}`;
        },
      },
    ],
    'docusaurus-plugin-sass',
    // '@docusaurus/theme-mermaid',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          if (locale !== 'en') {
            return `https://crowdin.com/project/answer-website/zh-CN`;
          }
          return `https://github.com/apache/incubator-answer-website/edit/main/${versionDocsDirPath}/${docPath}`;
        },
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: redirectPaths,
      },
    ],
  ],
};

module.exports = config;
