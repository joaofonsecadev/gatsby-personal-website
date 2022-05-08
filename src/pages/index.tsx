import React, { useMemo } from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
import SEO from "../components/SEO";
import SiteConfig from "../utils/config";
import profilePicture from "../assets/pfp.jpg";
import controllerIcon from "../assets/controller.png";
import { getSimplifiedArticles } from "../utils/helpers";
import PostList from "../components/PostList";

export default function WebIndex({ data }) {
  const latest = data.latest.edges;
  const simpleLatest = useMemo(() => getSimplifiedArticles(latest), [latest]);

  return (
    <>
      <Helmet title={`${SiteConfig.title} - Game Developer`} />
      <SEO />
      <article className="hero">
        <header>
          <div className="container">
            <div className="flex-content">
              <div>
                <h1>Hey, I&apos;m João.</h1>
                <p className="subtitle small">
                  I&apos;m a game developer from Lisbon, Portugal. Currently
                  working as an Automation Test Engineer at Funcom, for the{" "}
                  <a
                    href="https://pr.funcom.com/Unannounced-Dune-survival-game"
                    target="_blank"
                    rel="noreferrer"
                  >
                    open-world survival Dune game.
                  </a>
                </p>
              </div>
              <img src={profilePicture} alt="Me" className="main-image" />
            </div>
            <p className="hero-buttons">
              <Link to="/about" className="hero-button">
                <img src={controllerIcon} alt="Me" />
                More about me
              </Link>
            </p>
          </div>
        </header>
        <div className="container">
          <h2 className="main-header">
            <span>Latest Articles</span>
            <Link to="/articles">View All</Link>
          </h2>
          <PostList data={simpleLatest} />
        </div>
      </article>
    </>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 7
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { public: { eq: "true" }, type: { eq: "article" } }
      }
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
