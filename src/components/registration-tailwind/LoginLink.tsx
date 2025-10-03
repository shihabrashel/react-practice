import * as React from "react";

export function LoginLink() {
  return (
    <div className="flex gap-1.5 self-center mt-5 max-w-full text-right w-[259px]">
      <p className="grow font-semibold text-neutral-800">
        <span style={{ color: "rgba(32,34,36,1)" }}>
          Already have an account?{" "}
        </span>
      </p>
      <button className="font-bold text-blue-400 underline hover:text-blue-500">
        Login
      </button>
    </div>
  );
}
