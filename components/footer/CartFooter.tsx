"use client";

import Button from "../Button";
import Container from "../Container";
import FooterBottom from "./FooterBottom";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

const accepted = ["/visa.svg", "/paypal.svg", "/visa.svg", "/paypal.svg", "/visa.svg", "/paypal.svg"];

const CartFooter = () => {
  const buttonBreakpoint = useMediaQuery("(max-width:1024px)");
  return (
    <footer className="cart-footer border-t border-BLACK pt-[60px]">
      <Container className="flex flex-col items-center">
        <div className="grid grid-cols-THREE gap-20 w-full max-w-screen-xl px-3 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:max-w-[50%] max-md:max-w-none max-lg:gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm uppercase font-bold text-center">We accept</h3>
            <div className="flex items-center justify-center gap-3">
              {accepted.map((item, i) => (
                <Image
                  src={item}
                  key={i}
                  alt="Accepted Payment Method icon"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm uppercase font-bold text-center">CUSTOMER SUPPORT</h3>
            <p className="text-sm text-center">
              Our client advisors are available Mon-Fri 9am - 9pm ET & Sat-Sun 10am - 7pm ET
            </p>
            <Button title="CALL US AT +1 646 889 1895" width={buttonBreakpoint ? "100%" : 250} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm uppercase font-bold text-center">FREE SHIPPING, FREE RETURNS</h3>
            <p className="text-sm text-center">
              We offer complimentary shipping and returns worldwide. Free returns until 1/15 for orders placed between
              11/2-12/16. For further details, please consult the{" "}
              <a href="#" className="underline">
                FAQ section
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
      <div className="pt-20">
        <FooterBottom />
      </div>
    </footer>
  );
};
export default CartFooter;
