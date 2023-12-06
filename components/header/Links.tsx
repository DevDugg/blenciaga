import Image from "next/image";
import Link from "next/link";
import Tab from "./Tab";
import header from "@/settings/data/header.data";

const Links = () => {
  return (
    <div className="flex items-center gap-1 justify-end">
      <div className="flex items-center gap-1">
        {header.links.map((link, i) => (
          <Tab key={i} link={link.link} title={link.title} />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Link href={"/"}>
          <Image
            src={"/loop.svg"}
            alt="Loop icon"
            width={18}
            height={18}
            className="object-contain w-[18px] h-[18px]"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/bookmark.svg"}
            alt="Bookmark icon"
            width={18}
            height={18}
            className="object-contain w-[18px] h-[18px]"
          />
        </Link>
        <Link href={"/"}>
          <Image
            src={"/cart.svg"}
            alt="Cart icon"
            width={18}
            height={18}
            className="object-contain w-[18px] h-[18px]"
          />
        </Link>
      </div>
    </div>
  );
};
export default Links;
