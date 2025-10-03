import React from "react";
import styles from "./EmailTemplate.module.css";

interface WelcomeMessageProps {
  message: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ message }) => {
  return <p className={styles.welcomeText}>{message}</p>;
};

export default WelcomeMessage;
