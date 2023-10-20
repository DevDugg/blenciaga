import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  price: string;
  img: string;
};

const Product = ({ img, name, price }: Props) => {
  return (
    <Link href={"/home"} className="product border border-solid border-BLACK pb-20 flex flex-col gap-2">
      <Image src={img} alt="Product Image" width={480} height={600} className="w-full h-full object-cover" />
      <div className="flex flex-col items-center text-lg text-BLACK">
        <span className="uppercase">{name}</span>
        <span>{price}</span>
      </div>
    </Link>
  );
};
export default Product;
