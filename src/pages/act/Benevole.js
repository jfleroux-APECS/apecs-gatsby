import React from "react";
import Article from "../../components/article/Article";
import { graphql, useStaticQuery } from "gatsby";

export default function Benevole() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query BenevolePostQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { slug: { eq: "devenir-benevole" } } }
          }
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
      <h1 className="title is-2 mt-4 has-text-centered">Devenir bénévole</h1>
      <hr className="divider" />
      {posts.map((becomeVolunteer, index) => (
        <div key={becomeVolunteer.node.id}>
          <Article
            title={becomeVolunteer.node.title}
            content={becomeVolunteer.node.content}
          ></Article>
          <div className="divider is-info" />
        </div>
      ))}
    </div>
  );
}
