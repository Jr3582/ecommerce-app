import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
// root layout intentionally minimal; Navbar/Footer live in group layouts

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Nike",
  description: "An e-commerce platform for Nike shoes 💛",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className}  antialiased`}
      >
        {children}
        {/* Removed Navbar and Footer for minimal layout */}
      </body>
    </html>
  );
}
