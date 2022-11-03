import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SiteConfig from "../utils/config";

export default function Photos({ data }) {
  return (
    <>
      <Helmet title={`Photos ${SiteConfig.titleSep}`} />
      <article className="blog-page">
        <header>
          <div className="container">
            <h1>Photography</h1>
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
                    <a
                      href={image?.images.fallback?.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GatsbyImage image={image} alt="eu" />
                    </a>
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
