import * as React from "react";
import styles from "./Dashboard.module.css";
import BackgroundShapes from "./BackgroundShapes";
import SignupForm from "./SignupForm";

function Dashboard() {
  return (
    <main className={styles.dashboard27}>
      <div className={styles.mainBg} />
      <BackgroundShapes />
      <SignupForm />
    </main>
  );
}

export default Dashboard;
