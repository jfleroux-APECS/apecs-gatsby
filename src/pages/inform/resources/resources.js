import React from "react";
import Article from "../../../components/article/Article";
import { graphql, useStaticQuery } from "gatsby";

export default function Resources() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`query RessourcesPostQuery {
  allWpPost(
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "ressources"}}}}}
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

  return (
    <div className="container">
      <h1 className="title is-2 mt-4 has-text-centered">
        Médiathèque / Ressources
      </h1>
      <hr className="divider" />
      {posts.map((resource, index) => (
        <div key={resource.node.id}>
          <Article
            title={resource.node.title}
            content={resource.node.content}
          ></Article>
          <div className="divider is-info" />
        </div>
      ))}
    </div>
  );
}
