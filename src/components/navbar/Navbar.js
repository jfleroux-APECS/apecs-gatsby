import React, { useEffect, useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  // const location = useLocation();

  const closeNavbar = function () {
    const el = document.activeElement;
    el?.classList?.contains("navbar-item") && el.blur();
    setIsActive(false);
  };

  // useEffect(closeNavbar, [location.pathname]);

  return (
    <nav
      className="navbar is-fixed-top is-default-font"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          className="navbar-item"
          activeClassName="is-active"
          href="/"
          exact
        >
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            height="150px"
            alt="A.P.E.C.S"
            className="block-transformation"
          /> <div className="ml-4 title has-text-light has-text-weight-medium is-hidden-desktop">A.P.E.C.S</div>
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
                activeClassName="is-active"
                href="/about"
              >
                Nous connaître
              </a>
              <a
                className="navbar-item"
                activeClassName="is-active"
                href="/missions"
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
                activeClassName="is-active"
                href="/benevole"
              >
                Devenir bénévole
              </a>
              <a
                className="navbar-item"
                activeClassName="is-active"
                href="/observations"
              >
                Vos Observations
              </a>
              <a
                className="navbar-item"
                activeClassName="is-active"
                href="/participer"
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
                activeClassName="is-active"
                href="/adhesion"
              >
                Adhérer
              </a>
              <a
                className="navbar-item"
                activeClassName="is-active"
                href="/gift"
              >
                Faire un don
              </a>
              <a
                className="navbar-item"
                activeClassName="is-active"
                href="/partnership"
              >
                Devenir partenaire
              </a>
              <a
                className="navbar-item"
                activeClassName="is-active"
                href="/shop"
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
                activeClassName="is-active"
                href="/actualites"
              >
                Actualités
              </a>
              <a
                className="navbar-item"
                activeClassName="is-active"
                href="/elasmobranches"
              >
                Les élasmobranches
              </a>
              <a
                className="navbar-item"
                activeClassName="is-active"
                href="/resources"
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
                activeClassName="is-active"
                href="/contact"
              >
                Contact
              </a>
              <a
                className="navbar-item"
                activeClassName="is-active"
                href="/press"
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
