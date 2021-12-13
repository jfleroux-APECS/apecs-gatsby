import React from "react";
import "./article.scss";
import parse from "html-react-parser";
import SocialMedia from "../social-media/SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faQuestionCircle,
  faBullseye,
  faCalendarAlt,
  faInfoCircle,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

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
          {props.actions && (
            <div className="column">
              <div className="columns is-mobile has-text-justified is-vcentered">
                <div className="column is-1">
                  <FontAwesomeIcon icon={faSearch} color="gold" size="2x" />
                </div>
                <div className="column">{parse(props.actions.participer)}</div>
              </div>
              <hr className="divider light" />
              <div className="columns is-mobile has-text-justified is-vcentered">
                <div className="column is-1">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    color="black"
                    size="2x"
                  />
                </div>
                <div className="column">{parse(props.actions.quoi)}</div>
              </div>
              <hr className="divider light" />
              <div className="columns is-mobile has-text-justified is-vcentered">
                <div className="column is-1">
                  <FontAwesomeIcon icon={faBullseye} color="black" size="2x" />
                </div>
                <div className="column">{parse(props.actions.comment)}</div>
              </div>
              <hr className="divider light" />
              <div className="columns is-mobile has-text-justified is-vcentered">
                <div className="column is-1">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    color="black"
                    size="2x"
                  />
                </div>
                <div className="column">{parse(props.actions.quand)}</div>
              </div>
              <hr className="divider light" />
              <div className="columns is-mobile has-text-justified is-vcentered">
                <div className="column is-1 is-centered">
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    color="black"
                    size="2x"
                  />
                </div>
                <div className="column">
                  {parse(props.actions.informations)}
                </div>
              </div>
              <hr className="divider light" />
              <div className="columns is-mobile has-text-justified is-vcentered">
                <div className="column is-1">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    color="black"
                    size="2x"
                  />
                </div>
                <div className="column">{parse(props.actions.qui)}</div>
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
