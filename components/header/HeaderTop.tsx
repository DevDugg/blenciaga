import Container from "../Container";
import Links from "./Links";
import Name from "../Name";
import Tabs from "./Tabs";

const HeaderTop = () => {
  return (
    <section className="header-top sticky top-0 bg-WHITE z-10">
      <Container className="pt-3 pb-4 border-b-[0.5px] border-solid border-BLACK">
        {/* <div className="flex items-center justify-between gap-10 px-3"> */}
        <div className="grid grid-cols-HEADER items-center gap-10 px-3">
          <Tabs />
          <Name />
          <Links />
        </div>
      </Container>
    </section>
  );
};
export default HeaderTop;
