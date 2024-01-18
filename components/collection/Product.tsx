"use client";

import { Image as IImage, Product as IProduct, MoneyV2, ProductOption } from "@/types/storefront.types";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ColorBlock from "../ColorBlock";
import Image from "next/image";
import Link from "next/link";
import Size from "./Size";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

interface IProps {
  product: Pick<IProduct, "id" | "title" | "handle"> & {
    images: {
      nodes: Pick<IImage, "id" | "url">[];
    };
    options: Pick<ProductOption, "name" | "values">[];
    priceRange: {
      minVariantPrice: Pick<MoneyV2, "currencyCode" | "amount">;
    };
  };
  view: "big" | "small";
}

const Product = ({ view, product }: IProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const bulletsBreakpoint = useMediaQuery("(max-width: 1024px)");
  const bookBreakpoint = useMediaQuery("(min-width: 1200px)");

  const productHasManyImages = product.images.nodes.length > 1;

  const sizes = product.options.find((option) => option.name === "Size")?.values;
  const colors = product.options.find((option) => option.name === "Style")?.values;

  const productHasManyColor = colors ? colors?.length > 1 : false;

  return (
    <div
      className="product border-[0.5px] border-solid border-BLACK pb-10 flex flex-col justify-between gap-2 max-h-[700px] relative"
      style={view === "big" ? { maxHeight: bookBreakpoint ? 1600 : 1200 } : {}}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-fit">
        <Link href={`/product/${product.handle}`}>
          <Swiper
            modules={[Navigation, Pagination]}
            speed={1000}
            className="h-fit"
            navigation={
              productHasManyImages
                ? {
                    nextEl: ".swiper-nav-next",
                    prevEl: ".swiper-nav-prev",
                  }
                : {}
            }
            loop={productHasManyImages}
            pagination={{
              clickable: true,
              el: ".pagination",
              bulletClass: "swiper-custom-bullet",
              bulletActiveClass: "swiper-custom-bullet-active",
            }}
          >
            {product.images.nodes.map((img: any) => (
              <SwiperSlide key={img.id}>
                <Image
                  src={img.url}
                  loading="lazy"
                  alt="Product Image"
                  width={480}
                  height={600}
                  className="w-full h-full object-cover aspect-square"
                />
              </SwiperSlide>
            ))}
            <motion.div
              initial={bulletsBreakpoint ? { opacity: 1, pointerEvents: "all" } : { opacity: 0, pointerEvents: "none" }}
              animate={isHovered ? { opacity: 1, pointerEvents: "all" } : {}}
              transition={transition}
              className="pagination w-full h-2 absolute top-[95%] left-0 z-10 flex items-center justify-center gap-4"
            ></motion.div>
            <motion.div
              className="swiper-nav-prev z-10 rotate-180 absolute top-[50%] left-0"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : {}}
              transition={transition}
            >
              <Image
                src={"/arrow_small_right.svg"}
                alt="arrow"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </motion.div>
            <motion.div
              className="swiper-nav-next z-10 absolute top-[50%] right-0"
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : {}}
              transition={transition}
            >
              <Image
                src={"/arrow_small_right.svg"}
                alt="arrow"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </motion.div>
          </Swiper>
        </Link>

        {sizes && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : {}}
            transition={transition}
            className="sizes flex gap-4 items-center justify-center text-[10.5px] uppercase"
          >
            {sizes.map((size, i) => (
              <Link
                href={{
                  pathname: `/product/${product.handle}`,
                  search: `?size=${size}`,
                }}
                key={i}
              >
                <Size name={size} />
              </Link>
            ))}
          </motion.div>
        )}

        {colors && productHasManyColor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : {}}
            transition={transition}
            className="sizes flex gap-4 items-center justify-center text-[10.5px] uppercase"
          >
            {colors.map((color, i) => (
              <Link
                href={{
                  pathname: `/product/${product.handle}`,
                  search: `?color=${color}`,
                }}
                key={i}
              >
                <ColorBlock color={color} />
              </Link>
            ))}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 1, pointerEvents: "all" }}
          animate={isHovered ? { opacity: 0, pointerEvents: "none" } : {}}
          transition={transition}
          className="price flex flex-col items-center text-[10.5px]"
        >
          <span className="uppercase font-bold">{product.title}</span>
          <span>{product.priceRange.minVariantPrice.amount}</span>
        </motion.div>
      </div>
    </div>
  );
};
export default Product;
