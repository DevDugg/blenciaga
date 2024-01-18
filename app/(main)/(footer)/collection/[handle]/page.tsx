import { CollectionQuery, ProductsQuery } from "@/types/storefront.generated";

import Collection from "@/components/collection/Collection";
import HeaderBottom from "@/components/header/HeaderBottom";
import HeaderMiddle from "@/components/header/HeaderMiddle";
import Hero from "@/components/hero/Hero";
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

const getCollection = async (handle: string) => {
  const { data, errors } = await client.request(
    `#graphql
    query Collection {
      collection(handle: "${handle}") {
        handle
        products(first: 12) {
          edges {
            node {
              handle
              id
              images(first: 10) {
                nodes {
                  url
                  id
                }
              }
              options {
                name
                values
              }
              priceRange {
                minVariantPrice {
                  currencyCode
                  amount
                }
              }
              title
            }
          }
        }
        descriptionHtml
        image {
          id
          url
        }
      }
    }`,
  );

  if (errors) throw new Error(errors.message);

  return data as CollectionQuery;
};

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
  const products = data.collection?.products.edges;

  return (
    <main className="main">
      <h1 className="hidden">{profile.name}</h1>
      <HeaderMiddle />
      <HeaderBottom title={hero.title} />
      <Hero image={hero.image} />
      <Collection products={products} />
    </main>
  );
};

export default Home;
