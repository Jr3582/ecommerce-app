"use client";

import React from "react";

interface AuthFormProps {
  mode: "sign-in" | "sign-up";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const isSignUp = mode === "sign-up";

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()} aria-label={`${mode} form`}>
      <div>
        <label htmlFor="email" className="block text-caption text-dark-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-light-300 bg-light-100 px-3 py-2 text-body text-dark-900 focus:outline-none focus:ring-2 focus:ring-[--color-dark-500]"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-caption text-dark-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={6}
          className="mt-1 w-full rounded-md border border-light-300 bg-light-100 px-3 py-2 text-body text-dark-900 focus:outline-none focus:ring-2 focus:ring-[--color-dark-500]"
          placeholder="Enter your password"
        />
      </div>

      {isSignUp && (
        <div>
          <label htmlFor="confirm" className="block text-caption text-dark-700">
            Confirm password
          </label>
          <input
            id="confirm"
            name="confirm"
            type="password"
            required
            minLength={6}
            className="mt-1 w-full rounded-md border border-light-300 bg-light-100 px-3 py-2 text-body text-dark-900 focus:outline-none focus:ring-2 focus:ring-[--color-dark-500]"
            placeholder="Repeat your password"
          />
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <input id="remember" name="remember" type="checkbox" className="h-4 w-4 rounded border-light-300 text-[--color-green] focus:ring-[--color-green]" />
          <label htmlFor="remember" className="text-caption text-dark-700">Remember me</label>
        </div>

        <button type="button" className="text-caption text-dark-700 underline">
          Forgot password?
        </button>
      </div>

      <div>
        <button
          type="submit"
          className="w-full rounded-md bg-[--color-dark-900] px-4 py-2 text-body text-light-100 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[--color-dark-500]"
        >
          {isSignUp ? "Create account" : "Sign in"}
        </button>
      </div>
    </form>
  );
}
