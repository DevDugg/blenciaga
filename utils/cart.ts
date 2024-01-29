"use client";

import { AddToCartMutation, CartQuery, CreateCartMutation, RemoveFromCartMutation } from "@/types/storefront.generated";

import client from "./api-client";

export type CartLines = NonNullable<CartQuery["cart"]>["lines"];

export interface ICreateCartMutationOptions {
  lines?: CartLines;
}

interface ICartClassConstructor {
  cartId?: string;
}

export interface ICartClass {
  getCartId(): string | null;
  createCart(options: ICreateCartMutationOptions): Promise<NonNullable<CreateCartMutation["cartCreate"]>["cart"]>;
  getCart(): Promise<CartQuery["cart"]>;
  addToCart(variantId: string): Promise<NonNullable<AddToCartMutation["cartLinesAdd"]>["cart"]>;
  removeFromCart(lineId: string): Promise<NonNullable<RemoveFromCartMutation["cartLinesRemove"]>["cart"]>;
}

/**
    Used to manage the cart on client side

    It uses the localStorage API to store the `cartId`

    `IMPORTANT: Only to be used on client side`

    @class Cart
*/
class Cart implements ICartClass {
  // PRIVATE METHODS AND PROPERTIES

  private cartId: string | null = null;

  private setCartId = (cartId: string) => {
    this.cartId = cartId;
    localStorage.setItem("cartId", cartId);
  };

  // CONSTRUCTOR

  constructor({ cartId }: ICartClassConstructor) {
    this.cartId = cartId || this.getCartId();
  }

  // PUBLIC METHODS AND PROPERTIES

  public getCartId = () => {
    return this.cartId || localStorage.getItem("cartId");
  };

  public createCart = async (options: ICreateCartMutationOptions) => {
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
    );

    if (errors || !data?.cartCreate?.cart?.id) {
      throw new Error(errors?.message);
    }

    this.setCartId(data.cartCreate.cart?.id);

    return (data as CreateCartMutation).cartCreate?.cart;
  };

  public getCart = async () => {
    const id = this.getCartId();
    if (!id) return;
    const { data, errors } = await client.request(
      `#graphql
      query Cart {
        cart(
          id: "${id}"
        ) {
          cost {
            ...CartCostFragment
          }
          id
          lines(first: 10) {
            ...BaseCartLineConnectionFragment
          }
          totalQuantity
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
    );

    if (errors || !data?.cart?.id) {
      throw new Error(errors?.message);
    }

    this.setCartId(data.cart.id);

    return (data as CartQuery).cart;
  };

  public addToCart = async (variantId: string) => {
    const id = this.getCartId();
    if (!id) return;

    const { data, errors } = await client.request(
      `#graphql
      mutation AddToCart {
        cartLinesAdd(
          cartId: "${id}"
          lines: {merchandiseId: "${variantId}", quantity: 1}
        ) {
          cart {
            cost {
              ...CartCostFragment
            }
            id
            lines(first: 10) {
              ...BaseCartLineConnectionFragment
            }
            totalQuantity
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
    );
    if (errors || !data?.cartLinesAdd?.cart?.id) {
      throw new Error(errors?.message);
    }

    this.setCartId(data.cartLinesAdd?.cart?.id);

    return (data as AddToCartMutation).cartLinesAdd?.cart;
  };

  public removeFromCart = async (lineId: string) => {
    const id = this.getCartId();
    if (!id) return;

    const { data, errors } = await client.request(
      `#graphql
      mutation RemoveFromCart {
        cartLinesRemove(
          cartId: "${id}"
          lineIds: "${lineId}"
        ) {
          cart {
            cost {
              ...CartCostFragment
            }
            id
            lines(first: 10) {
              ...BaseCartLineConnectionFragment
            }
            totalQuantity
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
    );
    if (errors || !data?.cartLinesRemove?.cart?.id) {
      throw new Error(errors?.message);
    }

    this.setCartId(data.cartLinesRemove?.cart?.id);

    return (data as RemoveFromCartMutation).cartLinesRemove?.cart;
  };

  public updateProductInCart = async () => {};
  public updateBuyerInfo = async () => {};
  public updateProductQuantity = async () => {};
}

export { Cart as CreateCart };
