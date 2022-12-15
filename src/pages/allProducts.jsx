import React from "react";
import { Link, graphql } from "gatsby";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ProductsStyling } from "../assets/styles/ProductsStyling";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const AllProducts = ({ data }) => {
  return (
    <>
      <Nav />
      <ProductsStyling>

        {data.allContentfulFlowerProduct.edges.map(({ node }) => (
          <Link to={`/product/${node.name}/`}>
          <article>
            <FavoriteBorderIcon className="heart"/>
            <img src={node.productImg.url} alt="Picture of flower bouquet" />
            <h3>{node.name}</h3>
            <span>{node.price}kr</span>
          </article>
          </Link>

        ))}
      </ProductsStyling>
      <Footer />
    </>
  );
};

export default AllProducts;
export const Head = () => <title>AllProducts</title>;

//GraphQl query
export const IndexPageQury = graphql`
  query myQuery {
    allContentfulFlowerProduct {
      edges {
        node {
          name
          price
          productImg{
            url
          }
        }
      }
    }
  }
`;
