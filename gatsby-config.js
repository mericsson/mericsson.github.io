module.exports = {
  siteMetadata: {
    title: `Marcus Ericsson`,
    author: `Marcus Ericsson`,
    description: `Marcus Ericsson personal website.`,
    siteUrl: `https://mericsson.com`,
    social: {
      twitter: `mericsson`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
    `gatsby-plugin-react-helmet`,
  ],
};
