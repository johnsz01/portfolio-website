import Image from "next/image";
import HeroSection from "./componenets/HeroSection";
import Navbar from "./componenets/Navbar";
import AboutSection from "./componenets/AboutSection";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
        </div>
      </main>
    </div>
  );
}
