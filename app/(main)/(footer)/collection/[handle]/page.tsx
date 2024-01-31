import Collection from "@/components/collection/Collection";
import { CollectionQuery } from "@/types/storefront.generated";
import HeaderBottom from "@/components/header/HeaderBottom";
import HeaderMiddle from "@/components/header/HeaderMiddle";
import Hero from "@/components/hero/Hero";
import client from "@/utils/api-client";
import profile from "@/settings/data/profile.data";

export const getCollection = async (handle: string | null | undefined, after?: string) => {
  const cursor = after ? `after: "${after}"` : "";

  const { data, errors } = await client.request(
    `#graphql
    query Collection {
      collection(handle: "${handle || "new-collection"}") {
        handle
        descriptionHtml
        image {
          id
          url
        }
        products(first: 12, ${cursor}) {
          ...ProductConnectionFragment
          pageInfo {
            hasNextPage
          }
        }
      }
    }
    
    fragment ProductConnectionFragment on ProductConnection {
      edges {
        node {
          title
          images(first: 10) {
            nodes {
              id
              url
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
        cursor
      }
      pageInfo {
        hasNextPage
      }
    }`,
  );

  if (errors?.graphQLErrors) console.log(errors.graphQLErrors);

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
