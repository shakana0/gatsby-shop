import * as React from "react";
import { Link, graphql } from "gatsby";
import { IndexStyling } from "../assets/styles/IndexStyling";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { OurStaffStyling } from "../assets/styles/OurStaffStyling";

const OurStaff = ({ data }) => {
  const pageInfo = data.allContentfulOurStaff;
  const staffInfo = data.allContentfulStaffType;

  return (
    <>
      <Nav />
      <OurStaffStyling>
        <figure></figure>
        <div className="container">
          {pageInfo.nodes.map((node) => (
            <>
              <h1>{node.pageName}</h1>
              <section className="our-staff-page-info">
                <p>{node.bodyText.bodyText}</p>
              </section>
            </>
            // <p>{node.bodyText.bodyText}</p>
          ))}
          <section className="staff-info">
            {staffInfo.nodes.map((node) => (
              <article>
                <img src={node.staffImg.url} alt={node.staffImg.title} />
                <div>
                  <h2>{node.name}</h2>
                  <h4>{node.role}</h4>
                </div>
                <button>More Info</button>
              </article>
            ))}
          </section>
        </div>
      </OurStaffStyling>
      <Footer />
    </>
  );
};

export default OurStaff;

export const Head = () => <title>Our Staff</title>;

export const OurStaffQuery = graphql`
  query MyQuery {
    allContentfulOurStaff {
      nodes {
        pageName
        bodyText {
          bodyText
        }
      }
    }
    allContentfulStaffType {
      nodes {
        name
        role
        staffImg {
          title
          url
        }
      }
    }
  }
`;
