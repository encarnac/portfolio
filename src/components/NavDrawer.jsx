import { NavLink } from "./NavLink";

export const NavDrawer = ({ links }) => {
  return (
    <ul className="backdrop-blur-sm flex flex-col items-center py-4 text-stone-500 dark:text-[#b7b0c2]">
      {" "}
      {links.map((link, index) => (
        <li className={index}>
          <NavLink href={link.href} title={link.title}></NavLink>
        </li>
      ))}
    </ul>
  );
};
