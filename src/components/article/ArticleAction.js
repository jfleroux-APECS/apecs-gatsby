import React from "react";
import "./article.scss";
import parse from "html-react-parser";
import SocialMedia from "../social-media/SocialMedia";
import Calendar from "../../images/svg/calendar.svg";
import Help from "../../images/svg/help.svg";
import Loupe from "../../images/svg/loupe.svg";
import User from "../../images/svg/user.svg";
import Handshake from "../../images/svg/handshake.svg";
import Information from "../../images/svg/information.svg";
import Target from "../../images/svg/target.svg";

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

function ActionList(props) {
  if (!props.actions.participer) {
    return null;
  }

  return (
    <div className="column">
      <div className="columns is-mobile has-text-justified is-vcentered">
        <div className="column is-1">
          <Loupe />
        </div>
        <div className="column">{parse(props.actions.participer)}</div>
      </div>
      <hr className="divider light" />
      <div className="columns is-mobile has-text-justified is-vcentered">
        <div className="column is-1">
          <Help />
        </div>
        <div className="column">{parse(props.actions.quoi)}</div>
      </div>
      <hr className="divider light" />
      <div className="columns is-mobile has-text-justified is-vcentered">
        <div className="column is-1">
          <Target />
        </div>
        <div className="column">{parse(props.actions.comment)}</div>
      </div>
      <hr className="divider light" />
      <div className="columns is-mobile has-text-justified is-vcentered">
        <div className="column is-1">
          <Calendar />
        </div>
        <div className="column">{parse(props.actions.quand)}</div>
      </div>
      <hr className="divider light" />
      <div className="columns is-mobile has-text-justified is-vcentered">
        <div className="column is-1 is-centered">
          <Information />
        </div>
        <div className="column">{parse(props.actions.informations)}</div>
      </div>
      <hr className="divider light" />
      <div className="columns is-mobile has-text-justified is-vcentered">
        <div className="column is-1">
          <User />
        </div>
        <div className="column">{parse(props.actions.qui)}</div>
      </div>
      <div className="columns is-mobile has-text-justified is-vcentered">
        <div className="column is-1">
          <Handshake />
        </div>
        <div className="column">{parse(props.actions.partenaires)}</div>
      </div>
    </div>
  );
}
