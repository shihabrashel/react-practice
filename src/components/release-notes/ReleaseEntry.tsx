"use client";
import * as React from "react";
import styles from "./ReleaseNotes.module.css";

interface ReleaseEntryProps {
  product: string;
  version: string;
  date: string;
  title: string;
  description: string;
  changes: {
    fixed?: string[];
    added?: string[];
    updated?: string[];
  };
  isSpaced?: boolean;
}

const ReleaseEntry: React.FC<ReleaseEntryProps> = ({
  product,
  version,
  date,
  title,
  description,
  changes,
  isSpaced = false,
}) => {
  return (
    <>
      <h3
        className={isSpaced ? styles.releaseEntrySpaced : styles.releaseTitle}
      >
        # <span className={styles.productHighlight}>{product}</span> [Ver{" "}
        {version}] - {date}
      </h3>
      <div className={styles.releaseEntry}>
        <h4 className={styles.entryTitle}>{title}</h4>
        <p className={styles.entryDescription}>{description}</p>
      </div>
      <div className={styles.changelogContainer}>
        {changes.fixed && (
          <>
            <div className={styles.changelogSection}>## Fixed</div>
            <div className={styles.changelogContent}>
              {changes.fixed.map((item, index) => (
                <div key={index}>- {item}</div>
              ))}
            </div>
          </>
        )}
        {changes.added && (
          <>
            <div className={styles.changelogSectionSpaced}>## Added</div>
            <div className={styles.changelogContentSpaced}>
              {changes.added.map((item, index) => (
                <div key={index}>- {item}</div>
              ))}
            </div>
          </>
        )}
        {changes.updated && (
          <>
            <div className={styles.changelogSectionSpaced}>## Updated</div>
            <div className={styles.changelogContentSpaced}>
              {changes.updated.map((item, index) => (
                <div key={index}>- {item}</div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ReleaseEntry;
