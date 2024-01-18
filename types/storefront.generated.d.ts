/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontTypes from './storefront.types.d.ts';

export type CollectionQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type CollectionQuery = { collection?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Collection, 'handle' | 'descriptionHtml'>
    & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, products: { pageInfo: Pick<StorefrontTypes.PageInfo, 'hasNextPage'>, edges: Array<(
        Pick<StorefrontTypes.ProductEdge, 'cursor'>
        & { node: (
          Pick<StorefrontTypes.Product, 'title' | 'id' | 'handle'>
          & { images: { nodes: Array<Pick<StorefrontTypes.Image, 'id' | 'url'>> }, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, options: Array<Pick<StorefrontTypes.ProductOption, 'name' | 'values'>> }
        ) }
      )> } }
  )> };

export type ProductConnectionFragmentFragment = { edges: Array<(
    Pick<StorefrontTypes.ProductEdge, 'cursor'>
    & { node: (
      Pick<StorefrontTypes.Product, 'title' | 'id' | 'handle'>
      & { images: { nodes: Array<Pick<StorefrontTypes.Image, 'id' | 'url'>> }, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, options: Array<Pick<StorefrontTypes.ProductOption, 'name' | 'values'>> }
    ) }
  )>, pageInfo: Pick<StorefrontTypes.PageInfo, 'hasNextPage'> };

export type ProductQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type ProductQuery = { product?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Product, 'descriptionHtml' | 'id' | 'title'>
    & { images: { nodes: Array<Pick<StorefrontTypes.Image, 'id' | 'url'>> }, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>> }
  )> };

export type ProductsQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type ProductsQuery = { products: { edges: Array<(
      Pick<StorefrontTypes.ProductEdge, 'cursor'>
      & { node: (
        Pick<StorefrontTypes.Product, 'title' | 'id' | 'handle'>
        & { images: { nodes: Array<Pick<StorefrontTypes.Image, 'id' | 'url'>> }, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, options: Array<Pick<StorefrontTypes.ProductOption, 'name' | 'values'>> }
      ) }
    )>, pageInfo: Pick<StorefrontTypes.PageInfo, 'hasNextPage'> } };

interface GeneratedQueryTypes {
  "#graphql\n    query Collection {\n      collection(handle: \"new-collection\") {\n        handle\n        descriptionHtml\n        image {\n          id\n          url\n        }\n        products(first: 12) {\n          ...ProductConnectionFragment\n          pageInfo {\n            hasNextPage\n          }\n        }\n      }\n    }\n    \n    fragment ProductConnectionFragment on ProductConnection {\n      edges {\n        node {\n          title\n          images(first: 10) {\n            nodes {\n              id\n              url\n            }\n          }\n          id\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          handle\n          options {\n            name\n            values\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }": {return: CollectionQuery, variables: CollectionQueryVariables},
  "#graphql\n    query Product {\n      product(handle: \"#REQUIRED_VAR=handle\") {\n        descriptionHtml\n        id\n        images(first: 10) {\n          nodes {\n            id\n            url\n          }\n        }\n        priceRange {\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n        title\n        options {\n          id\n          name\n          values\n        }\n      }\n    }": {return: ProductQuery, variables: ProductQueryVariables},
  "#graphql\n    query Products {\n      products(\n        first: 12,\n        #REQUIRED_VAR=cursor ? `after: \"${cursor\"` : \"\"}\n      ) {\n        ...ProductConnectionFragment\n      }\n    }\n    fragment ProductConnectionFragment on ProductConnection {\n      edges {\n        node {\n          title\n          images(first: 10) {\n            nodes {\n              id\n              url\n            }\n          }\n          id\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          handle\n          options {\n            name\n            values\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }": {return: ProductsQuery, variables: ProductsQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
