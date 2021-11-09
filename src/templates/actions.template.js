import React from "react";
import Article from "../components/article/Article";
import { graphql, Link } from "gatsby";

export const pageQuery = graphql`query ActionsPostById($id: String!) {
  post: wpPost(id: {eq: $id}) {
    id
    excerpt
    content
    title
    date(formatString: "MMMM DD, YYYY")
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
  }
}
`;

export default function ActionsTemplate({ data: { post } }) {
  return (
    <div className="container mt-4">
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/">APECS</Link>
          </li>
          <li>
            <a href="/inform/actualites/Actualites">Actions</a>
          </li>
          <li className="is-active">
            <a href="/inform/actualites/Actualites" aria-current="page">
              {post.title}
            </a>
          </li>
        </ul>
      </nav>
      <Article title={post.title} content={post.content}></Article>
    </div>
  );
}
