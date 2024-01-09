import Breadcrumb, { IBreadcrumbLink } from "@/components/Breadcrumb";

import Button from "@/components/Button";
import CustomSelect from "@/components/CustomSelect";
import Dropdown from "@/components/Dropdown";
import ProductGrid from "@/components/products/ProductGrid";
import { ProductQuery } from "@/types/storefront.generated";
import ProductSlider from "@/components/products/ProductSlider";
import client from "@/utils/api-client";

const breadcrumbLinks: IBreadcrumbLink[] = [
  {
    link: "/product",
    title: "WOMEN",
  },
  {
    link: "/product",
    title: "READY-TO-WEAR",
  },
  {
    link: "/product",
    title: "Coats & Jackets",
  },
];

interface IParams {
  params: {
    handle: string;
  };
}

const getProduct = async (handle: string) => {
  const { data, errors } = await client.request(
    `#graphql
    query Product {
      product(handle: "${handle}") {
        descriptionHtml
        id
        images(first: 10) {
          nodes {
            id
            url
          }
        }
        options {
          id
          name
          values
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        title
      }
    }`,
  );

  if (errors) {
    throw new Error(errors.message);
  }

  return data as ProductQuery;
};

const Product = async ({ params }: IParams) => {
  const product = await getProduct(params.handle);
  const sizes = product.product?.options.find((option) => option.name === "Size")?.values;
  // const style = product.product.
  return (
    <main className="product-main">
      <div className="max-w-[1920px] mx-auto w-full">
        <Breadcrumb links={breadcrumbLinks} />
        <div className="grid grid-cols-TWO items-end relative max-lg:block">
          {product.product?.images && <ProductGrid images={product.product.images} />}
          {product.product?.images && <ProductSlider images={product.product.images} />}
          <div className="sticky bottom-0 h-fit max-lg:relative">
            <div className="flex flex-col gap-10 items-center py-[60px] text-sm uppercase border-[0.5px] border-r-0 border-b-0 border-BLACK">
              <div className="flex flex-col gap-20 max-w-[70%] px-4 max-xl:max-w-none max-lg:max-w-[80%] max-md:max-w-none">
                <div className="flex flex-col gap-4">
                  <div>
                    <h1 className="text-center font-bold">{product.product?.title}</h1>
                    <h2 className="text-center pt-1">$ {product.product?.priceRange.minVariantPrice.amount}</h2>
                  </div>
                  <p className="text-center">
                  </p>
                </div>
                <div className="border-t border-BLACK border-solid flex flex-col gap-4 pt-[25px]">
                  <div className="flex items-center justify-between gap-10">
                    <span>Size: (FR)</span>
                    <a href="#" className="underline">
                      Size guide
                    </a>
                  </div>
                  {sizes && <CustomSelect items={sizes} />}
                  <div className="flex justify-center">
                    <p className="text-[#767676] normal-case text-center max-w-[70%]">
                      Designed to be worn as an oversized/very loose fit, we recommend sizing down for a regular fit.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    <Button title="Add to cart" black fixedOnMobile />
                    <Button title="SAVE ITEM" />
                    <span className="block pt-1 w-full text-center normal-case">Store availability</span>
                  </div>
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
                    {/* <Dropdown />
                    <Dropdown /> */}
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
