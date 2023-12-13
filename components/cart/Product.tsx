"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface IProduct {
  name: string;
  image: string;
  price: string;
  color: string;
  size: string;
  quantity: number;
}

interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const [quantity, setQuantity] = useState<number>(product.quantity);
  return (
    <div className="product py-4 border-t border-BLACK">
      <div className="product-top flex items-start gap-3">
        <div className="max-w-[200px] max-h-[200px] h-full w-full">
          <Image src={product.image} alt="Item image" width={200} height={200} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <Link href={"/product"}>
            <h2 className="uppercase font-bold text-sm underline">{product.name}</h2>
          </Link>
          <p className="text-sm">{product.price}</p>
          <div className="flex flex-col">
            <p className="text-sm">Color: {product.color}</p>
            <p className="text-sm">Size: {product.size}</p>
            <div className="text-sm flex items-center gap-2">
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
