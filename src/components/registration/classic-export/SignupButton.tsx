"use client";
import * as React from "react";
import styles from "./Dashboard.module.css";

function SignupButton() {
  const handleSignup = () => {
    // Handle signup logic here
    console.log("Signup clicked");
  };

  return (
    <div className={styles.buttonComposemessage}>
      <button
        type="submit"
        onClick={handleSignup}
        className={styles.div}
        style={{
          border: "none",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <span className={styles.signUp}>Sign Up</span>
      </button>
    </div>
  );
}

export default SignupButton;
