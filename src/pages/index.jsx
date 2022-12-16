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
        <figure></figure>
        {/* <h1>Hej</h1> */}
      </IndexStyling>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>My Florista</title>;

// "accessToken": `${process.env.REACT_APP_ACCESSTOKEN}`,
// "spaceId":  `${process.env.REACT_APP_SPACE_ID}`
