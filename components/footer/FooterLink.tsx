"use client";

import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";

interface IProps {
  href: string;
  title: string;
  largePadding?: boolean;
}

const variants = {
  initial: {
    width: "0%",
  },
  hover: {
    width: "100%",
  },
};

const FooterLink = ({ href, title, largePadding }: IProps) => {
  return (
    <motion.a
      className="relative w-fit"
      href={href}
      transition={transition}
      initial={"initial"}
      whileHover={"hover"}
      style={largePadding ? { padding: "8px 0" } : {}}
    >
      {title}
      <motion.div className="absolute left-0 bottom-0 border-b border-BLACK" variants={variants}></motion.div>
    </motion.a>
  );
};
export default FooterLink;
