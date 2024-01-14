import Collection from "@/components/collection/Collection";
import HeaderBottom from "@/components/header/HeaderBottom";
import HeaderMiddle from "@/components/header/HeaderMiddle";
import Hero from "@/components/hero/Hero";
import { ProductsQuery } from "@/types/storefront.generated";
import client from "@/utils/api-client";
import profile from "@/settings/data/profile.data";

const getProducts = async () => {
  const { data, errors } = await client.request(
    `#graphql
    query Products {
      products(first: 250) {
        nodes {
          title
          images(first: 5) {
            nodes {
              id
              url
            }
          }
          collections(first: 10) {
            nodes {
              id
              handle
              title
            }
          }
          id
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          handle
          options {
            name
            values
          }
        }
      }
    }`,
  );

  if (errors) throw new Error(errors.message);

  return data as ProductsQuery;
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="main">
      <h1 className="hidden">{profile.name}</h1>
      <HeaderMiddle />
      <HeaderBottom />
      <Hero />
      <Collection products={products} />
    </main>
  );
}
