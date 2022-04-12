import React from "react";
import { graphql } from "gatsby";

export default function Article({ data, pageContext }) {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;

  console.log(totalCount);

  return (
    <article>
      <header>
        <div className="container">
          <h1>{tag}</h1>
          <p className="description">What are you doing here?</p>
        </div>
      </header>
    </article>
  );
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            slug
          }
        }
      }
    }
  }
`;
