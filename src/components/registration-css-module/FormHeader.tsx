import React from "react";
import styles from "./Dashboard.module.css";

interface FormHeaderProps {
  title: string;
  subtitle: string;
}

function FormHeader({ title, subtitle }: FormHeaderProps) {
  return (
    <>
      <h1 className={styles.formTitle}>{title}</h1>
      <p className={styles.formSubtitle}>{subtitle}</p>
    </>
  );
}

export default FormHeader;
