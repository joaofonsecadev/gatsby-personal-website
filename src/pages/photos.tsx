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
            <div className="photo-gallery">
              {data.allFile.edges.map((photo) => {
                const image = getImage(
                  photo.node.childImageSharp.gatsbyImageData
                );
                let setPortrait;
                if (image.width / image.height < 1)
                  setPortrait = { width: "50%" };
                return (
                  <div
                    key={photo.node.name}
                    className="photo-element"
                    style={setPortrait}
                  >
                    <GatsbyImage image={image} alt="eu" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export const pageQuery = graphql`
  query PhotosQuery {
    allFile(
      filter: { relativeDirectory: { eq: "photos" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
