import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SiteConfig from "../utils/config";

export default function Photos({ data }) {
  return (
    <>
      <Helmet title={`Photos - ${SiteConfig.title}`} />
      <article className="blog-page">
        <header>
          <div className="container">
            <h1>Photography</h1>
            <p className="description">
              I invest too much time and effort in photography. Here you&apos;ll
              find the photos I think are worth sharing.
            </p>
          </div>
        </header>
        <section>
          <div className="container">
            {data.allFile.edges.map((photo) => {
              const image = getImage(
                photo.node.childImageSharp.gatsbyImageData
              );
              return (
                <GatsbyImage image={image} alt="eu" placeholder="blurred" />
              );
            })}
          </div>
        </section>
      </article>
    </>
  );
}

export const pageQuery = graphql`
  query PhotosQuery {
    allFile(filter: { relativeDirectory: { eq: "photos" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
