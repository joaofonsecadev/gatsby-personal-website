import React, { useMemo } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import PostList from "../components/PostList";
import { getSimplifiedArticles } from "../utils/helpers";
import config from "../utils/config";

export default function Article({ data, pageContext }) {
  const { tag } = pageContext;
  const articles = data.allMarkdownRemark.edges;
  const { totalCount } = data.allMarkdownRemark;
  const simplifiedArticles = useMemo(
    () => getSimplifiedArticles(articles),
    [articles]
  );

  return (
    <>
      <Helmet title={`Tag: ${tag} ${config.titleSep}`} />
      <article>
        <header>
          <div className="container">
            <h1>
              <span>Articles tagged</span>{" "}
              <span className="primary-underline">{tag}</span>
            </h1>
            <p className="description">
              <span className="count bright">{totalCount}</span>
              {totalCount === 1 ? " article found" : " articles found"}
            </p>
          </div>
        </header>
        <section className="container">
          <PostList data={simplifiedArticles} />
        </section>
      </article>
    </>
  );
}

export const pageQuery = graphql`
  query TagPage($tag: String = "book review") {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] }, public: { eq: "true" } } }
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
