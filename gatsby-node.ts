import type { GatsbyNode } from "gatsby";
import { slugify } from "./src/utils/helpers";

const path = require("path");

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postPage = path.resolve("./src/templates/post.tsx");
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
                slug
              }
            }
          }
        }
      }
    `
  );

  const posts = result.data.allMarkdownRemark.edges;

  const tagSet = new Set();
  const categorySet = new Set();

  posts.forEach((post, i) => {
    const prev = i === posts.length - 1 ? null : posts[i + 1].node;
    const next = i === 0 ? null : posts[i - 1].node;

    if (post.node.frontmatter.tags) {
      post.node.frontmatter.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    createPage({
      path: post.node.frontmatter.slug,
      component: postPage,
      context: {
        slug: post.node.frontmatter.slug,
        prev,
        next,
      },
    });
  });

  const tagList = Array.from(tagSet);
  tagList.forEach((tag) => {
    createPage({
      path: `/tags/${slugify(tag)}`,
      component: tagPage,
      context: {
        tag,
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

exports.createPages = createPages;
exports.onCreateNode = createNode;
