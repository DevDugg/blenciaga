import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import CartContextProvider from "@/context/CartContext";
import type { Metadata } from "next";
import SmoothScroll from "@/components/products/SmoothScroll";
import localFont from "next/font/local";

// import GlobalProvider from "@/providers/GlobalProvider";

// import StoreProvider from "@/lib/StoreProvider";

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
        <SmoothScroll>
          {/* <StoreProvider> */}
          {/* <GlobalProvider> */}
          <CartContextProvider>{children}</CartContextProvider>
          {/* </GlobalProvider> */}
          {/* </StoreProvider> */}
        </SmoothScroll>
        {`<!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CBZ07X60TD"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-CBZ07X60TD');
        </script>`}
      </body>
    </html>
  );
}
