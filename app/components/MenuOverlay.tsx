import { NavLink } from "./NavLink";

type LinkType = {
  href: string;
  title: string;
};

type MenuOverlayProps = {
  links: LinkType[];
};

export const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col p-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title}></NavLink>
        </li>
      ))}
    </ul>
  );
};
