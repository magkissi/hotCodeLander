import React from "react";
import SubjectCard from "./subjectCard";
import { classDetails } from "../../utils/data";
import styles from "./subjects.module.css";
import Button from "../button/Button";

function Subjects() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1>All the subjects and classes you need</h1>
      </div>
      <div className={styles.subject__container}>
        {classDetails.map((classDetail) => (
          <SubjectCard
            level={classDetail.classType}
            grade={classDetail.gradeType}
          />
        ))}
        <div id={styles.subject__btn}>
          <Button text="Enroll here" />
        </div>
      </div>
    </div>
  );
}

export default Subjects;
