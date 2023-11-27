module.exports = {
  community: [
    'support',
    'about',
    {
      type: 'category',
      label: 'Contributing',
      link: {
        type: 'doc',
        id: 'contributing/contributing',
      },
      collapsed: false,
      items: [
        'contributing/issues',
        'contributing/development',
        'contributing/pull-request',
        'contributing/plugins',
        'contributing/translation',
        'contributing/how-to-release',
      ],
    },
    {
      type: 'link',
      href: 'https://github.com/apache/incubator-answer/issues',
      label: 'Feature Request',
    },
    {
      type: 'link',
      href: 'https://github.com/orgs/apache/projects/301',
      label: 'Roadmap',
    },
  ],
};
