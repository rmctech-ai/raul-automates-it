import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Headphones, Send, Bot, User, Sparkles } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const responses: Record<string, string> = {
  services: "We offer a comprehensive suite of AI automation services:\n\n• **CRM Automation** — Streamline your customer management\n• **AI Chatbots** — 24/7 customer support and lead capture\n• **Workflow Automation** — Connect all your business tools\n• **Voice AI** — Automated phone call handling\n• **Lead Qualification** — AI-powered lead scoring\n• **Email & SMS Campaigns** — Automated marketing sequences\n\nWould you like to learn more about any specific service?",
  "how does automation work": "Great question! Here's how business automation works:\n\n1️⃣ **Identify** repetitive tasks in your business\n2️⃣ **Design** a workflow connecting your tools (CRM, email, calendar, etc.)\n3️⃣ **Build** the automation using platforms like n8n, Zapier, or GoHighLevel\n4️⃣ **Test** the workflow to ensure accuracy\n5️⃣ **Deploy** and monitor performance\n\nThe result? Tasks that took hours now happen automatically in seconds. Most businesses see ROI within the first month!",
  "how can ai help": "AI can transform your business in many ways:\n\n🚀 **Speed** — Respond to leads in seconds, not hours\n💰 **Revenue** — Convert more leads with instant follow-up\n⏰ **Time Savings** — Automate 20+ hours of work per week\n📊 **Insights** — AI analyzes data to find patterns and opportunities\n🤝 **Customer Experience** — 24/7 support without additional staff\n📈 **Scalability** — Handle 10x more volume without hiring\n\nReady to explore how AI can specifically help your business? Reach out through the contact section!",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("service") || lower.includes("offer") || lower.includes("what do you")) return responses.services;
  if (lower.includes("how") && lower.includes("automation") && lower.includes("work")) return responses["how does automation work"];
  if (lower.includes("ai") && lower.includes("help") || lower.includes("benefit")) return responses["how can ai help"];
  return "Thanks for your question! Our AI automation services are designed to save you time and grow your business. I can help you with information about our **services**, explain **how automation works**, or show you **how AI can help** your specific business.\n\nFor detailed inquiries, feel free to reach out through the contact section or book a consultation!";
}

const AICustomerSupport = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! 👋 Welcome to our AI Customer Support demo. I'm here to answer your questions about automation services. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: "user", content: text.trim() }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: getResponse(text) }]);
      setIsTyping(false);
    }, 600 + Math.random() * 600);
  };

  const quickQuestions = [
    "What services do you offer?",
    "How does automation work?",
    "How can AI help my business?",
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
          <Headphones className="w-4 h-4" />
          Demo Tool #5
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI Customer Support Assistant</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Experience how an AI support assistant can handle customer inquiries 24/7 with instant, helpful responses.</p>
      </div>

      <Card className="max-w-3xl mx-auto border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-primary/10 border-b border-border/50">
          <CardTitle className="flex items-center gap-2 text-lg"><Sparkles className="w-5 h-5 text-blue-500" /> AI Support Chat</CardTitle>
          <CardDescription>Click a question or type your own</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div ref={scrollRef} className="h-[350px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-blue-500" />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-xl px-4 py-3 text-sm whitespace-pre-line ${
                  msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                }`}>
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-accent" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-blue-500" />
                </div>
                <div className="bg-muted rounded-xl px-4 py-3 text-sm animate-pulse text-muted-foreground">Typing...</div>
              </div>
            )}
          </div>
          <div className="px-4 pb-3 flex flex-wrap gap-2">
            {quickQuestions.map((q, i) => (
              <button key={i} onClick={() => sendMessage(q)} className="text-xs px-3 py-1.5 rounded-full bg-blue-500/5 hover:bg-blue-500/10 text-blue-600 border border-blue-500/20 transition-colors">
                {q}
              </button>
            ))}
          </div>
          <div className="p-4 border-t border-border/50 flex gap-2">
            <Input placeholder="Type your question..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage(input)} />
            <Button onClick={() => sendMessage(input)} size="icon" disabled={!input.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AICustomerSupport;
