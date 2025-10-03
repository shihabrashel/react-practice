import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";

interface RegistrationFormProps {
  onSubmit?: (data: {
    email: string;
    username: string;
    password: string;
    acceptTerms: boolean;
  }) => void;
}

export function RegistrationFormSmartExport({
  onSubmit,
}: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.mainBg}></div>
      <svg
        className={styles.backgroundShape}
        width="1440"
        height="1070"
        viewBox="0 0 1440 1070"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M272.5 1380.44C519.647 1380.44 720 1180.09 720 932.944C720 800.82 401.153 910.36 310.095 828.444C230.823 757.131 387.523 485.444 272.5 485.444C25.3526 485.444 -175 685.797 -175 932.944C-175 1180.09 25.3526 1380.44 272.5 1380.44Z"
          fill="#568AFF"
        />
        <path
          opacity="0.541829"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M864.469 -208.471C814.503 74.8982 1003.71 345.119 1287.08 395.085C1438.57 421.796 1377.44 34.0743 1489.77 -53.768C1587.56 -130.241 1867.38 104.351 1890.64 -27.5293C1940.6 -310.898 1751.39 -581.119 1468.02 -631.085C1184.66 -681.05 914.435 -491.84 864.469 -208.471Z"
          fill="#568AFF"
        />
        <path
          opacity="0.6"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M219.512 -233.502C-12.7303 -148.972 -132.476 107.822 -47.9461 340.065C-2.75693 464.221 259.396 252.235 372.979 298.067C471.861 337.967 417.534 646.864 525.62 607.523C757.863 522.994 877.608 266.2 793.079 33.9569C708.549 -198.286 451.755 -318.031 219.512 -233.502Z"
          fill="#568AFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2006.38 1032.4C2061.52 719.665 1852.7 421.437 1539.96 366.292C1372.77 336.812 1440.24 764.72 1316.27 861.667C1208.34 946.066 899.512 687.159 873.848 832.709C818.703 1145.45 1027.53 1443.68 1340.26 1498.82C1653 1553.97 1951.23 1345.14 2006.38 1032.4Z"
          fill="#568AFF"
        />
      </svg>

      <div className={styles.inputContainer}>
        <div className={styles.inputBg}></div>
        <div className={styles.formDetails}>
          <div className={styles.createAccountTitle}>Create an Account</div>
          <div className={styles.createAccountSubtitle}>
            Create a account to continue
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.emailSection}>
              <div className={styles.emailLabel}>Email address:</div>
              <div className={styles.emailInputContainer}>
                <input
                  type="email"
                  className={styles.emailInput}
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                {!formData.email && (
                  <div className={styles.emailPlaceholder}>
                    esteban_schiller@gmail.com
                  </div>
                )}
              </div>
            </div>

            <div className={styles.usernameSection}>
              <div className={styles.usernameLabel}>Username</div>
              <div className={styles.usernameInputContainer}>
                <input
                  type="text"
                  className={styles.usernameInput}
                  value={formData.username}
                  onChange={(e) =>
                    handleInputChange("username", e.target.value)
                  }
                />
                {!formData.username && (
                  <div className={styles.usernamePlaceholder}>Username</div>
                )}
              </div>
            </div>

            <div className={styles.passwordSection}>
              <div className={styles.passwordLabel}>Password</div>
              <div className={styles.forgotPasswordLabel}>Forget Password?</div>
              <div className={styles.passwordInputContainer}>
                <input
                  type="password"
                  className={styles.passwordInput}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                />
                {formData.password && (
                  <svg
                    className={styles.passwordDots}
                    width="164"
                    height="14"
                    viewBox="0 0 164 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {Array.from({
                      length: Math.min(formData.password.length, 6),
                    }).map((_, i) => (
                      <circle
                        key={i}
                        cx={7 + i * 30}
                        cy={7}
                        r={7}
                        fill="#A6A6A6"
                      />
                    ))}
                  </svg>
                )}
              </div>

              <div className={styles.termsSection}>
                <div className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    id="terms"
                    className={styles.hiddenCheckbox}
                    checked={formData.acceptTerms}
                    onChange={(e) =>
                      handleInputChange("acceptTerms", e.target.checked)
                    }
                  />
                  <label htmlFor="terms" className={styles.customCheckbox}>
                    <div className={styles.checkboxBorder}>
                      {formData.acceptTerms && (
                        <div className={styles.checkboxChecked}>
                          <svg
                            className={styles.checkIcon}
                            width="12"
                            height="9"
                            viewBox="0 0 12 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.62583 4.17573C1.39151 3.94142 1.01161 3.94142 0.777298 4.17573C0.542984 4.41004 0.542984 4.78994 0.777298 5.02426L3.7773 8.02426C4.01161 8.25857 4.39151 8.25857 4.62583 8.02426L11.2258 1.42426C11.4601 1.18994 11.4601 0.810044 11.2258 0.57573C10.9915 0.341415 10.6116 0.341415 10.3773 0.57573L4.20156 6.75147L1.62583 4.17573Z"
                              fill="#656565"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
                <div className={styles.termsText}>
                  I accept terms and conditions
                </div>
              </div>
            </div>

            <button type="submit" className={styles.signUpButton}>
              <div className={styles.signUpText}>Sign Up</div>
            </button>
          </form>

          <div className={styles.loginSection}>
            <div className={styles.alreadyHaveAccount}>
              Already have an account?{" "}
            </div>
            <button type="button" className={styles.loginLink}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationFormSmartExport;
