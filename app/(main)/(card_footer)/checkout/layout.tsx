import { CheckoutContextProvider } from "@/context/CheckoutContext";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return <CheckoutContextProvider>{children}</CheckoutContextProvider>;
};
export default Layout;
