import React from "react";
import Article from "../../components/article/Article";
import { graphql, useStaticQuery } from "gatsby";

export default function Engagez() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query EngagezPostQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "engagez-vous" } } } }
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
                      placeholder: TRACED_SVG
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
      <h1 className="title is-2 mt-4 has-text-centered">Engagez-vous</h1>
      <hr className="divider" />
      {posts.map((engage, index) => (
        <div key={engage.node.id}>
          <Article
            title={engage.node.title}
            content={engage.node.content}
          ></Article>
          <div className="divider is-info" />
        </div>
      ))}
    </div>
  );
}
