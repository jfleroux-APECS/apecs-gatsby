import React from "react";
import "./article.scss";
import parse from "html-react-parser";
import Loupe from "../../images/svg/loupe.svg";
import Calendar from "../../images/svg/calendar.svg";
import Help from "../../images/svg/help.svg";
import User from "../../images/svg/user.svg";
import Handshake from "../../images/svg/handshake.svg";
import Information from "../../images/svg/information.svg";
import Target from "../../images/svg/target.svg";

export default function ArticleAction(props) {
  return (
    <div>
      {props.featuredImage && (
        <section
          id="hero"
          className="hero is-medium background-hero"
          style={{
            background:
              "url(" +
              props.featuredImage.node.localFile.childImageSharp.gatsbyImageData
                .images.fallback.src +
              ") center center no-repeat fixed",
          }}
        >
          <div className="hero-body"></div>
        </section>
      )}
      <div className="container article-container">
        <article className="notification article-background mt-5">
          <div className="columns is-mobile has-text-centered mb-6">
            <div className="column">
              <h2 className="title is-2">{parse(props.title)}</h2>
              <hr className="small-divider" />
              <h5 className="subtitle is-5">{props.actions.sousTitre}</h5>
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
    </div>
  );
}

function generateSection(sectionContent, icon) {
  if (sectionContent) {
    return (
      <div className="columns has-text-justified is-vcentered without-margin-bottom">
        <div className="column is-1 has-text-centered">{icon}</div>
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
