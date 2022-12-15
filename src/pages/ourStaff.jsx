import * as React from "react";
import { Link, graphql } from "gatsby";
import { IndexStyling } from "../assets/styles/IndexStyling";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const OurStaff = () => {
  return (
    <>
      <Nav />
      <IndexStyling>
        <h1>Our Staff</h1>
      </IndexStyling>
      <Footer />
    </>
  );
};

export default OurStaff;

export const Head = () => <title>Our Staff</title>;

