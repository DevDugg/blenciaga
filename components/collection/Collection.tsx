"use client";

import Button from "../Button";
import { CollectionQuery } from "@/types/storefront.generated";
import Container from "../Container";
import Image from "next/image";
import Product from "./Product";
import client from "@/utils/api-client";
import { motion } from "framer-motion";
import { transition } from "@/motion/default.motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

interface IProps {
  products?: NonNullable<CollectionQuery["collection"]>["products"];
  categoryHandle: string;
}

const getCollection = async (handle: string | null | undefined, after?: string) => {
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
        products(first: 12, ${after ? `after: "${after}"` : ""}) {
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

const Collection = ({ products, categoryHandle }: IProps) => {
  const [isBook, setIsBook] = useState<boolean>(false);
  const gridBreakpoint = useMediaQuery("(max-width: 1440px)");

  const [data, setData] = useState<NonNullable<CollectionQuery["collection"]>["products"] | undefined>(products);

  data?.edges[data.edges.length - 1].cursor;

  const curatedData = data
    ? {
        ...data,
        edges: data?.edges.slice(
          0,
          data.edges.length -
            (data.edges.length % (gridBreakpoint && !isBook ? 3 : gridBreakpoint && isBook ? 1 : isBook ? 2 : 4)),
        ),
      }
    : null;

  const fetchMore = async () => {
    console.log(categoryHandle, data?.edges[data.edges.length - 1].cursor);

    if (!data?.pageInfo.hasNextPage) return;

    const newData = await getCollection(categoryHandle, data?.edges[data.edges.length - 1].cursor);
    if (!newData.collection || !newData.collection?.products.edges) return;
    setData({
      edges: [...data.edges, ...newData.collection.products.edges],
      pageInfo: newData.collection.products.pageInfo,
    });
  };

  return (
    <section className="collection">
      <Container className="flex flex-col">
        {data && curatedData ? (
          <>
            <div className="flex items-center justify-between gap-10 px-3 py-4">
              <span className="text-sm text-BLACK">Results</span>
              <button
                type="button"
                className="uppercase text-sm text-BLACK flex items-center gap-2"
                onClick={() => setIsBook(!isBook)}
              >
                <span>Visualizaciones</span>
                <div className="relative w-[18px] h-[18px]">
                  <motion.div
                    className="absolute left-0 top-0"
                    initial={{ opacity: 1 }}
                    animate={isBook ? { opacity: 0 } : {}}
                    transition={transition}
                  >
                    <Image
                      src={"/view.svg"}
                      alt="View Icon"
                      height={18}
                      width={18}
                      className="object-contain w-[18px] h-[18px]"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute left-0 top-0 max-[1440px]:rotate-90"
                    initial={{ opacity: 0 }}
                    animate={isBook ? { opacity: 1 } : {}}
                    transition={transition}
                  >
                    <Image
                      src={"/view_book.svg"}
                      alt="View Icon"
                      height={18}
                      width={18}
                      className="object-contain w-[18px] h-[18px]"
                    />
                  </motion.div>
                </div>
              </button>
            </div>
            <div
              className="grid grid-cols-FOUR_PERCENT max-[1440px]:grid-cols-THREE_PERCENT max-md:grid-cols-TWO_PERCENT"
              style={isBook ? { gridTemplateColumns: gridBreakpoint ? "100%" : "repeat(2, 50%)" } : {}}
            >
              {curatedData.edges.length > 0 ? (
                curatedData.edges.map((product) => (
                  <Product key={product.node.id} product={product.node} view={isBook ? "big" : "small"} />
                ))
              ) : (
                <span>No results</span>
              )}
            </div>
            <div className="flex justify-center w-full py-20">
              <div className="max-w-fit w-full px-3 max-md:max-w-none">
                <Button title="Load more" onClick={fetchMore} disabled={!data.pageInfo.hasNextPage} />
              </div>
            </div>
          </>
        ) : (
          <Container className="py-10 flex items-center justify-center text-xl">
            <p>Something went wrong :/</p>
          </Container>
        )}
      </Container>
    </section>
  );
};
export default Collection;
