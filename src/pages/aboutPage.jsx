import * as React from "react";
import { Link, graphql } from "gatsby";
// import { AbutPageStyling } from "../assets/styles/AbutPageStyling";
import { AbutPageStyling } from "../assets/styles/AboutPageStaling";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const AboutPage = ({ data }) => {
  const richText = data.allContentfulAboutPage.nodes[0];
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log("heeell", node.data.target);
        return (
          <>
            {/* <h2>Embedded Asset</h2> */}
            <img
              src={node.data.target.gatsbyImageData.images.fallback.src}
              alt="profile-pic"
            />
          </>
        );
      },
    },
  };

  return (
    <>
      {/* <p>{richText.nodes[0].pageName}</p> */}
      <Nav />
      <AbutPageStyling>
        <h1>{richText.pageName}</h1>
        <section>{renderRichText(richText.bodyText, options)}</section>
      </AbutPageStyling>
      <Footer />
    </>
  );
};

export default AboutPage;

export const Head = () => <title>About Page</title>;

//GraphQl query
export const AllProductQury = graphql`
  query MyQuery {
    allContentfulAboutPage {
      nodes {
        pageName
        bodyText {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              __typename
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
