import {
  AddToCartMutation,
  CartQuery,
  CollectionQuery,
  CreateCartMutation,
  ProductQuery,
  RemoveFromCartMutation,
  UpdateProductQuantityMutation,
  WelcomeMenuQuery,
} from "@/types/storefront.generated";

import { IMainMenu } from "@/components/header/HeaderTop";
import client from "./api-client";

// import { CheckoutCreateInput, CheckoutLineItemInput, MailingAddressInput } from "@/types/storefront.types";

// data
export const getCollection = async (handle: string, after?: string) => {
  const variables = {
    handle,
    after,
  };
  const { data, errors } = await client.request(
    `#graphql
    query Collection($handle:String, $after:String) {
  collection(handle: $handle) {
    handle
    descriptionHtml
    image {
      id
      url
    }
    products(first: 12, after: $after) {
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
}
    `,
    {
      variables,
    },
  );

  if (errors?.graphQLErrors) throw new Error(String(errors.graphQLErrors.map((error) => [error.message])));

  if (errors) throw new Error(errors.message);

  return data as CollectionQuery;
};

export const getWelcomeMenu = async () => {
  const { data, errors } = await client.request(
    `#graphql
      query WelcomeMenu {
        menu(handle: "welcome-menu") {
          id
          items {
            id
            title
            resource {
              ... on Collection {
                id
                handle
              }
            }
          }
        }
      }`,
  );

  if (errors) throw new Error(errors.message);

  return data as WelcomeMenuQuery;
};

export const getProduct = async (handle: string) => {
  const variables = {
    handle: handle ? handle : "new-collection",
  };
  const { data, errors } = await client.request(
    `#graphql
    query Product($handle: String) {
      product(handle: $handle) {
        descriptionHtml
        id
        images(first: 10) {
          nodes {
            id
            url
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        title
        variants(first: 10) {
          nodes {
            image {
              id
              url
            }
            price {
              amount
              currencyCode
            }
            title
            selectedOptions {
              name
              value
            }
            id
          }
        }
        options {
          id
          name
          values
        }
        collections(first: 10) {
          nodes {
            handle
            title
            id
          }
        }
        handle
      }
    }`,
    {
      variables,
    },
  );

  if (errors) {
    throw new Error(errors.graphQLErrors?.map((error) => error.message).join(", "));
  }

  return data as ProductQuery;
};

export const getMainMenu = async () => {
  const { data, errors } = await client.request(
    `#graphql
    query MainMenu {
      menu(handle: "main-menu") {
        id
        title
        items {
          id
          title
          type
          resource {
            ... on Collection {
              id
              handle
            }
          }
          items {
            id
            type
            title
            resource {
              ... on Collection {
                id
                handle
              }
            }
            items {
              id
              resource {
                ... on Collection {
                  id
                  handle
                }
              }
              title
            }
          }
        }
        handle
      }
    }`,
  );

  if (errors) throw new Error(errors.message);

  return data as IMainMenu["data"];
};

// cart
export const createCart = async () =>
  // options: ICreateCartMutationOptions
  {
    const { data, errors } = await client.request(
      `#graphql
      mutation CreateCart {
  cartCreate(input: {}) {
    cart {
      id
      totalQuantity
      cost {
        ...CartCostFragment
      }
      lines(first: 10) {
        ...BaseCartLineConnectionFragment
      }
      checkoutUrl
    }
  }
}

fragment BaseCartLineConnectionFragment on BaseCartLineConnection {
  edges {
    node {
      merchandise {
        ... on ProductVariant {
          id
          image {
            id
            url
          }
          title
          price {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          product {
            handle
            title
          }
        }
      }
      id
      quantity
    }
  }
}

fragment CartCostFragment on CartCost {
  subtotalAmount {
    amount
    currencyCode
  }
  totalAmount {
    amount
    currencyCode
  }
  totalTaxAmount {
    amount
    currencyCode
  }
  totalDutyAmount {
    amount
    currencyCode
  }
}
      `,
    );

    if (errors || !data?.cartCreate?.cart?.id) {
      throw new Error(errors?.message);
    }

    return { data: (data as CreateCartMutation).cartCreate?.cart, id: data.cartCreate.cart?.id };
  };

export const getCart = async (id: string) => {
  const variables = {
    id,
  };
  const { data, errors } = await client.request(
    `#graphql
    query Cart($id: ID!) {
  cart(id: $id) {
    cost {
      ...CartCostFragment
    }
    id
    lines(first: 10) {
      ...BaseCartLineConnectionFragment
    }
    totalQuantity
    checkoutUrl
  }
}

fragment BaseCartLineConnectionFragment on BaseCartLineConnection {
  edges {
    node {
      merchandise {
        ... on ProductVariant {
          id
          image {
            id
            url
          }
          title
          price {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          product {
            handle
            title
          }
        }
      }
      id
      quantity
    }
  }
}

fragment CartCostFragment on CartCost {
  subtotalAmount {
    amount
    currencyCode
  }
  totalAmount {
    amount
    currencyCode
  }
  totalTaxAmount {
    amount
    currencyCode
  }
  totalDutyAmount {
    amount
    currencyCode
  }
}
`,
    {
      variables,
    },
  );

  if (errors) {
    throw new Error(errors?.message);
  }

  if (!data?.cart?.id) {
    return null;
  }

  return { data: (data as CartQuery).cart, id: data.cart.id as string };
};

export const addToCart = async (variantId: string, id: string) => {
  const variables = {
    variantId,
    id,
  };
  const { data, errors } = await client.request(
    `#graphql
   mutation AddToCart($variantId: ID!, $id: ID!) {
  cartLinesAdd(cartId: $id, lines: {merchandiseId: $variantId, quantity: 1}) {
    cart {
      cost {
        ...CartCostFragment
      }
      id
      lines(first: 10) {
        ...BaseCartLineConnectionFragment
      }
      totalQuantity
      checkoutUrl
    }
  }
}

fragment BaseCartLineConnectionFragment on BaseCartLineConnection {
  edges {
    node {
      merchandise {
        ... on ProductVariant {
          id
          image {
            id
            url
          }
          title
          price {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          product {
            handle
            title
          }
        }
      }
      id
      quantity
    }
  }
}

fragment CartCostFragment on CartCost {
  subtotalAmount {
    amount
    currencyCode
  }
  totalAmount {
    amount
    currencyCode
  }
  totalTaxAmount {
    amount
    currencyCode
  }
  totalDutyAmount {
    amount
    currencyCode
  }
}`,
    { variables },
  );
  if (errors || !data?.cartLinesAdd?.cart?.id) {
    throw new Error(errors?.message);
  }

  return { data: (data as AddToCartMutation).cartLinesAdd?.cart, id: data.cartLinesAdd.cart?.id as string };
};

export const removeFromCart = async (lineId: string, id: string) => {
  const variables = {
    lineId,
    id,
  };
  const { data, errors } = await client.request(
    `#graphql
    mutation RemoveFromCart($lineId: [ID!]!, $id: ID!) {
  cartLinesRemove(cartId: $id, lineIds: $lineId) {
    cart {
      cost {
        ...CartCostFragment
      }
      id
      lines(first: 10) {
        ...BaseCartLineConnectionFragment
      }
      totalQuantity
      checkoutUrl
    }
  }
}

fragment BaseCartLineConnectionFragment on BaseCartLineConnection {
  edges {
    node {
      merchandise {
        ... on ProductVariant {
          id
          image {
            id
            url
          }
          title
          price {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          product {
            handle
            title
          }
        }
      }
      id
      quantity
    }
  }
}

fragment CartCostFragment on CartCost {
  subtotalAmount {
    amount
    currencyCode
  }
  totalAmount {
    amount
    currencyCode
  }
  totalTaxAmount {
    amount
    currencyCode
  }
  totalDutyAmount {
    amount
    currencyCode
  }
}`,
    { variables },
  );
  if (errors || !data?.cartLinesRemove?.cart?.id) {
    throw new Error(errors?.graphQLErrors?.map((error) => error.message).join(", "));
  }

  return { data: (data as RemoveFromCartMutation).cartLinesRemove?.cart, id: data.cartLinesRemove.cart?.id as string };
};

export const updateProductQuantity = async (quantity: number, lineId: string, id: string) => {
  const variables = {
    quantity,
    lineId,
    id,
  };
  const { data, errors } = await client.request(
    `#graphql
    mutation UpdateProductQuantity($quantity: Int!, $lineId: ID!, $id: ID!) {
  cartLinesUpdate(cartId: $id, lines: {id: $lineId, quantity: $quantity}) {
    cart {
      cost {
        ...CartCostFragment
      }
      id
      lines(first: 10) {
        ...BaseCartLineConnectionFragment
      }
      totalQuantity
      checkoutUrl
    }
  }
}

fragment BaseCartLineConnectionFragment on BaseCartLineConnection {
  edges {
    node {
      merchandise {
        ... on ProductVariant {
          id
          image {
            id
            url
          }
          title
          price {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          product {
            handle
            title
          }
        }
      }
      id
      quantity
    }
  }
}

fragment CartCostFragment on CartCost {
  subtotalAmount {
    amount
    currencyCode
  }
  totalAmount {
    amount
    currencyCode
  }
  totalTaxAmount {
    amount
    currencyCode
  }
  totalDutyAmount {
    amount
    currencyCode
  }
}`,
    { variables },
  );
  if (errors || !data?.cartLinesUpdate?.cart?.id) {
    throw new Error(errors?.graphQLErrors?.map((error) => error.message).join(", "));
  }

  return {
    data: (data as UpdateProductQuantityMutation).cartLinesUpdate?.cart,
    id: data.cartLinesUpdate?.cart?.id as string,
  };
};
