import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  CodeBracketSquareIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { MoonIcon as MoonIconSolid } from "@heroicons/react/24/solid";
import { NavLink } from "./NavLink";
import { NavDrawer } from "./NavDrawer";

const pageSections = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="backdrop-blur fixed left-0 right-0 top-0 z-10 bg-[#b8cee8] bg-opacity-20 dark:bg-[#14022A] dark:bg-opacity-90">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-4">
        <a
          href="/"
          className="text-2xl font-semibold text-stone-600 dark:text-white md:text-4xl"
        >
          <CodeBracketSquareIcon className="inline w-6" /> ce
        </a>

        <div className="mobile-menu flex flex-row text-stone-500 dark:text-[#b7b0c2] md:hidden">
          <button
            onClick={toggleTheme}
            className="p-0 hover:text-stone-600 dark:hover:text-white"
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
              className="flex items-center rounded px-3 py-2 hover:text-stone-600 dark:hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 hover:text-stone-600 dark:hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className="menu hidden text-stone-500 dark:text-[#b7b0c2] md:block md:w-auto"
          id="navbar"
        >
          <ul className="flex justify-evenly p-4 md:flex-row md:space-x-8 md:p-0">
            {pageSections.map((link, index) => (
              <li className={index}>
                <NavLink href={link.href} title={link.title}></NavLink>
              </li>
            ))}
            <button
              onClick={toggleTheme}
              className="p-0 hover:text-stone-600 dark:hover:text-white"
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
      {navbarOpen ? <NavDrawer links={pageSections} /> : null}
    </nav>
  );
};

export default Navbar;
