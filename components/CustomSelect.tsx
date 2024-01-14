"use client";

import Image from "next/image";
import colors from "@/settings/ui/colors";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";
import { useState } from "react";

interface IProps {
  items: string[];
  initial?: string | null | undefined;
}

const CustomSelect = ({ items, initial }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isValidInitial = items.includes(initial as string);
  const [value, setValue] = useState<string | null>(initial && isValidInitial ? initial : null);
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="custom-select relative h-14 z-20">
      <div className="border border-BLACK rounded cursor-pointer absolute top-0 left-0 w-full h-fit overflow-hidden bg-WHITE">
        <div className="flex items-center gap-6 justify-between p-3">
          <span>{value ? value : "Select Size"}</span>
          <motion.div initial={{ rotate: "0deg" }} animate={isOpen ? { rotate: "180deg" } : {}} transition={transition}>
            <Image
              src={"/arrow_small_down.svg"}
              alt="arrow"
              width={28}
              height={28}
              className="w-[28px] h-[28px] object-contain"
            />
          </motion.div>
        </div>
        <motion.ul
          initial={{ height: 0 }}
          animate={isOpen ? { height: "fit-content" } : {}}
          transition={transition}
          className="w-full list-none"
        >
          {items.map((size, i) => (
            <motion.li
              key={i}
              className="py-4 px-3"
              initial={{ background: colors.WHITE }}
              whileHover={{ background: colors.GRAY }}
              onClick={() => setValue(size)}
            >
              {size}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};
export default CustomSelect;
