import React from "react";
import Article from "../../components/article/Article";
import { graphql, useStaticQuery } from "gatsby";

export default function Participer() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query ParticiperPostQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { slug: { eq: "participer-a-nos-actions" } } }
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
                    fluid(maxWidth: 1000, quality: 100) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
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
      <h1 className="title is-2 mt-4 has-text-centered">
        Participer à nos actions
      </h1>
      <hr className="divider" />
      {posts.map((participate, index) => (
        <div key={participate.node.id}>
          <Article
            title={participate.node.title}
            content={participate.node.content}
          ></Article>
          <div className="divider is-info" />
        </div>
      ))}
    </div>
  );
}
