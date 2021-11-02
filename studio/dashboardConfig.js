export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '61816750a790dd1e548b4bd5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-him2ff62',
                  apiId: 'a57feaf3-fc6d-4c90-adb0-5b9554e469b3'
                },
                {
                  buildHookId: '618167504f18932fc68cb01a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-42me8g82',
                  apiId: '780e1297-0bbd-4db7-b8e7-340dbbaa6009'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kathmbeck/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-42me8g82.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
