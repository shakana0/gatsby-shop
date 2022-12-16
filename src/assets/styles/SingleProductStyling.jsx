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
      /* border: 2px solid #4b455667; */
      box-shadow: 4px 4px 4px 4px #4b455667;

    }

    section {
      width: 50%;
      /* border: 2px solid black; */
      display: flex;
      /* justify-content: space-evenly; */
      flex-direction: column;
      padding: 0 1rem 1rem 1rem;

      div {
        /* border: 2px solid black; */
        height: 60%;
        h2 {
          font-size: 2rem;
          margin-top: 0;
        }

        p {
          padding-top: 3rem;
          font-size: 1.2rem;
        }
      }

      button {
        padding: 1.5rem 2rem;
        width: 60%;
        font-size: 1.6rem;
        border-radius: 10px;
        border: none;
        background-color: #7a52c5aa;
        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.75);
        cursor: pointer;
        transition: .5s ease;

        &:hover{
          background-color: #9479c6aa;
          color: white;
        }

      }
    }
  }
`;
