import React from "react";
import styles from "./subjects.module.css";

function SubjectCard({ level, grade }) {
  return (
    <div className={styles.subjectCard__container}>
      <div id={styles.left}></div>
      <div className={styles.subjectCard__details}>
        <span>+</span>
        <p>{level}</p>
        <p>{grade}</p>
      </div>
    </div>
  );
}
export default SubjectCard;
