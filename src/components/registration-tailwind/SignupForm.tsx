"use client";
import * as React from "react";
import { FormInput } from "./FormInput";
import { PasswordField } from "./PasswordField";
import { TermsCheckbox } from "./TermsCheckbox";
import { SignupButton } from "./SignupButton";
import { LoginLink } from "./LoginLink";

export function SignupFormTailwind() {
  return (
    <form className="flex relative flex-col px-14 py-16 -mb-6 max-w-full bg-white rounded-3xl border-zinc-400 w-[630px] max-md:px-5 max-md:mb-2.5">
      <header className="self-center ml-3 text-3xl font-bold tracking-normal text-neutral-800">
        Create an Account
      </header>

      <p className="self-center mt-4 font-semibold text-neutral-800">
        Create a account to continue
      </p>

      <FormInput
        label="Email address:"
        value="esteban_schiller@gmail.com"
        className="mt-9"
      />

      <FormInput label="Username" placeholder="Username" className="mt-10" />

      <PasswordField />

      <TermsCheckbox />

      <SignupButton />

      <LoginLink />
    </form>
  );
}
