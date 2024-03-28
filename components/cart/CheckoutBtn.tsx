"use client";

import Button from "../Button";
import { CartContext } from "@/context/CartContext";
import { CreateCheckout } from "@/utils/checkout";
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
        onClick={() => {
          if (!cartState?.lines) return;

          const createCheckout = async () => {
            const checkout = new CreateCheckout();
            await checkout.createCheckout({
              lineItems: cartState?.lines.edges.map((line) => ({
                quantity: line.node.quantity,
                variantId: line.node.merchandise.id,
              })),
            });
            const checkoutId = checkout.getCheckoutId();
            if (!checkoutId) throw new Error("No checkoutId found");
            const encoded = encodeURIComponent(checkoutId);
            window.location.href = `/checkout/${encoded}`;
          };
          createCheckout();
        }}
      />
    </div>
  );
};
export default CheckoutBtn;
