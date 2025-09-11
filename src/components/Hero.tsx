import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-primary/20 text-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Available for Projects</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Transforming Operations
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              with <span className="gradient-text glow-effect">Smart Automation</span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I'm <span className="text-primary font-semibold">Raul M. Cachola</span> — a Virtual Assistant & 
            Automation Specialist helping businesses streamline workflows, generate leads, 
            and scale efficiently.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={scrollToPortfolio}
              size="lg" 
              className="btn-glow bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              size="lg"
              className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="p-2 rounded-full border border-primary/30 hover:bg-primary/10 transition-colors"
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;