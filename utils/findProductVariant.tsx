import { ProductOptionContextType } from "@/context/ProductOptionContext";
import { ProductQuery } from "@/types/storefront.generated";

const findProductVariant = (
  productVariants: NonNullable<ProductQuery["product"]>["variants"]["nodes"] | undefined,
  productOptions: ProductOptionContextType["productOptions"],
) => {
  if (!productVariants || !productOptions) return null;

  return productVariants.find((variant) => {
    return productOptions.every((option) => {
      return variant.selectedOptions.some((selectedOption) => {
        return selectedOption.name === option.name && selectedOption.value === option.value;
      });
    });
  });
};
export default findProductVariant;
