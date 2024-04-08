"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";
import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="dropdown border-b border-BLACK flex flex-col">
      <button
        type="button"
        className="flex items-center justify-between gap-6 w-full py-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Product sustainability</span>
        <motion.div initial={{ rotate: "0deg" }} animate={isOpen ? { rotate: "180deg" } : {}} transition={transition}>
          <Image src={"/arrow_big_down.svg"} alt="Arrow" width={20} height={20} className="w-4 h-4 object-contain" />
        </motion.div>
      </button>
      <motion.p
        className="mt-4 mb-10 overflow-hidden normal-case"
        initial={{ height: 0, margin: 0 }}
        animate={isOpen ? { height: "fit-content", margin: "20px 0 40px 0" } : {}}
        transition={transition}
      >
        Carbon footprint: we work to continually reduce the environmental footprint of our products. The remaining
        carbon emissions associated with all activities in this product’s life cycle are carefully calculated, and we
        commit to invest funds into carbon removal projects that protect and restore natural ecosystems to tackle
        climate change.
      </motion.p>
    </div>
  );
};
export default Dropdown;
