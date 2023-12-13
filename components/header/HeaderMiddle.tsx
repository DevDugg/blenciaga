import Container from "../Container";
import Tab from "./Tab";

const HeaderMiddle = () => {
  return (
    <section className="header-middle">
      <Container className="border-b border-solid border-BLACK pb-2 pt-14">
        <div className="flex flex-nowrap overflow-x-auto gap-3 items-center px-3">
          <Tab link="#" title="Invierno 23 Hombre" />
          <Tab link="#" title="Invierno 23 Mujer" />
          <Tab link="#" title="Otoño 23 Mujer" />
          <Tab link="#" title="Otoño 23 Hombre" />
          <Tab link="#" title="3XL" />
          <Tab link="#" title="Monaco" />
          <Tab link="#" title="Kids" />
        </div>
      </Container>
    </section>
  );
};
export default HeaderMiddle;
