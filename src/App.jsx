import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("dark");

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

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-tr from-[#B0BEDF] via-[#D0C5DD] to-[#E1C6D7] dark:from-[#10031A] dark:via-[#18082C] dark:to-[#14022A]">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
