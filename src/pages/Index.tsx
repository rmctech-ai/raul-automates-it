import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import RealWorldProjects from "@/components/RealWorldProjects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Custom cursor functionality
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const scaleCursor = () => {
      cursor.style.transform = 'scale(1.5)';
      setTimeout(() => {
        cursor.style.transform = 'scale(1)';
      }, 100);
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('click', scaleCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('click', scaleCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background/90 backdrop-blur-sm">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <RealWorldProjects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
