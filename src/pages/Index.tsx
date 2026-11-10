import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ClaudeProjects from "@/components/ClaudeProjects";
import RealWorldProjects from "@/components/RealWorldProjects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToolsCarousel from "@/components/ToolsCarousel";
import ParticleBackground from "@/components/ParticleBackground";
import { useCustomCursor } from "@/hooks/use-custom-cursor";

const Index = () => {
  useCustomCursor();

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <div className="cyber-divider" />
        <About />
        <div className="cyber-divider" />
        <ToolsCarousel />
        <div className="cyber-divider" />
        <ClaudeProjects />
        <div className="cyber-divider" />
        <Portfolio />
        <div className="cyber-divider" />
        <RealWorldProjects />
        <div className="cyber-divider" />
        <Services />
        <div className="cyber-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
