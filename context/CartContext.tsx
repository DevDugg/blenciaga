"use client";

import { CartQuery, CreateCartMutation } from "@/types/storefront.generated";
import { CreateCart, ICartClass } from "@/utils/cart";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";

import CartProvider from "@/providers/CartProvider";

export type DualCartType = CartQuery["cart"] | NonNullable<CreateCartMutation["cartCreate"]>["cart"];

export interface CartContextType {
  cartState: {
    cartState: DualCartType;
    setCartState: Dispatch<SetStateAction<DualCartType>>;
  };
  cartClass: {
    cartClass: ICartClass;
    setCartClass: Dispatch<SetStateAction<ICartClass>>;
  };
}

export const CartContext = createContext({} as CartContextType);

const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cartState, setCartState] = useState<DualCartType>({} as DualCartType);
  const [cartClass, setCartClass] = useState<ICartClass>(new CreateCart({}) as ICartClass);
  const cartStateMemo = useMemo(() => ({ cartState, setCartState }), [cartState, setCartState]);
  const cartClassMemo = useMemo(() => ({ cartClass, setCartClass }), [cartClass, setCartClass]);

  return (
    <CartContext.Provider
      value={{
        cartState: cartStateMemo,
        cartClass: cartClassMemo,
      }}
    >
      <CartProvider>{children}</CartProvider>
    </CartContext.Provider>
  );
};

export default CartContextProvider;
