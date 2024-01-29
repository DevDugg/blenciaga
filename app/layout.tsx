import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import CartContextProvider from "@/context/CartContext";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
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
      <body className={`${BB.className} overflow-x-hidden`}>
        <CartContextProvider>
          <ToastContainer />
          {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
