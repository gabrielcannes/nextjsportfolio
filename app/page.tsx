import { LanguageProvider } from "../context/languageContext";
import { AboutSection } from "./components/AboutSection";
import { AchievementsSection } from "./components/AchievementsSection";
import { EmailSection } from "./components/EmailSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { MentorshipSection } from "./components/MentorshipSection"; // 1. Importe aqui
import { Navbar } from "./components/Navbar";
import { ProjectSection } from "./components/ProjectSection";

export default function Home() {
  return (
    <LanguageProvider>  
      <main className="flex min-h-screen flex-col bg-[#18120F] text-[#EDE6D3]">
        <Navbar />
        <div className="mt-24 container mx-auto py-10 px-6 sm:px-10">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <MentorshipSection /> 
          <ProjectSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </LanguageProvider>
  );
}