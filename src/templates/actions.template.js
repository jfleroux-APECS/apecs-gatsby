import React from "react";
import Article from "../components/article/Article";
import { graphql, Link } from "gatsby";

export const pageQuery = graphql`
  query ActionsPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
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
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

export default function ActionsTemplate({ data: { post } }) {
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  };

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
