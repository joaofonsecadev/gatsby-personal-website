import { graphql } from "gatsby";
import React, { useMemo } from "react";
import Helmet from "react-helmet";
import Search from "../components/Search";
import SiteConfig from "../utils/config";
import { getSimplifiedPosts } from "../utils/helpers";

export default function Articles({ data }) {
  const posts = data.allMarkdownRemark.edges;
  const simplePosts = useMemo(() => getSimplifiedPosts(posts), [posts]);

  return (
    <>
      <Helmet title={`Articles - ${SiteConfig.title}`} />
      <article className="blog-page">
        <header>
          <div className="container">
            <h1>Articles</h1>
            <p className="description">
              Whatever I feel like writting. You may find tutorials, technical
              analysis, reviews of various types of content, etc.
            </p>
          </div>
        </header>
        <section>
          <div className="container">
            <Search data={simplePosts} showYears />
          </div>
        </section>
      </article>
    </>
  );
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { public: { eq: "true" } } }
    ) {
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
