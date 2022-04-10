import type { GatsbyNode } from "gatsby";

const path = require("path");

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const articlePage = path.resolve("./src/templates/article.tsx");
  const categoryPage = path.resolve("./src/templates/category.tsx");
  const tagPage = path.resolve("./src/templates/tag.tsx");

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { public: { eq: "true" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                tags
                categories
                slug
              }
            }
          }
        }
      }
    `
  );

  const articles = result.data.allMarkdownRemark.edges;

  const tagSet = new Set();
  const categorySet = new Set();

  articles.forEach((article, i) => {
    const prev = i === articles.length - 1 ? null : articles[i + 1].node;
    const next = i === 0 ? null : articles[i - 1].node;

    if (article.node.frontmatter.tags) {
      article.node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    if (article.node.frontmatter.categories) {
      article.node.frontmatter.categories.forEach((category) => {
        categorySet.add(category);
      });
    }

    createPage({
      path: article.node.frontmatter.slug,
      component: articlePage,
      context: {
        slug: article.node.frontmatter.slug,
        prev,
        next,
      },
    });
  });

  const tagList = Array.from(tagSet);
  tagList.forEach((tag) => {
    createPage({
      path: `/tag/${slugify(tag)}`,
      component: tagPage,
      context: {
        tag,
      },
    });
  });

  const categoryList = Array.from(categorySet);
  categoryList.forEach((category) => {
    createPage({
      path: `/category/${slugify(category)}`,
      component: categoryPage,
      context: {
        category,
      },
    });
  });
};

const createNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  let slug;
  if (node.internal.type === "MarkdownRemark") {
    if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
      slug = `${node.frontmatter.slug}`;

      createNodeField({
        name: "slug",
        node,
        value: slug,
      });
    }
  }
};

function slugify(inString: String) {
  const newString = inString.replace(" ", "-");
  return newString.toLowerCase();
}

exports.createPages = createPages;
exports.onCreateNode = createNode;
