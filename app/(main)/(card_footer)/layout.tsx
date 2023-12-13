import CartFooter from "@/components/footer/CartFooter";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <CartFooter />
    </>
  );
}
