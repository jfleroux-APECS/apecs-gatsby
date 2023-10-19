import React from "react";
import "../app.scss";
import { graphql, useStaticQuery } from "gatsby";
import Article from "../../components/article/Article";

export default function Missions() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query MissionsPostQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "nos-missions" } } } }
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
      <h1 className="titleTest">Nos missions</h1>
      <hr className="divider" />
      {posts.map((mission, index) => (
        <div key={mission.node.id}>
          <Article
            title={mission.node.title}
            content={mission.node.content}
          ></Article>
          <div className="divider is-info" />
        </div>
      ))}
    </div>
  );
}
