import Image from "next/image";
import Tab from "./Tab";
import client from "@/utils/api-client";

export interface IMainMenu {
  data: Data;
}

export interface Data {
  menu: Menu;
}

export interface Menu {
  id: string;
  title: string;
  items: MenuItem[];
  handle: string;
}

export interface MenuItem {
  id: string;
  title: string;
  type: string;
  resource: Resource;
  items: PurpleItem[];
}

export interface PurpleItem {
  id: string;
  type: string;
  title: string;
  resource: Resource;
  items: FluffyItem[];
}

export interface FluffyItem {
  id: string;
  resource: Resource;
  title: string;
}

export interface Resource {
  id: string;
  handle: string;
}

const getMainMenu = async () => {
  const { data, errors } = await client.request(
    `#graphql
    query MainMenu {
      menu(handle: "main-menu") {
        id
        title
        items {
          id
          title
          type
          resource {
            ... on Collection {
              id
              handle
            }
          }
          items {
            id
            type
            title
            resource {
              ... on Collection {
                id
                handle
              }
            }
            items {
              id
              resource {
                ... on Collection {
                  id
                  handle
                }
              }
              title
            }
          }
        }
        handle
      }
    }`,
  );

  if (errors) throw new Error(errors.message);

  return data as IMainMenu["data"];
};

const Tabs = async () => {
  const data = await getMainMenu();

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
        <button type="button">
          <Image
            src={"/burger.svg"}
            alt="Burger icon"
            width={18}
            height={18}
            className="object-contain w-[18px] h-[18px]"
          />
        </button>
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
