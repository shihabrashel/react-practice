import React from "react";
import styles from "./Dashboard.module.css";

interface FormInputProps {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

function FormInput({
  label,
  value,
  placeholder,
  type = "text",
  className,
}: FormInputProps) {
  return (
    <>
      <label className={styles.fieldLabel}>{label}</label>
      <div className={className || styles.inputField}>
        {type === "password" ? (
          <input
            type="password"
            placeholder={placeholder}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              width: "100%",
              color: "#a6a6a6",
              fontWeight: 600,
            }}
          />
        ) : (
          <div>{value}</div>
        )}
      </div>
    </>
  );
}

export default FormInput;
