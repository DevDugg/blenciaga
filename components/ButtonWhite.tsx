"use client";

import colors from "@/settings/ui/colors";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";

interface IProps {
  title: string;
  onClick?: () => null;
}

const bgVariants = {
  initial: {
    height: "0%",
  },
  hover: {
    height: "100%",
  },
};
const textVariants = {
  initial: {
    color: colors.BLACK,
  },
  hover: {
    color: colors.WHITE,
  },
};

const ButtonWhite = ({ title, onClick }: IProps) => {
  return (
    <motion.button
      type="button"
      className="border border-solid border-BLACK uppercase rounded-[4px] py-3 px-4 relative overflow-hidden"
      transition={transition}
      onClick={onClick}
      initial={"initial"}
      whileHover={"hover"}
    >
      <motion.span className="relative z-10" variants={textVariants}>
        {title}
      </motion.span>
      <motion.div
        className="absolute left-0 top-[50%] -translate-y-[50%] bg-BLACK w-full"
        transition={transition}
        variants={bgVariants}
      ></motion.div>
    </motion.button>
  );
};
export default ButtonWhite;
