"use client";

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";

type IProductOption = { name: string; value: string }[];

export interface ProductOptionContextType {
  productOptions: IProductOption;
  setProductOptions: Dispatch<SetStateAction<ProductOptionContextType["productOptions"]>>;
}

export const ProductOptionContext = createContext<ProductOptionContextType>({} as ProductOptionContextType);

const ProductOptionContextProvider = ({ children }: PropsWithChildren) => {
  const [productOptions, setProductOptions] = useState<IProductOption>([]);
  const productOptionMemo = useMemo(() => ({ productOptions, setProductOptions }), [productOptions, setProductOptions]);
  return <ProductOptionContext.Provider value={productOptionMemo}>{children}</ProductOptionContext.Provider>;
};
export default ProductOptionContextProvider;
