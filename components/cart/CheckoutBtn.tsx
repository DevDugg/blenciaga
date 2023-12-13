"use client";

import Button from "../Button";
import useMediaQuery from "@/hooks/useMediaQuery";

const CheckoutBtn = () => {
  const sm = useMediaQuery("(max-width:640px)");
  return (
    <div className="flex items-center justify-center py-[60px] px-3">
      <Button title="Proceed to checkout (2)" width={sm ? "100%" : 400} black fixedOnMobile />
    </div>
  );
};
export default CheckoutBtn;
