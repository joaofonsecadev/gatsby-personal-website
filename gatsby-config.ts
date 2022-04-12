/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
import type { GatsbyConfig } from "gatsby";

const path = require("path");
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

const config: GatsbyConfig = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: ["gatsby-remark-autolink-headers"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `./content/articles`,
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "articles",
        engine: "flexsearch",
        engineOptions: {
          encode: "icase",
          tokenize: "forward",
          async: false,
        },
        query: `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              filter: {frontmatter: {public: {eq: "true"}}}
            ) {
              nodes {
                id
                frontmatter {
                  title
                  tags
                  hiddenTags
                  categories
                  slug
                  date(formatString: "MMMM DD, YYYY")
                }
                rawMarkdownBody
              }
            }
          }
        `,
        ref: "id",
        index: ["title", "tags", "hiddenTags", "categories"],
        store: [
          "id",
          "slug",
          "title",
          "tags",
          "date",
          "hiddenTags",
          "categories",
        ],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map((node) => ({
            id: node.id,
            slug: node.frontmatter.slug,
            title: node.frontmatter.title,
            body: node.rawMarkdownBody,
            tags: node.frontmatter.tags,
            date: node.frontmatter.date,
            hiddenTags: node.frontmatter.hiddenTags,
            categories: node.frontmatter.categories,
          })),
      },
    },
  ],
};

export default config;