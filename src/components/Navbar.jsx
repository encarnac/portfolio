import { useState } from "react";
import { Link } from "./Link";
import { NavDrawer } from "./NavDrawer";
import { MoonIcon as MoonIconSolid } from "@heroicons/react/24/solid";
import {
  Bars3Icon,
  XMarkIcon,
  CodeBracketSquareIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

const pages = [
  { title: "about", href: "#about" },
  { title: "projects", href: "#projects" },
  { title: "contact", href: "#contact" },
];

const Navbar = ({
  isTopOfPage,
  theme,
  toggleTheme,
  selectedPage,
  setSelectedPage,
}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarBgColor = isTopOfPage
    ? "border-b dark:border-[#220C3D] border-[#d9dbdf]"
    : "bg-[#EFF3FD] dark:bg-[#220C3D]";

  return (
    <nav
      className={`${navbarBgColor} transition duration-500 backdrop-blur-md fixed left-0 right-0 top-0 z-10 `}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between border-[#d9dbdf] px-4 py-4">
        <a
          href="/"
          className="text-2xl font-semibold text-stone-600 dark:text-white md:text-4xl"
        >
          <CodeBracketSquareIcon className="inline w-6" /> ce
        </a>

        <div className="mobile-menu flex flex-row text-stone-500 dark:text-[#b7b0c2] md:hidden">
          <button
            onClick={toggleTheme}
            className="p-0 transition duration-500 hover:text-[#DC659C] dark:text-[#6a3dd1] dark:hover:text-white"
          >
            {theme === "dark" ? (
              <MoonIconSolid className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center rounded px-3 py-2 transition duration-500 hover:text-[#DC659C] dark:hover:text-[#6a3dd1]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 transition duration-500 hover:text-[#DC659C] dark:hover:text-[#6a3dd1]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex justify-evenly p-4 md:flex-row md:space-x-8 md:p-0">
            {pages.map((page, index) => (
              <li className={index}>
                {/* <NavLink href={link.href} title={link.title}></NavLink> */}
                <Link
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
            ))}
            <button
              onClick={toggleTheme}
              className="p-0 text-stone-500 transition duration-500 hover:text-[#DC659C] dark:text-[#6a3dd1] dark:hover:text-white"
            >
              {theme === "dark" ? (
                <MoonIconSolid className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <NavDrawer
          pages={pages}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ) : null}
    </nav>
  );
};

export default Navbar;
