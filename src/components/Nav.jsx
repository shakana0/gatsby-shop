import React from "react";
import { NavStyling } from "../assets/styles/NavStyling";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import { Link } from "gatsby";
// import GlobalStyling from "../assets/styles/"
const Nav = () => {
  return (
    <NavStyling>
      <Link to="/">
        <EmojiNatureIcon className="logo-icon" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/allProducts">All Products</Link>
          </li>
          <li>
            <Link to="/aboutPage">About</Link>
          </li>
          <li>
            <Link to="/ourStaff">Our Staff</Link>
          </li>
          <li>
            <Link to="/privacyPolicy">Privacy Policy</Link>
          </li>
        </ul>
        <section className="profile">
          <FavoriteBorderIcon className="icon heart" />
          <SearchIcon className="icon" />
          <AccountCircleIcon className="icon" />
        </section>
      </nav>
    </NavStyling>
  );
};

export default Nav;
