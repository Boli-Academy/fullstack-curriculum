module.exports = {
  siteMetadata: {
    title: "Javascript Fullstack Curriculum",
    subtitle: "From zero to a JS fullstack engineer",
    description:
      "Your path to becoming a JS fullstack engineer, starting from zero",
    keywords: [
      "Boli academy",
      "JS Fullstack curriculum",
      "JS Fullstack bootcamp"
    ]
  },
  pathPrefix: "/fullstack-curriculum",
  plugins: [
    {
      resolve: `gatsby-plugin-layout`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    {
      resolve: `gatsby-plugin-react-helmet`
    },
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
