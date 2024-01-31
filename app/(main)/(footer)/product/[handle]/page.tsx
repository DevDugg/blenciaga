import Breadcrumb, { IBreadcrumbLink } from "@/components/Breadcrumb";
import StyleSelect, { VariantsType } from "@/components/products/StyleSelect";

import Dropdown from "@/components/Dropdown";
import ProductButtons from "@/components/products/ProductButtons";
import ProductGrid from "@/components/products/ProductGrid";
import { ProductQuery } from "@/types/storefront.generated";
import ProductSlider from "@/components/products/ProductSlider";
import SizeSelect from "@/components/products/SizeSelect";
import client from "@/utils/api-client";

const getProduct = async (
  handle: string,
  // option?: {
  //   name: string;
  //   value: string;
  // },
) => {
  const { data, errors } = await client.request(
    `#graphql
    query Product {
      product(handle: "${handle || "new-collection"}") {
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
  );

  if (errors) {
    throw new Error(errors.message);
  }

  return data as ProductQuery;
};

interface IParams {
  params: {
    handle: string;
  };
  searchParams?: { [key: string]: string | undefined };
}

// interface IOption {
//   name: string;
//   value: string | null | undefined;
// }

const Product = async ({ params, searchParams }: IParams) => {
  const product = await getProduct(params.handle);

  const options = product.product?.options;
  const variants = product.product?.variants;

  const sizes = options?.find((option) => option.name === "Size")?.values;
  const styles = options?.find((option) => option.name === "Style")?.values;

  const breadcrumbLinks: IBreadcrumbLink[] | undefined = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: `/collections/${product.product?.collections.nodes[0].handle}`,
      title: `${product.product?.collections.nodes[0].title}`,
    },
    {
      link: `/products/${product.product?.handle}`,
      title: `${product.product?.title}`,
    },
  ];

  const findStyles = () => {
    if (!(variants && styles)) return;
    const neededStyles: VariantsType = [];

    styles.forEach((style) => {
      const variant = variants.nodes.find((variant) =>
        variant.selectedOptions.find(
          (variantOption) => variantOption.name === "Style" && variantOption.value === style,
        ),
      );
      if (variant) neededStyles.push(variant);
    });

    return neededStyles;
  };

  const neededStyles = findStyles();

  const findStyle = (style: string) => {
    if (!(variants && styles)) return;
    const neededStyle = variants.nodes.find((variant) =>
      variant.selectedOptions.find(
        (variantOption) => variantOption.name === "Style" && variantOption.value.toLowerCase() === style.toLowerCase(),
      ),
    );
    return neededStyle;
  };
  return (
    <main className="product-main">
      <div className="max-w-[1920px] mx-auto w-full">
        {breadcrumbLinks ? <Breadcrumb links={breadcrumbLinks} /> : null}
        <div className="grid grid-cols-TWO items-end relative max-lg:block">
          {product.product?.images && <ProductGrid images={product.product.images} />}
          {product.product?.images && <ProductSlider images={product.product.images} />}
          <div className="sticky bottom-0 h-fit max-lg:relative">
            <div className="flex flex-col gap-10 items-center py-[60px] text-sm uppercase border-[0.5px] border-r-0 border-b-0 border-BLACK max-lg:py-12 max-md:py-10 max-sm:py-8">
              <div className="flex flex-col gap-20 max-w-[70%] px-4 max-xl:max-w-none max-lg:max-w-[80%] max-lg:gap-16 max-md:gap-14 max-md:max-w-none max-sm:gap-10">
                <div className="flex flex-col gap-4">
                  <div>
                    <h1 className="text-center font-bold">{product.product?.title}</h1>
                    <h2 className="text-center pt-1">$ {product.product?.priceRange.minVariantPrice.amount}</h2>
                  </div>
                  {/* <p className="text-center"></p> */}
                </div>
                {variants && neededStyles && (
                  <StyleSelect
                    variants={neededStyles}
                    initialVariant={
                      searchParams && searchParams["style"] ? findStyle(searchParams["style"]) : undefined
                    }
                  />
                )}
                <div className="border-t border-BLACK border-solid flex flex-col gap-4 pt-[25px]">
                  <div className="flex items-center justify-between gap-10">
                    <span>Size: (FR)</span>
                    <a href="#" className="underline">
                      Size guide
                    </a>
                  </div>
                  {sizes && <SizeSelect items={sizes} initial={searchParams ? searchParams["size"] : null} />}
                  <div className="flex justify-center">
                    <p className="text-[#767676] normal-case text-center max-w-[70%]">
                      Designed to be worn as an oversized/very loose fit, we recommend sizing down for a regular fit.
                    </p>
                  </div>
                  <ProductButtons productVariants={variants?.nodes} />
                  <div className="flex justify-center">
                    <p className="text-[#767676] normal-case text-center max-w-[70%] pt-4">
                      Pay securely with Apple Pay, Klarna, Paypal or BitPay for eligible products
                    </p>
                  </div>
                  <div
                    className="description normal-case pt-4"
                    dangerouslySetInnerHTML={{ __html: product.product?.descriptionHtml }}
                  ></div>
                  <div className="flex flex-col border-t border-BLACK mt-10">
                    <Dropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Product;
