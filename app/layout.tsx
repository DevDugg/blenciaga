import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";

const BB = localFont({
  src: [
    { path: "../public/BB-Regular.woff2", weight: "400" },
    { path: "../public/BB-CondBold.woff2", weight: "700" },
  ],
  display: "swap",
  variable: "--BB",
});

export const metadata: Metadata = {
  title: "Baggashe",
  description: "Baggashe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${BB.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
