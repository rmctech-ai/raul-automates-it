import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, User, Sparkles } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const knowledgeBase: Record<string, string> = {
  "automation systems": "Raul builds end-to-end automation systems including AI-powered CRM pipelines, lead qualification engines, appointment booking systems, Voice AI assistants, and multi-channel marketing automation. He specializes in connecting tools like GoHighLevel, n8n, Zapier, Make, and custom APIs to create seamless business workflows.",
  "tools": "Raul specializes in: **GoHighLevel** (CRM & marketing automation), **n8n** (workflow automation), **Zapier** & **Make** (integration platforms), **OpenAI & Claude** (AI models), **Twilio** (SMS/Voice), **HubSpot**, **WordPress/WooCommerce**, **ConvertKit**, **Wistia**, and many more. He's proficient in 50+ automation and AI tools.",
  "help my business": "AI automation can transform your business by:\n\n• **Saving 20+ hours/week** on repetitive tasks\n• **Increasing lead conversion** with instant AI follow-ups\n• **Reducing operational costs** by 40-60%\n• **Improving customer experience** with 24/7 AI support\n• **Scaling operations** without hiring additional staff\n\nRaul can design a custom automation strategy tailored to your specific business needs.",
  "services": "Raul offers:\n\n🔧 **CRM Automation** — GoHighLevel, HubSpot, Salesforce setup & optimization\n🤖 **AI Chatbots & Voice AI** — Customer support and appointment scheduling\n⚡ **Workflow Automation** — n8n, Zapier, Make integrations\n📊 **Lead Qualification** — AI-powered lead scoring & routing\n📧 **Email & SMS Automation** — ConvertKit, Twilio campaigns\n🎯 **Marketing Automation** — Multi-channel campaign workflows\n\nReady to automate? **Book a free consultation** through the contact section!",
  "experience": "Raul is an experienced AI & Automation Specialist with expertise across 50+ platforms. He has built automation systems for businesses in real estate, healthcare, e-commerce, consulting, and more. His work has saved clients hundreds of hours per week through intelligent workflow automation.",
  "pricing": "Raul offers flexible pricing based on project scope and complexity. For a custom quote tailored to your automation needs, please reach out through the contact form or book a free consultation call. Every project starts with a discovery session to understand your specific requirements.",
  "contact": "You can reach Raul through:\n\n📧 The **Contact section** on his portfolio\n📅 **Book a consultation** via his scheduling link\n💼 Connect on **LinkedIn**, **Upwork**, or **Facebook**\n\nRaul typically responds within 24 hours!",
};

function getAIResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("automation") && (lower.includes("system") || lower.includes("build"))) return knowledgeBase["automation systems"];
  if (lower.includes("tool") || lower.includes("speciali") || lower.includes("platform") || lower.includes("tech")) return knowledgeBase["tools"];
  if (lower.includes("help") || lower.includes("business") || lower.includes("benefit")) return knowledgeBase["help my business"];
  if (lower.includes("service") || lower.includes("offer") || lower.includes("do you do") || lower.includes("provide")) return knowledgeBase["services"];
  if (lower.includes("experience") || lower.includes("background") || lower.includes("about")) return knowledgeBase["experience"];
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much") || lower.includes("rate")) return knowledgeBase["pricing"];
  if (lower.includes("contact") || lower.includes("reach") || lower.includes("book") || lower.includes("call") || lower.includes("hire")) return knowledgeBase["contact"];
  return "Great question! Raul specializes in building AI-powered automation systems that help businesses save time and scale efficiently. He works with tools like GoHighLevel, n8n, Zapier, and AI APIs to create custom solutions.\n\nFeel free to ask about his **services**, **tools**, **experience**, or how **automation can help your business**. You can also reach out directly through the contact section to discuss your specific needs!";
}

const AIPortfolioAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "👋 Hi! I'm Raul's AI Automation Assistant. I can answer questions about his services, skills, and how automation can help your business. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: getAIResponse(text) }]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const quickQuestions = [
    "What automation systems does Raul build?",
    "What tools does Raul specialize in?",
    "How can automation help my business?",
    "What services does Raul offer?",
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
          <Bot className="w-4 h-4" />
          Demo Tool #2
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI Portfolio Assistant</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Ask Raul's AI assistant anything about his services, skills, and automation expertise.</p>
      </div>

      <Card className="max-w-3xl mx-auto border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border/50">
          <CardTitle className="flex items-center gap-2 text-lg"><Sparkles className="w-5 h-5 text-primary" /> Ask Raul's AI Automation Assistant</CardTitle>
          <CardDescription>Powered by Raul's automation knowledge base</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div ref={scrollRef} className="h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-primary" />
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
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted rounded-xl px-4 py-3 text-sm text-muted-foreground">
                  <span className="animate-pulse">Typing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick questions */}
          <div className="px-4 pb-3 flex flex-wrap gap-2">
            {quickQuestions.map((q, i) => (
              <button key={i} onClick={() => sendMessage(q)} className="text-xs px-3 py-1.5 rounded-full bg-primary/5 hover:bg-primary/10 text-primary border border-primary/20 transition-colors">
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50 flex gap-2">
            <Input placeholder="Ask about Raul's services..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage(input)} />
            <Button onClick={() => sendMessage(input)} size="icon" disabled={!input.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AIPortfolioAssistant;
