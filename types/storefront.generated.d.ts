/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontTypes from './storefront.types.d.ts';

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

export type RemoveFromCartMutationVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type RemoveFromCartMutation = { cartLinesRemove?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
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

export type UpdateProductQuantityMutationVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type UpdateProductQuantityMutation = { cartLinesUpdate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
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
    Pick<StorefrontTypes.Product, 'descriptionHtml' | 'id' | 'title' | 'handle'>
    & { images: { nodes: Array<Pick<StorefrontTypes.Image, 'id' | 'url'>> }, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { nodes: Array<(
        Pick<StorefrontTypes.ProductVariant, 'title' | 'id'>
        & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>> }
      )> }, options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, collections: { nodes: Array<Pick<StorefrontTypes.Collection, 'handle' | 'title' | 'id'>> } }
  )> };

interface GeneratedQueryTypes {
  "#graphql\n    query Cart {\n      cart(\n        id: \"#REQUIRED_VAR=id\"\n      ) {\n        cost {\n          ...CartCostFragment\n        }\n        id\n        lines(first: 10) {\n          ...BaseCartLineConnectionFragment\n        }\n        totalQuantity\n      }\n    }\n\n    fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n      edges {\n        node {\n          merchandise {\n            ... on ProductVariant {\n              id\n              image {\n                id\n                url\n              }\n              title\n              price {\n                amount\n                currencyCode\n              }\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                handle\n                title\n              }\n            }\n          }\n          id\n          quantity\n        }\n      }\n    }\n\n    fragment CartCostFragment on CartCost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }": {return: CartQuery, variables: CartQueryVariables},
  "#graphql\n      query Collection {\n        collection(handle: \"asdasd\") {\n          handle\n          descriptionHtml\n          image {\n            id\n            url\n          }\n          products(first: 12) {\n            ...ProductConnectionFragment\n            pageInfo {\n              hasNextPage\n            }\n          }\n        }\n      }\n\n      fragment ProductConnectionFragment on ProductConnection {\n        edges {\n          node {\n            title\n            images(first: 10) {\n              nodes {\n                id\n                url\n              }\n            }\n            id\n            priceRange {\n              minVariantPrice {\n                amount\n                currencyCode\n              }\n            }\n            handle\n            options {\n              name\n              values\n            }\n          }\n          cursor\n        }\n        pageInfo {\n          hasNextPage\n        }\n      }": {return: CollectionQuery, variables: CollectionQueryVariables},
  "#graphql\n    query Product {\n      product(handle: \"copy-of-paris-moon-upside-down-long-sleeve-t-shirt\") {\n        descriptionHtml\n        id\n        images(first: 10) {\n          nodes {\n            id\n            url\n          }\n        }\n        priceRange {\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n        title\n        variants(first: 10) {\n          nodes {\n            image {\n              id\n              url\n            }\n            price {\n              amount\n              currencyCode\n            }\n            title\n            selectedOptions {\n              name\n              value\n            }\n            id\n          }\n        }\n        options {\n          id\n          name\n          values\n        }\n        collections(first: 10) {\n          nodes {\n            handle\n            title\n            id\n          }\n        }\n        handle\n      }\n    }": {return: ProductQuery, variables: ProductQueryVariables},
}

interface GeneratedMutationTypes {
  "#graphql\n    mutation CreateCart {\n      cartCreate(input: {}) {\n        cart {\n          id\n          totalQuantity\n          cost {\n            ...CartCostFragment\n          }\n          lines(first: 10) {\n            ...BaseCartLineConnectionFragment\n          }\n        }\n      }\n    }\n\n    fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n      edges {\n        node {\n          merchandise {\n            ... on ProductVariant {\n              id\n              image {\n                id\n                url\n              }\n              title\n              price {\n                amount\n                currencyCode\n              }\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                handle\n                title\n              }\n            }\n          }\n          id\n          quantity\n        }\n      }\n    }\n\n    fragment CartCostFragment on CartCost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }": {return: CreateCartMutation, variables: CreateCartMutationVariables},
  "#graphql\n    mutation AddToCart {\n      cartLinesAdd(\n        cartId: \"#REQUIRED_VAR=id\"\n        lines: {merchandiseId: \"#REQUIRED_VAR=variantId\", quantity: 1}\n      ) {\n        cart {\n          cost {\n            ...CartCostFragment\n          }\n          id\n          lines(first: 10) {\n            ...BaseCartLineConnectionFragment\n          }\n          totalQuantity\n        }\n      }\n    }\n\n    fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n      edges {\n        node {\n          merchandise {\n            ... on ProductVariant {\n              id\n              image {\n                id\n                url\n              }\n              title\n              price {\n                amount\n                currencyCode\n              }\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                handle\n                title\n              }\n            }\n          }\n          id\n          quantity\n        }\n      }\n    }\n\n    fragment CartCostFragment on CartCost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }": {return: AddToCartMutation, variables: AddToCartMutationVariables},
  "#graphql\n    mutation RemoveFromCart {\n      cartLinesRemove(\n        cartId: \"#REQUIRED_VAR=id\"\n        lineIds: \"#REQUIRED_VAR=lineId\"\n      ) {\n        cart {\n          cost {\n            ...CartCostFragment\n          }\n          id\n          lines(first: 10) {\n            ...BaseCartLineConnectionFragment\n          }\n          totalQuantity\n        }\n      }\n    }\n\n    fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n      edges {\n        node {\n          merchandise {\n            ... on ProductVariant {\n              id\n              image {\n                id\n                url\n              }\n              title\n              price {\n                amount\n                currencyCode\n              }\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                handle\n                title\n              }\n            }\n          }\n          id\n          quantity\n        }\n      }\n    }\n\n    fragment CartCostFragment on CartCost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }": {return: RemoveFromCartMutation, variables: RemoveFromCartMutationVariables},
  "#graphql\n    mutation UpdateProductQuantity {\n      cartLinesUpdate(\n        cartId: \"gid://shopify/Cart/Z2NwLXVzLWNlbnRyYWwxOjAxSE41SzhSVjFFS1A0U0NCUkExOEg4QTFO\"\n        lines: {id: \"gid://shopify/CartLine/0d09e17b-fdc2-4517-9e73-2799f943983b?cart=Z2NwLXVzLWNlbnRyYWwxOjAxSE41SzhSVjFFS1A0U0NCUkExOEg4QTFO\", quantity: 10}\n      ) {\n        cart {\n          cost {\n            ...CartCostFragment\n          }\n          id\n          lines(first: 10) {\n            ...BaseCartLineConnectionFragment\n          }\n          totalQuantity\n        }\n      }\n    }\n\n    fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n      edges {\n        node {\n          merchandise {\n            ... on ProductVariant {\n              id\n              image {\n                id\n                url\n              }\n              title\n              price {\n                amount\n                currencyCode\n              }\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                handle\n                title\n              }\n            }\n          }\n          id\n          quantity\n        }\n      }\n    }\n\n    fragment CartCostFragment on CartCost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }": {return: UpdateProductQuantityMutation, variables: UpdateProductQuantityMutationVariables},
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
