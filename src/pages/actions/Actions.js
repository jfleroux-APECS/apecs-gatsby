import React from "react";
import NewsCard from "../../components/news-card/News-card";
import { chunk } from "lodash";
import { graphql, Link, useStaticQuery, } from "gatsby";
import slugify from "../../utils/Slugify";

export default function Actions() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`query ActionsPostQuery {
  allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "actions"}}}}}) {
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
                gatsbyImageData(quality: 100, placeholder: TRACED_SVG, layout: FULL_WIDTH)
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

  const actions = chunk(posts, 4);

  return (
    <div className="container mt-4">
      <h1 className="title is-2 has-text-centered">Nos actions</h1>
      <hr className="divider" />

      {actions.map((chunk, index) => (
        <div className="tile is-ancestor" key={index}>
          {chunk.map((article) => (
            <div className="tile is-parent" key={article.node.id}>
              <Link
                className="tile is-child"
                to={`/actions/${slugify(article.node.title)}`}
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
