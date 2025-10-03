import * as React from "react";

interface FormInputProps {
  label: string;
  value?: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

export function FormInput({
  label,
  value,
  placeholder,
  type = "text",
  className = "",
}: FormInputProps) {
  return (
    <div className={className}>
      <label className="block font-semibold text-neutral-800 mb-4">
        {label}
      </label>
      <div className="flex flex-col justify-center items-start p-4 font-semibold rounded-lg border border-solid bg-slate-100 border-zinc-300 text-neutral-400 max-md:pr-5 max-md:max-w-full">
        {value ? (
          <span>{value}</span>
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="bg-transparent border-none outline-none w-full text-neutral-400"
          />
        )}
      </div>
    </div>
  );
}
