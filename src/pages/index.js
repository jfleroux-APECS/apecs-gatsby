import * as React from "react";
import sharkImg from "../images/shark_4590.png";
import observationsImg from "../images/psksh.png";
import giftImg from "../images/gift.png";
// import ActualiteCards from "./Actualite-cards";
import "./app.scss";

const IndexPage = () => {
  return (
    <div id="home">
      <section id="hero" className="hero is-success is-medium background-hero">
        <div className="hero-body">
          <div className="container has-text-left">
            <h1 className="title">Des espèces plus menacées que menaçantes</h1>
            <h2 className="subtitle">
              En général, lorsqu’une espèce marine est menacée, 
              des mesures de conservation peuvent être mises en place 
              pour assurer son maintien : interdiction de pêche, limitation des captures (quotas), 
              taille minimum ou maximum de débarquement, préservation des nurseries... 
              Pour en arriver là, des études scientifiques sont menées pour déterminer l’abondance du stock, 
              l’aspect des populations, leur capacité d’accroissement face aux éventuelles surpêches ...
              Ensuite, les gestionnaires débattent des décisions politiques à prendre, en essayant de concilier 
              protection des espèces et sauvegarde du métier de pêcheur. Ce qui n’est pas une mince affaire.
            </h2>
            {/*<NavLink className="button is-info block-transformation" to="/elasmobranches">*/}
            {/*  <strong>En savoir plus</strong>*/}
            {/*</NavLink>*/}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="columns is-centered mt-6">
          <div className="column has-text-centered ">
            <h1 className="title">Agir</h1>
            <hr className="small-divider" />
            <div className="columns is-centered">
              <div className="column is-narrow is-one-third block-transformation">
                {/*<NavLink*/}
                {/*  className="container has-text-centered title"*/}
                {/*  to="/adhesion"*/}
                {/*>*/}
                  <p className="bd-notification is-primary has-text-centered">
                    <img
                      src={sharkImg}
                      alt="Nous rejoindre"
                      width="128px"
                      height="128px"
                    />
                    <br />
                  </p>
                  <h3 className="title">Nous rejoindre</h3>
                {/*</NavLink>*/}
              </div>
              <div className="column is-narrow is-one-third block-transformation">
                {/*<NavLink*/}
                {/*  className="container has-text-centered title"*/}
                {/*  to="/observations"*/}
                {/*>*/}
                  <p className="bd-notification is-primary has-text-centered">
                    <img
                      src={observationsImg}
                      alt="Vos observations"
                      width="128px"
                      height="128px"
                    />
                    <br />
                  </p>
                  <h3 className="title">Vos observations</h3>
                {/*</NavLink>*/}
              </div>
              <div className="column is-narrow is-one-third block-transformation">
                {/*<NavLink*/}
                {/*  className="container has-text-centered title"*/}
                {/*  to="/gift"*/}
                {/*>*/}
                  <p className="bd-notification is-primary has-text-centered">
                    <img
                      src={giftImg}
                      alt="Faire un don"
                      width="128px"
                      height="128px"
                    />
                    <br />
                  </p>
                  <h3 className="title">Faire un don</h3>
                {/*</NavLink>*/}
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-centered mt-6">
          <div className="column has-text-centered">

          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
