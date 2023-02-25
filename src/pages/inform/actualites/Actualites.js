import React from "react";
import Article from "../../../components/article/Article";
import { graphql, useStaticQuery } from "gatsby";

export default function Actualites() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query ActualitesPostQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "actualites" } } } }
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
      <h1 className="title is-2 mt-4 has-text-centered">À la une</h1>
      <hr className="divider" />
      {posts.map((actualite, index) => (
        <div key={actualite.node.id}>
          <Article
            title={actualite.node.title}
            content={actualite.node.content}
          ></Article>
          <div className="divider is-info" />
        </div>
      ))}
    </div>
  );
}
