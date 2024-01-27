"use client";

import { CartQuery, CreateCartMutation } from "@/types/storefront.generated";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";

export type DualCartType = CartQuery["cart"] | NonNullable<CreateCartMutation["cartCreate"]>["cart"];

export interface CartContextType {
  cart: DualCartType;
  setCart: Dispatch<SetStateAction<DualCartType>>;
}

export const CartContext = createContext({} as CartContextType);

const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<DualCartType>({} as DualCartType);
  const cartMemo = useMemo(() => ({ cart, setCart }), [cart, setCart]);

  return <CartContext.Provider value={cartMemo}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
