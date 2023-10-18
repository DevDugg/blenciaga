"use client";

import Tab from "./Tab";
import headerData from "@/settings/data/header.data";

// import { usePathname } from "next/navigation";

const Tabs = () => {
  // const pathname = usePathname();
  return (
    <div className="tabs flex items-center gap-1 justify-start">
      {headerData.tabs.map((tab, i) => (
        <Tab title={tab.title} link={tab.link} key={i} isActive={i === 0 ? true : false} />
      ))}
    </div>
  );
};
export default Tabs;
