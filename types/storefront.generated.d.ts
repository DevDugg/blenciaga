/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontTypes from './storefront.types.d.ts';

export type ProductsQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type ProductsQuery = { products: { nodes: Array<(
      Pick<StorefrontTypes.Product, 'title' | 'id' | 'handle'>
      & { images: { nodes: Array<Pick<StorefrontTypes.Image, 'id' | 'url'>> }, collections: { nodes: Array<Pick<StorefrontTypes.Collection, 'id' | 'handle' | 'title'>> }, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, options: Array<Pick<StorefrontTypes.ProductOption, 'name' | 'values'>> }
    )> } };

export type ProductQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type ProductQuery = { product?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Product, 'descriptionHtml' | 'id' | 'title'>
    & { images: { nodes: Array<Pick<StorefrontTypes.Image, 'id' | 'url'>> }, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, variants: { nodes: Array<(
        Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
        & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>> }
      )> } }
  )> };

interface GeneratedQueryTypes {
  "#graphql\n    query Products {\n      products(first: 250) {\n        nodes {\n          title\n          images(first: 5) {\n            nodes {\n              id\n              url\n            }\n          }\n          collections(first: 10) {\n            nodes {\n              id\n              handle\n              title\n            }\n          }\n          id\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          handle\n          options {\n            name\n            values\n          }\n        }\n      }\n    }": {return: ProductsQuery, variables: ProductsQueryVariables},
  "#graphql\n    query Product {\n      product(handle: \"tape-type-t-shirt-medium-fit\") {\n        descriptionHtml\n        id\n        images(first: 10) {\n          nodes {\n            id\n            url\n          }\n        }\n        priceRange {\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n        title\n        options {\n          id\n          name\n          values\n        }\n        variants(first: 20) {\n          nodes {\n            id\n            title\n            image {\n              id\n              url\n            }\n            price {\n              amount\n              currencyCode\n            }\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n    }": {return: ProductQuery, variables: ProductQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
