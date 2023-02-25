import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Article from "../../../components/article/Article";

export default function Partnership() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query PartnershipPostQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "partenaires" } } } }
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
      <h1 className="title is-2 mt-4 has-text-centered">Devenir partenaire</h1>
      <hr className="divider" />
      {posts.map((partenaire, index) => (
        <div key={partenaire.node.id}>
          <Article
            title={partenaire.node.title}
            content={partenaire.node.content}
          ></Article>
          <div className="divider is-info" />
        </div>
      ))}
    </div>
  );
}
