import Checkout from "@/components/checkout/Checkout";
import Container from "@/components/Container";

// interface IParams {
//   params: {
//     checkout_id: string;
//   };
// }

const CheckoutPage = () =>
  // { params }: IParams
  {
    return (
      <main className="checkout">
        <Container className="flex justify-center">
          <Checkout />
        </Container>
      </main>
    );
  };
export default CheckoutPage;
