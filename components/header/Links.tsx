"use client";

import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import Tab from "./Tab";
import colors from "@/settings/ui/colors";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";
import { useContext } from "react";

const links = [
  {
    title: "Servicio de Atención al Cliente",
    link: "#",
  },
  {
    title: "Iniciar sesión",
    link: "#",
  },
];

const Links = () => {
  const { cartState } = useContext(CartContext).cartState;
  return (
    <div className="flex items-center gap-1 justify-end">
      <div className="flex items-center gap-1 max-[1350px]:hidden">
        {links.map((link, i) => (
          <Tab key={i} link={link.link} title={link.title} />
        ))}
      </div>
      <div className="flex items-center gap-3">
        {/* <button type="button" className="max-[1350px]:hidden">
          <Image
            src={"/loop.svg"}
            alt="Loop icon"
            width={18}
            height={18}
            className="object-contain w-[18px] h-[18px]"
          />
        </button> */}
        <Link href={"/cart"} className="relative block w-7 h-7">
          {cartState && (
            <motion.div
              transition={transition}
              initial={{
                opacity: 0,
              }}
              animate={cartState.totalQuantity > 0 ? { opacity: 1 } : {}}
              className="flex items-center justify-center rounded bg-GREEN absolute top-0 left-0 w-full h-full"
            >
              <span className="text-xs">{cartState.totalQuantity}</span>
            </motion.div>
          )}
          <div className="flex items-center justify-center w-7 h-7">
            <Image
              src={"/cart.svg"}
              alt="Cart icon"
              width={18}
              height={18}
              className="object-contain w-[18px] h-[18px]"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Links;
