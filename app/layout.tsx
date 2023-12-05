import "./globals.css";

import Footer from "@/components/footer/Footer";
import HeaderTop from "@/components/header/HeaderTop";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baggashe",
  description: "Baggashe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
