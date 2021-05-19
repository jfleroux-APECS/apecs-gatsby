import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Article from "../components/article/Article";

export default function About() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query AboutPostQuery {
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
      <h1 className="title is-2 mt-4 has-text-centered">Nous connaître</h1>
      <hr className="divider" />
      {posts.map((aboutUs, index) => (
        <div key={aboutUs.node.id}>
          <Article
            title={aboutUs.node.title}
            content={aboutUs.node.content}
          ></Article>
          <div className="divider is-info" />
        </div>
      ))}
    </div>
  );
}
