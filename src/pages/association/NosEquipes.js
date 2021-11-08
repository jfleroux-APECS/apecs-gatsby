import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Article from "../../components/article/Article";

export default function NosEquipes() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query NosEquipesPostQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "equipes" } } } }
        }
      ) {
        edges {
          node {
            id
            title
            content
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
    <div className="container">
      <h1 className="title is-2 mt-4 has-text-centered">Nos équipes</h1>
      <hr className="divider" />
      {posts.map((equipe, index) => (
        <div key={equipe.node.id}>
          <Article
            title={equipe.node.title}
            content={equipe.node.content}
          ></Article>
          <div className="divider is-info" />
        </div>
      ))}
    </div>
  );
}
