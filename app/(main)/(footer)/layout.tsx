import Footer from "@/components/footer/Footer";
import ProductOptionContextProvider from "@/context/ProductOptionContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductOptionContextProvider>{children}</ProductOptionContextProvider>
      <Footer />
    </>
  );
}
