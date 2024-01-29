"use client";

import { useContext, useMemo } from "react";

import Button from "../Button";
import { CartContext } from "@/context/CartContext";
import CheckoutBtn from "./CheckoutBtn";
import Link from "next/link";
import Product from "./Product";
import getCurrencySymbol from "@/utils/getCurrencySymbol";
import { useMediaQuery } from "usehooks-ts";
import { useRouter } from "next/navigation";

const Cart = () => {
  // other
  const breakpoint = useMediaQuery("(max-width:768px)");

  // utils
  const router = useRouter();

  // data
  const cartContext = useContext(CartContext);
  const {
    cartState,
    // setCartState
  } = cartContext.cartState;
  const productsQuantity = useMemo(() => cartState?.lines?.edges.length || 0, [cartState]);
  const hasProducts = cartState && productsQuantity > 0;
  return (
    <div className="max-w-[700px] w-full border-x border-BLACK max-lg:max-w-[800px] max-[850px]:max-w-none">
      <div className="cart-head flex flex-col gap-2 justify-center text-center py-16">
        <h1 className="text-[22px] uppercase font-bold">Cart</h1>
        <p className="text-sm">{hasProducts ? "Free shipping & returns." : "Your cart is empty."}</p>
      </div>
      {hasProducts ? (
        <ul className="cart-nav flex items-center justify-center gap-3 py-2 border-t border-BLACK">
          <li>
            <Link href={"#"} className="rounded border border-BLACK px-2 py-[6px] text-xs h-full uppercase">
              Cart ({productsQuantity})
            </Link>
          </li>
        </ul>
      ) : null}
      {hasProducts ? (
        <>
          <div>
            {cartState.lines.edges.map((product) => (
              <Product key={product.node.id} product={product.node} />
            ))}
          </div>
          <ul className="flex flex-col gap-4 border-t border-BLACK px-4 py-10 uppercase">
            {/* <li className="flex items-center gap-6 justify-between">
              <p className="text-sm">Shipping cost:</p>
              <p className="text-sm">$ 0.00</p>
            </li> */}
            <li className="flex items-center gap-6 justify-between">
              <p className="text-sm">Sales Tax:</p>
              <p className="text-sm">{`${getCurrencySymbol(cartState?.cost.totalTaxAmount?.currencyCode)} ${
                cartState?.cost.totalTaxAmount?.amount || "0.0"
              }`}</p>
            </li>
            <li className="flex items-center gap-6 justify-between font-bold">
              <p className="text-sm">Estimated total:</p>
              <p className="text-sm">{`${getCurrencySymbol(cartState?.cost.totalAmount.currencyCode)} ${
                cartState?.cost.totalAmount.amount
              }`}</p>
            </li>
          </ul>
          <p className="text-[#767676] w-full normal-case text-center pt-4">
            Pay securely with Apple Pay, Klarna, Paypal or BitPay for eligible products
          </p>
          <CheckoutBtn />
        </>
      ) : (
        <div className="pb-14 pt-24 px-3 flex justify-center">
          <Button
            title="Continue shopping"
            onClick={() => router.push("/collection/new-collection")}
            width={breakpoint ? "100%" : "auto"}
          />
        </div>
      )}
    </div>
  );
};
export default Cart;
