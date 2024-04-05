"use client";

import Button from "../Button";
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRouter } from "next/navigation";

// import { CreateCheckout } from "@/utils/checkout";

const CheckoutBtn = () => {
  const { cartState } = useContext(CartContext).cartState;
  const router = useRouter();
  const sm = useMediaQuery("(max-width:640px)");
  return cartState && cartState?.totalQuantity > 0 ? (
    <div className="flex items-center justify-center py-[60px] px-3">
      <Button
        title={`Proceed to checkout (${cartState?.totalQuantity || 0})`}
        width={sm ? "100%" : 400}
        black
        fixedOnMobile
        onClick={() => {
          if (!cartState) return;
          const { checkoutUrl } = cartState;
          router.push(checkoutUrl);
        }}
      />
    </div>
  ) : null;
};
export default CheckoutBtn;
