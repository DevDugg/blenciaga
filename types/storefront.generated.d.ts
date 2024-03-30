/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import * as StorefrontTypes from './storefront.types.d.ts';

export type CollectionQueryVariables = StorefrontTypes.Exact<{
  handle?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
  after?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
}>;


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

export type WelcomeMenuQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type WelcomeMenuQuery = { menu?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Menu, 'id'>
    & { items: Array<(
      Pick<StorefrontTypes.MenuItem, 'id' | 'title'>
      & { resource?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Collection, 'id' | 'handle'>> }
    )> }
  )> };

export type ProductQueryVariables = StorefrontTypes.Exact<{
  handle?: StorefrontTypes.InputMaybe<StorefrontTypes.Scalars['String']['input']>;
}>;


export type ProductQuery = { product?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Product, 'descriptionHtml' | 'id' | 'title' | 'handle'>
    & { images: { nodes: Array<Pick<StorefrontTypes.Image, 'id' | 'url'>> }, priceRange: { minVariantPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }, variants: { nodes: Array<(
        Pick<StorefrontTypes.ProductVariant, 'title' | 'id'>
        & { image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'id' | 'url'>>, price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>> }
      )> }, options: Array<Pick<StorefrontTypes.ProductOption, 'id' | 'name' | 'values'>>, collections: { nodes: Array<Pick<StorefrontTypes.Collection, 'handle' | 'title' | 'id'>> } }
  )> };

export type MainMenuQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type MainMenuQuery = { menu?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Menu, 'id' | 'title' | 'handle'>
    & { items: Array<(
      Pick<StorefrontTypes.MenuItem, 'id' | 'title' | 'type'>
      & { resource?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Collection, 'id' | 'handle'>>, items: Array<(
        Pick<StorefrontTypes.MenuItem, 'id' | 'type' | 'title'>
        & { resource?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Collection, 'id' | 'handle'>>, items: Array<(
          Pick<StorefrontTypes.MenuItem, 'id' | 'title'>
          & { resource?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Collection, 'id' | 'handle'>> }
        )> }
      )> }
    )> }
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

export type CartQueryVariables = StorefrontTypes.Exact<{
  id: StorefrontTypes.Scalars['ID']['input'];
}>;


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

export type AddToCartMutationVariables = StorefrontTypes.Exact<{
  variantId: StorefrontTypes.Scalars['ID']['input'];
  id: StorefrontTypes.Scalars['ID']['input'];
}>;


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

export type RemoveFromCartMutationVariables = StorefrontTypes.Exact<{
  lineId: Array<StorefrontTypes.Scalars['ID']['input']> | StorefrontTypes.Scalars['ID']['input'];
  id: StorefrontTypes.Scalars['ID']['input'];
}>;


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

export type UpdateProductQuantityMutationVariables = StorefrontTypes.Exact<{
  quantity: StorefrontTypes.Scalars['Int']['input'];
  lineId: StorefrontTypes.Scalars['ID']['input'];
  id: StorefrontTypes.Scalars['ID']['input'];
}>;


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

export type CreateCheckoutMutationVariables = StorefrontTypes.Exact<{
  input: StorefrontTypes.CheckoutCreateInput;
}>;


export type CreateCheckoutMutation = { checkoutCreate?: StorefrontTypes.Maybe<{ checkout?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Checkout, 'id'>
      & { totalPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, totalTax: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, lineItemsSubtotalPrice: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, lineItems: { edges: Array<{ node: (
            Pick<StorefrontTypes.CheckoutLineItem, 'id' | 'quantity' | 'title'>
            & { unitPrice?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>>, variant?: StorefrontTypes.Maybe<{ price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>> }> }
          ) }> } }
    )>, checkoutUserErrors: Array<Pick<StorefrontTypes.CheckoutUserError, 'field' | 'message'>> }> };

export type AddCheckoutLinesMutationVariables = StorefrontTypes.Exact<{
  checkoutId: StorefrontTypes.Scalars['ID']['input'];
  lineItems: Array<StorefrontTypes.CheckoutLineItemInput> | StorefrontTypes.CheckoutLineItemInput;
}>;


export type AddCheckoutLinesMutation = { checkoutLineItemsAdd?: StorefrontTypes.Maybe<{ checkout?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Checkout, 'id'>
      & { lineItems: { edges: Array<{ node: Pick<StorefrontTypes.CheckoutLineItem, 'id' | 'title' | 'quantity'> }> } }
    )>, checkoutUserErrors: Array<Pick<StorefrontTypes.CheckoutUserError, 'field' | 'message'>> }> };

export type UpdateShippingAddressMutationVariables = StorefrontTypes.Exact<{
  checkoutId: StorefrontTypes.Scalars['ID']['input'];
  shippingAddress: StorefrontTypes.MailingAddressInput;
}>;


export type UpdateShippingAddressMutation = { checkoutShippingAddressUpdateV2?: StorefrontTypes.Maybe<{ checkout?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Checkout, 'id'>
      & { shippingAddress?: StorefrontTypes.Maybe<Pick<StorefrontTypes.MailingAddress, 'firstName' | 'lastName' | 'address1' | 'address2' | 'city' | 'country' | 'province' | 'zip'>> }
    )>, checkoutUserErrors: Array<Pick<StorefrontTypes.CheckoutUserError, 'field' | 'message'>> }> };

interface GeneratedQueryTypes {
  "#graphql\n    query Collection($handle:String, $after:String) {\n  collection(handle: $handle) {\n    handle\n    descriptionHtml\n    image {\n      id\n      url\n    }\n    products(first: 12, after: $after) {\n      ...ProductConnectionFragment\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n}\n\nfragment ProductConnectionFragment on ProductConnection {\n  edges {\n    node {\n      title\n      images(first: 10) {\n        nodes {\n          id\n          url\n        }\n      }\n      id\n      priceRange {\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      handle\n      options {\n        name\n        values\n      }\n    }\n    cursor\n  }\n  pageInfo {\n    hasNextPage\n  }\n}\n    ": {return: CollectionQuery, variables: CollectionQueryVariables},
  "#graphql\n      query WelcomeMenu {\n        menu(handle: \"welcome-menu\") {\n          id\n          items {\n            id\n            title\n            resource {\n              ... on Collection {\n                id\n                handle\n              }\n            }\n          }\n        }\n      }": {return: WelcomeMenuQuery, variables: WelcomeMenuQueryVariables},
  "#graphql\n    query Product($handle: String) {\n      product(handle: $handle) {\n        descriptionHtml\n        id\n        images(first: 10) {\n          nodes {\n            id\n            url\n          }\n        }\n        priceRange {\n          minVariantPrice {\n            amount\n            currencyCode\n          }\n        }\n        title\n        variants(first: 10) {\n          nodes {\n            image {\n              id\n              url\n            }\n            price {\n              amount\n              currencyCode\n            }\n            title\n            selectedOptions {\n              name\n              value\n            }\n            id\n          }\n        }\n        options {\n          id\n          name\n          values\n        }\n        collections(first: 10) {\n          nodes {\n            handle\n            title\n            id\n          }\n        }\n        handle\n      }\n    }": {return: ProductQuery, variables: ProductQueryVariables},
  "#graphql\n    query MainMenu {\n      menu(handle: \"main-menu\") {\n        id\n        title\n        items {\n          id\n          title\n          type\n          resource {\n            ... on Collection {\n              id\n              handle\n            }\n          }\n          items {\n            id\n            type\n            title\n            resource {\n              ... on Collection {\n                id\n                handle\n              }\n            }\n            items {\n              id\n              resource {\n                ... on Collection {\n                  id\n                  handle\n                }\n              }\n              title\n            }\n          }\n        }\n        handle\n      }\n    }": {return: MainMenuQuery, variables: MainMenuQueryVariables},
  "#graphql\n      query Cart($id:ID!) {\n        cart(\n          id: $id\n        ) {\n          cost {\n            ...CartCostFragment\n          }\n          id\n          lines(first: 10) {\n            ...BaseCartLineConnectionFragment\n          }\n          totalQuantity\n        }\n      }\n      \n      fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n        edges {\n          node {\n            merchandise {\n              ... on ProductVariant {\n                id\n                image {\n                  id\n                  url\n                }\n                title\n                price {\n                  amount\n                  currencyCode\n                }\n                selectedOptions {\n                  name\n                  value\n                }\n                product {\n                  handle\n                  title\n                }\n              }\n            }\n            id\n            quantity\n          }\n        }\n      }\n      \n      fragment CartCostFragment on CartCost {\n        subtotalAmount {\n          amount\n          currencyCode\n        }\n        totalAmount {\n          amount\n          currencyCode\n        }\n        totalTaxAmount {\n          amount\n          currencyCode\n        }\n        totalDutyAmount {\n          amount\n          currencyCode\n        }\n      }": {return: CartQuery, variables: CartQueryVariables},
}

interface GeneratedMutationTypes {
  "#graphql\nmutation CreateCart {\n    cartCreate(input: {}) {\n      cart {\n        id\n        totalQuantity\n        cost {\n          ...CartCostFragment\n        }\n        lines(first: 10) {\n          ...BaseCartLineConnectionFragment\n        }\n      }\n    }\n  }\n  \n  fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n    edges {\n      node {\n        merchandise {\n          ... on ProductVariant {\n            id\n            image {\n              id\n              url\n            }\n            title\n            price {\n              amount\n              currencyCode\n            }\n            selectedOptions {\n              name\n              value\n            }\n            product {\n              handle\n              title\n            }\n          }\n        }\n        id\n        quantity\n      }\n    }\n  }\n  \n  fragment CartCostFragment on CartCost {\n    subtotalAmount {\n      amount\n      currencyCode\n    }\n    totalAmount {\n      amount\n      currencyCode\n    }\n    totalTaxAmount {\n      amount\n      currencyCode\n    }\n    totalDutyAmount {\n      amount\n      currencyCode\n    }\n  }": {return: CreateCartMutation, variables: CreateCartMutationVariables},
  "#graphql\n    mutation AddToCart($variantId: ID!, $id: ID!) {\n      cartLinesAdd(\n        cartId: $id\n        lines: {merchandiseId: $variantId, quantity: 1}\n      ) {\n        cart {\n          cost {\n            ...CartCostFragment\n          }\n          id\n          lines(first: 10) {\n            ...BaseCartLineConnectionFragment\n          }\n          totalQuantity\n        }\n      }\n    }\n    \n    fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n      edges {\n        node {\n          merchandise {\n            ... on ProductVariant {\n              id\n              image {\n                id\n                url\n              }\n              title\n              price {\n                amount\n                currencyCode\n              }\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                handle\n                title\n              }\n            }\n          }\n          id\n          quantity\n        }\n      }\n    }\n    \n    fragment CartCostFragment on CartCost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }": {return: AddToCartMutation, variables: AddToCartMutationVariables},
  "#graphql\n    mutation RemoveFromCart($lineId: [ID!]!, $id: ID!) {\n      cartLinesRemove(\n        cartId: $id\n        lineIds: $lineId\n      ) {\n        cart {\n          cost {\n            ...CartCostFragment\n          }\n          id\n          lines(first: 10) {\n            ...BaseCartLineConnectionFragment\n          }\n          totalQuantity\n        }\n      }\n    }\n    \n    fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n      edges {\n        node {\n          merchandise {\n            ... on ProductVariant {\n              id\n              image {\n                id\n                url\n              }\n              title\n              price {\n                amount\n                currencyCode\n              }\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                handle\n                title\n              }\n            }\n          }\n          id\n          quantity\n        }\n      }\n    }\n    \n    fragment CartCostFragment on CartCost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }": {return: RemoveFromCartMutation, variables: RemoveFromCartMutationVariables},
  "#graphql\n    mutation UpdateProductQuantity($quantity: Int!, $lineId: ID!, $id: ID!) {\n      cartLinesUpdate(\n        cartId: $id\n        lines: {id: $lineId, quantity: $quantity}\n      ) {\n        cart {\n          cost {\n            ...CartCostFragment\n          }\n          id\n          lines(first: 10) {\n            ...BaseCartLineConnectionFragment\n          }\n          totalQuantity\n        }\n      }\n    }\n    \n    \n    fragment BaseCartLineConnectionFragment on BaseCartLineConnection {\n      edges {\n        node {\n          merchandise {\n            ... on ProductVariant {\n              id\n              image {\n                id\n                url\n              }\n              title\n              price {\n                amount\n                currencyCode\n              }\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                handle\n                title\n              }\n            }\n          }\n          id\n          quantity\n        }\n      }\n    }\n    \n    fragment CartCostFragment on CartCost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n      totalDutyAmount {\n        amount\n        currencyCode\n      }\n    }": {return: UpdateProductQuantityMutation, variables: UpdateProductQuantityMutationVariables},
  "\n  #graphql\n  mutation CreateCheckout($input: CheckoutCreateInput!) {\n    checkoutCreate(input: $input) {\n      checkout {\n        id\n        totalPrice {\n          amount\n          currencyCode\n        }\n        totalTax {\n          amount\n          currencyCode\n        }\n        lineItemsSubtotalPrice {\n          amount\n          currencyCode\n        }\n        lineItems(first: 20) {\n          edges {\n            node {\n              id\n              quantity\n              title\n              unitPrice {\n                amount\n                currencyCode\n              }\n              variant {\n                price {\n                  amount\n                  currencyCode\n                }\n                selectedOptions {\n                  name\n                  value\n                }\n              }\n            }\n          }\n        }\n      }\n      checkoutUserErrors {\n        field\n        message\n      }\n    }\n  }\n  ": {return: CreateCheckoutMutation, variables: CreateCheckoutMutationVariables},
  "\n    #graphql\n    mutation AddCheckoutLines($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {\n      checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n          checkout {\n              id\n              lineItems(first: 10) {\n                  edges {\n                      node {\n                          id\n                          title\n                          quantity\n                      }\n                  }\n              }\n          }\n          checkoutUserErrors {\n              field\n              message\n          }\n      }\n  }\n  ": {return: AddCheckoutLinesMutation, variables: AddCheckoutLinesMutationVariables},
  "\n    #graphql\n    mutation UpdateShippingAddress($checkoutId: ID!, $shippingAddress: MailingAddressInput!) {\n      checkoutShippingAddressUpdateV2(checkoutId: $checkoutId, shippingAddress: $shippingAddress) {\n          checkout {\n              id\n              shippingAddress {\n                  firstName\n                  lastName\n                  address1\n                  address2\n                  city\n                  country\n                  province\n                  zip\n              }\n          }\n          checkoutUserErrors {\n              field\n              message\n          }\n      }\n  }\n  ": {return: UpdateShippingAddressMutation, variables: UpdateShippingAddressMutationVariables},
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
