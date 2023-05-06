import React from "react";
import styles from "../components/header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/">
            <li>Home|Logo</li>
          </Link>
          <Link to="/about">
            <li >About</li>
          </Link>
          <Link to="details"><li>Details</li></Link>
          <Link to="cart"> <li>Cart</li> </Link>
        </ul>
      </nav>
    </>
  );
}

export default Header;
