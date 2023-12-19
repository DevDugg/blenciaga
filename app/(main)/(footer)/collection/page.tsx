import Collection from "@/components/collection/Collection";
import HeaderBottom from "@/components/header/HeaderBottom";
import HeaderMiddle from "@/components/header/HeaderMiddle";
import Hero from "@/components/hero/Hero";
import { IProducts } from "@/typings/products.type";
import profile from "@/settings/data/profile.data";

interface IResponse {
  data: IProducts;
}

const getProducts = async () => {
  return await fetch("http://localhost:3000/api/products?quantity=12", {
    method: "GET",
    cache: "no-cache",
  });
};

export default async function Home() {
  const productsString = await getProducts();
  const products: IResponse = await productsString.json();

  return (
    <main className="main">
      <h1 className="hidden">{profile.name}</h1>
      <HeaderMiddle />
      <HeaderBottom />
      <Hero />
      <Collection products={products.data.data} />
    </main>
  );
}
