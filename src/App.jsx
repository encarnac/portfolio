import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [selectedPage, setSelectedPage] = useState("hero");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // const selectPage = (page) => {
  //   setSelectedPage(page.title);
  // };

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
      className="flex min-h-screen flex-col bg-gradient-to-tr from-[#B0BEDF] via-[#D0C5DD] to-[#E1C6D7] dark:from-[#17121b] dark:to-[#11091b]"
    >
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <motion.div
          margin="0 0 -200px 0"
          amount=".2"
          viewport={{ amount: 0.7 }}
          onViewportEnter={() => setSelectedPage("about")}
        >
          <AboutSection />
        </motion.div>
      </div>
    </main>
  );
}
