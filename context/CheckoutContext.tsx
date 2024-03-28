"use client";

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";
import { ToastContainer, cssTransition } from "react-toastify";

import CartProvider from "@/providers/CartProvider";
import { CreateCheckoutMutation } from "@/types/storefront.generated";
import { ICheckoutClass } from "@/utils/checkout";
import colors from "@/settings/ui/colors";
import { transition } from "@/motion/default.motion";

export type CheckOutType = NonNullable<CreateCheckoutMutation["checkoutCreate"]>["checkout"];

export interface CheckOutContextType {
  checkOutState: {
    checkOutState: CheckOutType;
    setCheckOutState: Dispatch<SetStateAction<CheckOutType>>;
  };
  checkOutClass: {
    checkOutClass: ICheckoutClass;
    setCheckOutClass: Dispatch<SetStateAction<ICheckoutClass>>;
  };
}

export const CheckoutContext = createContext({} as CheckOutContextType);

export const CheckoutContextProvider = ({ children }: PropsWithChildren) => {
  const [checkOutState, setCheckOutState] = useState<CheckOutType>({} as CheckOutType);
  const [checkOutClass, setCheckOutClass] = useState<ICheckoutClass>({} as ICheckoutClass);
  const checkOutStateMemo = useMemo(() => ({ checkOutState, setCheckOutState }), [checkOutState, setCheckOutState]);
  const checkOutClassMemo = useMemo(() => ({ checkOutClass, setCheckOutClass }), [checkOutClass, setCheckOutClass]);

  const Zoom = cssTransition({
    enter: "scale-in-hor-right",
    exit: "scale-out-hor-right",
    collapseDuration: transition.duration,
  });

  return (
    <CheckoutContext.Provider
      value={{
        checkOutState: checkOutStateMemo,
        checkOutClass: checkOutClassMemo,
      }}
    >
      <CartProvider>
        <ToastContainer
          progressStyle={{ background: colors.GREEN }}
          bodyStyle={{ color: colors.BLACK }}
          transition={Zoom}
          position="bottom-right"
        />
        {children}
      </CartProvider>
    </CheckoutContext.Provider>
  );
};

export default CheckoutContext;
