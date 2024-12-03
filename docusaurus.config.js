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
      "./plugins/blog-plugin",
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
        redirects: [
          {
            to: '/community/support',
            from: ['/contact', '/community'],
          },
          {
            to: '/community/team',
            from: '/community/about',
          },
          {
            to: '/docs/development',
            from: '/community/development',
          },
          {
            to: '/docs/development/plugins',
            from: '/community/plugins'
          },
          {
            to: '/docs/development/plugins/plugin-config',
            from: '/community/plugins/plugin-config'
          },
          {
            to: '/docs/development/plugins/plugin-translation',
            from: '/community/plugins/plugin-translation',
          },
          {
            to: "/blog/answer-1.0.9-release",
            from: "/blog/2023/05/11/answer-1.0.9-release"
          },
          {
            to: "/blog/what-is-q-and-a-platform-and-how-to-use-it",
            from: "/blog/2023/05/12/what-is-q-and-a-platform-and-how-to-use-it"
          },
          {
            to: "/blog/how-to-use-answer-for-effective-knowledge-retention",
            from: "/blog/2023/05/16/how-to-use-answer-for-effective-knowledge-retention"
          },
          {
            to: "/blog/why-open-source-is-the-essence-of-answer",
            from: "/blog/2023/05/23/why-open-source-is-the-essence-of-answer"
          },
          {
            to: "/blog/everything-you-need-to-know-about-knowledge-base",
            from: "/blog/2023/05/30/everything-you-need-to-know-about-knowledge-base"
          },
          {
            to: "/blog/answer-1.1.0-release",
            from: "/blog/2023/06/15/answer-1.1.0-release"
          },
          {
            to: "/blog/how-to-improve-knowledge-sharing-with-answer",
            from: "/blog/2023/06/20/how-to-improve-knowledge-sharing-with-answer"
          },
          {
            to: "/blog/everything-you-need-to-know-about-answer",
            from: "/blog/2023/06/29/everything-you-need-to-know-about-answer"
          },
          {
            to: "/blog/how-to-build-a-help-center-with-your-users-and-answer",
            from: "/blog/2023/07/05/how-to-build-a-help-center-with-your-users-and-answer"
          },
          {
            to: "/blog/the-what-why-using-tags-for-online-community",
            from: "/blog/2023/07/11/the-what-why-using-tags-for-online-community"
          },
          {
            to: "/blog/how-to-utilize-reputation-and-privilege-in-online-community",
            from: "/blog/2023/07/19/how-to-utilize-reputation-and-privilege-in-online-community"
          },
          {
            to: "/blog/why-the-answer-plugin-system-was-designed-this-way",
            from: "/blog/2023/07/22/why-the-answer-plugin-system-was-designed-this-way"
          },
          {
            to: "/blog/how-to-manage-content-system-efficiently-with-answer",
            from: "/blog/2023/08/09/how-to-manage-content-system-efficiently-with-answer"
          },
          {
            to: "/blog/build-your-online-community-like-the-pros-with-answer",
            from: "/blog/2023/09/14/build-your-online-community-like-the-pros-with-answer"
          },
          {
            to: "/blog/celebrate-answer-first-anniversary-with-hacktoberfest-2023",
            from: "/blog/2023/09/27/celebrate-answer-first-anniversary-with-hacktoberfest-2023"
          },
          {
            to: "/blog/answer-enters-apache-incubator",
            from: "/blog/2023/10/24/answer-enters-apache-incubator"
          },
          {
            to: "/blog/answer-turns-one-and-is-now-apache-answer",
            from: "/blog/2023/10/31/answer-turns-one-and-is-now-apache-answer"
          },
          {
            to: "/blog/a-new-chapter-begins-answer-first-apache-release-launches",
            from: "/blog/2023/12/07/a-new-chapter-begins-answer-first-apache-release-launches"
          },
          {
            to: "/blog/behind-the-scene-how-we-launched-the-first-apache-release",
            from: "/blog/2023/12/13/behind-the-scene-how-we-launched-the-first-apache-release"
          },
          {
            to: "/blog/answer-1.2.1-ask-better-find-better",
            from: "/blog/2024/01/08/answer-1.2.1-ask-better-find-better"
          },
          {
            to: "/blog/first-contribution-come-to-answer",
            from: "/blog/2024/01/25/first-contribution-come-to-answer"
          },
          {
            to: "/blog/deploy-answer-https",
            from: "/blog/2024/01/26/deploy-answer-https"
          },
          {
            to: "/blog/must-read-notes-for-your-first-answer-contribution",
            from: "/blog/2024/02/04/must-read-notes-for-your-first-answer-contribution"
          },
          {
            to: "/blog/project-ideas-for-google-summer-of-code-2024",
            from: "/blog/2024/02/05/project-ideas-for-google-summer-of-code-2024"
          },
          {
            to: "/blog/answer-1.2.5-is-ready",
            from: "/blog/2024/02/20/answer-1.2.5-is-ready"
          },
          {
            to: "/blog/meet-our-release-manager-linkinstars",
            from: "/blog/2024/03/18/meet-our-release-manager-linkinstars"
          },
          {
            to: "/blog/what-is-new-in-apache-answer-1.3.0",
            from: "/blog/2024/04/26/what-is-new-in-apache-answer-1.3.0"
          },
          {
            to: "/blog/answer-ospp-2024",
            from: "/blog/2024/05/09/answer-ospp-2024"
          },
          {
            to: "/blog/build-a-save-and-respectful-community-with-answer-1.3.1",
            from: "/blog/2024/05/28/build-a-save-and-respectful-community-with-answer-1.3.1"
          },
          {
            to: "/blog/install-and-run-apache-answer-on-ubuntu-vps",
            from: "/blog/2024/06/03/install-and-run-apache-answer-on-ubuntu-vps"
          },
          {
            to: "/blog/apache-answer-joined-first-alc-hangzhou-meetup",
            from: "/blog/2024/06/05/apache-answer-joined-first-alc-hangzhou-meetup"
          },
          {
            to: "/blog/how-to-search-like-a-pro-in-answer",
            from: "/blog/2024/06/20/how-to-search-like-a-pro-in-answer"
          },
          {
            to: "/blog/answer-recap-june",
            from: "/blog/2024/07/01/answer-recap-june"
          },
          {
            to: "/blog/how-to-package-and-deploy-answer-plugins",
            from: "/blog/2024/07/02/how-to-package-and-deploy-answer-plugins"
          },
          {
            to: "/blog/answer-1.3.5-release",
            from: "/blog/2024/07/03/answer-1.3.5-release"
          },
          {
            to: "/blog/apache-answer-coc-asia-2024",
            from: "/blog/2024/07/11/apache-answer-coc-asia-2024"
          },
          {
            to: "/blog/answer-recap-july",
            from: "/blog/2024/08/01/answer-recap-july"
          },
          {
            to: "/blog/reflection-and-tips-for-your-next-open-source-events",
            from: "/blog/2024/08/14/reflection-and-tips-for-your-next-open-source-events"
          },
          {
            to: "/blog/answer-1.3.6-release",
            from: "/blog/2024/08/15/answer-1.3.6-release"
          },
          {
            to: "/blog/apache-answer-frontend-configuration-guide",
            from: "/blog/2024/08/16/apache-answer-frontend-configuration-guide"
          },
          {
            to: "/blog/apache-answer-backend-configuration-guide",
            from: "/blog/2024/08/20/apache-answer-backend-configuration-guide"
          },
          {
            to: "/blog/guide-to-add-answer-plugins",
            from: "/blog/2024/08/22/guide-to-add-answer-plugins"
          },
          {
            to: "/blog/answer-recap-august",
            from: "/blog/2024/09/02/answer-recap-august"
          },
          {
            to: "/blog/behind-the-plugin-meet-the-student-contributors",
            from: "/blog/2024/09/11/behind-the-plugin-meet-the-student-contributors"
          },
          {
            to: "/blog/answer-1.4.0-release",
            from: "/blog/2024/09/29/answer-1.4.0-release"
          },
          {
            to: "/blog/answer-recap-sept",
            from: "/blog/2024/10/01/answer-recap-sept"
          },
          {
            to: "/blog/answer-recap-october",
            from: "/blog/2024/11/04/answer-recap-october"
          },
          {
            to: "/blog/how-release-managers-make-the-release-process-productive",
            from: "/blog/2024/11/13/how-release-managers-make-the-release-process-productive"
          },
          {
            to: "/blog/lufei-asf-journey-from-contributor-to-ppmc-member",
            from: "/blog/2024/11/22/lufei-asf-journey-from-contributor-to-ppmc-member"
          },
          {
            to: "/blog/apache-answer-1.4.1-release",
            from: "/blog/2024/11/27/apache-answer-1.4.1-release"
          }
        ],
      },
    ],
  ],
};

module.exports = config;
