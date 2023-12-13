"use client";

import StickyOutOfView from "./StickyOutOfView";
import colors from "@/settings/ui/colors";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";
import { useMediaQuery } from "usehooks-ts";
import { useRef } from "react";

interface IProps {
  title: string;
  onClick?: () => null;
  black?: boolean;
  fixedOnMobile?: boolean;
  width?: number | string;
}

const Button = ({ title, onClick, black, fixedOnMobile, width }: IProps) => {
  const breakpoint = useMediaQuery("(max-width:768px)");
  const bgVariants = {
    initial: {
      height: "0%",
    },
    hover: {
      height: "100%",
    },
  };
  const textVariants = {
    initial: { color: black ? colors.WHITE : colors.BLACK },
    hover: { color: black ? colors.BLACK : colors.WHITE },
  };

  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full justify-center" style={width ? { display: "flex" } : {}} ref={container}>
      {fixedOnMobile && breakpoint ? (
        <StickyOutOfView container={container}>
          <motion.button
            type="button"
            className="text-xs border border-solid border-BLACK bg-WHITE uppercase rounded-[4px] py-3 px-4 relative overflow-hidden w-full"
            style={black ? { background: colors.BLACK, width } : { width }}
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
              style={black ? { background: colors.WHITE } : {}}
              transition={transition}
              variants={bgVariants}
            ></motion.div>
          </motion.button>
        </StickyOutOfView>
      ) : (
        <motion.button
          type="button"
          className="text-xs border border-solid border-BLACK bg-WHITE uppercase rounded-[4px] py-3 px-4 relative overflow-hidden w-full"
          style={black ? { background: colors.BLACK, width } : { width }}
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
            style={black ? { background: colors.WHITE } : {}}
            transition={transition}
            variants={bgVariants}
          ></motion.div>
        </motion.button>
      )}
    </div>
  );
};
export default Button;
