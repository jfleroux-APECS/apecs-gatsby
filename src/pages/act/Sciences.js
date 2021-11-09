import React from "react";
import Article from "../../components/article/Article";
import { graphql, useStaticQuery } from "gatsby";

export default function Sciences() {
  const {
    allWpPost: { edges: posts },
  } = useStaticQuery(graphql`query SciencesPostQuery {
  allWpPost(
    filter: {categories: {nodes: {elemMatch: {slug: {eq: "sciences-participatives"}}}}}
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
        Sciences participatives
      </h1>
      <hr className="divider" />
      {posts.map((science, index) => (
        <div key={science.node.id}>
          <Article
            title={science.node.title}
            content={science.node.content}
          ></Article>
          <div className="divider is-info" />
        </div>
      ))}
    </div>
  );
}
