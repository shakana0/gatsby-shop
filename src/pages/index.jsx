import * as React from "react";
import { Link, graphql } from "gatsby";
import { IndexStyling } from "../assets/styles/IndexStyling";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <Nav />
      <IndexStyling>
        <figure>
          <h1>Welcome To My Florista</h1>
        </figure>
      </IndexStyling>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>My Florista</title>;
