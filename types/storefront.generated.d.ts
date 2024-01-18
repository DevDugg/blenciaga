/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontTypes from "./storefront.types.d.ts";

export type ProductsQueryVariables = StorefrontTypes.Exact<{ [key: string]: never }>;

export type ProductsQuery = {
  products: {
    nodes: Array<
      Pick<StorefrontTypes.Product, "title" | "id" | "handle"> & {
        images: { nodes: Array<Pick<StorefrontTypes.Image, "id" | "url">> };
        collections: { nodes: Array<Pick<StorefrontTypes.Collection, "id" | "handle" | "title">> };
        priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, "amount" | "currencyCode"> };
        options: Array<Pick<StorefrontTypes.ProductOption, "name" | "values">>;
      }
    >;
  };
};

export type CollectionQueryVariables = StorefrontTypes.Exact<{ [key: string]: never }>;

export type CollectionQuery = {
  collection?: StorefrontTypes.Maybe<
    Pick<StorefrontTypes.Collection, "handle" | "descriptionHtml"> & {
      products: {
        edges: Array<{
          node: Pick<StorefrontTypes.Product, "handle" | "id" | "title"> & {
            images: { nodes: Array<Pick<StorefrontTypes.Image, "url" | "id">> };
            options: Array<Pick<StorefrontTypes.ProductOption, "name" | "values">>;
            priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, "currencyCode" | "amount"> };
          };
        }>;
      };
      image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, "id" | "url">>;
    }
  >;
};

export type ProductQueryVariables = StorefrontTypes.Exact<{ [key: string]: never }>;

export type ProductQuery = {
  product?: StorefrontTypes.Maybe<
    Pick<StorefrontTypes.Product, "descriptionHtml" | "id" | "title"> & {
      images: { nodes: Array<Pick<StorefrontTypes.Image, "id" | "url">> };
      priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, "amount" | "currencyCode"> };
      options: Array<Pick<StorefrontTypes.ProductOption, "id" | "name" | "values">>;
    }
  >;
};

interface GeneratedQueryTypes {
  "#graphql\n    query Products {\n      products(first: 250) {\n        nodes {\n          title\n          images(first: 5) {\n            nodes {\n              id\n              url\n            }\n          }\n          collections(first: 10) {\n            nodes {\n              id\n              handle\n              title\n            }\n          }\n          id\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          handle\n          options {\n            name\n            values\n          }\n        }\n      }\n    }": {
    return: ProductsQuery;
    variables: ProductsQueryVariables;
  };
  '#graphql\n    query Collection {\n      collection(handle: "new-collection") {\n        handle\n        products(first: 10) {\n          edges {\n            node {\n              handle\n              id\n              images(first: 10) {\n                nodes {\n                  url\n                  id\n                }\n              }\n              options {\n                name\n                values\n              }\n              priceRange {\n                minVariantPrice {\n                  currencyCode\n                  amount\n                }\n              }\n              title\n            }\n          }\n        }\n        descriptionHtml\n        image {\n          id\n          url\n        }\n      }\n    }': {
    return: CollectionQuery;
    variables: CollectionQueryVariables;
  };
  '#graphql\n    query Product {\n      product(handle: "#REQUIRED_VAR=handle") {\n        descriptionHtml\n        id\n        images(first: 10) {\n          nodes {\n            id\n            url\n          }\n        }\n        priceRange {\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n        title\n        options {\n          id\n          name\n          values\n        }\n      }\n    }': {
    return: ProductQuery;
    variables: ProductQueryVariables;
  };
}

interface GeneratedMutationTypes {}
declare module "@shopify/storefront-api-client" {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
