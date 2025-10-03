"use client";
import React from "react";
import styles from "./Dashboard.module.css";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import PasswordSection from "./PasswordSection";
import SignupButton from "./SignupButton";
import LoginPrompt from "./LoginPrompt";

function SignupForm() {
  const handleSignup = () => {
    // Handle signup logic
    console.log("Signup clicked");
  };

  return (
    <div className={styles.formContainer}>
      <FormHeader
        title="Create an Account"
        subtitle="Create a account to continue"
      />

      <FormInput label="Email address:" value="esteban_schiller@gmail.com" />

      <FormInput label="Username" value="Username" />

      <PasswordSection />

      <p className={styles.termsText}>I accept terms and conditions</p>

      <SignupButton onClick={handleSignup}>Sign Up</SignupButton>

      <LoginPrompt />
    </div>
  );
}

export default SignupForm;
