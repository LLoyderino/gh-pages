module.exports = {
  siteMetadata: {
    siteUrl: "https://lloyderino.github.io",
    title: "lloyderino.github.io",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@layouts": "src/components/layouts/index",
          "@atoms": "src/components/atoms/index",
        },
        extensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
      },
    },
  ],
};
