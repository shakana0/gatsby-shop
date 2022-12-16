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
          {pageInfo.nodes.map((node, index) => (
            <div className="our-staff-page-info" key={index}>
              <h1>{node.pageName}</h1>
              <section>
                <p>{node.bodyText.bodyText}</p>
              </section>
            </div>
          ))}
          <section className="staff-info">
            {staffInfo.nodes.map((node, index) => (
              <Link to={`/staff/${node.name}`} key={index}>
                <article>
                  <img src={node.staffImg.url} alt={node.staffImg.title} />
                  <div>
                    <h2>{node.name}</h2>
                    <h4>{node.role}</h4>
                  </div>
                  <button>More Info</button>
                </article>
              </Link>
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
