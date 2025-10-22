import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components";

export default function RootGroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-light-100">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
