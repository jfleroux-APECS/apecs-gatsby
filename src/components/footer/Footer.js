import React from "react";
import FacebookIcon from "../../images/svg/facebook.svg";
import TwitterIcon from "../../images/svg/twitter.svg";
import YoutubeIcon from "../../images/svg/youtube.svg";

function Footer() {
  return (
    <footer className="footer mt-5 has-text-white is-default-font">
      <div className="content has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-uppercase block-transformation">
            <a className="container has-text-centered" href="/contact">
              <strong className="has-text-white">Contactez-nous</strong>
            </a>
          </div>
          <div className="column is-uppercase block-transformation">
            <a className="container has-text-centered" href="/mentions">
              <strong className="has-text-white">Mentions légales</strong>
            </a>
          </div>
          <div className="column">
            <span className="icon is-medium">
              <a
                href="https://www.facebook.com/AssoAPECS"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-white block-transformation"
              >
                <FacebookIcon />
              </a>
            </span>
            <span className="icon is-medium">
              <a
                href="https://twitter.com/assoapecs"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-white block-transformation"
              >
                <TwitterIcon />
              </a>
            </span>
            <span className="icon is-medium">
              <a
                href="https://www.youtube.com/channel/UCCLIfNbu65a8AP5sxOys9-Q"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-white block-transformation"
              >
                <YoutubeIcon />
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
