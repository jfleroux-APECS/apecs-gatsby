import React from "react";
import { graphql } from "gatsby";
import replaceWPCss from "../utils/ReplaceWPCss";
import ArticleAssociation from "../../components/article/ArticleAssociation";

export const pageQuery = graphql`
  query ActionsPostById($id: String!) {
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
              gatsbyImageData(
                quality: 100
                placeholder: DOMINANT_COLOR
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  }
`;

export default function Missions({ data: { post } }) {
  return (
    <ArticleAssociation
      title={post.title}
      featuredImage={post.featuredImage}
      content={replaceWPCss(post.content)}
    ></ArticleAssociation>
  );
}
