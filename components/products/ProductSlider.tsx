"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { Image as ShopifyImage } from "@/types/storefront.types";

interface IProps {
  images: {
    nodes: Pick<ShopifyImage, "id" | "url">[];
  };
}

const ProductSlider = ({ images }: IProps) => {
  return (
    <div className="product-slider hidden border-b-[0.5px] border-BLACK max-lg:block">
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
        {images.nodes.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img.url}
              alt="Product Image"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
        <div className="pagination w-full h-2 absolute top-[95%] left-0 z-10 flex items-center justify-center gap-4"></div>
        <div className="swiper-nav-prev z-10 rotate-180 absolute top-[50%] left-0">
          <Image
            src={"/arrow_small_right.svg"}
            alt="arrow"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
        </div>
        <div className="swiper-nav-next z-10 absolute top-[50%] right-0">
          <Image
            src={"/arrow_small_right.svg"}
            alt="arrow"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
        </div>
      </Swiper>
    </div>
  );
};
export default ProductSlider;
