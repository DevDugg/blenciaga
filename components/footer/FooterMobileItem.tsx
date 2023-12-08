"use client";

import FooterLink from "./FooterLink";
import { IFooterItem } from "./FooterTop";
import Image from "next/image";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";

interface IProps {
  item: IFooterItem;
  activeId?: number | null;
  id: number;
}

const FooterMobileItem = ({ item, activeId, id }: IProps) => {
  const isActive = activeId === id;
  return (
    <div className="flex flex-col overflow-hidden px-3 border-y-[0.5px] border-BLACK">
      <div className="flex items-center gap-10 justify-between py-5">
        <h6 className="text-xs uppercase">{item.title}</h6>
        <motion.div initial={{ rotate: "0deg" }} animate={isActive ? { rotate: "180deg" } : {}} transition={transition}>
          <Image
            src={"/arrow_big_down.svg"}
            alt="Arrow icon"
            width={20}
            height={20}
            className="w-5 h-5 object-contain"
          />
        </motion.div>
      </div>
      <motion.div
        className="flex flex-col"
        transition={transition}
        initial={{ height: 0, opacity: 0 }}
        animate={isActive ? { height: "fit-content", opacity: 1 } : {}}
      >
        {item.links.map((link, i) => (
          <FooterLink key={i} title={link.title} href={link.link} largePadding />
        ))}
      </motion.div>
    </div>
  );
};
export default FooterMobileItem;
