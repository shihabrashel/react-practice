"use client";
import * as React from "react";
import styles from "./ReleaseNotes.module.css";
import ReleaseEntry from "./ReleaseEntry";

interface ReleaseContentProps {}

const ReleaseContent: React.FC<ReleaseContentProps> = () => {
  const releaseData = [
    {
      product: "bbSupport",
      version: "3.5.5",
      date: "May 26, 2025",
      title: "Default from and reply to Email address in portals",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      changes: {
        fixed: ["Minor style fixes and improvements;"],
        added: [
          "WooCommerce 9.8 compatibility added;",
          "Yith WooCommerce Wishlist 4.5 compatibility added;",
          "Web accessibility: basic compliance added;",
        ],
        updated: ["Web accessibility: basic compliance added;"],
      },
    },
    {
      product: "bbConnect",
      version: "3.5.5",
      date: "May 16, 2025",
      title: "Default from and reply to Email address in portals",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      changes: {
        fixed: ["Minor style fixes and improvements;"],
        added: [
          "WooCommerce 9.8 compatibility added;",
          "Yith WooCommerce Wishlist 4.5 compatibility added;",
          "Web accessibility: basic compliance added;",
        ],
        updated: ["Web accessibility: basic compliance added;"],
      },
      isSpaced: true,
    },
    {
      product: "bbPortal",
      version: "3.5.5",
      date: "April 26, 2025",
      title: "Default from and reply to Email address in portals",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      changes: {
        fixed: ["Minor style fixes and improvements;"],
        added: [
          "WooCommerce 9.8 compatibility added;",
          "Yith WooCommerce Wishlist 4.5 compatibility added;",
          "Web accessibility: basic compliance added;",
        ],
        updated: ["Web accessibility: basic compliance added;"],
      },
    },
    {
      product: "bbEnroll",
      version: "3.5.5",
      date: "April 02, 2025",
      title: "Default from and reply to Email address in portals",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      changes: {
        fixed: ["Minor style fixes and improvements;"],
        added: [
          "WooCommerce 9.8 compatibility added;",
          "Yith WooCommerce Wishlist 4.5 compatibility added;",
          "Web accessibility: basic compliance added;",
        ],
        updated: ["Web accessibility: basic compliance added;"],
      },
      isSpaced: true,
    },
  ];

  return (
    <main className={styles.releaseContent}>
      <div className={styles.yearHeader}>
        <h2 className={styles.yearTitle}>2025</h2>
        <div className={styles.timelineDot} />
      </div>

      <div className={styles.monthHeader}>
        <h3 className={styles.monthTitle}>May</h3>
        <div className={styles.monthDot} />
        <div className={styles.releaseTitle}>
          # <span className={styles.productHighlight}>bbSupport</span> [Ver
          3.5.5] - May 26, 2025
        </div>
      </div>

      <div className={styles.releaseEntry}>
        <h4 className={styles.entryTitle}>
          Default from and reply to Email address in portals
        </h4>
        <p className={styles.entryDescription}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>

      <div className={styles.changelogContainer}>
        <div className={styles.changelogSection}>## Fixed</div>
        <div className={styles.changelogContent}>
          - Minor style fixes and improvements;
        </div>
        <div className={styles.changelogSectionSpaced}>## Added</div>
        <div className={styles.changelogContentSpaced}>
          - WooCommerce 9.8 compatibility added; <br />
          - Yith WooCommerce Wishlist 4.5 compatibility added; <br />- Web
          accessibility: basic compliance added;
        </div>
        <div className={styles.changelogSectionSpaced}>## Updated</div>
        <div className={styles.changelogContentSpaced}>
          - Web accessibility: basic compliance added;
        </div>
      </div>

      <ReleaseEntry
        product="bbConnect"
        version="3.5.5"
        date="May 16, 2025"
        title="Default from and reply to Email address in portals"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        changes={{
          fixed: ["Minor style fixes and improvements;"],
          added: [
            "WooCommerce 9.8 compatibility added;",
            "Yith WooCommerce Wishlist 4.5 compatibility added;",
            "Web accessibility: basic compliance added;",
          ],
          updated: ["Web accessibility: basic compliance added;"],
        }}
        isSpaced={true}
      />

      <div className={styles.monthHeaderSpaced}>
        <h3 className={styles.monthTitle}>April</h3>
        <div className={styles.monthDot} />
        <div className={styles.releaseTitle}>
          # <span className={styles.productHighlight}>bbPortal</span> [Ver
          3.5.5] - April 26, 2025
        </div>
      </div>

      <div className={styles.releaseEntry}>
        <h4 className={styles.entryTitle}>
          Default from and reply to Email address in portals
        </h4>
        <p className={styles.entryDescription}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
      </div>

      <div className={styles.changelogContainer}>
        <div className={styles.changelogSection}>## Fixed</div>
        <div className={styles.changelogContent}>
          - Minor style fixes and improvements;
        </div>
        <div className={styles.changelogSectionSpaced}>## Added</div>
        <div className={styles.changelogContentSpaced}>
          - WooCommerce 9.8 compatibility added; <br />
          - Yith WooCommerce Wishlist 4.5 compatibility added; <br />- Web
          accessibility: basic compliance added;
        </div>
        <div className={styles.changelogSectionSpaced}>## Updated</div>
        <div className={styles.changelogContentSpaced}>
          - Web accessibility: basic compliance added;
        </div>
      </div>

      <ReleaseEntry
        product="bbEnroll"
        version="3.5.5"
        date="April 02, 2025"
        title="Default from and reply to Email address in portals"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
        changes={{
          fixed: ["Minor style fixes and improvements;"],
          added: [
            "WooCommerce 9.8 compatibility added;",
            "Yith WooCommerce Wishlist 4.5 compatibility added;",
            "Web accessibility: basic compliance added;",
          ],
          updated: ["Web accessibility: basic compliance added;"],
        }}
        isSpaced={true}
      />
    </main>
  );
};

export default ReleaseContent;
