"use client";

import { useContext, useEffect } from "react";

import Button from "../Button";
import { CartContext } from "@/context/CartContext";
import CheckoutBtn from "./CheckoutBtn";
import { CreateCart } from "@/utils/cart";
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
  const { cart, setCart } = useContext(CartContext);
  const productsQuantity = cart?.lines?.edges.length || 0;
  const hasProducts = cart && productsQuantity > 0;

  useEffect(() => {
    if (cart?.id) return;
    const cartClass = new CreateCart({});

    const getOrCreateCart = async () => {
      const oldCart = await cartClass.getCart();
      console.log(oldCart);
      if (oldCart?.id) return setCart(oldCart);
      const newCart = await cartClass.createCart({});
      setCart(newCart);
    };

    getOrCreateCart();
  }, []);

  return (
    <div className="max-w-[700px] w-full border-x border-BLACK max-lg:max-w-[800px] max-[850px]:max-w-none">
      <div className="cart-head flex flex-col gap-2 justify-center text-center py-16">
        <h1 className="text-[22px] uppercase font-bold">Cart</h1>
        <p>{cart?.id}</p>
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
      {/* hasProducts already checking if cart.cart is present or not */}
      {hasProducts ? (
        <>
          <div>
            {/* hasProducts already checking if cart.cart is present or not */}
            {/* for that reason */}
            {/* @ts-ignore */}
            {cart.cart.lines.edges.map((product) => (
              <Product key={product.node.id} product={product.node} />
            ))}
          </div>
          <ul className="flex flex-col gap-4 border-t border-BLACK px-4 py-10 uppercase">
            {/* <li className="flex items-center gap-6 justify-between">
              <p className="text-sm">Shipping cost:</p>
              <p className="text-sm">$ 0.00</p>
            </li>
            <li className="flex items-center gap-6 justify-between">
              <p className="text-sm">Sales Tax:</p>
              <p className="text-sm">$ 0.00</p>
            </li> */}
            <li className="flex items-center gap-6 justify-between font-bold">
              <p className="text-sm">Estimated total:</p>
              <p className="text-sm">{`${getCurrencySymbol(cart?.cost.subtotalAmount.currencyCode)} ${
                cart?.cost.subtotalAmount.amount
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
