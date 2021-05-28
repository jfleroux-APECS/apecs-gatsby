import React from "react";
import FacebookIcon from "../../images/svg/facebook.svg";
import TwitterIcon from "../../images/svg/twitter.svg";
import YoutubeIcon from "../../images/svg/youtube.svg";
import { Link } from "gatsby";

function Footer() {
  return (
    <footer className="footer mt-5 has-text-white is-default-font">
      <div className="content has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-uppercase block-transformation">
            <Link className="container has-text-centered" to="/contact/contact/Contact">
              <strong className="has-text-white">Contactez-nous</strong>
            </Link>
          </div>
          <div className="column is-uppercase block-transformation">
            <Link className="container has-text-centered" to="/contact/contact/Contact">
              <strong className="has-text-white">Mentions légales</strong>
            </Link>
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
