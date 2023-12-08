"use client";

import "swiper/css";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import Size from "./Size";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";

type Props = {
  name: string;
  price: string;
  images: string[];
  view: "big" | "small";
};

const Product = ({ images, name, price, view }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const bulletsBreakpoint = useMediaQuery("(max-width: 1024px)");
  return (
    <Link
      href={"/collection"}
      className="product border border-solid border-BLACK pb-10 flex flex-col gap-2 max-h-[700px] relative"
      style={view === "big" ? { maxHeight: 1200 } : {}}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full">
        <Swiper
          modules={[Navigation, Pagination]}
          speed={1000}
          navigation={{
            nextEl: ".swiper-nav-next",
            prevEl: ".swiper-nav-prev",
          }}
          loop
          pagination={{
            clickable: true,
            el: ".pagination",
            bulletClass: "swiper-custom-bullet",
            bulletActiveClass: "swiper-custom-bullet-active",
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <Image src={img} alt="Product Image" width={480} height={600} className="w-full h-full object-cover" />
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
          <span className="uppercase font-bold">{name}</span>
          <span>{price}</span>
        </motion.div>
      </div>
    </Link>
  );
};
export default Product;
