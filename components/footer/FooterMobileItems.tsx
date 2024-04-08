"use client";

import FooterMobileItem from "./FooterMobileItem";
import { IFooterItem } from "./FooterTop";
import { useState } from "react";

interface IProps {
  items: IFooterItem[];
}

const FooterMobileItems = ({ items }: IProps) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  return (
    <div className="hidden flex-col border-x border-BLACK max-lg:flex">
      {items.map((item, i) => (
        <div onClick={() => (activeId === i ? setActiveId(null) : setActiveId(i))} key={i}>
          <FooterMobileItem activeId={activeId} id={i} item={item} />
        </div>
      ))}
    </div>
  );
};
export default FooterMobileItems;
