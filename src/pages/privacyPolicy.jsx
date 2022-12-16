import * as React from "react";
import { Link, graphql } from "gatsby";
import { PrivacyStying } from "../assets/styles/PrivacyStyling";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const PrivacyPolicy = ({ data }) => {
  const richText = data.allContentfulPrivacyPolicy.nodes[0];
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    },
  };

  return (
    <>
      <Nav />
      <PrivacyStying>
        <h1>{richText.pageName}</h1>
        <section>{renderRichText(richText.bodyText, options)}</section>
      </PrivacyStying>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

export const Head = () => <title>Privacy Policy</title>;

//GraphQl query
export const AllProductQury = graphql`
  query MyQuery {
    allContentfulPrivacyPolicy {
      nodes {
        pageName
        bodyText {
          raw
        }
      }
    }
  }
`;
