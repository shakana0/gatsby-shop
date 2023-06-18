import React from "react";
import styled from "styled-components";
import bgImg from "../images/bg-flower.jpg";

export const IndexStyling = styled.main`
padding: 0;
  figure {
    margin: 0;
    background-image: url(${bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 90vh;

    display: flex;
    align-items: center;
    justify-content: center;

    h1{
      font-size: 5rem;
      color: #130259;
      background-color: #ffffff47;

    }
  }
`;

// export const BodyStyling = styled.body`
//   body {
//     margin: 0;
//     padding: 0;
//   }
// `;
