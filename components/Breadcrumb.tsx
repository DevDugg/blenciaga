import Link from "next/link";

export interface IBreadcrumbLink {
  title: string;
  link: string;
}

interface IProps {
  links: IBreadcrumbLink[];
}

const Breadcrumb = ({ links }: IProps) => {
  return (
    <div className="breadcrumb p-2 flex flex-col border-b border-t border-BLACK border-solid">
      <div className="flex items-center gap-4">
        {links.map((link, i) =>
          !(links.length === i + 1) ? (
            <>
              {!(i === 0) ? <span className="uppercase text-xs">/</span> : null}
              <Link key={i} href={link.link} className="uppercase text-xs">
                {link.title}
              </Link>
            </>
          ) : null,
        )}
      </div>
      <div className="flex items-center gap-4">
        <span className="uppercase text-xs">/</span>
        <Link href={links[links.length - 1].link} className="uppercase text-xs">
          {links[links.length - 1].title}
        </Link>
      </div>
    </div>
  );
};
export default Breadcrumb;
