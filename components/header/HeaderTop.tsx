import Container from "../Container";
import Links from "./Links";
import Name from "../Name";
import Tabs from "./Tabs";
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

export const getMainMenu = async () => {
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

const HeaderTop = async () => {
  const data = await getMainMenu();
  return (
    <section className="header-top sticky top-0 bg-WHITE z-[100]">
      <Container className="border-b-[0.5px] border-solid border-BLACK">
        {/* <div className="flex items-center justify-between gap-10 px-3"> */}
        <div className="grid grid-cols-HEADER items-center gap-10 px-3 max-[1350px]:py-4">
          <Tabs data={data} />
          <Name />
          <Links />
        </div>
      </Container>
    </section>
  );
};
export default HeaderTop;
