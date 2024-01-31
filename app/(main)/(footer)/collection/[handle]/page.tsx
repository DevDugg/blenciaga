import Collection from "@/components/collection/Collection";
import HeaderBottom from "@/components/header/HeaderBottom";
import HeaderMiddle from "@/components/header/HeaderMiddle";
import Hero from "@/components/hero/Hero";
import { getCollection } from "@/components/collection/Collection";
import profile from "@/settings/data/profile.data";

interface IParams {
  params: {
    handle: string;
  };
}
const Home = async ({ params }: IParams) => {
  const data = await getCollection(params.handle);

  const hero = {
    image: data.collection?.image?.url,
    title: data.collection?.descriptionHtml,
  };
  const products = data.collection?.products;

  return (
    <main className="main">
      <h1 className="hidden">{profile.name}</h1>
      <HeaderMiddle />
      <HeaderBottom title={hero.title} />
      <Hero image={hero.image} />
      <Collection products={products} categoryHandle={params.handle} />
    </main>
  );
};

export default Home;
