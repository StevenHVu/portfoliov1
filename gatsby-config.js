module.exports = {
    siteMetadata: {
      title: "My Gatsby Site",
      description: "A great site built with Gatsby",
      author: "Steven Vu",
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`
    ],
  }
  