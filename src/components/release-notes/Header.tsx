"use client";
import * as React from "react";
import styles from "./ReleaseNotes.module.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.headerSection}>
      <div className={styles.headerContent}>
        <nav className={styles.navigationSection}>
          <div className={styles.logoContainer}>
            <img
              src="https://api.builder.io/api/v1/image/assets/c68f06b9e23d484795965a2a22aa9d8c/9e70fe58cfeb166c4f30fb9c0dfe2ce0562ae80b?placeholderIfAbsent=true"
              alt="Company Logo"
              className={styles.logoImage}
            />
          </div>
          <div className={styles.navigationMenu}>
            <img
              src="https://api.builder.io/api/v1/image/assets/c68f06b9e23d484795965a2a22aa9d8c/264df5e15004797a25988315ae91c7761bd8b7c8?placeholderIfAbsent=true"
              alt="Menu"
              className={styles.menuIcon}
            />
            <div className={styles.menuItem}>Students</div>
            <div className={styles.menuItem}>Locations</div>
            <div className={styles.menuItem}>Staff</div>
            <div className={styles.menuItem}>Student Logbook</div>
            <div className={styles.menuItem}>Orders</div>
            <div className={styles.menuItem}>Leads</div>
            <div className={styles.menuItem}>Support</div>
          </div>
        </nav>
        <div className={styles.userSection}>
          <div>
            <span className={styles.boldText}>Hello</span> Zafar!
          </div>
          <div>Log off</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
