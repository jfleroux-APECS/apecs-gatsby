import React from "react";
import "./articleassociation.scss";
import parse from "html-react-parser";
import SocialMedia from "../social-media/SocialMedia";
import replaceWPCss from "../../utils/ReplaceWPCss";

export default function ArticleAssociation(props) {
  return (
    <div id={props.id} className="container article-container">
      <article className="notification article-background mt-5">
        <div className="columns">
          /*<div className="column">
            <h2 className="title">{parse(props.title)}</h2>
          </div>
          */
          <div>
            <h2 className="thiblayout">{parse(props.title)}</h2>
          </div>
          <div className="column has-text-right">
            <SocialMedia title={props.title}></SocialMedia>
          </div>
        </div>
        {parse(replaceWPCss(props.content))}
      </article>
    </div>
  );
}
