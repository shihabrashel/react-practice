"use client";
import React from "react";
import styles from "./Dashboard.module.css";

function LoginPrompt() {
  const handleLoginClick = () => {
    // Handle login navigation
    console.log("Navigate to login");
  };

  return (
    <div className={styles.loginPrompt}>
      <div className={styles.loginPromptText}>Already have an account? </div>
      <span className={styles.loginLink} onClick={handleLoginClick}>
        Login
      </span>
    </div>
  );
}

export default LoginPrompt;
