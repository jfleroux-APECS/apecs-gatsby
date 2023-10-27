import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import replaceWPCss from "../../utils/ReplaceWPCss";
import "../app.scss"


export default function Association() {
  const {
    allWpPost: { edges: postsAsso },
  } = useStaticQuery(graphql`
    query AssociationPostQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "association" } } } }
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


export default function Missions() {
  const {
    allWpPost: { edges: postsMiss },
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


export default function NosEquipes() {
  const {
    allWpPost: { edges: postsTeam },
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
      <h1 className="title is-2 mt-4 has-text-centered">L'association</h1>
      <hr className="divider" />
      <div key={posts[0].node.id}>
        <Article
          title={posts[0].node.title}
          content={posts[0].node.content}
        ></Article>
        <div className="divider is-info" />
      </div>
    </div>
  );
}
