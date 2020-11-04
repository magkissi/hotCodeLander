import React from "react";
import styles from "./nav.module.css";
import a from "next/link";

function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.navInner}>
        <div id={styles.navlogo}>
          <h3>HotCode-lander</h3>
        </div>

        <div className={styles.nav_items}>
          <div className={styles.nav_item}>
            <a href="/">
              <p>Home</p>
            </a>
          </div>
          <div className={styles.nav_item}>
            <a href="/">
              <p>Services</p>
            </a>
          </div>
          <div className={styles.nav_item}>
            <a href="/">
              <p>FAQs</p>
            </a>
          </div>
          <div className={styles.nav_item}>
            <a href="/">
              <p>Contact</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
