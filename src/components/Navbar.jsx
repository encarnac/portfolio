import { useState } from "react";
import { Link } from "./Link";
import { NavDrawer } from "./NavDrawer";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  { title: "about", href: "#about" },
  { title: "skills", href: "#skills" },
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

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-[1px] border-[#726C7B]/20 bg-[#e3e8ee] transition duration-300 dark:border-[#b7b0c2]/10 dark:bg-[#211e2c]">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        <a
          href="#hero"
          onClick={() => setSelectedPage("hero")}
          className="text-2xl font-semibold text-[#5b5662] transition duration-300 hover:text-[#de8abb] dark:text-[#D4D3D8] dark:hover:text-[#7943ed] md:text-4xl"
        >
          <HiOutlineCodeBracketSquare className="inline w-6" /> ce
        </a>
        <div className="mobile-menu flex flex-row text-[#5b5662] dark:text-[#D4D3D8] md:hidden">
          <button
            onClick={toggleTheme}
            className="p-0 transition duration-300 hover:text-[#de8abb] dark:hover:text-[#7943ed]"
          >
            {theme === "dark" ? (
              <FiMoon className="h-5 w-5" />
            ) : (
              <FiSun className="h-5 w-5" />
            )}
          </button>

          <motion.div
            onClick={() => setNavbarOpen(!navbarOpen)}
            key={navbarOpen}
            layoutId="nav-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex cursor-pointer items-center rounded px-3 py-2 transition duration-200 hover:text-[#de8abb] dark:hover:text-[#7943ed]"
          >
            {navbarOpen ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </motion.div>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex justify-evenly p-4 md:flex-row md:space-x-8 md:p-0">
            {pages.map((page, index) => (
              <li className={index}>
                <Link
                  mobile={false}
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

export default Navbar;
