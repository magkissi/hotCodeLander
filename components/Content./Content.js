import React from "react";
import styles from "./content.module.css";
import Services from "../services/Services";

function Content() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h1>The future of learning is here</h1>
        <p>
          In the midst of school closures, we are giving you a safe and
          effective way to keep children learning with the best teachers online.
        </p>
        <div>
          <Services />
        </div>
      </div>
    </div>
  );
}

export default Content;
