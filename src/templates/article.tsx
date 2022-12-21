import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import config from "../utils/config";
import { slugify } from "../utils/helpers";

export default function Article({ data }) {
  const article = data.markdownRemark;
  const { tags, title, date } = article.frontmatter;
  tags.sort();

  return (
    <>
      <Helmet title={`${title} ${config.titleSep}`} />
      <article>
        <header>
          <div className="container post-details-title">
            <div className="post-details">
              Published on <time>{date}</time>
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
          id={article.frontmatter.slug}
          className="container post-content"
          dangerouslySetInnerHTML={{ __html: article.html }}
        />
      </article>
    </>
  );
}

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
      frontmatter: { type: { eq: "article" } }
    ) {
      html
      frontmatter {
        title
        description
        slug
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
