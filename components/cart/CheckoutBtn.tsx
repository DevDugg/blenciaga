"use client";

import Button from "../Button";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const CheckoutBtn = () => {
  const { cartState } = useContext(CartContext).cartState;
  const sm = useMediaQuery("(max-width:640px)");
  return (
    <div className="flex items-center justify-center py-[60px] px-3">
      <Button
        title={`Proceed to checkout (${cartState?.totalQuantity || 0})`}
        width={sm ? "100%" : 400}
        black
        fixedOnMobile
      />
    </div>
  );
};
export default CheckoutBtn;
