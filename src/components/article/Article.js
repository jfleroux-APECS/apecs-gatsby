import React from "react";
import "./article.scss";
import SocialMedia from "../social-media/SocialMedia";

export default function Article(props) {
  return (
    <div id={props.id} className="container article-container">
      <article className="notification article-background mt-5">
        <div className="columns">
          <div className="column">
            <h2
              className="title"
              dangerouslySetInnerHTML={{ __html: props.title }}
            ></h2>
          </div>
          <div className="column has-text-right">
            <SocialMedia title={props.title}></SocialMedia>
          </div>
        </div>
        <p
          className="content"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></p>
      </article>
    </div>
  );
}
