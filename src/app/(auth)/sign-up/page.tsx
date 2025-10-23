import React from "react";
import AuthForm from "@/components/AuthForm";
import SocialProviders from "@/components/SocialProviders";
import Link from "next/link";
import { signUp } from "@/lib/auth/actions";

export default function SignUpPage() {
  return (
    <div>
      <header className="mb-6 text-center">
        <h1 className="text-heading-3 text-dark-900">Create your account</h1>
        <p className="mt-2 text-body text-dark-700">Start your journey with us</p>
      </header>

      <div className="space-y-6">
        <SocialProviders />

        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden>
            <div className="w-full border-t border-light-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-light-100 px-3 text-caption text-dark-700">Or sign up with email</span>
          </div>
        </div>

        <AuthForm mode="sign-up" onSubmit={signUp}/>

        <p className="text-center text-caption text-dark-700">
          Already have an account? <Link href="/sign-in" className="text-[--color-green] underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
