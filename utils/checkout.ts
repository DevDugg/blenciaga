"use client";

import {
  AddCheckoutLinesMutation,
  CreateCheckoutMutation,
  UpdateShippingAddressMutation,
} from "@/types/storefront.generated";
import { CheckoutCreateInput, CheckoutLineItemInput, MailingAddressInput } from "@/types/storefront.types";
import { addCheckoutLines, createCheckout, updateShippingAddress } from "./queries";

interface ICheckoutClassConstructor {
  checkOutId?: string;
}

export interface ICheckoutClass {
  getCheckoutId: () => string | null;
  createCheckout: (
    input: CheckoutCreateInput,
  ) => Promise<NonNullable<CreateCheckoutMutation["checkoutCreate"]>["checkout"]>;
  addCheckoutLines: (
    lineItems: CheckoutLineItemInput[],
  ) => Promise<NonNullable<AddCheckoutLinesMutation["checkoutLineItemsAdd"]>["checkout"]>;
  updateShippingAddress: (
    shippingAddress: MailingAddressInput,
  ) => Promise<NonNullable<UpdateShippingAddressMutation["checkoutShippingAddressUpdateV2"]>["checkout"]>;
}

/**
    Used to manage the checkout on client side

    It uses the localStorage API to store the `checkoutId`

    `IMPORTANT: Only to be used on client side`

    @class Checkout
*/
class Checkout implements ICheckoutClass {
  // PRIVATE METHODS AND PROPERTIES

  private checkoutId: string | null = null;

  private setCheckoutId = (checkoutId: string) => {
    this.checkoutId = checkoutId;
    localStorage.setItem("checkoutId", checkoutId);
  };

  // CONSTRUCTOR

  constructor({ checkOutId }: ICheckoutClassConstructor) {
    this.checkoutId = checkOutId || this.getCheckoutId();
  }

  // PUBLIC METHODS AND PROPERTIES

  public getCheckoutId = () => {
    return this.checkoutId || typeof localStorage !== "undefined" ? localStorage.getItem("checkoutId") : null;
  };

  public createCheckout = async (input: CheckoutCreateInput) => {
    const { data } = await createCheckout(input);

    this.setCheckoutId(data?.id as string);

    return data;
  };

  public addCheckoutLines = async (lineItems: CheckoutLineItemInput[]) => {
    const savedId = this.getCheckoutId();

    if (!savedId) throw new Error("No checkoutId found");

    const { data } = await addCheckoutLines(savedId, lineItems);

    this.setCheckoutId(data?.id as string);
    return data;
  };

  public updateShippingAddress = async (shippingAddress: MailingAddressInput) => {
    const savedId = this.getCheckoutId();

    if (!savedId) throw new Error("No checkoutId found");

    const { data } = await updateShippingAddress(savedId, shippingAddress);

    this.setCheckoutId(data?.id as string);

    return data;
  };
}

export { Checkout as CreateCheckout };
