import React from "react";
import NewsCard from "../../../components/news-card/News-card";
import { chunk } from "lodash";
import { graphql, Link, useStaticQuery } from "gatsby";
import slugify from "../../../utils/Slugify";

export default function Actualites() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`
    query ActusPostQuery {
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

  const actualites = chunk(posts, 4);

  return (
    <div className="container mt-4">
      <h1 className="title is-2 has-text-centered">Actualités</h1>
      <hr className="divider" />

      {actualites.map((chunk, index) => (
        <div className="tile is-ancestor" key={index}>
          {chunk.map((article) => (
            <div className="tile is-parent" key={article.node.id}>
              <Link
                className="tile is-child"
                to={`/inform/actualites/${slugify(article.node.title)}`}
              >
                <NewsCard
                  title={article.node.title}
                  firstImage={article.node.firstImage}
                  date={article.node.date}
                  content={article.node.content.substring(0, 500).concat("...")}
                />
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
