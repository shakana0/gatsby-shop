import React from "react";
import { Link, graphql } from "gatsby";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SingleProductStyling } from "../assets/styles/SingleProductStyling";

const SingleProduct = ({ data }) => {
  const product = data.contentfulFlowerProduct;
  return (
    <>
      <Nav />
      <SingleProductStyling>
        <article>
          <img src={product.productImg.url} alt="picture of bouquet" />
          <section>
            <div>
              <h2>{product.name}</h2>
              <h3>{product.price}kr</h3>
              <p>{product.productInfo.productInfo}</p>
            </div>
            <button>Add To Cart</button>
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
