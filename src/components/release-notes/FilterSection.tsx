"use client";
import * as React from "react";
import styles from "./ReleaseNotes.module.css";

interface FilterSectionProps {}

const FilterSection: React.FC<FilterSectionProps> = () => {
  return (
    <section className={styles.filterContainer}>
      <div className={styles.filterLeft}>
        <h1 className={styles.pageTitle}>Release Notes</h1>
        <div className={styles.tabContainer}>
          <div className={styles.activeTab}>
            <div className={styles.tabText}>Corporate</div>
          </div>
        </div>
      </div>
      <nav className={styles.productFilters}>
        <div className={styles.activeFilter}>All Products</div>
        <div className={styles.filterItem}>bbPortal</div>
        <div className={styles.filterItem}>bbSupport</div>
        <div className={styles.filterItem}>bbConnect</div>
        <div className={styles.filterItem}>bbParent</div>
        <div className={styles.filterItem}>bbAnswerKeys</div>
        <div className={styles.filterItem}>bbEnroll</div>
      </nav>
      <div className={styles.filterUnderline} />
    </section>
  );
};

export default FilterSection;
