import React from "react";
import styled from "styled-components";
import bgImg from "../images/angele.jpg";

export const OurStaffStyling = styled.main`
  padding: 0 0 4rem 0;
  background-color: #e7e6e9;

  figure {
    margin: 0;
    background-image: url(${bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 70vh;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 2px solid red; */

    .our-staff-page-info {
      /* border: 2px solid black; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      section {
        width: 80%;
        /* border: 2px solid black; */
        padding-bottom: 4rem;

        p {
          line-height: 1.8;
        }
      }
    }

    .staff-info {
      width: 100%;
      /* border: 2px solid red; */
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding: 2rem 0;
      background-color: #f0e8f19f;

      a {
        text-decoration: none;
        color: black;
        width: 40%;
      }

      article {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px solid #af4e82;
        border-radius: 10px;
        margin-bottom: 2rem;
        /* padding-left: 0.2rem; */
        padding: 1rem;
        cursor: pointer;
        transition: 0.5s ease;

        &:hover {
          transform: scale(1.02);
        }

        img {
          width: 150px;
          height: auto;
        }

        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 40%;
          /* border: 2px solid grey; */

          h4 {
            margin-top: 0;
          }
        }

        button {
          align-self: flex-end;
          margin: 0 0.5rem 0.5rem 0;
          padding: 0.5rem 0.5rem;
          border-radius: 10px;
          border: 2px solid #af4e82;
          font-size: 0.8rem;
          /* background-color: transparent; */
          background-color: #dd60a35b;
          cursor: pointer;
          transition: 0.5s ease;
          box-shadow: 2px 3px 3px 0px rgba(0, 0, 0, 0.75);

          &:hover {
            background-color: #d9579ccc;
          }
        }
      }
    }
  }
`;
