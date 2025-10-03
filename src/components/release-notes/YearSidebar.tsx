"use client";
import * as React from "react";
import styles from "./ReleaseNotes.module.css";

interface YearSidebarProps {}

const YearSidebar: React.FC<YearSidebarProps> = () => {
  const years = [
    { year: "2025", isActive: true },
    { year: "2024", isActive: false },
    { year: "2023", isActive: false },
    { year: "2022", isActive: false },
    { year: "2021", isActive: false },
    { year: "2020", isActive: false },
  ];

  return (
    <aside className={styles.yearSidebar}>
      <div className={styles.yearContainer}>
        {years.map((yearData, index) => (
          <div key={yearData.year}>
            <div
              className={
                yearData.isActive ? styles.activeYear : styles.yearItem
              }
            >
              <div className={styles.yearText}>{yearData.year}</div>
              <img
                src={
                  yearData.isActive
                    ? "https://api.builder.io/api/v1/image/assets/c68f06b9e23d484795965a2a22aa9d8c/672296c8d65799dce7550a388295707099794e81?placeholderIfAbsent=true"
                    : "https://api.builder.io/api/v1/image/assets/c68f06b9e23d484795965a2a22aa9d8c/e9b0b47bb096fb8690ba220afd80375ff3a1f462?placeholderIfAbsent=true"
                }
                alt={`${yearData.isActive ? "Collapse" : "Expand"} ${yearData.year}`}
                className={styles.expandIcon}
              />
            </div>
            {index < years.length - 1 && <div className={styles.yearDivider} />}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default YearSidebar;
