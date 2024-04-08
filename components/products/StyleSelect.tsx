"use client";

import { useContext, useEffect, useState } from "react";

import Image from "next/image";
import { ProductOptionContext } from "@/context/ProductOptionContext";
import { ProductQuery } from "@/types/storefront.generated";
import colors from "@/settings/ui/colors";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";

export type VariantsType = Pick<NonNullable<ProductQuery["product"]>, "variants">["variants"]["nodes"];
interface IProps {
  variants: VariantsType;
  initialVariant?: VariantsType[number];
}

const StyleSelect = ({ variants, initialVariant }: IProps) => {
  const [selectedVariant, setSelectedVariant] = useState<VariantsType[number]>(initialVariant || variants[0]);

  const { productOptions, setProductOptions } = useContext(ProductOptionContext);

  const updateStyleValue = (newValue: string) => {
    setProductOptions((currentOptions) =>
      currentOptions.map((option) => (option.name === "Style" ? { ...option, value: newValue } : option)),
    );
  };

  useEffect(() => {
    const extractedStyle = selectedVariant.selectedOptions.find((option) => option.name === "Style");
    if (!extractedStyle) return;
    const selectedStyle = productOptions.find((option) => option.name === "Style");
    if (!selectedStyle) setProductOptions([...productOptions, { name: "Style", value: extractedStyle.value }]);
    else updateStyleValue(extractedStyle.value);
  }, [selectedVariant]);

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {variants.map((variant) => (
        <motion.div
          key={variant.id}
          className="border p-1 rounded-sm cursor-pointer"
          initial={{ borderColor: `${colors.BLACK}00` }}
          animate={selectedVariant.id === variant.id ? { borderColor: colors.BLACK } : {}}
          onClick={() => setSelectedVariant(variant)}
          transition={transition}
        >
          <Image
            src={variant.image?.url}
            alt="Variant Image"
            width={80}
            height={80}
            className="w-20 h-20 object-contain aspect-square"
          />
        </motion.div>
      ))}
    </div>
  );
};
export default StyleSelect;
