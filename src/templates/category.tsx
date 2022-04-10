import React from "react";
import { graphql } from "gatsby";

export default function Article({ data, pageContext }) {
  const { category } = pageContext;
  const { totalCount } = data.allMarkdownRemark;

  console.log(totalCount);

  return (
    <article>
      <header>
        <div className="container">
          <h1>{category}</h1>
          <p className="description">What are you doing here?</p>
        </div>
      </header>
    </article>
  );
}

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            categories
            slug
          }
        }
      }
    }
  }
`;
