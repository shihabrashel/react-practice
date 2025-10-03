"use client";
import * as React from "react";
import styles from "./Dashboard.module.css";

function LoginPrompt() {
  const handleLoginClick = () => {
    // Handle navigation to login page
    console.log("Login clicked");
  };

  return (
    <div className={styles.createNew}>
      <p className={styles.alreadyhaveanacco}>Already have an account?</p>
      <button
        type="button"
        onClick={handleLoginClick}
        className={styles.login}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        Login
      </button>
    </div>
  );
}

export default LoginPrompt;
