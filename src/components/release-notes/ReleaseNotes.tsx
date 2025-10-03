"use client";
import * as React from "react";
import styles from "./ReleaseNotes.module.css";
import Header from "./Header";
import FilterSection from "./FilterSection";
import YearSidebar from "./YearSidebar";
import ReleaseContent from "./ReleaseContent";

function ReleaseNotes() {
  return (
    <div className={styles.releaseNotesContainer}>
      <Header />
      <FilterSection />
      <div className={styles.mainContent}>
        <div className={styles.contentLayout}>
          <div className={styles.sidebarColumn}>
            <YearSidebar />
          </div>
          <div className={styles.contentColumn}>
            <ReleaseContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReleaseNotes;
