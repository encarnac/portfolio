import { useState } from "react";
import { Link } from "./Link";
import { NavDrawer } from "./NavDrawer";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";

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
    : "bg-[#e3e8ee] dark:bg-[#181320]";

  return (
    <nav
      className={`${navbarBgColor} transition duration-300 backdrop-blur-md fixed left-0 right-0 top-0 z-10 `}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between border-[#d9dbdf] px-4 py-4">
        <a
          href="#hero"
          onClick={() => setSelectedPage("hero")}
          className="text-2xl font-semibold text-stone-600 transition duration-300 hover:text-[#DC659C] dark:text-[#b7b0c2] dark:hover:text-[#6a5596] md:text-4xl"
        >
          <HiOutlineCodeBracketSquare className="inline w-6" /> ce
        </a>
        <div className="mobile-menu flex flex-row text-stone-500 dark:text-[#b7b0c2] md:hidden">
          <button
            onClick={toggleTheme}
            className="p-0 hover:text-[#DC659C] dark:hover:text-[#7943ed]"
          >
            {theme === "dark" ? (
              <FiMoon className="h-5 w-5" />
            ) : (
              <FiSun className="h-5 w-5" />
            )}
          </button>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center rounded px-3 py-2 hover:text-[#DC659C] dark:hover:text-[#7943ed]"
          >
            {/* TO DO: ANIMATE TRANSITION */}
            <span className="transition-opacity duration-300">
              {" "}
              {navbarOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </span>
          </button>
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
              className="p-0 text-stone-600 transition duration-300 hover:text-[#DC659C] dark:text-[#b7b0c2] dark:hover:text-[#7943ed]"
            >
              {theme === "dark" ? (
                <FiMoon className="h-5 w-5" />
              ) : (
                <FiSun className="h-5 w-5" />
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
