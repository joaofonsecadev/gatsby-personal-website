import React from "react";
import { graphql, Link } from "gatsby";
import { slugify } from "../utils/helpers";

export default function Post({ data }) {
  const post = data.markdownRemark;
  const { tags, title, date } = post.frontmatter;
  tags.sort();

  return (
    <article>
      <header>
        <div className="container">
          <div className="post-details">
            Written by <Link to="/about">João Fonseca</Link> on{" "}
            <time>{date}</time>
          </div>
          <h1>{title}</h1>
          <div className="post-meta">
            {tags && (
              <div className="tags">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/tags/${slugify(tag)}`}
                    className={`tag-${tag}`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
      <div
        id={post.frontmatter.slug}
        className="container post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}

export const pageQuery = graphql`
  query postBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        slug
      }
    }
  }
`;
