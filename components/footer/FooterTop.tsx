import FooterLink from "./FooterLink";
import FooterMobileItems from "./FooterMobileItems";

interface IHeaderTab {
  title: string;
  link: string;
}

export interface IFooterItem {
  title: string;
  links: IHeaderTab[];
}

const items: IFooterItem[] = [
  {
    title: "CLIENT SERVICES",
    links: [
      {
        title: "FAQ",
        link: "#",
      },
      {
        title: "Track Order",
        link: "#",
      },
      {
        title: "Returns",
        link: "#",
      },
      {
        title: "Shipping",
        link: "#",
      },
      {
        title: "Payment",
        link: "#",
      },
      {
        title: "Re-sell Program",
        link: "#",
      },
    ],
  },
  {
    title: "THE COMPANY",
    links: [
      {
        title: "Careers",
        link: "#",
      },
      {
        title: "Careers - Design",
        link: "#",
      },
      {
        title: "Legal",
        link: "#",
      },
      {
        title: "Privacy Policy and Cookies",
        link: "#",
      },
      {
        title: "Cookies Settings",
        link: "#",
      },
      {
        title: "World Food Programme",
        link: "#",
      },
    ],
  },

  {
    title: "CONNECT",
    links: [
      {
        title: "Facebook",
        link: "#",
      },
      {
        title: "Instagram",
        link: "#",
      },
      {
        title: "Tiktok",
        link: "#",
      },
      {
        title: "Spotify",
        link: "#",
      },
    ],
  },
  {
    title: "BOUTIQUES",
    links: [
      {
        title: "Store appointment",
        link: "#",
      },
      {
        title: "Find a store nearby",
        link: "#",
      },
      {
        title: "Country / Region: United States",
        link: "#",
      },
      {
        title: "Language: English",
        link: "#",
      },
    ],
  },
  {
    title: "CONTACT US",
    links: [
      {
        title: "Our Client Advisors are available Mon-Fri 9am - 9pm ET & Sat-Sun 10am - 7pm ET",
        link: "#",
      },
      {
        title: `LIVECHAT
        Our Client Advisors are currently unavailable`,
        link: "#",
      },
      {
        title: `CALL US
        +1 111 111 111`,
        link: "#",
      },
      {
        title: "EMAIL US",
        link: "#",
      },
    ],
  },
];

const FooterTop = () => {
  return (
    <div className="footer-top border-t border-BLACK border-solid">
      <div className="grid grid-cols-6 max-lg:hidden" style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
        {items.map((item, i) => (
          <div
            key={i}
            className="category-col flex flex-col gap-4 py-4 px-3 border-[0.5px] border-solid border-BLACK min-h-[400px]"
          >
            <h6 className="text-xs text-BLACK uppercase">{item.title}</h6>
            <div className="flex flex-col gap-3">
              {item.links.map((link, j) => (
                <FooterLink key={j} href={link.link} title={link.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <FooterMobileItems items={items} />
    </div>
  );
};
export default FooterTop;
