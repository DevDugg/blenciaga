"use client";

import { useContext, useEffect, useMemo, useState } from "react";

import Button from "../Button";
import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import { ProductOptionContext } from "@/context/ProductOptionContext";
import { ProductQuery } from "@/types/storefront.generated";
import arraysContainSameObjects from "@/utils/arrayContainsSameObject";
import { toast } from "react-toastify";

interface IProps {
  productVariants: NonNullable<ProductQuery["product"]>["variants"]["nodes"] | undefined;
}

const ProductButtons = ({ productVariants }: IProps) => {
  const { productOptions } = useContext(ProductOptionContext);
  const [buttonTitle, setButtonTitle] = useState<string>("Add to cart");
  const cartContext = useContext(CartContext);
  const { cartClass } = cartContext.cartClass;
  const { setCartState } = cartContext.cartState;

  const variant = useMemo(() => {
    if (!productVariants || !productOptions) return null;

    return productVariants.find((productVariant) =>
      arraysContainSameObjects(productVariant.selectedOptions, productOptions),
    );
  }, [productOptions, productVariants]);

  const updateCart = async () => {
    const updatedCart = await cartClass.addToCart(variant!.id);
    if (!updatedCart) return console.log("error updating cart");
    setCartState(updatedCart);
    toast.success("Item added to cart!", {
      icon: (
        <Image src={"/tick.svg"} alt="Tick icon" width={18} height={18} className="object-contain w-[18px] h-[18px]" />
      ),
    });
  };

  useEffect(() => {
    const selectedSize = productOptions.find((option) => option.name === "Size");
    if (!selectedSize) return setButtonTitle("Select Size");
    setButtonTitle("Add to cart");
  }, [productOptions]);

  return (
    <div className="flex flex-col gap-2 text-xs">
      <Button
        title={buttonTitle}
        black
        fixedOnMobile
        onClick={() => {
          if (!productOptions.find((option) => option.name === "Size")) {
            return setButtonTitle("Select Size");
          }

          if (!variant) return setButtonTitle("Unavailable");
          updateCart();
        }}
      />
      {/* <Button title="SAVE ITEM" /> */}
      <span className="block pt-1 w-full text-center normal-case">Store availability</span>
    </div>
  );
};
export default ProductButtons;
