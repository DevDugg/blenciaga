"use client";

import { CartQuery } from "@/types/storefront.generated";
import Image from "next/image";
import Link from "next/link";
import getCurrencySymbol from "@/utils/getCurrencySymbol";
import { useState } from "react";

interface IProps {
  product: NonNullable<CartQuery["cart"]>["lines"]["edges"][number]["node"];
}

const Product = ({ product }: IProps) => {
  const [quantity, setQuantity] = useState<number>(product.quantity);
  return (
    <div className="product py-4 border-t border-BLACK">
      <div className="product-top flex items-start gap-3">
        <div className="max-w-[200px] max-h-[200px] h-full w-full max-sm:max-w-[120px] max-sm:max-h-[120px]">
          <Image
            src={product.merchandise.image?.url}
            id={product.merchandise.image?.url}
            alt="Product image"
            width={200}
            height={200}
            priority
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Link href={`/product/${product.merchandise.product.handle}`}>
            <h2 className="uppercase font-bold text-sm underline">{product.merchandise.title}</h2>
          </Link>
          <p className="text-sm">{`${getCurrencySymbol(product.merchandise.price.currencyCode)} ${
            product.merchandise.price.amount
          }`}</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              {product.merchandise.selectedOptions.map((option) => (
                <p className="text-sm">{`${option.name}: ${option.value}`}</p>
              ))}
            </div>
            <div className="text-sm flex items-center gap-4">
              <span>Quantity:</span>
              <button type="button" disabled={quantity <= 1} onClick={() => setQuantity(quantity - 1)}>
                <Image
                  src={"/minus.svg"}
                  alt="Subtract Icon"
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px] object-contain"
                />
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)}>
                <Image
                  src={"/plus.svg"}
                  alt="Add Icon"
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px] object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end px-4">
        <button type="button" className="text-sm underline font-bold">
          Delete
        </button>
      </div>
    </div>
  );
};
export default Product;
