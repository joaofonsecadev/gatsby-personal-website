import React, { useMemo } from "react";
import { graphql } from "gatsby";
import PostList from "../components/PostList";
import { getSimplifiedposts } from "../utils/helpers";

export default function post({ data, pageContext }) {
  const { tag } = pageContext;
  const posts = data.allMarkdownRemark.edges;
  const { totalCount } = data.allMarkdownRemark;
  const simplifiedposts = useMemo(() => getSimplifiedposts(posts), [posts]);

  console.log(totalCount);

  return (
    <article>
      <header>
        <div className="container">
          <h1>
            <span>Posts tagged</span>{" "}
            <span className="primary-underline">{tag}</span>
          </h1>
          <p className="description">
            <span className="count bright">{totalCount}</span>
            {totalCount === 1 ? " post found" : " posts found"}
          </p>
        </div>
      </header>
      <section className="container">
        <PostList data={simplifiedposts} />
      </section>
    </article>
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
