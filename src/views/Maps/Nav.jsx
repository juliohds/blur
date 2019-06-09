import React from "react";
/* eslint react/prop-types: 0 */
import styles from "./nav.css";

const Nav = props => {
  const dots = [];
  for (let i = 1; i <= props.totalSteps; i += 1) {
    const isActive = props.currentStep === i;
    dots.push(
      <span
        style={{
          fontSize: "90px",
          color: `${isActive ? "rgb(33, 150, 243)" : ""}`
        }}
        key={`step-${i}`}
        className={`${styles.dot} ${isActive ? styles.active : ""}`}
        onClick={() => props.goToStep(i)}
      >
        &bull;
      </span>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "-10px"
      }}
      className={styles.nav}
    >
      {dots}
    </div>
  );
};

export default Nav;
