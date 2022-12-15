import React from "react";
import styled from "styled-components";

export const NavStyling = styled.header`
  /* width: 100%; */
  /* background-color: #412d65; */
  background-color: #2c2c2c;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  .logo-icon {
    fill: white;
    font-size: 3.5rem;
  }
  nav {
    /* border: 2px solid black; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;

    ul {
      display: flex;
      justify-content: space-evenly;
      width: 70%;
      /* border: 2px solid red; */

      li {
        list-style: none;
        transition: 0.5s ease;
        cursor: pointer;

        &:hover {
          background-color: #e7e6e977;
        }

        a {
          text-decoration: none;
          font-weight: 600;
          font-size: 1.2rem;
          color: white;
          padding: 0.2rem 1rem;
        }
      }
    }

    section {
      /* border: 2px solid yellow; */
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .icon {
        fill: white;
        font-size: 2rem;
        cursor: pointer;
        transition: 0.5s ease;

        &:hover {
          transform: scale(1.15);
        }
      }
      .heart:hover {
        fill: red;
      }
    }
  }
`;
