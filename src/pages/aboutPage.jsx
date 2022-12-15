import * as React from "react";
import { Link, graphql } from "gatsby";
import { IndexStyling } from "../assets/styles/IndexStyling";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Nav />
      <IndexStyling>
        <h1>About Page</h1>
      </IndexStyling>
      <Footer />
    </>
  );
};

export default AboutPage;

export const Head = () => <title>About Page</title>;