"use client";

import React from "react";
import Image from "next/image";

export default function SocialProviders() {
  return (
    <div className="space-y-3">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-md border border-light-300 bg-light-100 px-4 py-2 text-body text-dark-900 hover:bg-light-200 focus:outline-none focus:ring-2 focus:ring-[--color-dark-500]"
      >
        <Image src="/google.svg" alt="Google" width={18} height={18} />
        Continue with Google
      </button>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-md border border-light-300 bg-light-100 px-4 py-2 text-body text-dark-900 hover:bg-light-200 focus:outline-none focus:ring-2 focus:ring-[--color-dark-500]"
      >
        <Image src="/apple.svg" alt="Apple" width={18} height={18} />
        Continue with Apple
      </button>
    </div>
  );
}
