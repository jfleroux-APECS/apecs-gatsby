import React, { useState } from "react";
import logo from "../../images/logo.png";
import "./navbar.scss";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-fixed-top is-default-font"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/" exact>
          <img
            src={logo}
            height="150px"
            alt="A.P.E.C.S"
            className="block-transformation"
          />{" "}
          <div className="ml-4 title has-text-light has-text-weight-medium is-hidden-desktop">
            A.P.E.C.S
          </div>
        </a>

        <a
          onClick={() => {
            setIsActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="mainNavbar"
          href="#top"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="mainNavbar"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#top" className="navbar-link is-arrowless is-spaced">
              APECS
            </a>

            <div className="navbar-dropdown">
              <a
                className="navbar-item"
                href="/About"
              >
                Nous connaître
              </a>
              <a
                className="navbar-item"
                href="/Missions"
              >
                Nos missions
              </a>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#top" className="navbar-link is-arrowless">
              Agir
            </a>

            <div className="navbar-dropdown">
              <a
                className="navbar-item"
                href="/act/Benevole"
              >
                Devenir bénévole
              </a>
              <a
                className="navbar-item"
                href="/act/Observations"
              >
                Vos Observations
              </a>
              <a
                className="navbar-item"
                href="/act/Participer"
              >
                Participer à nos actions
              </a>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#top" className="navbar-link is-arrowless">
              Soutenir
            </a>

            <div className="navbar-dropdown">
              <a
                className="navbar-item"
                href="/support/adhesion/Adhesion"
              >
                Adhérer
              </a>
              <a
                className="navbar-item"
                href="/support/gift/Gift"
              >
                Faire un don
              </a>
              <a
                className="navbar-item"
                href="/support/partnership/Partnership"
              >
                Devenir partenaire
              </a>
              <a
                className="navbar-item"
                href="/support/shop/Shop"
              >
                Boutique
              </a>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#top" className="navbar-link is-arrowless">
              S'informer
            </a>

            <div className="navbar-dropdown">
              <a
                className="navbar-item"
                href="/inform/actualites/Actualites"
              >
                Actualités
              </a>
              <a
                className="navbar-item"
                href="/inform/elasmobranches/Elasmobranches"
              >
                Les élasmobranches
              </a>
              <a
                className="navbar-item"
                href="/inform/resources/resources"
              >
                Médiathèque / Ressources
              </a>
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a href="#top" className="navbar-link is-arrowless">
              Contact
            </a>

            <div className="navbar-dropdown">
              <a
                className="navbar-item"
                href="/contact/contact/Contact"
              >
                Contact
              </a>
              <a
                className="navbar-item"
                href="/contact/press/Press"
              >
                Espace presse
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button block-transformation" href="/gift">
                <strong>Faire un don</strong>
              </a>
              <a className="button is-light block-transformation" href="/shop">
                <strong>Boutique</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
