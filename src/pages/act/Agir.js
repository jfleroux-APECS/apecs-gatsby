import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Article from "../../components/article/Article";

export default function Association() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query AgirPostQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "agir" } } } }
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
      <h1 className="title is-2 mt-4 has-text-centered">Agir à nos côtés</h1>
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
