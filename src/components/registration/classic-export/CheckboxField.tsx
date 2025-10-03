"use client";
import * as React from "react";
import styles from "./Dashboard.module.css";
import CheckmarkIcon from "./CheckmarkIcon";

function CheckboxField() {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <div className={styles.check}>
      <div className={styles.bo} />
      <div className={styles.object}>
        <div className={styles.bo2} />
      </div>
      <button
        type="button"
        onClick={() => setIsChecked(!isChecked)}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          position: "absolute",
          top: 0,
          left: 0,
          width: "24px",
          height: "24px",
        }}
        aria-label="Accept terms and conditions"
      >
        {isChecked && <CheckmarkIcon />}
      </button>
      <label className={styles.iaccepttermsandc}>
        I accept terms and conditions
      </label>
    </div>
  );
}

export default CheckboxField;
