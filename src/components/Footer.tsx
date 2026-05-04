import { ArrowUp, Linkedin, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-card/60 backdrop-blur-xl">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold gradient-text mb-2">Raul M. Cachola</h3>
              <p className="text-sm text-muted-foreground">
                Virtual Assistant & Automation Specialist
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                {[
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Portfolio", href: "#portfolio" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      const element = document.querySelector(item.href);
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right space-y-3">
              <div className="flex justify-center md:justify-end gap-2">
                <a
                  href="https://linkedin.com/in/raulcachola"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg border border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/pgenri.cachola/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-lg border border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="mailto:rapaulskie33@gmail.com"
                  aria-label="Email"
                  className="p-2 rounded-lg border border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-primary/15 text-primary hover:bg-primary/5 hover:border-primary/25"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Raul M. Cachola. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Automating the future, one workflow at a time.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
