import React from "react";
import styles from "./EmailTemplate.module.css";

interface EmailFooterProps {
  centerName: string;
  contactEmail: string;
}

const EmailFooter: React.FC<EmailFooterProps> = ({
  centerName,
  contactEmail,
}) => {
  return (
    <footer>
      <p className={styles.closingText}>
        Thanks, {centerName}{" "}
        <a href={`mailto:${contactEmail}`} className={styles.contactLink}>
          {contactEmail}
        </a>
      </p>
      <p className={styles.footerText}>
        *This is an automated message. Replies to this email are not monitored.
      </p>
    </footer>
  );
};

export default EmailFooter;
