import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "./app.scss";
import NewsCard from "../components/news-card/News-card";
import slugify from "../utils/Slugify";
import { StaticImage } from "gatsby-plugin-image";

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
            <Link
              className="button is-info block-transformation"
              to="/inform/elasmobranches/Elasmobranches"
            >
              <strong>En savoir plus</strong>
            </Link>
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
                <Link
                  className="container has-text-centered title"
                  to="/act/Benevole"
                >
                  <p className="bd-notification is-primary has-text-centered">
                    <StaticImage
                      src="../images/shark_4590.png"
                      alt="Nous rejoindre"
                      width={128}
                      height={128}
                    />
                    <br />
                  </p>
                  <h3 className="title">Nous rejoindre</h3>
                </Link>
              </div>
              <div className="column is-narrow is-one-third block-transformation">
                <Link
                  className="container has-text-centered title"
                  to="/act/Observations"
                >
                  <p className="bd-notification is-primary has-text-centered">
                    <StaticImage
                      src="../images/psksh.png"
                      alt="Vos observations"
                      width={128}
                      height={128}
                    />
                    <br />
                  </p>
                  <h3 className="title">Vos observations</h3>
                </Link>
              </div>
              <div className="column is-narrow is-one-third block-transformation">
                <Link
                  className="container has-text-centered title"
                  to="/support/gift/Gift"
                >
                  <p className="bd-notification is-primary has-text-centered">
                    <StaticImage
                      src="../images/gift.png"
                      alt="Faire un don"
                      width={128}
                      height={128}
                    />
                    <br />
                  </p>
                  <h3 className="title">Faire un don</h3>
                </Link>
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
                    <Link
                      to={`/inform/actualites/${slugify(actualite.node.title)}`}
                    >
                      <NewsCard
                        title={actualite.node.title}
                        featuredImage={actualite.node.featuredImage}
                        date={actualite.node.date}
                      />
                    </Link>
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
