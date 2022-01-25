import React from "react";
import "./article.scss";
import parse from "html-react-parser";
import SocialMedia from "../social-media/SocialMedia";
import Loupe from "../../images/svg/loupe.svg";

export default function ArticleAction(props) {
  const actions = props.actions || {};

  return (
    <div id={props.id} className="container article-container">
      <article className="notification article-background mt-5">
        <div className="columns is-mobile">
          <div className="column">
            <h2 className="title">{parse(props.title)}</h2>
          </div>
          <div className="column has-text-right">
            <SocialMedia title={props.title}></SocialMedia>
          </div>
        </div>
        <div className="columns is-mobile">
          <div className="column bordered-right is-7">
            {parse(props.content)}
          </div>
          <ActionList actions={props.actions} />
        </div>
      </article>
    </div>
  );
}

function generateSection(sectionContent) {
  if (sectionContent) {
    return (
      <div className="columns is-mobile has-text-justified is-vcentered">
        <div className="column is-1">
          <Loupe />
        </div>
        <div className="column">{parse(sectionContent)}</div>
      </div>
    );
  }
}

function ActionList(props) {
  if (!props.actions.participer) {
    return null;
  }

  return (
    <div className="column">
      {generateSection(props.actions.participer)}
      {props.actions.participer && <hr className="divider light" />}

      {generateSection(props.actions.quoi)}
      {props.actions.quoi && <hr className="divider light" />}

      {generateSection(props.actions.comment)}
      {props.actions.comment && <hr className="divider light" />}

      {generateSection(props.actions.quand)}
      {props.actions.quand && <hr className="divider light" />}

      {generateSection(props.actions.informations)}
      {props.actions.informations && <hr className="divider light" />}

      {generateSection(props.actions.qui)}
      {props.actions.qui && <hr className="divider light" />}

      {generateSection(props.actions.partenaires)}
    </div>
  );
}
