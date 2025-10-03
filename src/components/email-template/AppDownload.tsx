import React from "react";
import styles from "./EmailTemplate.module.css";
import AppStoreBadge from "./AppStoreBadge";

interface AppDownloadProps {
  appIconUrl: string;
  googlePlayBadgeUrl: string;
}

const AppDownload: React.FC<AppDownloadProps> = ({
  appIconUrl,
  googlePlayBadgeUrl,
}) => {
  return (
    <>
      <p className={styles.downloadText}>
        You can download the app here. Available for use on tablets only.
      </p>
      <section className={styles.appPromotion}>
        <div className={styles.appContent}>
          <img
            src={appIconUrl}
            alt="bbSupport app icon"
            className={styles.appIcon}
          />
          <div className={styles.appInfo}>
            <h3 className={styles.appTitle}>
              <span className={styles.highlightText}>bbSupport</span> App
            </h3>
            <p className={styles.appDescription}>
              Take your teacher home with bbSupport
            </p>
          </div>
          <div className={styles.downloadActions}>
            <AppStoreBadge />
            <img
              src={googlePlayBadgeUrl}
              alt="Get it on Google Play"
              className={styles.appStoreBadge}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDownload;
