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
        apiToken: `ff4090e95ec7f1d3330e98eda4f1b3`,
        environment: process.env.DATO_ENVIRONMENT,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
