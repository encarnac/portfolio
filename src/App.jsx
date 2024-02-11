import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
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
      className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-tr from-[#B0BEDF] via-[#D0C5DD] to-[#E1C6D7] transition duration-300 dark:from-[#371E43] dark:from-5% dark:to-[#1E223C]"
    >
      {/* Navbar and Drawer */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div className="relative bg-[#e3e8ee] dark:bg-[#251e32]">
        {/* Hero Section */}
        <motion.div
          className="container mx-auto mb-32 mt-16 px-5 py-4 sm:px-10 lg:mt-24"
          viewport={{ amount: 0.7 }}
          onViewportEnter={() => setSelectedPage("hero")}
        >
          <HeroSection />
          <DividerShape shape={"first"} />
        </motion.div>
      </div>

      <div className="relative">
        {/* About Me Section */}
        <motion.div
          className="container mx-auto my-20 px-5 py-4 sm:px-10"
          viewport={{ amount: 0.7 }}
          onViewportEnter={() => setSelectedPage("about")}
        >
          <AboutSection />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="container mx-auto my-20 px-5 py-4 sm:px-10"
          viewport={{ amount: 0.7 }}
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <SkillsSection />
        </motion.div>
      </div>

      <div className="relative rounded-tr-[5.5rem] bg-[#eff1f2]/50 backdrop-blur-lg dark:bg-[#2f2949]/80">
        {/* Projects Section */}
        <motion.div
          className="container mx-auto my-20 px-5 py-4 sm:px-10"
          viewport={{ amount: 0.7 }}
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <ProjectsSection />
        </motion.div>

        {/* Contact and Footer Section */}

        <div className="relative rounded-tl-[5.5rem] bg-[#E3E8EE] dark:bg-[#251e32]">
          <motion.div
            className="container mx-auto mt-20 px-5 py-8 sm:px-10"
            viewport={{ amount: 0.7 }}
            onViewportEnter={() => setSelectedPage("contact")}
          >
            <ContactSection />
            <FooterSection />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
