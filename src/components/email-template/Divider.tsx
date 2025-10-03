import React from "react";
import styles from "./EmailTemplate.module.css";

const Divider: React.FC = () => {
  return (
    <div>
      <svg
        width="80"
        height="2"
        viewBox="0 0 80 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.divider}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M80 1.2002H0V0.200195H80V1.2002Z"
          fill="#E9EAEB"
        />
      </svg>
    </div>
  );
};

export default Divider;
