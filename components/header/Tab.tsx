"use client";

import Link from "next/link";
import headerMotion from "@/motion/header.motion";
import { motion } from "framer-motion";

type Props = {
  title: string;
  link: string;
  isActive: boolean;
};

const Tab = ({ isActive, link, title }: Props) => {
  return (
    <Link href={link} className="tab">
      <motion.span
        variants={headerMotion.tab}
        initial="initial"
        className="text-TEXT rounded-[4px] py-[6px] px-[10px] uppercase"
        animate={isActive ? "active" : "initial"}
      >
        {title}
      </motion.span>
    </Link>
  );
};
export default Tab;
