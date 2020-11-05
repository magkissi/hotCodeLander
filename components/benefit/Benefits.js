import React from "react";
import styles from "./benefit.module.css";
import BenefitDetails from "./BenefitDetails";

function Benefits({ title }) {
  return (
    <div className={styles.benefit__container}>
      <div className={styles.benefit__title}>
        <h1>{title}</h1>
      </div>

      <div className={styles.benefit}>
        <BenefitDetails
          bgImage="/teacher_image.png"
          title="Teachers"
          subtitle="Keep doing what you love"
          details="Teach at your convenience and earn extra money doing what you love while helping minimize the impact of school closures on our children."
          action="APPLY NOW"
        />
      </div>
      <div className={styles.benefit}>
        <BenefitDetails
          flip={true}
          bgImage="/students_image.jpg"
          title="Teachers"
          subtitle="Keep doing what you love"
          details="Teach at your convenience and earn extra money doing what you love while helping minimize the impact of school closures on our children."
          action="ENROLL NOW"
        />
      </div>
      <div className={styles.benefit}>
        <BenefitDetails
          bgImage="/school_image.jpg"
          title="Teachers"
          subtitle="Keep doing what you love"
          details="Teach at your convenience and earn extra money doing what you love while helping minimize the impact of school closures on our children."
          action="CONTACT US"
        />
      </div>
    </div>
  );
}

export default Benefits;
