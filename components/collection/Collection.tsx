import Container from "../Container";
import Image from "next/image";
import Product from "./Product";
import collection from "@/settings/data/collection.data";

const Collection = () => {
  return (
    <section className="collection">
      <Container className="flex flex-col">
        <div className="flex items-center justify-between gap-10 px-3 py-4">
          <span className="text-sm text-BLACK">82 resultados</span>
          <div className="flex items-center gap-2">
            <button type="button" className="uppercase text-sm text-BLACK">
              Visualizaciones
            </button>
            <Image
              src={"/view.svg"}
              alt="View Icon"
              height={18}
              width={18}
              className="object-contain w-[18px] h-[18px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-FOUR">
          {collection.products.map((product, i) => (
            <Product key={i} images={product.images} name={product.name} price={product.price} />
          ))}
        </div>
        <div className="flex justify-center py-20">
          <button type="button" className="border border-solid border-BLACK uppercase rounded-[4px] py-3 px-4">
            Cargar más
          </button>
        </div>
      </Container>
    </section>
  );
};
export default Collection;
