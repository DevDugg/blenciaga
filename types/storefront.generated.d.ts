/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontTypes from './storefront.types.d.ts';

export type ProductQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type ProductQuery = { product?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Product, 'descriptionHtml' | 'id' | 'title'>
    & { images: { nodes: Array<Pick<StorefrontTypes.Image, 'id' | 'url'>> }, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, variants: { nodes: Array<(
        Pick<StorefrontTypes.ProductVariant, 'title' | 'id'>
        & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>> }
      )> } }
  )> };

export type CreateCartMutationVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type CreateCartMutation = { cartCreate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'totalQuantity'>
      & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, totalDutyAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: Pick<StorefrontTypes.Product, 'handle' | 'title'> }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: Pick<StorefrontTypes.Product, 'handle' | 'title'> }
            ) }
          ) }> } }
    )> }> };

export type BaseCartLineConnectionFragmentFragment = { edges: Array<{ node: (
      Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
      & { merchandise: (
        Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
        & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: Pick<StorefrontTypes.Product, 'handle' | 'title'> }
      ) }
    ) | (
      Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
      & { merchandise: (
        Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
        & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: Pick<StorefrontTypes.Product, 'handle' | 'title'> }
      ) }
    ) }> };

export type CartCostFragmentFragment = { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, totalDutyAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> };

export type CartQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type CartQuery = { cart?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Cart, 'id' | 'totalQuantity'>
    & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, totalDutyAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
          Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
          & { merchandise: (
            Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
            & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: Pick<StorefrontTypes.Product, 'handle' | 'title'> }
          ) }
        ) | (
          Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
          & { merchandise: (
            Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
            & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: Pick<StorefrontTypes.Product, 'handle' | 'title'> }
          ) }
        ) }> } }
  )> };

export type AddToCartMutationVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type AddToCartMutation = { cartLinesAdd?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'totalQuantity'>
      & { cost: { subtotalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalAmount: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTaxAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, totalDutyAmount?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>> }, lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: Pick<StorefrontTypes.Product, 'handle' | 'title'> }
            ) }
          ) | (
            Pick<StorefrontTypes.ComponentizableCartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title'>
              & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>>, product: Pick<StorefrontTypes.Product, 'handle' | 'title'> }
            ) }
          ) }> } }
    )> }> };

export type ProductsQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type ProductsQuery = { products: { edges: Array<(
      Pick<StorefrontTypes.ProductEdge, 'cursor'>
      & { node: (
        Pick<StorefrontTypes.Product, 'title' | 'id' | 'handle'>
        & { images: { nodes: Array<Pick<StorefrontTypes.Image, 'id' | 'url'>> }, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, options: Array<Pick<StorefrontTypes.ProductOption, 'name' | 'values'>> }
      ) }
    )>, pageInfo: Pick<StorefrontTypes.PageInfo, 'hasNextPage'> } };

export type ProductConnectionFragmentFragment = { edges: Array<(
    Pick<StorefrontTypes.ProductEdge, 'cursor'>
    & { node: (
      Pick<StorefrontTypes.Product, 'title' | 'id' | 'handle'>
      & { images: { nodes: Array<Pick<StorefrontTypes.Image, 'id' | 'url'>> }, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, options: Array<Pick<StorefrontTypes.ProductOption, 'name' | 'values'>> }
    ) }
  )>, pageInfo: Pick<StorefrontTypes.PageInfo, 'hasNextPage'> };

interface GeneratedQueryTypes {
  "#graphql\n    query Product {\n      product(handle: \"#REQUIRED_VAR=handle\") {\n        descriptionHtml\n        id\n        images(first: 10) {\n          nodes {\n            id\n            url\n          }\n        }\n        priceRange {\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n        title\n        options {\n          id\n          name\n          values\n        }\n        variants(first: 10) {\n          nodes {\n            image {\n              id\n              url\n            }\n            price {\n              amount\n              currencyCode\n            }\n            title\n            selectedOptions {\n              name\n              value\n            }\n            id\n          }\n        }\n      }\n    }": {return: ProductQuery, variables: ProductQueryVariables},
  "#graphql\n    query Cart {\n      cart(\n        id: \"gid://shopify/Cart/Z2NwLXVzLWNlbnRyYWwxOjAxSE4zM1lONzBKNkJKNTUzQzBOM1BYNkUx\"\n      ) {\n        cost {\n          ...CartCostFragment\n        }\n        id\n        lines(first: 10) {\n          ...BaseCartLineConnectionFragment\n        }\n        totalQuantity\n      }\n    }\n    \n    fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n      edges {\n        node {\n          merchandise {\n            ... on ProductVariant {\n              id\n              image {\n                id\n                url\n              }\n              title\n              price {\n                amount\n                currencyCode\n              }\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                handle\n                title\n              }\n            }\n          }\n          id\n          quantity\n        }\n      }\n    }\n    \n    fragment CartCostFragment on CartCost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }": {return: CartQuery, variables: CartQueryVariables},
  "#graphql\n    query Products {\n      products(\n        first: 12,\n        #REQUIRED_VAR=cursor ? `after: \"${cursor\"` : \"\"}\n      ) {\n        ...ProductConnectionFragment\n      }\n    }\n    fragment ProductConnectionFragment on ProductConnection {\n      edges {\n        node {\n          title\n          images(first: 10) {\n            nodes {\n              id\n              url\n            }\n          }\n          id\n          priceRange {\n            minVariantPrice {\n              amount\n              currencyCode\n            }\n          }\n          handle\n          options {\n            name\n            values\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }": {return: ProductsQuery, variables: ProductsQueryVariables},
  "#graphql\n      query Cart {\n        cart(\n          id: \"gid://shopify/Cart/Z2NwLXVzLWNlbnRyYWwxOjAxSE4zM1lONzBKNkJKNTUzQzBOM1BYNkUx\"\n        ) {\n          cost {\n            ...CartCostFragment\n          }\n          id\n          lines(first: 10) {\n            ...BaseCartLineConnectionFragment\n          }\n          totalQuantity\n        }\n      }\n      \n      fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n        edges {\n          node {\n            merchandise {\n              ... on ProductVariant {\n                id\n                image {\n                  id\n                  url\n                }\n                title\n                price {\n                  amount\n                  currencyCode\n                }\n                selectedOptions {\n                  name\n                  value\n                }\n                product {\n                  handle\n                  title\n                }\n              }\n            }\n            id\n            quantity\n          }\n        }\n      }\n      \n      fragment CartCostFragment on CartCost {\n        subtotalAmount {\n          amount\n          currencyCode\n        }\n        totalAmount {\n          amount\n          currencyCode\n        }\n        totalTaxAmount {\n          amount\n          currencyCode\n        }\n        totalDutyAmount {\n          amount\n          currencyCode\n        }\n      }": {return: CartQuery, variables: CartQueryVariables},
}

interface GeneratedMutationTypes {
  "#graphql\n    mutation CreateCart {\n      cartCreate(input: {}) {\n        cart {\n          id\n          totalQuantity\n          cost {\n            ...CartCostFragment\n          }\n          lines(first: 10) {\n            ...BaseCartLineConnectionFragment\n          }\n        }\n      }\n    }\n    \n    fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n      edges {\n        node {\n          merchandise {\n            ... on ProductVariant {\n              id\n              image {\n                id\n                url\n              }\n              title\n              price {\n                amount\n                currencyCode\n              }\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                handle\n                title\n              }\n            }\n          }\n          id\n          quantity\n        }\n      }\n    }\n    \n    fragment CartCostFragment on CartCost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }": {return: CreateCartMutation, variables: CreateCartMutationVariables},
  "#graphql\n    mutation AddToCart {\n      cartLinesAdd(\n        cartId: \"gid://shopify/Cart/Z2NwLXVzLWNlbnRyYWwxOjAxSE41SzhSVjFFS1A0U0NCUkExOEg4QTFO\"\n        lines: {merchandiseId: \"gid://shopify/ProductVariant/42019609116812\", quantity: 1}\n      ) {\n        cart {\n          cost {\n            ...CartCostFragment\n          }\n          id\n          lines(first: 10) {\n            ...BaseCartLineConnectionFragment\n          }\n          totalQuantity\n        }\n      }\n    }\n    \n    fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n      edges {\n        node {\n          merchandise {\n            ... on ProductVariant {\n              id\n              image {\n                id\n                url\n              }\n              title\n              price {\n                amount\n                currencyCode\n              }\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                handle\n                title\n              }\n            }\n          }\n          id\n          quantity\n        }\n      }\n    }\n    \n    fragment CartCostFragment on CartCost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }": {return: AddToCartMutation, variables: AddToCartMutationVariables},
  "#graphql\n      mutation AddToCart {\n        cartLinesAdd(\n          cartId: \"gid://shopify/Cart/Z2NwLXVzLWNlbnRyYWwxOjAxSE41SzhSVjFFS1A0U0NCUkExOEg4QTFO\"\n          lines: {merchandiseId: \"gid://shopify/ProductVariant/42019609116812\", quantity: 1}\n        ) {\n          cart {\n            cost {\n              ...CartCostFragment\n            }\n            id\n            lines(first: 10) {\n              ...BaseCartLineConnectionFragment\n            }\n            totalQuantity\n          }\n        }\n      }\n      \n      fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n        edges {\n          node {\n            merchandise {\n              ... on ProductVariant {\n                id\n                image {\n                  id\n                  url\n                }\n                title\n                price {\n                  amount\n                  currencyCode\n                }\n                selectedOptions {\n                  name\n                  value\n                }\n                product {\n                  handle\n                  title\n                }\n              }\n            }\n            id\n            quantity\n          }\n        }\n      }\n      \n      fragment CartCostFragment on CartCost {\n        subtotalAmount {\n          amount\n          currencyCode\n        }\n        totalAmount {\n          amount\n          currencyCode\n        }\n        totalTaxAmount {\n          amount\n          currencyCode\n        }\n        totalDutyAmount {\n          amount\n          currencyCode\n        }\n      }": {return: AddToCartMutation, variables: AddToCartMutationVariables},
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
