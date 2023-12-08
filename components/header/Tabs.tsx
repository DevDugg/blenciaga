import Image from "next/image";
import Tab from "./Tab";

export interface IHeaderTabLink {
  title: string;
  link: string;
}

export interface IHeaderTabItem {
  heading: IHeaderTabLink;
  items: IHeaderTabLink[];
}

export interface IHeaderTab extends IHeaderTabLink {
  rows?: IHeaderTabItem[];
}

const tabs: IHeaderTab[] = [
  {
    title: "NOVEDADES",
    link: "/",
    rows: [
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "shoes",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "bags",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "accessories",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    title: "MUJER",
    link: "/",
    rows: [
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "shoes",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "bags",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "accessories",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    title: "HOMBRE",
    link: "/",
    rows: [
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "shoes",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "bags",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "accessories",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    title: "3XL",
    link: "/",
    rows: [
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "shoes",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "bags",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "accessories",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    title: "REGALOS",
    link: "/",
    rows: [
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "shoes",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "bags",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "accessories",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
      {
        heading: {
          title: "ready-to-wear",
          link: "/",
        },
        items: [
          {
            title: "New arrivals",
            link: "/",
          },
          {
            title: "Gard-Robe",
            link: "/",
          },
          {
            title: "Spring 24",
            link: "/",
          },
          {
            title: "Ski",
            link: "/",
          },
          {
            title: "Monaco",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    title: "COUTURE",
    link: "/",
  },
  {
    title: "EXPLORE",
    link: "/",
  },
];

const Tabs = () => {
  return (
    <>
      <div className="tabs flex items-center gap-1 justify-start max-[1350px]:hidden">
        {tabs.map((tab, i) => (
          <Tab title={tab.title} link={tab.link} key={i} rows={tab.rows} />
        ))}
      </div>
      <div className="max-[1350px]:flex items-center gap-4">
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
