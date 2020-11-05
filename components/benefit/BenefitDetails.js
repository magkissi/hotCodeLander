import React from "react";
import styles from "./benefit.module.css";

function BenefitDetails({ title, subtitle, details, action, flip, bgImage }) {
  return (
    <>
      {flip === true ? (
        <div className={styles.bftDetails__container}>
          <div>
            <div className={styles.bftDetails__content}>
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <p>{details}</p>
            </div>
            <div className={styles.bftDetails__btn}>
              <button type="text">{action}</button>
              <a href="">Read more</a>
            </div>
          </div>
          <div
            style={{
              marginLeft: "150px",
              marginRight: "0px",
              backgroundImage: bgImage ? `url(${bgImage})` : "",
            }}
            className={styles.image}
          >
            <div className={styles.image_overlay}></div>
          </div>
        </div>
      ) : (
        <div className={styles.bftDetails__container}>
          <div
            style={{ backgroundImage: bgImage ? `url(${bgImage})` : "" }}
            className={styles.image}
          >
            <div className={styles.image_overlay}></div>
          </div>
          <div>
            <div className={styles.bftDetails__content}>
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <p>{details}</p>
            </div>
            <div className={styles.bftDetails__btn}>
              <button type="text">{action}</button>
              <a href="">Read more</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BenefitDetails;
