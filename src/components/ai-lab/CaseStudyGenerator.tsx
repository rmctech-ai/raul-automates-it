import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Zap, CheckCircle, TrendingUp, Wrench, Target } from "lucide-react";

type CaseStudy = { problem: string; solution: string; tools: string[]; results: string[] };

const templates: Record<string, CaseStudy> = {
  dental: {
    problem: "A dental clinic was losing 40% of potential patients due to slow response times, missed calls, and no automated follow-up system. Staff spent 3+ hours daily on manual scheduling and reminders.",
    solution: "Implemented a full-stack automation system using GoHighLevel CRM, Voice AI for call handling, n8n for workflow orchestration, and Twilio for SMS/call automation. The system captures leads from multiple channels, qualifies them with AI, books appointments automatically, and sends personalized follow-ups.",
    tools: ["GoHighLevel", "n8n", "Voice AI (Twilio)", "OpenAI API", "Google Calendar", "Zapier"],
    results: ["60% reduction in missed appointments", "3+ hours saved daily on scheduling", "45% increase in patient bookings", "24/7 automated lead response", "90% patient satisfaction score"],
  },
  realestate: {
    problem: "A real estate agency struggled with lead management — agents couldn't follow up fast enough, leads went cold, and there was no system to score or prioritize prospects across multiple listing platforms.",
    solution: "Built an AI-powered lead management pipeline using GoHighLevel for CRM, n8n for multi-platform lead capture, and AI APIs for intelligent lead scoring. The system automatically captures leads from Zillow, Realtor.com, and Facebook Ads, scores them, assigns them to agents, and triggers personalized drip campaigns.",
    tools: ["GoHighLevel", "n8n", "OpenAI API", "Facebook Ads API", "Make", "ConvertKit"],
    results: ["50% faster lead response time", "35% increase in qualified leads", "20+ hours saved per week on lead management", "3x more showings booked automatically", "28% increase in closing rate"],
  },
  default: {
    problem: "A growing business was overwhelmed with manual processes — lead capture, customer follow-ups, data entry, and reporting consumed 30+ hours per week, limiting growth and causing missed opportunities.",
    solution: "Designed and deployed a comprehensive automation ecosystem connecting CRM, marketing, communication, and analytics tools. AI handles lead qualification, personalized outreach, appointment scheduling, and performance reporting — all running autonomously with human oversight.",
    tools: ["GoHighLevel", "n8n", "AI APIs (OpenAI/Claude)", "Twilio", "Zapier", "HubSpot"],
    results: ["30+ hours saved per week", "50% increase in lead conversion", "40% reduction in operational costs", "24/7 automated customer engagement", "Real-time analytics and reporting"],
  },
};

const examplePrompts = [
  "I run a dental clinic and patients keep missing appointments.",
  "My real estate agency can't follow up with leads fast enough.",
  "My business is drowning in manual data entry and follow-ups.",
];

const CaseStudyGenerator = () => {
  const [input, setInput] = useState("");
  const [study, setStudy] = useState<CaseStudy | null>(null);

  const generate = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes("dental") || lower.includes("clinic") || lower.includes("patient") || lower.includes("appointment")) {
      setStudy(templates.dental);
    } else if (lower.includes("real estate") || lower.includes("agent") || lower.includes("listing") || lower.includes("property")) {
      setStudy(templates.realestate);
    } else {
      setStudy(templates.default);
    }
  };

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-500 text-sm font-medium">
          <FileText className="w-4 h-4" />
          Demo Tool #7
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Automation Case Study Generator</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Describe your business challenge and see a tailored automation case study with solutions and expected results.</p>
      </div>

      <Card className="max-w-3xl mx-auto border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Target className="w-5 h-5 text-pink-500" /> Describe Your Challenge</CardTitle>
          <CardDescription>What business problem would you like to solve with automation?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea placeholder="E.g., I run a dental clinic and patients keep missing appointments..." value={input} onChange={e => setInput(e.target.value)} className="min-h-[80px]" />
          <div className="flex flex-wrap gap-2">
            {examplePrompts.map((p, i) => (
              <button key={i} onClick={() => { setInput(p); generate(p); }} className="text-xs px-3 py-1.5 rounded-full bg-pink-500/5 hover:bg-pink-500/10 text-pink-600 border border-pink-500/20 transition-colors">
                {p}
              </button>
            ))}
          </div>
          <Button onClick={() => generate(input)} disabled={!input.trim()} className="w-full btn-glow">
            <Zap className="w-4 h-4 mr-2" /> Generate Case Study
          </Button>
        </CardContent>
      </Card>

      {study && (
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          {/* Problem */}
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm border-l-4 border-l-red-400">
            <CardContent className="p-6">
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-2"><Target className="w-5 h-5 text-red-400" /> Business Problem</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{study.problem}</p>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-2"><Zap className="w-5 h-5 text-primary" /> Automation Solution</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{study.solution}</p>
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm border-l-4 border-l-accent">
            <CardContent className="p-6">
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-3"><Wrench className="w-5 h-5 text-accent" /> Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {study.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium border border-accent/20">{tool}</span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <h3 className="font-bold text-foreground flex items-center gap-2 mb-3"><TrendingUp className="w-5 h-5 text-green-500" /> Expected Results</h3>
              <div className="space-y-2">
                {study.results.map((r, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="text-sm text-muted-foreground">{r}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default CaseStudyGenerator;
