require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "YESInspired Events",
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
