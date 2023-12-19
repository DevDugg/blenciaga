"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import { ProductsNode } from "@/typings/products.type";
import Size from "./Size";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

interface IProps {
  product: ProductsNode;
  view: "big" | "small";
}

const Product = ({ view, product }: IProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const bulletsBreakpoint = useMediaQuery("(max-width: 1024px)");
  const bookBreakpoint = useMediaQuery("(min-width: 1200px)");

  const productHasManyImages = product.images.nodes.length > 1;

  return (
    <Link
      href={"/collection"}
      className="product border-[0.5px] border-solid border-BLACK pb-10 flex flex-col justify-between gap-2 max-h-[700px] relative"
      style={view === "big" ? { maxHeight: bookBreakpoint ? 1600 : 1200 } : {}}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-fit">
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
          {product.images.nodes.map((img) => (
            <SwiperSlide key={img.id}>
              <Image
                src={img.url}
                unoptimized
                loading="lazy"
                alt="Product Image"
                width={480}
                height={600}
                className="w-full h-full object-cover"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : {}}
          transition={transition}
          className="sizes flex gap-4 items-center justify-center text-[10.5px] uppercase"
        >
          <Size name="xs" />
          <Size name="s" />
          <Size name="m" striked />
          <Size name="l" />
        </motion.div>
        <motion.div
          initial={{ opacity: 1, pointerEvents: "all" }}
          animate={isHovered ? { opacity: 0, pointerEvents: "none" } : {}}
          transition={transition}
          className="price flex flex-col items-center text-[10.5px]"
        >
          <span className="uppercase font-bold">{product.title}</span>
          <span>{product.priceRangeV2.minVariantPrice.amount}</span>
        </motion.div>
      </div>
    </Link>
  );
};
export default Product;
