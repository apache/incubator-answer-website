// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Answer',
  tagline: 'Build Q&A Community with Answer',
  url: 'https://answer.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'answerdev', // Usually your GitHub org/user name.
  projectName: 'Answer', // Usually your repo name.

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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
        },
        blog: false,
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
            label: 'Issue',
            to: 'https://github.com/answerdev/answer/issues',
          },
          {
            label: 'Roadmap',
            to: 'https://github.com/orgs/answerdev/projects/1',
          },
          {
            label: 'Community',
            to: 'https://meta.answer.dev',
          },
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            label: 'Contact',
            to: '/contact',
          },
          {
            type: 'localeDropdown',
            className: 'bi bi-translate',
            position: 'right',
          },
          {
            className: 'bi bi-discord navbar-icon-link',
            to: 'https://discord.gg/a6PZZbfnFx',
            position: 'right',
          },
          {
            href: 'https://github.com/answerdev/answer',
            position: 'right',
            className: 'bi bi-github navbar-icon-link',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Lexend:wght@400..700&display=swap',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    // Use custom blog plugin
    [
      "./plugins/blog-plugin",
      {
        blogTitle: 'Answer Blog',
        blogDescription: 'Learn everything about Answer and leverage your Q&A community.',
        blogSidebarCount: 0,
        postsPerPage: 16,
        showReadingTime: true,
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    'docusaurus-plugin-sass',
  ],
};

module.exports = config;
