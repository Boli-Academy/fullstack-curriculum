module.exports = {
  siteMetadata: {
    title: "Javascript Fullstack Curriculum",
    subtitle: "From zero to a JS fullstack engineer",
    description:
      "Your path to becoming a JS fullstack engineer, starting from zero",
    keywords: [
      "this is",
      "a list of keywords and phrase",
      "that search engines",
      "will index your page for"
    ]
  },
  pathPrefix: "/fullstack-curriculum", // if you're using GitHub Pages, put the name of the repo here with a leading slash
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    }
  ]
};
