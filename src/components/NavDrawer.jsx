import { NavLink } from "./NavLink";

export const NavDrawer = ({ links }) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {" "}
      {links.map((link, index) => (
        <li className={index}>
          <NavLink href={link.href} title={link.title}></NavLink>
        </li>
      ))}
    </ul>
  );
};
