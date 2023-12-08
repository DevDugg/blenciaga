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
    <div className="tabs flex items-center gap-1 justify-start">
      {tabs.map((tab, i) => (
        <Tab title={tab.title} link={tab.link} key={i} rows={tab.rows} />
      ))}
    </div>
  );
};
export default Tabs;
