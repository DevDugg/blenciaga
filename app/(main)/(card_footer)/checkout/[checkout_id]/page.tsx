import Container from "@/components/Container";

interface IParams {
  params: {
    checkout_id: string;
  };
}

const CheckoutPage = ({ params }: IParams) => {
  return (
    <main className="checkout">
      <Container className="flex justify-center">
        {/* <Cart /> */}
        <h1>Checkout:{decodeURIComponent(params.checkout_id)}</h1>
      </Container>
    </main>
  );
};
export default CheckoutPage;
