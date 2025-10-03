"use client";
import * as React from "react";
import styles from "./Dashboard.module.css";

interface FormFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
  inputClassName?: string;
  placeholderClassName?: string;
}

function FormField({
  label,
  placeholder,
  type = "text",
  className,
  inputClassName,
  placeholderClassName,
}: FormFieldProps) {
  const [value, setValue] = React.useState("");

  return (
    <div className={className}>
      <label className={styles.emailaddress}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={inputClassName}
      />
      {!value && <div className={placeholderClassName}>{placeholder}</div>}
    </div>
  );
}

export default FormField;
