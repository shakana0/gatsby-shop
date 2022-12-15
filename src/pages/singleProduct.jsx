import React from "react";
import { Link, graphql } from "gatsby";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SingleProductStyling } from "../assets/styles/SingleProductStyling";

const SingleProduct = ({ data }) => {
  const post = data.contentfulFlowerProduct;
  return (
    <>
      <Nav />
      <SingleProductStyling>
        <article>
          <img src={post.productImg.url} alt="picture of bouquet" />
          <section>
            <h2>{post.name}</h2>
            <span>{post.price}kr</span>
            <p>{post.productInfo.productInfo}</p>
          </section>
        </article>
      </SingleProductStyling>
      <Footer />
    </>
  );
};

export default SingleProduct;
// export const Head = () => <title>AllProducts</title>;

//GraphQl query
export const query = graphql`
  query SingleProductQuery($slug: String) {
    contentfulFlowerProduct(slug: { eq: $slug }) {
      name
      price
      productInfo {
        productInfo
      }
      productImg {
        url
      }
    }
  }
`;
