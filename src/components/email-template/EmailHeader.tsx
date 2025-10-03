import React from "react";
import styles from "./EmailTemplate.module.css";

interface EmailHeaderProps {
  imageUrl: string;
  altText: string;
}

const EmailHeader: React.FC<EmailHeaderProps> = ({ imageUrl, altText }) => {
  return (
    <header className={styles.emailHeader}>
      <img src={imageUrl} alt={altText} className={styles.emailHeader} />
    </header>
  );
};

export default EmailHeader;
