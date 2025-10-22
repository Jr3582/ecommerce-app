import React from "react";
import AuthForm from "@/components/AuthForm";
import SocialProviders from "@/components/SocialProviders";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div>
      <header className="mb-6 text-center">
        <h1 className="text-heading-3 text-dark-900">Welcome back</h1>
        <p className="mt-2 text-body text-dark-700">Sign in to continue to your account</p>
      </header>

      <div className="space-y-6">
        <SocialProviders />

        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden>
            <div className="w-full border-t border-light-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-light-100 px-3 text-caption text-dark-700">Or continue with</span>
          </div>
        </div>

        <AuthForm mode="sign-in" />

        <p className="text-center text-caption text-dark-700">
          Don't have an account? <Link href="/sign-up" className="text-[--color-green] underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}
