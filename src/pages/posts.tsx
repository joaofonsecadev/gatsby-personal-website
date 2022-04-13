import { graphql } from "gatsby";
import React, { useMemo } from "react";
import Helmet from "react-helmet";
import Search from "../components/Search";
import SiteConfig from "../utils/config";
import { getSimplifiedposts } from "../utils/helpers";

export default function Posts({ data }) {
  const posts = data.allMarkdownRemark.edges;
  const simplePosts = useMemo(() => getSimplifiedposts(posts), [posts]);

  return (
    <>
      <Helmet title={`Posts - ${SiteConfig.title}`} />
      <article className="blog-page">
        <header>
          <div className="container">
            <h1>Posts</h1>
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
