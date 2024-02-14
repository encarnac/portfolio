import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "./NavLink";
import { NavDrawer } from "./NavDrawer";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

const pages = [
  { title: "about", href: "#about" },
  { title: "skills", href: "#skills" },
  { title: "projects", href: "#projects" },
  { title: "contact", href: "#contact" },
];

const Nav = ({
  isTopOfPage,
  theme,
  toggleTheme,
  selectedPage,
  setSelectedPage,
}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navStyle = isTopOfPage
    ? "bg-opacity-0 backdrop-blur-sm dark:bg-opacity-0 dark:backdrop-blur-sm"
    : "bg-opacity-100";

  return (
    <nav
      className={`${navStyle} fixed left-0 right-0 top-0 z-50 border-[1px] border-[#726C7B]/20 bg-[#e3e8ee] transition duration-300 dark:border-[#b7b0c2]/10 dark:bg-[#211e2c]`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        <a
          href="#hero"
          onClick={() => setSelectedPage("hero")}
          className="font-mono text-2xl font-semibold text-[#5b5662] transition duration-300 hover:text-[#de8abb] dark:text-[#D4D3D8] dark:hover:text-[#7943ed] md:text-4xl"
        >
          {"</ce>"}
        </a>
        <div className="mobile-menu flex flex-row md:hidden">
          <button
            onClick={toggleTheme}
            className="p-0 text-[#5b5662] transition duration-300 hover:text-[#de8abb] dark:text-[#D4D3D8] dark:hover:text-[#7943ed]"
          >
            {theme === "dark" ? (
              <FiMoon className="h-5 w-5" />
            ) : (
              <FiSun className="h-5 w-5" />
            )}
          </button>
          <AnimatePresence inital={true} mode="wait">
            <motion.div
              onClick={() => setNavbarOpen(!navbarOpen)}
              key={navbarOpen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#5b5662]hover:text-[#de8abb] flex cursor-pointer items-center rounded px-3 py-2 transition-colors duration-300 dark:text-[#D4D3D8] dark:hover:text-[#7943ed]"
            >
              {navbarOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex justify-evenly p-4 md:flex-row md:space-x-8 md:p-0">
            {pages.map((page, index) => (
              <li key={index}>
                <NavLink
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </li>
            ))}
            <button
              onClick={toggleTheme}
              className="p-0 text-[#5b5662] transition duration-300 hover:text-[#de8abb] dark:text-[#D4D3D8] dark:hover:text-[#7943ed]"
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
      <AnimatePresence mode="wait">
        <motion.div
          key={navbarOpen}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.2 }}
        >
          {navbarOpen ? (
            <NavDrawer
              pages={pages}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
