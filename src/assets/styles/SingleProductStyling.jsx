import React from "react";
import styled from "styled-components";

export const SingleProductStyling = styled.main`
  /* padding: 4rem 0; */
  background-color: #e7e6e9;
  article {
    /* border: 2px solid purple; */
    display: flex;
    justify-content: space-evenly;
    /* width: 80%; */

    img {
      width: 435px;
      /* width: 35%; */
      height: auto;
    }

    section {
      width: 50%;
      /* display: flex;
        flex-direction: column;
        justify-content: space-between; */
      /* border: 1px solid red; */
      h2 {
        font-size: 2rem;
        margin-top: 0;
      }
      p {
        padding-top: 3rem;
        font-size: 1.2rem;
      }
    }
  }
`;
