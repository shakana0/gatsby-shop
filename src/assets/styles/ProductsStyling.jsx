import React from "react";
import styled from "styled-components";

export const ProductsStyling = styled.main`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* background-color: #e7e6e9; */
  /* background-color: #c0b0c0; */
  background-color: #c8bdc8b8;

  a{
    text-decoration: none;
    color: black;
    
  }

  article {
    width: 350px;
    height: 450px;
    border: 2px solid #6e6e6e;
    margin: 0 1rem 4rem 1rem;
    background-color: white;

    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;

    img {
      width: 60%;
      height: 70%;
    }
    .heart {
      align-self: flex-end;
      font-size: 2rem;
      padding: .5rem .5rem 0 0;
      cursor: pointer;

      &:hover{
        fill: #e80000;
      }
    }
  }
`;
