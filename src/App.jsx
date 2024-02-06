import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { DividerShape } from "./components/DividerShape";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [selectedPage, setSelectedPage] = useState("hero");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

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
      className="relative flex min-h-screen flex-col bg-[#e3e8ee] transition duration-300 dark:bg-[#251e32]"
    >
      {/* Navbar and Drawer */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Hero Section with Divider */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto mb-36 mt-24 px-5 py-4 sm:px-10"
        >
          <HeroSection />
        </motion.div>
      </div>

      {/* About Me Section */}

      <div className="relative bg-gradient-to-tr from-[#B0BEDF] via-[#D0C5DD] to-[#E1C6D7] dark:from-[#371E43] dark:from-5% dark:to-[#1E223C]">
        <motion.div
          className="container mx-auto my-36 px-5 py-4 sm:px-10"
          margin="0 0 -200px 0"
          amount=".2"
          viewport={{ amount: 0.7 }}
          onViewportEnter={() => setSelectedPage("about")}
        >
          <DividerShape shape={"layers"} />
          <AboutSection />
        </motion.div>
        {/* Skills Section */}
        <motion.div
          className="container mx-auto my-36 mb-40 px-5 py-4 sm:px-10"
          viewport={{ amount: 0.7 }}
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <SkillsSection />
        </motion.div>

        <DividerShape shape={"solid"} />
      </div>

      {/* Projects Section */}
      <div className="relative bg-[#eff1f2] dark:bg-[#272335]">
        <motion.div
          className="container mx-auto my-36 mb-40 px-5 py-4 sm:px-10"
          viewport={{ amount: 0.7 }}
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <ProjectsSection />
        </motion.div>
      </div>

      <div className="relative bg-[#E3E8EE] dark:bg-[#251e32]">
        <ContactSection />
        {/* <DividerShape shape={"curve"} /> */}
      </div>
    </main>
  );
}
