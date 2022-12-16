import React from "react";
import styled from "styled-components";

export const AbutPageStyling = styled.main`
  background-color: #f0dfe28b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    margin: 0 0 3rem 0;
  }

  section {
    width: 80%;
    border: 2px solid #504b4b6e;
    padding: 1rem 2.5rem;
    p {
      line-height: 1.8;
    }

    img {
      width: 200px;
      height: auto;
    }
  }
`;
