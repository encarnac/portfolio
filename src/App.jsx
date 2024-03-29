import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import { DividerShape } from "./assets/DividerShape";

export default function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [selectedPage, setSelectedPage] = useState("hero");
  const [darkMode, setDarkMode] = useState(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return true;
    } else {
      return false;
    }
  });

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-tr from-[#B0BEDF] via-[#D0C5DD] to-[#E1C6D7] dark:from-[#371E43] dark:from-5% dark:to-[#1E223C]"
    >
      {/* Navbar and Drawer */}
      <Nav
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      {/* Hero Section */}
      <div className="relative">
        <motion.div
          className="container mx-auto mb-64 mt-16 px-5 py-3 sm:px-10 lg:mt-24"
          viewport={{ amount: 0.7 }}
          onViewportEnter={() => setSelectedPage("hero")}
        >
          <HeroSection />
          <DividerShape shape={"first"} />
        </motion.div>
      </div>

      {/* About Me Section */}
      <div className="relative bg-[#e3e8ee] transition-colors dark:bg-[#211e2c]">
        <motion.div
          className="container mx-auto my-20 px-5 py-4 sm:px-10"
          viewport={{ amount: 0.7 }}
          onViewportEnter={() => setSelectedPage("about")}
        >
          <AboutSection />
        </motion.div>
        {/* Skills Section */}
        <div className="relative rounded-tl-[5.5rem] bg-gradient-to-tr from-[#B0BEDF] via-[#D0C5DD] to-[#E1C6D7] transition-colors dark:from-[#371E43] dark:from-25% dark:to-[#1E223C]">
          <motion.div
            className="container mx-auto my-20 px-5 pb-4 pt-16 sm:px-10"
            viewport={{ amount: 0.7 }}
            onViewportEnter={() => setSelectedPage("skills")}
          >
            <SkillsSection />
          </motion.div>

          {/* Projects Section */}
          <div className="relative rounded-tr-[5.5rem] bg-[#eff1f2]/50 backdrop-blur-lg transition-colors dark:bg-[#2d2842]/60">
            <motion.div
              className="container mx-auto my-20 px-5 pb-4 pt-16 sm:px-10"
              viewport={{ amount: 0.7 }}
              onViewportEnter={() => setSelectedPage("projects")}
            >
              <ProjectsSection />
            </motion.div>

            {/* Contact and Footer Section */}
            <div className="relative rounded-tl-[5.5rem] bg-[#E3E8EE] transition-colors dark:bg-[#211e2c]">
              <motion.div
                className="container mx-auto mt-20 px-5 pb-4 pt-16 sm:px-10"
                viewport={{ amount: 0.7 }}
                onViewportEnter={() => setSelectedPage("contact")}
              >
                <ContactSection />
                <FooterSection />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
