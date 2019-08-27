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
          name: `src`,
          path: `${__dirname}/src`,
        },
      },
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
     'gatsby-transformer-remark',
     `gatsby-plugin-postcss`,
     `gatsby-plugin-react-helmet`,
     `gatsby-transformer-screenshot`
    
     
    
  ],
}

