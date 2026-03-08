import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import RealWorldProjects from "@/components/RealWorldProjects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ToolsCarousel from "@/components/ToolsCarousel";
import ParticleBackground from "@/components/ParticleBackground";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = cursorX - 16 + 'px';
      cursor.style.top = cursorY - 16 + 'px';
      requestAnimationFrame(animate);
    };

    const onDown = () => cursor.classList.add('clicked');
    const onUp = () => cursor.classList.remove('clicked');

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    const raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf);
      document.body.removeChild(cursor);
    };
  }, []);

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
        <Portfolio />
        <div className="cyber-divider" />
        <RealWorldProjects />
        <div className="cyber-divider" />
        <Services />
        <div className="cyber-divider" />
        <Testimonials />
        <div className="cyber-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
