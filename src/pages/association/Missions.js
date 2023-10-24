import React from "react";
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
      <div key={posts[0].node.id}>
        <ArticleAssociation
          title={posts[0].node.title}
          content={posts[0].node.content}
        ></ArticleAssociation>
      </div>
    </div>
  );
}
