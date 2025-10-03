import * as React from "react";

interface PasswordFieldProps {
  showForgotPassword?: boolean;
}

export function PasswordField({
  showForgotPassword = true,
}: PasswordFieldProps) {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-5 justify-between font-semibold text-neutral-800 max-md:max-w-full">
        <label>Password</label>
        {showForgotPassword && (
          <button className="text-right hover:underline">
            Forget Password?
          </button>
        )}
      </div>
      <div className="flex shrink-0 mt-4 h-14 rounded-lg border border-solid bg-slate-100 border-zinc-300 max-md:max-w-full">
        <input
          type="password"
          className="w-full h-full px-4 bg-transparent border-none outline-none text-neutral-800"
        />
      </div>
    </div>
  );
}
