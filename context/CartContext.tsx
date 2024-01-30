"use client";

import { CartQuery, CreateCartMutation } from "@/types/storefront.generated";
import { CreateCart, ICartClass } from "@/utils/cart";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";
import { ToastContainer, cssTransition } from "react-toastify";

import CartProvider from "@/providers/CartProvider";
import colors from "@/settings/ui/colors";
import { transition } from "@/motion/default.motion";

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

  const Zoom = cssTransition({
    enter: "scale-in-hor-right",
    exit: "scale-out-hor-right",
    collapseDuration: transition.duration,
  });

  return (
    <CartContext.Provider
      value={{
        cartState: cartStateMemo,
        cartClass: cartClassMemo,
      }}
    >
      <CartProvider>
        <ToastContainer
          progressStyle={{ background: colors.BLACK }}
          bodyStyle={{ color: colors.BLACK }}
          transition={Zoom}
          position="bottom-right"
        />
        {children}
      </CartProvider>
    </CartContext.Provider>
  );
};

export default CartContextProvider;
