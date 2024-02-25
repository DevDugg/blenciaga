"use client";

import {
  AddToCartMutation,
  CartQuery,
  CreateCartMutation,
  RemoveFromCartMutation,
  UpdateProductQuantityMutation,
} from "@/types/storefront.generated";
import { addToCart, createCart, getCart, removeFromCart, updateProductQuantity } from "./queries";

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
  updateProductQuantity(
    quantity: number,
    lineId: string,
  ): Promise<NonNullable<UpdateProductQuantityMutation["cartLinesUpdate"]>["cart"]>;
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
    return this.cartId || typeof localStorage !== "undefined" ? localStorage.getItem("cartId") : null;
  };

  public createCart = async () => {
    const { data, id } = await createCart();

    this.setCartId(id);
    return data;
  };

  public getCart = async () => {
    const savedId = this.getCartId();
    if (!savedId) return;

    const cart = await getCart(savedId);
    if (!cart) return;

    const { data, id } = cart;
    this.setCartId(id);
    return data;
  };

  public addToCart = async (variantId: string) => {
    const savedId = this.getCartId();
    if (!savedId) return;

    const updatedCart = await addToCart(variantId, savedId);
    if (!updatedCart) return;

    const { data, id } = updatedCart;

    this.setCartId(id);
    return data;
  };

  public removeFromCart = async (lineId: string) => {
    const savedId = this.getCartId();
    if (!savedId) return;

    const updatedCart = await removeFromCart(lineId, savedId);
    if (!updatedCart) return;

    const { data, id } = updatedCart;

    this.setCartId(id);
    return data;
  };

  public updateProductQuantity = async (quantity: number, lineId: string) => {
    const savedId = this.getCartId();
    if (!savedId) return;

    const updatedCart = await updateProductQuantity(quantity, lineId, savedId);
    if (!updatedCart) return;

    const { data, id } = updatedCart;

    this.setCartId(id);
    return data;
  };

  public updateProductInCart = async () => {};
  public updateBuyerInfo = async () => {};
}

export { Cart as CreateCart };
