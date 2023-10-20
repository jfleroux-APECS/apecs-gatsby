import React from "react";
import "../app.scss";
import { graphql, useStaticQuery } from "gatsby";
import ArticleAssociation from "../../components/article/ArticleAssociation";

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
      {/*<h1 className="APECStitle1">Nos missions</h1>
      <hr className="divider" />*/}
      {posts.map((mission, index) => (
        <div key={mission.node.id}>
          <ArticleAssociation
            title={mission.node.title}
            featuredImage={post.featuredImage}
            content={mission.node.content}
          ></ArticleAssociation>
          <div className="divider is-info" />
        </div>
      ))}
    </div>
  );
}
