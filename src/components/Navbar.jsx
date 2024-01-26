import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from "./NavLink";
import { NavDrawer } from "./NavDrawer";

const pageSections = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 bg-[#14022A] bg-opacity-90">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-4">
        <a href="/" className="text-2xl font-semibold text-white md:text-5xl">
          LOGO
        </a>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center rounded px-3 py-2 text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex justify-evenly p-4 md:flex-row md:space-x-8 md:p-0">
            {pageSections.map((link, index) => (
              <li className={index}>
                <NavLink href={link.href} title={link.title}></NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <NavDrawer links={pageSections} /> : null}
    </nav>
  );
};
