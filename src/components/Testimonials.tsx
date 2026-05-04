import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto animate-slide-up">
          <Card className="bg-card/60 backdrop-blur-sm border-border/50 shadow-lg">
            <CardContent className="p-10 text-center space-y-6">
              <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-primary" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently collecting feedback from recent projects. Check back soon —
                or reach out to discuss how I can help your business.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
