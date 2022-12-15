import * as React from "react";
import { Link, graphql } from "gatsby";
import { IndexStyling } from "../assets/styles/IndexStyling";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const Bold = ({children}) => <strong>{children}</strong>
export const Text = ({children}) => (
  <p className="align-center">{children}</p>
)
export const Heading3 = ({children}) => (
  <p className="align-center">{children}</p>
)

const AboutPage = ({ data }) => {
    <>
      <Nav />
      <IndexStyling>
        <h1>About Page</h1>
        {/* {renderRichText(bodyText)} */}

        {/* <article>
          {blogPost.mainContent &&
            renderRichText(blogPost.mainContent, options)}
        </article> */}
      </IndexStyling>
      <Footer />
    </>
  
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
