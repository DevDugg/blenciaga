import Container from "../Container";
import FooterLink from "./FooterLink";
import FooterMobileItems from "./FooterMobileItems";
import { IHeaderTab } from "../header/Tabs";

export interface IFooterItem {
  title: string;
  links: IHeaderTab[];
}

const items: IFooterItem[] = [
  {
    title: "BOLETÍN DE NOTICIAS",
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
    title: "BOLETÍN DE NOTICIAS",
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
    title: "BOLETÍN DE NOTICIAS",
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
    title: "BOLETÍN DE NOTICIAS",
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
    title: "BOLETÍN DE NOTICIAS",
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
    title: "BOLETÍN DE NOTICIAS",
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
];

const FooterTop = () => {
  return (
    <div className="footer-top border-t border-BLACK border-solid">
      <Container>
        <div className="grid grid-cols-6 max-lg:hidden">
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
      </Container>
    </div>
  );
};
export default FooterTop;
