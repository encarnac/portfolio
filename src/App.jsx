import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-tr from-[#10031A] via-[#18082C] to-[#14022A]">
      <div className="container mx-auto px-12 pt-12">
        <HeroSection />
      </div>
    </main>
  );
}
