import Image from "next/image";
import Link from "next/link";

const Name = () => {
  return (
    <Link href={"/"} className="name">
      <Image
        src={"/name.svg"}
        loading="eager"
        width={140}
        height={16}
        alt="Brand Name"
        className="object-contain w-[140px] h-4"
      />
    </Link>
  );
};
export default Name;
