import Container from "../Container";
import Links from "./Links";
import Name from "../Name";
import Tabs from "./Tabs";

const HeaderTop = () => {
  return (
    <section className="header-top sticky top-0 bg-WHITE z-50">
      <Container className="border-b-[0.5px] border-solid border-BLACK">
        {/* <div className="flex items-center justify-between gap-10 px-3"> */}
        <div className="grid grid-cols-HEADER items-center gap-10 px-3 max-[1350px]:py-4">
          <Tabs />
          <Name />
          <Links />
        </div>
      </Container>
    </section>
  );
};
export default HeaderTop;
