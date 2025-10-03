"use client";
import React from "react";
import styles from "./Dashboard.module.css";

interface SignupButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

function SignupButton({ onClick, children }: SignupButtonProps) {
  return (
    <button className={styles.signupButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default SignupButton;
