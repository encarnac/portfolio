import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
// import AboutSection from "./components/AboutSection";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-tr from-[#10031A] via-[#18082C] to-[#14022A]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
