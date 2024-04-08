import Image from "next/image";
import { Image as ShopifyImage } from "@/types/storefront.types";

interface IProps {
  images: {
    nodes: Pick<ShopifyImage, "id" | "url">[];
  };
}

const ProductGrid = ({ images }: IProps) => {
  return (
    <div className="flex flex-col w-full h-full max-lg:hidden">
      {images.nodes.map((img, i) => (
        <Image
          key={i}
          priority={i === 0}
          src={img.url}
          alt={img.id || ""}
          width={700}
          height={850}
          className="max-h-[850px] w-full h-full object-cover border border-b-0 border-BLACK"
        />
      ))}
    </div>
  );
};
export default ProductGrid;
