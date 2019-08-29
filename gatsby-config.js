module.exports = {
  siteMetadata: {
    title: "Portfolio",
    description: "My personal junior frontend-developer porfolio",
    author: '@anmud',
  
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/pages/img`,
        }
        },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: `${__dirname}/src/pages/project`,
        },
      },
      {
        "resolve": `gatsby-transformer-remark`,
        "options": {
          "excerpt_separator": `<!-- end -->`
        }
      },
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
     `gatsby-plugin-postcss`,
     `gatsby-plugin-react-helmet`,
     `gatsby-transformer-screenshot`
    
     
    
  ],
}

