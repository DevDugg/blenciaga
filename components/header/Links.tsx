import Image from "next/image";
import Link from "next/link";
import Tab from "./Tab";

const links = [
  {
    title: "Servicio de Atención al Cliente",
    link: "/",
  },
  {
    title: "Iniciar sesión",
    link: "/",
  },
];

const Links = () => {
  return (
    <div className="flex items-center gap-1 justify-end">
      <div className="flex items-center gap-1 max-[1350px]:hidden">
        {links.map((link, i) => (
          <Tab key={i} link={link.link} title={link.title} />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Link href={"/"} className="max-[1350px]:hidden">
          <Image
            src={"/loop.svg"}
            alt="Loop icon"
            width={18}
            height={18}
            className="object-contain w-[18px] h-[18px]"
          />
        </Link>
        <Link href={"/"} className="max-[1350px]:hidden">
          <Image
            src={"/bookmark.svg"}
            alt="Bookmark icon"
            width={18}
            height={18}
            className="object-contain w-[18px] h-[18px]"
          />
        </Link>
        <Link href={"/"} className="hidden max-[1350px]:block">
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
