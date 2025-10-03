import React from "react";
import styles from "./EmailTemplate.module.css";

interface LoginCredentialsProps {
  username: string;
  password: string;
}

const LoginCredentials: React.FC<LoginCredentialsProps> = ({
  username,
  password,
}) => {
  return (
    <section className={styles.credentialsSection}>
      <h2 className={styles.credentialsTitle}>
        Below are your child's login details to access{" "}
        <span className={styles.highlightText}>bbSupport</span>:
      </h2>
      <table className={styles.credentialsTable}>
        <tbody>
          <tr className={styles.tableRow}>
            <th className={styles.tableHeaderCell}>
              <div className={styles.tableHeader}>
                <span className={styles.headerText}>Username</span>
              </div>
            </th>
            <td className={styles.tableCell}>
              <span className={styles.cellText}>{username}</span>
            </td>
          </tr>
          <tr className={styles.tableRow}>
            <th className={styles.tableHeaderCell}>
              <div className={styles.tableHeader}>
                <span className={styles.headerText}>Password (Default)</span>
              </div>
            </th>
            <td className={styles.tableCell}>
              <span className={styles.cellText}>{password}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default LoginCredentials;
