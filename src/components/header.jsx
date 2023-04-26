import React from "react";
import styles from "../components/header.module.css";

function Header() {
  return (
    
      <>
        <nav>
          <ul>
            <li>Home|Logo</li>
            <li className={styles.nav_right}>About</li>
          </ul>
        </nav>
      </>
    
  );
}

export default Header;
