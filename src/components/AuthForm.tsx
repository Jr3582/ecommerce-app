"use client";

import { useRouter } from "next/navigation";
import React, { use, useState } from "react";

interface AuthFormProps {
  mode: "sign-in" | "sign-up";
  onSubmit: (formData: FormData) => Promise<{ok: boolean; userId?: string} | void>;
}

export default function AuthForm({ mode, onSubmit }: AuthFormProps) {
    const [show, setShow] = useState(false);
    const isSignUp = mode === "sign-up";
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        try {
        const result = await onSubmit(formData);
        if (result?.ok) {
            router.push("/");
        }
        } catch (err) {
        console.log("error", err);
        }
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit} aria-label={`${mode} form`}>
          {isSignUp && (
            <div className="space-y-1">
              <label htmlFor="name" className="text-caption text-dark-900">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
                autoComplete="name"
              />
            </div>
          )}
          <div className="space-y-1">
            <label htmlFor="email" className="text-caption text-dark-900">
              Email
            </label>
            <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body text-dark-900 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
            placeholder="you@example.com"
            />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="text-caption text-dark-900">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={show ? "text" : "password"}
              placeholder="minimum 8 characters"
              className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 pr-12 text-body text-dark-900 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
              autoComplete={mode === "sign-in" ? "current-password" : "new-password"}
              minLength={8}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 text-caption text-dark-700"
              onClick={() => setShow((v) => !v)}
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {isSignUp && (
            <div>
            <label htmlFor="confirm" className="block text-caption text-dark-700">
                Confirm password
            </label>
            <input
                id="confirm"
                name="confirm"
                type={show ? "text" : "password"}
                required
                minLength={8}
                className="w-full rounded-xl border border-light-300 bg-light-100 px-4 py-3 pr-12 text-body text-dark-900 placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
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
                className="mt-2 w-full rounded-full bg-dark-900 px-6 py-3 text-body-medium text-light-100 hover:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-dark-900/20"
                >
                {mode === "sign-in" ? "Sign In" : "Sign Up"}
            </button>
        </div>
        </form>
        );
    }
