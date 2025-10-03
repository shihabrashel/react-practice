"use client";
import React from "react";
import styles from "./EmailTemplate.module.css";
import EmailHeader from "./EmailHeader";
import WelcomeMessage from "./WelcomeMessage";
import Divider from "./Divider";
import LoginCredentials from "./LoginCredentials";
import AppDownload from "./AppDownload";
import EmailFooter from "./EmailFooter";

const EmailTemplate: React.FC = () => {
  const welcomeMessage = `Hello Rehman Hittini, Thank you for enrolling your child at Best Brains! We're excited to have your family join our learning community, and we can't wait to begin this educational journey together. As part of your enrollment, your child now has access to bbSupport, our online platform that provides 24/7 teacher support and unlimited academic help outside of regular class hours. Whether your child needs extra practice or help understanding a concept, bbSupport ensures they're never on their own.`;

  const closingMessage = `We encourage your child to log in regularly and take advantage of the extra practice and guided support available. If you have any questions, feel free to reach out to us. We'll be in touch soon with your child's class schedule and other important information. Welcome again to Best Brains!`;

  return (
    <article className={styles.emailTemplate}>
      <EmailHeader
        imageUrl="https://api.builder.io/api/v1/image/assets/TEMP/484e1d5a1ef90efb8494b1cdd33f1c63ab597768?width=1152"
        altText="Email template header"
      />
      <main className={styles.body}>
        <WelcomeMessage message={welcomeMessage} />
        <Divider />
        <LoginCredentials username="TEJA1214" password="beyourbest" />
        <AppDownload
          appIconUrl="https://api.builder.io/api/v1/image/assets/TEMP/f352f22a5df834bc11d4041a3afc57b3e43c13ae?width=120"
          googlePlayBadgeUrl="https://api.builder.io/api/v1/image/assets/TEMP/eeef806d0840b1d958f862d4bc2652e36443779d?width=216"
        />
        <WelcomeMessage message={closingMessage} />
        <EmailFooter
          centerName="Best Brains Center Name"
          contactEmail="center.email@bestbrains.com"
        />
      </main>
    </article>
  );
};

export default EmailTemplate;
