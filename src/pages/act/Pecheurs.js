import React from "react";
import Article from "../../components/article/Article";
import { graphql, useStaticQuery } from "gatsby";

export default function Pecheurs() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query PecheursPostQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "pecheurs" } } } }
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
                    gatsbyImageData(
                      quality: 100
                      placeholder: DOMINANT_COLOR
                      layout: FULL_WIDTH
                    )
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
      <h1 className="title is-2 mt-4 has-text-centered">
        Pêcheurs responsables
      </h1>
      <hr className="divider" />
      {posts.map((pecheur, index) => (
        <div key={pecheur.node.id}>
          <Article
            title={pecheur.node.title}
            content={pecheur.node.content}
          ></Article>
          <div className="divider is-info" />
        </div>
      ))}
    </div>
  );
}
