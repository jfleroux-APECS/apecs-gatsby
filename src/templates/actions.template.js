import React from "react";
import {graphql} from "gatsby";
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
        sousTitre
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
    <ArticleAction
      title={post.title}
      featuredImage={post.featuredImage}
      content={replaceWPCss(post.content)}
      actions={post.actions}
    ></ArticleAction>
  );
}
