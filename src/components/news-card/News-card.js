import React from "react";
import "./news-card.scss";
import { GatsbyImage } from "gatsby-plugin-image";

function NewsCard(props) {
  const featuredImage = {
    fluid:
      props.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: props.featuredImage?.node?.alt || ``,
  };

  return (
    <div className="card block-transformation m-4 ">
      <div className="card-image">
        {featuredImage?.fluid && (
          <GatsbyImage
            image={featuredImage.fluid}
            alt={featuredImage.alt}
            className="image is-3by2"
          />
        )}
      </div>
      <div className="card-content">
        <p className="title is-size-5 is-centered">{props.title}</p>
        <p className="subtitle is-size-6">{props.sousTitre}</p>
      </div>
    </div>
  );
}

export default NewsCard;
