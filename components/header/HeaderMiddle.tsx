import Container from "../Container";
import HeaderMiddleSwiper from "./HeaderMiddleSwiper";
import { getMainMenu } from "@/utils/queries";

const HeaderMiddle = async () => {
  const data = await getMainMenu();
  const thirdLevelLinks = data.menu.items
    .map((item) => item.items)
    .flat()
    .map((item) => item.items)
    .flat()
    .map((item) => item);
  return (
    <section className="header-middle lg:hidden">
      <Container className="border-b border-BLACK pb-2 pt-14 max-lg:p-0">
        <HeaderMiddleSwiper thirdLevelLinks={thirdLevelLinks} />
      </Container>
    </section>
  );
};
export default HeaderMiddle;
