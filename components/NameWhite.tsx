import Image from "next/image";
import Link from "next/link";

const NameWhite = () => {
  return (
    <Link href={"/"} className="name">
      <Image
        src={"/name_white.svg"}
        loading="eager"
        width={200}
        height={30}
        alt="Brand Name"
        className="object-contain w-[200px] h-[30px]"
      />
    </Link>
  );
};
export default NameWhite;
