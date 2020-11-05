import React from "react";
import styles from "./button.module.css";

function Button({ text }) {
  return (
    <div id={styles.btn__container}>
      <button type="text">{text}</button>
    </div>
  );
}

export default Button;
