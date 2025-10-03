import * as React from "react";

export function TermsCheckbox() {
  return (
    <div className="flex items-center mt-6 ml-9 max-md:ml-2.5">
      <input
        type="checkbox"
        id="terms"
        className="mr-3 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor="terms" className="font-semibold text-neutral-800">
        I accept terms and conditions
      </label>
    </div>
  );
}
