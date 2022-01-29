import React from "react";
import "./article.scss";
import parse from "html-react-parser";
import SocialMedia from "../social-media/SocialMedia";
import Loupe from "../../images/svg/loupe.svg";
import Calendar from "../../images/svg/calendar.svg";
import Help from "../../images/svg/help.svg";
import User from "../../images/svg/user.svg";
import Handshake from "../../images/svg/handshake.svg";
import Information from "../../images/svg/information.svg";
import Target from "../../images/svg/target.svg";

export default function ArticleAction(props) {
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

function generateSection(sectionContent, icon) {
  if (sectionContent) {
    return (
      <div className="columns is-mobile has-text-justified is-vcentered">
        <div className="column is-1">{icon}</div>
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
      {generateSection(props.actions.participer, <Loupe />)}
      {props.actions.participer && <hr className="divider light" />}

      {generateSection(props.actions.quoi, <Help />)}
      {props.actions.quoi && <hr className="divider light" />}

      {generateSection(props.actions.comment, <Target />)}
      {props.actions.comment && <hr className="divider light" />}

      {generateSection(props.actions.quand, <Calendar />)}
      {props.actions.quand && <hr className="divider light" />}

      {generateSection(props.actions.informations, <Information />)}
      {props.actions.informations && <hr className="divider light" />}

      {generateSection(props.actions.qui, <User />)}
      {props.actions.qui && <hr className="divider light" />}

      {generateSection(props.actions.partenaires, <Handshake />)}
    </div>
  );
}
