import Image from "next/image";

const products = ["/jacket_1.jpg", "/jacket_2.jpg", "/jacket_3.jpg", "/jacket_4.jpg", "/jacket_5.jpg", "/jacket_6.jpg"];

const ProductGrid = () => {
  return (
    <div className="flex flex-col w-full">
      {products.map((product, i) => (
        <Image
          key={i}
          src={product}
          alt="Product Image"
          width={700}
          height={850}
          className="max-h-[850px] w-full h-full object-cover border-[0.5px] border-b-0 border-BLACK border-solid"
        />
      ))}
    </div>
  );
};
export default ProductGrid;
