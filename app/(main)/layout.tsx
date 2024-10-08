import "swiper/css";

import HeaderTop from "@/components/header/HeaderTop";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderTop />
      {children}
    </>
  );
}
