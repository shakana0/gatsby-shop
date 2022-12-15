import * as React from "react";
import { Link, graphql } from "gatsby";
import { IndexStyling } from "../assets/styles/IndexStyling";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Nav />
      <IndexStyling>
        <h1>Privacy Policy</h1>
      </IndexStyling>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

export const Head = () => <title>Privacy Policy</title>;