import React from "react";
import { graphql } from "gatsby";

export default function Article({ data }) {
  const article = data.markdownRemark;
  const { /* tags, */ title /* , date */ } = article.frontmatter;

  return (
    <article>
      <header>
        <div className="container">
          <h1>{title}</h1>
          <p className="description">What are you doing here?</p>
        </div>
      </header>
    </article>
  );
}

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        slug
        categories
      }
    }
  }
`;
