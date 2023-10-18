import Container from "../Container";
import Tab from "./Tab";

const HeaderMiddle = () => {
  return (
    <section className="header-middle">
      <Container className="flex gap-3 items-center border-b-2 border-solid border-BLACK pb-2 pt-14">
        <Tab isActive link="/" title="Invierno 23 Hombre" />
        <Tab isActive={false} link="/" title="Invierno 23 Mujer" />
        <Tab isActive={false} link="/" title="Invierno 23 Mujer" />
        <Tab isActive={false} link="/" title="Otoño 23 Mujer" />
        <Tab isActive={false} link="/" title="Otoño 23 Hombre" />
        <Tab isActive={false} link="/" title="3XL" />
        <Tab isActive={false} link="/" title="Monaco" />
        <Tab isActive={false} link="/" title="Kids" />
      </Container>
    </section>
  );
};
export default HeaderMiddle;
