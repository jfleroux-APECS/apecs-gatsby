import React from "react";
import Article from "../components/article/Article";
import { graphql, Link } from "gatsby";
import replaceWPCss from "../utils/ReplaceWPCss";
import ArticleAction from "../components/article/ArticleAction";

export const pageQuery = graphql`
  query ActionsPostById($id: String!) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      actions {
        informations
        participer
        quand
        qui
        quoi
        comment
        partenaires
      }
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
      <ArticleAction
        title={post.title}
        content={replaceWPCss(post.content)}
        actions={post.actions}
      ></ArticleAction>
    </div>
  );
}
