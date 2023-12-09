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
    <div className="breadcrumb p-2 flex items-center gap-4 border-y-[0.5px] border-BLACK border-solid">
      {links.map((link, i) => (
        <Link key={i} href={link.link} className="uppercase text-xs flex items-center gap-4">
          {!(i === 0) ? <span className="uppercase text-xs">/</span> : null}
          {link.title}
        </Link>
      ))}
    </div>
  );
};
export default Breadcrumb;
