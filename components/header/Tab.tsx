"use client";

import { IHeaderTabItem, IHeaderTabLink } from "./Tabs";
import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";

import FooterLink from "../footer/FooterLink";
import Link from "next/link";
import colors from "@/settings/ui/colors";
import { transition } from "@/motion/default.motion";

interface IProps extends IHeaderTabLink {
  rows?: IHeaderTabItem[];
}

const tabVariants = {
  initial: {
    border: `1px solid ${colors.BLACK}00`,
  },
  active: {
    border: `1px solid ${colors.BLACK}ff`,
  },
};

const dropdownVariants: Variants = {
  initial: {
    opacity: 0,
    pointerEvents: "none",
  },
  hover: {
    opacity: 1,
    pointerEvents: "all",
  },
};

const Tab = ({ link, title, rows }: IProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [curatedRows, setCuratedRows] = useState<typeof rows>(rows);

  useEffect(() => {
    if (rows && rows.length > 6 && rows.length < 12) {
      const difference = Math.abs(12 - rows.length);
      const newRows: typeof rows = [...rows];
      for (let i = 0; i < difference; i++) {
        newRows.push({
          heading: {
            link: "",
            title: "",
          },
          items: [{ link: "", title: "" }],
        });
      }
      setCuratedRows(newRows);
    }
  }, [rows]);

  return !rows ? (
    <Link href={link} className="tab py-4">
      <motion.span
        className="text-TEXT rounded-[4px] py-[6px] px-[10px] uppercase whitespace-nowrap"
        variants={tabVariants}
        initial="initial"
        whileHover={"active"}
        transition={transition}
      >
        {title}
      </motion.span>
    </Link>
  ) : (
    <div
      className="tab cursor-default py-4"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        className="text-TEXT block rounded-[4px] py-[6px] px-[10px] uppercase whitespace-nowrap"
        variants={tabVariants}
        initial="initial"
        whileHover={"active"}
        transition={transition}
      >
        {title}
      </motion.span>

      {curatedRows ? (
        // <motion.div
        //   className="bg-[#0000007f] absolute top-[100%] left-0 h-[calc(100vh-40px)] z-10"
        // variants={dropdownVariants}
        // initial="initial"
        // animate={hovered ? "hover" : "initial"}
        // >
        <motion.div
          className="bg-WHITE h-fit w-[calc(100vw-19px)] grid grid-cols-SIX z-10 absolute top-[100%] left-0 shadow-DROPDOWN"
          variants={dropdownVariants}
          initial="initial"
          animate={hovered ? "hover" : "initial"}
        >
          {curatedRows.map((row, i) => (
            <div key={i} className="px-3 py-4 border-[0.5px] border-BLACK border-solid flex flex-col gap-6 relative">
              <h6 className="text-xs text-BLACK uppercase">{row.heading.title}</h6>
              <div className="flex flex-col gap-3">
                {row.items.map((item, i) => (
                  <FooterLink key={i} href={item.link} title={item.title} />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      ) : // </motion.div>
      null}
    </div>
  );
};
export default Tab;
