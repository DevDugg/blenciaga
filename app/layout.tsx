import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const os = Open_Sans({ weight: ["400", "700"], subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Baggashe",
  description: "Baggashe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={os.className}>{children}</body>
    </html>
  );
}
