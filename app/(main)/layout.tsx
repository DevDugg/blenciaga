import "swiper/css";

import Footer from "@/components/footer/Footer";
import HeaderTop from "@/components/header/HeaderTop";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderTop />
      {children}
      <Footer />
    </>
  );
}
