import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Workflow, ArrowDown, Lightbulb, Zap, Users, MessageSquare, CalendarDays, BarChart3, Mail } from "lucide-react";

type WorkflowStep = { icon: React.ElementType; title: string; desc: string; color: string };

const workflowTemplates: Record<string, { title: string; steps: WorkflowStep[] }> = {
  dental: {
    title: "Dental Clinic Appointment Automation",
    steps: [
      { icon: Users, title: "Lead Capture", desc: "Patient submits inquiry via website form, social media, or phone call.", color: "text-primary" },
      { icon: Zap, title: "AI Lead Qualification", desc: "AI analyzes the inquiry to determine service type, urgency, and patient needs.", color: "text-yellow-500" },
      { icon: BarChart3, title: "CRM Pipeline", desc: "Lead is automatically added to GoHighLevel CRM with appropriate tags and pipeline stage.", color: "text-green-500" },
      { icon: MessageSquare, title: "Automated SMS Reminder", desc: "Patient receives SMS confirmation and automated reminders 24hrs and 1hr before appointment.", color: "text-accent" },
      { icon: CalendarDays, title: "Appointment Booking", desc: "Calendar syncs with Google Calendar and staff availability is updated in real-time.", color: "text-purple-500" },
      { icon: Mail, title: "Follow-Up Automation", desc: "Post-appointment follow-up email with care instructions, review request, and rebooking link.", color: "text-pink-500" },
    ]
  },
  realestate: {
    title: "Real Estate Lead Nurturing Automation",
    steps: [
      { icon: Users, title: "Lead Capture", desc: "Prospect submits property inquiry through listing site, ad, or landing page.", color: "text-primary" },
      { icon: Zap, title: "AI Lead Scoring", desc: "AI evaluates lead quality based on budget, location preferences, and engagement signals.", color: "text-yellow-500" },
      { icon: BarChart3, title: "CRM Assignment", desc: "High-value leads auto-assigned to agents, low-priority leads enter nurture sequence.", color: "text-green-500" },
      { icon: MessageSquare, title: "Personalized Outreach", desc: "AI generates personalized property recommendations and sends via email and SMS.", color: "text-accent" },
      { icon: CalendarDays, title: "Showing Scheduler", desc: "Automated scheduling for property viewings with calendar integration.", color: "text-purple-500" },
      { icon: Mail, title: "Deal Follow-Up", desc: "Post-showing follow-up with comparative market analysis and next steps.", color: "text-pink-500" },
    ]
  },
  ecommerce: {
    title: "E-Commerce Customer Journey Automation",
    steps: [
      { icon: Users, title: "Customer Visit", desc: "Visitor browses products and adds items to cart on WooCommerce/Shopify store.", color: "text-primary" },
      { icon: Zap, title: "Behavior Tracking", desc: "AI tracks browsing behavior, cart abandonment, and purchase history.", color: "text-yellow-500" },
      { icon: MessageSquare, title: "Cart Recovery", desc: "Automated abandoned cart emails and SMS with personalized discount offers.", color: "text-accent" },
      { icon: BarChart3, title: "Order Processing", desc: "Order confirmation, fulfillment tracking, and inventory updates automated.", color: "text-green-500" },
      { icon: Mail, title: "Post-Purchase Sequence", desc: "Review requests, product recommendations, and loyalty program enrollment.", color: "text-purple-500" },
      { icon: Users, title: "Re-engagement", desc: "AI identifies inactive customers and triggers win-back campaigns.", color: "text-pink-500" },
    ]
  },
};

const examplePrompts = [
  "I run a dental clinic and want automated appointment reminders.",
  "I'm a real estate agent and need to nurture my leads automatically.",
  "I have an e-commerce store and want to recover abandoned carts.",
];

const AutomationWorkflowDesigner = () => {
  const [input, setInput] = useState("");
  const [workflow, setWorkflow] = useState<{ title: string; steps: WorkflowStep[] } | null>(null);

  const generateWorkflow = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes("dental") || lower.includes("clinic") || lower.includes("doctor") || lower.includes("medical") || lower.includes("appointment")) {
      setWorkflow(workflowTemplates.dental);
    } else if (lower.includes("real estate") || lower.includes("property") || lower.includes("agent") || lower.includes("listing")) {
      setWorkflow(workflowTemplates.realestate);
    } else {
      setWorkflow(workflowTemplates.ecommerce);
    }
  };

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium">
          <Workflow className="w-4 h-4" />
          Demo Tool #3
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Automation Workflow Designer</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Describe a business process you'd like to automate and see a visual workflow instantly.</p>
      </div>

      <Card className="max-w-3xl mx-auto border-border/50 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-500" /> Describe Your Process</CardTitle>
          <CardDescription>Tell us about the business process you want to automate</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea placeholder="E.g., I run a dental clinic and want automated appointment reminders..." value={input} onChange={e => setInput(e.target.value)} className="min-h-[100px]" />
          <div className="flex flex-wrap gap-2">
            {examplePrompts.map((p, i) => (
              <button key={i} onClick={() => { setInput(p); generateWorkflow(p); }} className="text-xs px-3 py-1.5 rounded-full bg-primary/5 hover:bg-primary/10 text-primary border border-primary/20 transition-colors">
                {p}
              </button>
            ))}
          </div>
          <Button onClick={() => generateWorkflow(input)} disabled={!input.trim()} className="w-full btn-glow">
            <Zap className="w-4 h-4 mr-2" /> Generate Workflow
          </Button>
        </CardContent>
      </Card>

      {workflow && (
        <Card className="max-w-3xl mx-auto border-border/50 bg-card/80 backdrop-blur-sm animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg"><Workflow className="w-5 h-5 text-primary" /> {workflow.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {workflow.steps.map((step, i) => (
              <div key={i}>
                <div className="flex gap-4 items-start">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center ${step.color}`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-1 pb-2">
                    <h4 className="font-semibold text-foreground text-sm">Step {i + 1}: {step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
                {i < workflow.steps.length - 1 && (
                  <div className="ml-5 my-1 flex items-center">
                    <ArrowDown className="w-4 h-4 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 p-4 rounded-lg bg-accent/5 border border-accent/20">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-accent">🛠 Tools Used:</span> GoHighLevel, n8n, AI APIs (OpenAI/Claude), Twilio, Google Calendar, Webhook integrations</p>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
};

export default AutomationWorkflowDesigner;
