"use client";

import Link from "next/link";
import headerMotion from "@/motion/header.motion";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";

type Props = {
  title: string;
  link: string;
};

const Tab = ({ link, title }: Props) => {
  return (
    <Link href={link} className="tab">
      <motion.span
        className="text-TEXT rounded-[4px] py-[6px] px-[10px] uppercase"
        variants={headerMotion.tab}
        initial="initial"
        whileHover={"active"}
        transition={transition}
      >
        {title}
      </motion.span>
    </Link>
  );
};
export default Tab;
