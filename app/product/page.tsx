import Breadcrumb, { IBreadcrumbLink } from "@/components/Breadcrumb";

import Container from "@/components/Container";

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
      <Container>
        <Breadcrumb links={breadcrumbLinks} />
      </Container>
    </main>
  );
};
export default Product;
