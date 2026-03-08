import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(187 100% 50% / 0.06), transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(230 80% 65% / 0.06), transparent 70%)" }}
        animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-40" />

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8">
          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-primary/80 font-medium tracking-wide uppercase text-xs">Available for Projects</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
              Transforming Operations
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              with <span className="gradient-text glow-effect">Smart Automation</span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I'm <span className="text-primary font-semibold">Raul M. Cachola</span> — a Virtual Assistant & 
            Automation Specialist helping businesses streamline workflows, generate leads, 
            and scale efficiently.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button 
              onClick={scrollToPortfolio}
              size="lg" 
              className="btn-glow bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-semibold"
            >
              View My Work
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button 
          onClick={scrollToAbout}
          className="p-2 rounded-full border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
        >
          <ArrowDown className="w-6 h-6 text-primary/60" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
