import { Link } from "./Link";

export const NavDrawer = ({ pages, selectedPage, setSelectedPage }) => {
  return (
    <ul className="flex flex-col items-center py-4 text-stone-500 dark:text-[#b7b0c2]">
      {" "}
      {pages.map((page, index) => (
        <li className={index}>
          <Link
            page={page}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </li>
      ))}
    </ul>
  );
};
