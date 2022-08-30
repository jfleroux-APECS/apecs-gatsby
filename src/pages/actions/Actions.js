import React from "react";
import NewsCard from "../../components/news-card/News-card";
import { chunk } from "lodash";
import { graphql, Link, useStaticQuery } from "gatsby";
import slugify from "../../utils/Slugify";
import parse from "html-react-parser";

export default function Actions() {
  const {
    posts: { nodes: posts },
    presentation,
  } = useStaticQuery(graphql`
    {
      posts: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "actions" } } } }
        }
      ) {
        nodes {
          id
          title
          content
          actions {
            sousTitre
          }
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 100
                    placeholder: BLURRED
                    width: 400
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          date(formatString: "DD/MM/YYYY")
        }
      }
      presentation: wpPost(
        categories: {
          nodes: { elemMatch: { slug: { eq: "actions-presentation" } } }
        }
      ) {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
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
  `);

  const actions = chunk(posts, 4);

  return (
    <div>
      <section
        id="hero"
        className="hero is-large background-hero"
        style={{
          background:
            "url(" +
            presentation.featuredImage.node.localFile.childImageSharp
              .gatsbyImageData.images.fallback.src +
            ") center center no-repeat fixed",
        }}
      >
        <div className="hero-body">
          <div className="container has-text-left">
            <h1 className="title has-text-white">
              {parse(presentation.title)}
            </h1>
            <h2 className="subtitle has-text-white is-italic">
              {parse(presentation.content)}
            </h2>
          </div>
        </div>
      </section>
      <div className="container mt-4">
        <h1 className="title is-2 has-text-centered">Nos actions</h1>

        <hr className="divider" />

        {actions.map((chunk, index) => (
          <div
            className="columns is-variable is-1-mobile is-0-tablet is-2-desktop is-2-widescreen is-2-fullhd"
            key={index}
          >
            {chunk.map((article) => (
              <div className="column is-one-quarter" key={article.id}>
                <Link to={`/actions/${slugify(article.title)}`}>
                  <NewsCard
                    title={article.title}
                    featuredImage={article.featuredImage}
                    sousTitre={article.actions.sousTitre}
                    content={article.content.substring(0, 500).concat("...")}
                  />
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
