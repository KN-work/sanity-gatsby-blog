export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8224dbb3bbc3530b041fd7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sq8xkumk',
                  apiId: 'cccd03b6-f9db-47ee-b321-3eb674a96069'
                },
                {
                  buildHookId: '5e8224dbd1774760634d3ea0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-y4i82wxb',
                  apiId: '67179bac-0097-4a70-94a1-1943fe6c5b4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KN-work/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-y4i82wxb.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
