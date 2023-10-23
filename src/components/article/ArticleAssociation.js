import React from "react";
import "./articleassociation.scss";
import parse from "html-react-parser";
import replaceWPCss from "../../utils/ReplaceWPCss";
import background from "../../images/missions-background.png";

export default function ArticleAssociation(props) {
  return (
    <div>
      <div className="banner">
        <img src={background} />
      </div>
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
