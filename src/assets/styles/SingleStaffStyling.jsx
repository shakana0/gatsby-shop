import React from "react";
import styled from "styled-components";

export const SingleStaffStayling = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;

  article {
    width: 80%;
    display: flex;
    justify-content: space-between;

    section {
      width: 50%;
      padding: 0 2rem 2rem 2rem;

      h1 {
        font-size: 2rem;
      }
      p {
        line-height: 1.8;

        br {
          margin: 3rem;
        }
      }
    }

    img {
      width: 40%;
      height: 400px;
    }
  }
`;
