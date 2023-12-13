import Product, { IProduct } from "@/components/cart/Product";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Link from "next/link";
import StickyOutOfView from "@/components/StickyOutOfView";

const product: IProduct = {
  name: "paris tropical round hoodie oversized",
  image: "/cart.jpg",
  price: "$ 2,900.00",
  color: "White/pink",
  size: "3",
  quantity: 1,
};

const Cart = () => {
  return (
    <main className="cart">
      <Container className="flex justify-center">
        <div className="max-w-[700px] w-full border-x border-BLACK">
          <div className="cart-head flex flex-col gap-2 justify-center text-center py-16">
            <h1 className="text-[22px] uppercase font-bold">Cart</h1>
            <p className="text-sm">Free shipping & returns.</p>
          </div>
          <ul className="cart-nav flex items-center justify-center gap-3 py-2 border-t border-BLACK">
            <li>
              <Link href={"#"} className="rounded border border-BLACK px-2 py-[6px] text-xs h-full uppercase">
                Cart (1)
              </Link>
            </li>
          </ul>
          <div>
            <Product product={product} />
          </div>
          <ul className="flex flex-col gap-4 border-t border-BLACK px-4 py-10 uppercase">
            <li className="flex items-center gap-6 justify-between">
              <p className="text-sm">Shipping cost:</p>
              <p className="text-sm">$ 0.00</p>
            </li>
            <li className="flex items-center gap-6 justify-between">
              <p className="text-sm">Sales Tax:</p>
              <p className="text-sm">$ 0.00</p>
            </li>
            <li className="flex items-center gap-6 justify-between font-bold">
              <p className="text-sm">Estimated total:</p>
              <p className="text-sm">$ 2,900.00</p>
            </li>
          </ul>
          <p className="text-[#767676] w-full normal-case text-center pt-4">
            Pay securely with Apple Pay, Klarna, Paypal or BitPay for eligible products
          </p>
          <div className="flex items-center justify-center py-[60px]">
            <Button title="Proceed to checkout (2)" width={400} black fixedOnMobile />
          </div>
        </div>
      </Container>
    </main>
  );
};
export default Cart;
