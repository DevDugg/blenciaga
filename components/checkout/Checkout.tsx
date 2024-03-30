"use client";

import { useContext, useMemo } from "react";

import CheckoutContext from "@/context/CheckoutContext";
import getCurrencySymbol from "@/utils/getCurrencySymbol";

const Checkout = () => {
  const { checkOutState } = useContext(CheckoutContext).checkOutState;
  const productsQuantity = useMemo(() => checkOutState?.lineItems?.edges.length || 0, [checkOutState]);
  return (
    <div className="max-w-[700px] w-full border-x border-BLACK max-lg:max-w-[800px] max-[850px]:max-w-none">
      <div className="cart-head flex flex-col gap-2 justify-center items-center text-center py-16">
        <h1 className="text-[22px] uppercase font-bold">Checkout</h1>
        {checkOutState?.lineItemsSubtotalPrice && (
          <div className="flex items-center gap-5 w-fit text-sm">
            <p className="text-GRAY">{`${productsQuantity} ${[productsQuantity === 1 ? "Item" : "Items"]}`}</p>
            <span>{`${getCurrencySymbol(checkOutState?.lineItemsSubtotalPrice.currencyCode)} ${
              checkOutState?.lineItemsSubtotalPrice.amount
            }`}</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Checkout;
