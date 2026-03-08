import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AIAppointmentBooking from "@/components/ai-lab/AIAppointmentBooking";
import AIPortfolioAssistant from "@/components/ai-lab/AIPortfolioAssistant";
import AutomationWorkflowDesigner from "@/components/ai-lab/AutomationWorkflowDesigner";
import VoiceAIDemo from "@/components/ai-lab/VoiceAIDemo";
import AICustomerSupport from "@/components/ai-lab/AICustomerSupport";
import AILeadQualification from "@/components/ai-lab/AILeadQualification";
import CaseStudyGenerator from "@/components/ai-lab/CaseStudyGenerator";
import { Bot, Sparkles } from "lucide-react";
import { useCustomCursor } from "@/hooks/use-custom-cursor";

const AILab = () => {
  useCustomCursor();

  return (
    <div className="min-h-screen bg-background/90 backdrop-blur-sm">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 px-4 text-center">
          <div className="container-custom max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Bot className="w-4 h-4" />
              Interactive Demo Lab
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              AI Automation <span className="gradient-text">Lab</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore live demos of the AI automation systems Raul builds for businesses. Each tool below demonstrates a real-world automation capability — from appointment booking to lead qualification.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
              {["Appointment Booking", "AI Chatbots", "Workflow Design", "Voice AI", "Customer Support", "Lead Scoring", "Case Studies"].map((tag, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-primary" /> {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Sections */}
        <div className="container-custom space-y-24 pb-24 px-4">
          <AIAppointmentBooking />
          <AIPortfolioAssistant />
          <AutomationWorkflowDesigner />
          <VoiceAIDemo />
          <AICustomerSupport />
          <AILeadQualification />
          <CaseStudyGenerator />

          {/* CTA */}
          <section className="text-center space-y-6 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Automate Your Business?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">These demos represent just a fraction of what's possible. Let's build a custom automation system tailored to your business needs.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium btn-glow hover:bg-primary/90 transition-colors">
              <Sparkles className="w-4 h-4" /> Get Started — Book a Consultation
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AILab;
