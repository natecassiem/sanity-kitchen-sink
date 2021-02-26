export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6038c4f631fa24ac1a7d46c7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xejg75sd',
                  apiId: '7502629c-4459-43a1-b80c-affd852606c6'
                },
                {
                  buildHookId: '6038c4f6061515a6de6adbf0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ukx56taw',
                  apiId: 'f74e2d4b-f276-47c4-b710-02d89aaefbc1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/natecassiem/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ukx56taw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
