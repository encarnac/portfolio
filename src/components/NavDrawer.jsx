import { NavLink } from "./NavLink";

export const NavDrawer = ({ pages, selectedPage, setSelectedPage }) => {
  return (
    <ul className="flex h-full flex-col items-center py-4 text-[#5b5662] dark:text-[#b7b0c2]">
      {pages.map((page, index) => (
        <li className={index}>
          <NavLink
            mobile={true}
            page={page}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </li>
      ))}
    </ul>
  );
};
