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
        {
          type: 'category',
          label: 'Development',
          collapsed: true,
          items: [
            'contributing/backend',
            'contributing/frontend',
          ],
        },
      ],
    },
    {
      type: 'link',
      href: 'https://meta.answer.dev/questions/ask?tags=feature-request',
      label: 'Feature Request',
    },
    {
      type: 'link',
      href: 'https://github.com/orgs/apache/projects/301',
      label: 'Roadmap',
    },
  ],
};
