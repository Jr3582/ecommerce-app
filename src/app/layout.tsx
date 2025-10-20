import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Happy Feet",
  description: "An e-commerce platform for shoes — because happy feet makes life complete 💛",
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
      </body>
    </html>
  );
}
