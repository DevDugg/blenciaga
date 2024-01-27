import Cart from "@/components/cart/Cart";
import CheckoutBtn from "@/components/cart/CheckoutBtn";
import Container from "@/components/Container";

const CartPage = () => {
  return (
    <main className="cart">
      <Container className="flex justify-center">
        <Cart />
      </Container>
    </main>
  );
};
export default CartPage;
