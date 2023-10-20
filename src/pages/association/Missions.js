import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import replaceWPCss from "../../utils/ReplaceWPCss";
import ArticleAssociation from "../../components/article/ArticleAssociation";

export default function Missions() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query AssociationPostQuery {
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
    <ArticleAssociation
      title={mission.node.title}
      featuredImage={mission.node.featuredImage}
      content={replaceWPCss(mission.node.content)}
    ></ArticleAssociation>
  );
}
