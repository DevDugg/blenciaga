import Image from "next/image";
import { Image as ShopifyImage } from "@/types/storefront.types";

interface IProps {
  images: {
    nodes: Pick<ShopifyImage, "id" | "url">[];
  };
}

const ProductGrid = ({ images }: IProps) => {
  console.log(images);

  return (
    <div className="flex flex-col w-full h-full max-lg:hidden">
      {images.nodes.map((img, i) => (
        <Image
          key={i}
          src={img.url}
          alt={img.id || ""}
          width={700}
          height={850}
          className="max-h-[850px] w-full h-full object-cover border-[0.5px] border-b-0 border-BLACK border-solid"
        />
      ))}
    </div>
  );
};
export default ProductGrid;
