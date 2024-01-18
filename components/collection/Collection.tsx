"use client";

import { Image as IImage, Product as IProduct, MoneyV2, ProductOption } from "@/types/storefront.types";

import Button from "../Button";
import Container from "../Container";
import Image from "next/image";
import Product from "./Product";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

export type Products =
  | {
      node: Pick<IProduct, "id" | "title" | "handle"> & {
        images: {
          nodes: Pick<IImage, "id" | "url">[];
        };
        options: Pick<ProductOption, "name" | "values">[];
        priceRange: {
          minVariantPrice: Pick<MoneyV2, "currencyCode" | "amount">;
        };
      };
    }[]
  | undefined;

interface IProps {
  products?: Products;
}

const Collection = ({ products }: IProps) => {
  const [isBook, setIsBook] = useState<boolean>(false);
  const gridBreakpoint = useMediaQuery("(max-width: 1440px)");

  return (
    <section className="collection">
      <Container className="flex flex-col">
        {products ? (
          <>
            <div className="flex items-center justify-between gap-10 px-3 py-4">
              <span className="text-sm text-BLACK">Results</span>
              <button
                type="button"
                className="uppercase text-sm text-BLACK flex items-center gap-2"
                onClick={() => setIsBook(!isBook)}
              >
                <span>Visualizaciones</span>
                <div className="relative w-[18px] h-[18px]">
                  <motion.div
                    className="absolute left-0 top-0"
                    initial={{ opacity: 1 }}
                    animate={isBook ? { opacity: 0 } : {}}
                    transition={transition}
                  >
                    <Image
                      src={"/view.svg"}
                      alt="View Icon"
                      height={18}
                      width={18}
                      className="object-contain w-[18px] h-[18px]"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute left-0 top-0 max-[1440px]:rotate-90"
                    initial={{ opacity: 0 }}
                    animate={isBook ? { opacity: 1 } : {}}
                    transition={transition}
                  >
                    <Image
                      src={"/view_book.svg"}
                      alt="View Icon"
                      height={18}
                      width={18}
                      className="object-contain w-[18px] h-[18px]"
                    />
                  </motion.div>
                </div>
              </button>
            </div>
            <div
              className="grid grid-cols-FOUR_PERCENT max-[1440px]:grid-cols-THREE_PERCENT max-md:grid-cols-TWO_PERCENT"
              style={isBook ? { gridTemplateColumns: gridBreakpoint ? "100%" : "repeat(2, 50%)" } : {}}
            >
              {products.length > 0 ? (
                products.map((product, i) => <Product key={i} product={product.node} view={isBook ? "big" : "small"} />)
              ) : (
                <span>No results</span>
              )}
            </div>
            <div className="flex justify-center w-full py-20">
              <div className="max-w-fit w-full px-3 max-md:max-w-none">
                <Button title="Cargar más" />
              </div>
            </div>
          </>
        ) : (
          <Container className="py-10 flex items-center justify-center text-xl">
            <p>Something went wrong :/</p>
          </Container>
        )}
      </Container>
    </section>
  );
};
export default Collection;
