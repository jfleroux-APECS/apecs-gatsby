import React from "react";
import Article from "../../../components/article/Article";
import "./elasmobranches.scss";
import { graphql, useStaticQuery } from "gatsby";

export default function Elasmobranches() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query ElasmoPostQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { slug: { eq: "elasmobranches" } } }
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
    <div className="container is-fluid">
      <h1 className="title is-2 mt-4 has-text-centered">Les Elasmobranches</h1>
      <hr className="divider" />
      <div className="columns">
        <div className="column is-one-quarter">
          <aside className="menu sticky">
            <p className="menu-label">Menu</p>
            <ul className="menu-list">
              {posts.map((article, index) => (
                <li key={article.node.id}>
                  <a href={`#${article.node.id}`}>{article.node.title}</a>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="column">
          {posts.map((article, index) => (
            <div key={article.node.id}>
              <Article
                id={article.node.id}
                title={article.node.title}
                content={article.node.content}
              ></Article>
              <hr className="divider" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
