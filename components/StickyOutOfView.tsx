"use client";

import { PropsWithChildren, RefObject } from "react";
import { color, motion, useInView } from "framer-motion";

import colors from "@/settings/ui/colors";
import { transition } from "@/motion/default.motion";

interface IProps extends PropsWithChildren {
  container: RefObject<Element>;
}

const StickyOutOfView = ({ children, container }: IProps) => {
  const inView = useInView(container);
  return (
    <motion.div
      className="bottom-0 left-0 w-full z-50 bg-WHITE border-t"
      transition={transition}
      initial={{ position: "fixed", padding: 12, borderColor: colors.BLACK }}
      animate={inView ? { position: "static", padding: 0, borderColor: "transparent" } : {}}
    >
      {children}
    </motion.div>
  );
};
export default StickyOutOfView;
