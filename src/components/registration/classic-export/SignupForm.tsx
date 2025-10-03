"use client";
import * as React from "react";
import styles from "./Dashboard.module.css";
import FormField from "./FormField";
import CheckboxField from "./CheckboxField";
import SignupButton from "./SignupButton";
import LoginPrompt from "./LoginPrompt";
import PasswordDots from "./PasswordDots";

function SignupClassicExportForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className={styles.input}>
      <div className={styles.bg} />
      <div className={styles.details}>
        <header>
          <h1 className={styles.createanAccount}>Create an Account</h1>
          <p className={styles.createaaccountto}>
            Create a account to continue
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          <FormField
            label="Email address:"
            placeholder="esteban_schiller@gmail.com"
            type="email"
            className={styles.email}
            inputClassName={styles.input2}
            placeholderClassName={styles.estebanSchillergma}
          />

          <FormField
            label="Username"
            placeholder="Username"
            className={styles.username}
            inputClassName={styles.input3}
            placeholderClassName={styles.username3}
          />

          <div className={styles.password}>
            <label className={styles.password2}>Password</label>
            <button
              type="button"
              className={styles.forgetPassword}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              Forget Password?
            </button>
            <input type="password" className={styles.input4} />
            <PasswordDots />
            <CheckboxField />
          </div>

          <SignupButton />
        </form>

        <LoginPrompt />
      </div>
    </section>
  );
}

export default SignupClassicExportForm;
