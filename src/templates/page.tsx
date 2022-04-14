import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import config from "../utils/config";

export default function PageTemplate({ data }) {
  const post = data.markdownRemark;
  const { title, description, slug } = post.frontmatter;

  return (
    <>
      <Helmet
        title={`${title} - ${
          config.title
        }`}
      />

      <article id={slug}>
        <header>
          <div className="container">
            <h1>{title}</h1>
            <p className="description">{description}</p>
          </div>
        </header>

        <section
          className="container"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </>
  );
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { type: { eq: "page" } }
    ) {
      html
      frontmatter {
        title
        description
        slug
      }
    }
  }
`;
