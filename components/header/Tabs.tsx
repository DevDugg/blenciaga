import BurgerMenu from "./BurgerMenu";
import { IMainMenu } from "./HeaderTop";
import Image from "next/image";
import Tab from "./Tab";

interface IProps {
  data: IMainMenu["data"];
}

const Tabs = ({ data }: IProps) => {
  return (
    <>
      <div className="tabs flex items-center gap-1 justify-start max-[1350px]:hidden">
        {data
          ? data.menu.items.map((item, i) => (
              <Tab
                key={i}
                title={item.title}
                link={item.resource ? `/collection/${item.resource.handle}` : "#"}
                rows={item.items}
              />
            ))
          : null}
      </div>
      <div className="hidden max-[1350px]:flex items-center gap-4">
        <BurgerMenu />
        <button type="button">
          <Image
            src={"/loop.svg"}
            alt="Loop icon"
            width={18}
            height={18}
            className="object-contain w-[18px] h-[18px]"
          />
        </button>
      </div>
    </>
  );
};
export default Tabs;
