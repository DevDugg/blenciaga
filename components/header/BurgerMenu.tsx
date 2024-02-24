"use client";

import Image from "next/image";

interface IProps {}

const BurgerMenu = ({}: IProps) => {
  return (
    <button type="button">
      <Image
        src={"/burger.svg"}
        alt="Burger icon"
        width={18}
        height={18}
        className="object-contain w-[18px] h-[18px]"
      />
    </button>
  );
};
export default BurgerMenu;
