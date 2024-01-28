"use client";

import { PropsWithChildren, useContext } from "react";

import { CartContext } from "@/context/CartContext";
import { useEffectOnce } from "usehooks-ts";

const CartProvider = ({ children }: PropsWithChildren) => {
  const cartContext = useContext(CartContext);
  const { cartState, setCartState } = cartContext.cartState;
  const { cartClass, setCartClass } = cartContext.cartClass;

  useEffectOnce(() => {
    if (cartState?.id) return;

    const getOrCreateCart = async () => {
      const oldCart = await cartClass.getCart();
      if (oldCart?.id) return setCartState(oldCart);
      const newCart = await cartClass.createCart({});
      setCartState(newCart);
    };

    getOrCreateCart();
  });

  return children;
};
export default CartProvider;
