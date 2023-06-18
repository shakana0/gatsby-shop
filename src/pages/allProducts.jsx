import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ProductsStyling } from "../assets/styles/ProductsStyling";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const AllProducts = ({ data }) => {
  let [counter, setCounter] = useState(0);
  console.log(counter, "counter");
  return (
    <>
      <Nav />
      <ProductsStyling>
        {data.allContentfulFlowerProduct.edges.map(({ node }, index) => (
          <Link to={`/product/${node.name}/`} key={index}>
            <article>
              <FavoriteBorderIcon className="heart" />
              <img src={node.productImg.url} alt={node.productImg.title} />
              <h3>{node.name}</h3>
              <span>{node.price}kr</span>
            </article>
          </Link>
        ))}
        <button onClick={(event) => setCounter(counter++)}>click</button>
      </ProductsStyling>
      <Footer />
    </>
  );
};


export default AllProducts;
export const Head = () => <title>AllProducts</title>;

//GraphQl query
export const AllProductQury = graphql`
  query myQuery {
    allContentfulFlowerProduct {
      edges {
        node {
          name
          price
          productImg {
            title
            url
          }
        }
      }
    }
  }
`;


// Gatsby global state
//https://www.youtube.com/watch?v=ThCfN5WJ0cU

//waring in gatsby node, kan man skapa flera pages sådär???

//kategorier