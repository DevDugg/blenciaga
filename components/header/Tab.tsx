"use client";

import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";

import FooterLink from "../footer/FooterLink";
import { IMainMenu } from "./HeaderTop";
import Link from "next/link";
import colors from "@/settings/ui/colors";
import { transition } from "@/motion/default.motion";

interface IProps {
  link: string;
  title: string;
  rows?: IMainMenu["data"]["menu"]["items"][number]["items"];
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
  const [curatedRows, setCuratedRows] = useState<IMainMenu["data"]["menu"]["items"][number]["items"]>([]);

  useEffect(() => {
    if (!rows || !(rows.length > 0)) return;

    if (rows.length < 12) {
      const emptyRows = Array(12 - rows.length).fill({ id: "empty", title: "", resource: { handle: "" } });
      return setCuratedRows([...rows, ...emptyRows]);
    }
  }, [rows]);

  return (
    <div
      className="tab py-4 overflow-hidden"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={link}>
        <motion.span
          className="text-TEXT block rounded-[4px] py-[6px] px-[10px] uppercase whitespace-nowrap"
          variants={tabVariants}
          initial="initial"
          whileHover={"active"}
          transition={transition}
        >
          {title}
        </motion.span>
      </Link>
      <motion.div
        variants={dropdownVariants}
        initial={"initial"}
        animate={hovered ? "hover" : "initial"}
        className="bg-WHITE h-fit w-[calc(100vw-17px)] z-20 grid grid-cols-SIX absolute top-full left-0 shadow-DROPDOWN"
      >
        {curatedRows
          ? curatedRows.map((item, i) => (
              <div key={i} className="flex flex-col gap-4 p-4 border-[0.5px] border-BLACK min-h-[30vh]">
                <h6 className="text-xs text-BLACK uppercase">
                  <FooterLink title={item.title} href={`/collection/${item.resource.handle}`} />
                </h6>
                <div className="flex flex-col gap-3">
                  {item?.items?.map((subItem, i) => (
                    <FooterLink key={i} href={`/collection/${subItem.resource.handle}`} title={subItem.title} />
                  ))}
                </div>
              </div>
            ))
          : null}
      </motion.div>
    </div>
  );
};
export default Tab;
