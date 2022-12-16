import React from "react";
import { Link, graphql } from "gatsby";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SingleStaffStayling } from "../assets/styles/SingleStaffStyling";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import {BLOCKS, MARKS } from "@contentful/rich-text-types";

const SingleStaffPage = ({ data }) => {
  const staff = data.contentfulStaffType;
  const richText = data.contentfulStaffType;
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
    },
  };
  return (
    <>
      <Nav />
      <SingleStaffStayling>
        <article>
          <section>
            <h1>{staff.name}</h1>
            <h3>{staff.role}</h3>
            <p>{renderRichText(richText.moreInfo, options)}</p>
          </section>
          <img src={staff.staffImg.url} alt={staff.staffImg.filename} />
        </article>
      </SingleStaffStayling>
      <Footer />
    </>
  );
};

export default SingleStaffPage;

//GraphQl query
export const query = graphql`
  query SingleStaffQuery($slug: String) {
    contentfulStaffType(slug: { eq: $slug }) {
      name
      role
      staffImg {
        filename
        url
      }
      moreInfo{
        raw
      }
    }
  }
`;
