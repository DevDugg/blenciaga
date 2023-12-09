import Breadcrumb, { IBreadcrumbLink } from "@/components/Breadcrumb";

import Button from "@/components/Button";
import CustomSelect from "@/components/CustomSelect";
import Dropdown from "@/components/Dropdown";
import ProductGrid from "@/components/products/ProductGrid";
import ProductSlider from "@/components/products/ProductSlider";
import StickyOutOfView from "@/components/StickyOutOfView";

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

const Product = () => {
  return (
    <main className="product-main">
      <div className="max-w-[1920px] mx-auto w-full">
        <Breadcrumb links={breadcrumbLinks} />
        <div className="grid grid-cols-TWO items-end relative max-lg:block">
          <ProductGrid />
          <ProductSlider />
          <div className="sticky bottom-0 h-fit max-lg:relative">
            <div className="flex flex-col gap-10 items-center py-[60px] text-sm uppercase border-[0.5px] border-r-0 border-b-0 border-BLACK">
              <div className="flex flex-col gap-20 max-w-[70%] px-4 max-xl:max-w-none max-lg:max-w-[80%] max-md:max-w-none">
                <div className="flex flex-col gap-4">
                  <div>
                    <h1 className="text-center font-bold">Oversized Jacket in Black</h1>
                    <h2 className="text-center pt-1">$ 3,650</h2>
                  </div>
                  <p className=" text-center">
                    Oversized Jacket in black dry wool twill is from look 6 of Balenciaga’s Spring 24 Collection.
                    Garde-Robe is made up of wardrobe staples in elevated cuts, sharp finishing, and luxe materials
                    without any branding other than bold silhouettes and precise tailoring with minimalist construction
                    techniques.
                  </p>
                </div>
                <div className="border-t border-BLACK border-solid flex flex-col gap-4 pt-[25px]">
                  <div className="flex items-center justify-between gap-10">
                    <span>Size: (FR)</span>
                    <a href="#" className="underline">
                      Size guide
                    </a>
                  </div>
                  <CustomSelect />
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
                  <ul className="list-disc list-inside normal-case pt-4">
                    <li>Dry wool twill</li>
                    <li>This item is unisex</li>
                    <li>Oversize fit</li>
                    <li>Shoulder pads</li>
                    <li>Peak lapel</li>
                    <li>6 button double-breasted front</li>
                    <li>1 piped pocket at chest</li>
                    <li>2 flap pockets at front</li>
                    <li>4 button cuffs</li>
                    <li>2 vents at back</li>
                    <li>Made in Italy</li>
                    <li>Dry cleaning</li>
                    <li>{`Model is 190 cm / 6'3" and is wearing a size 4`}</li>
                  </ul>
                  <div className="flex flex-col border-t border-BLACK mt-10">
                    <Dropdown />
                    <Dropdown />
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
