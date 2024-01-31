"use client";

import { A11y, FreeMode, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FluffyItem } from "./HeaderTop";
import Tab from "./Tab";

interface IProps {
  thirdLevelLinks: FluffyItem[];
}

const HeaderMiddleSwiper = ({ thirdLevelLinks }: IProps) => {
  return (
    <Swiper
      modules={[Scrollbar, A11y, FreeMode]}
      freeMode
      //   spaceBetween={16}
      slidesPerView={"auto"}
      scrollbar={{ draggable: true }}
    >
      {thirdLevelLinks.map((link) => (
        <SwiperSlide key={link.id} style={{ width: "fit-content" }}>
          <Tab link={`/collection/${link.resource.handle}`} title={link.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HeaderMiddleSwiper;
