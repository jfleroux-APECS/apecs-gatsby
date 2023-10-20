import React from "react";
import "./articleassociation.scss";
import parse from "html-react-parser";
import replaceWPCss from "../../utils/ReplaceWPCss";

export default function ArticleAssociation(props) {
  return (
    <div>
      {props.featuredImage && (
        <section
          id="hero"
          className="hero is-large background-hero"
          style={{
            background:"url(" + props.featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src + ") center center no-repeat fixed",
          }}
        >
          <div className="hero-body"></div>
        </section>
      )}
      <div className="container article-container">
        <article className="notification article-background mt-5">
          <div className="columns is-mobile has-text-centered mb-6">
            <div className="columns">
              <h2 className="titleBannerLeft">{parse(props.title)}</h2>
            </div>
          </div>
          <div className="columns is-desktop">
            {parse(replaceWPCss(props.content))}
          </div>
        </article>
      </div>
    </div>
  );
}
