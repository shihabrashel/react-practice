import React from "react";
import styles from "./Dashboard.module.css";

function PasswordSection() {
  return (
    <>
      <div className={styles.passwordSection}>
        <div className={styles.passwordLabel}>Password</div>
        <div className={styles.forgotPasswordLink}>Forget Password?</div>
      </div>
      <div className={styles.passwordInput} />
    </>
  );
}

export default PasswordSection;
