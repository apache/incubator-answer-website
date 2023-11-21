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
        {
          type: 'category',
          label: 'Development',
          link: {
            type: 'doc',
            id: 'contributing/development',
          },
          collapsed: true,
          items: [
            'contributing/backend',
            'contributing/frontend',
            'contributing/development',
            'contributing/plugins',
          ],
        },
        'contributing/pull-request',
        'contributing/plugins',
      ],
    },
    'how-to-release',
    {
      type: 'link',
      href: 'https://meta.answer.dev',
      label: 'Feature Request',
    },
    {
      type: 'link',
      href: 'https://github.com/orgs/apache/projects/301',
      label: 'Roadmap',
    },
  ],
};
