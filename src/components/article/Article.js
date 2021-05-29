import React from "react";
import "./article.scss";
import parse from "html-react-parser";
import SocialMedia from "../social-media/SocialMedia";

export default function Article(props) {
  return (
    <div id={props.id} className="container article-container">
      <article className="notification article-background mt-5">
        <div className="columns">
          <div className="column">
            <h2 className="title">{parse(props.title)}</h2>
          </div>
          <div className="column has-text-right">
            <SocialMedia title={props.title}></SocialMedia>
          </div>
        </div>
        {parse(props.content)}
      </article>
    </div>
  );
}
