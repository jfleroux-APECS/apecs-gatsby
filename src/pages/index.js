import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import sharkImg from "../images/shark_4590.png";
import observationsImg from "../images/psksh.png";
import giftImg from "../images/gift.png";
import "./app.scss";
import NewsCard from "../components/news-card/News-card";
import slugify from "../utils/Slugify";

const IndexPage = () => {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query FirstPostQuery {
      allWpPost(
        limit: 3
        sort: { fields: [date], order: DESC }
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "actualites" } } } }
        }
      ) {
        edges {
          node {
            id
            title
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  `);

  return (
    <div id="home">
      <section id="hero" className="hero is-medium background-hero">
        <div className="hero-body">
          <div className="container has-text-left">
            <h1 className="title has-text-white">
              Des espèces plus menacées que menaçantes
            </h1>
            <h2 className="subtitle has-text-white">
              En général, lorsqu’une espèce marine est menacée, des mesures de
              conservation peuvent être mises en place pour assurer son maintien
              : interdiction de pêche, limitation des captures (quotas), taille
              minimum ou maximum de débarquement, préservation des nurseries...
              Pour en arriver là, des études scientifiques sont menées pour
              déterminer l’abondance du stock, l’aspect des populations, leur
              capacité d’accroissement face aux éventuelles surpêches ...
              Ensuite, les gestionnaires débattent des décisions politiques à
              prendre, en essayant de concilier protection des espèces et
              sauvegarde du métier de pêcheur. Ce qui n’est pas une mince
              affaire.
            </h2>
            <a
              className="button is-info block-transformation"
              href="/inform/elasmobranches/Elasmobranches"
            >
              <strong>En savoir plus</strong>
            </a>
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
            <div className="container">
              <h1 className="title">Actualités</h1>
              <hr className="small-divider" />
              <div className="columns is-centered">
                {posts.map((actualite) => (
                  <div
                    className="column is-narrow is-one-third"
                    key={actualite.node.id}
                  >
                    <a
                      href={`/inform/actualites/${slugify(
                        actualite.node.title
                      )}`}
                    >
                      <NewsCard
                        title={actualite.node.title}
                        featuredImage={actualite.node.featuredImage}
                        date={actualite.node.date}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
