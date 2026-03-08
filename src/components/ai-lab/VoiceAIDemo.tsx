import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, PhoneCall, Bot, User, Mic, Volume2, CheckCircle } from "lucide-react";

const conversation = [
  { role: "customer" as const, text: "Hi, I'd like to book an appointment for a dental cleaning." },
  { role: "ai" as const, text: "Of course! I'd be happy to help you schedule a dental cleaning. Let me check our available times. Could I get your name, please?" },
  { role: "customer" as const, text: "Sure, it's Sarah Johnson." },
  { role: "ai" as const, text: "Thank you, Sarah! We have openings this Thursday at 10 AM, Friday at 2 PM, and next Monday at 9 AM. Which works best for you?" },
  { role: "customer" as const, text: "Thursday at 10 AM sounds great." },
  { role: "ai" as const, text: "Perfect! I've booked your dental cleaning for Thursday at 10 AM. You'll receive a confirmation text and a reminder 24 hours before your appointment. Is there anything else I can help with?" },
  { role: "customer" as const, text: "No, that's all. Thank you!" },
  { role: "ai" as const, text: "You're welcome, Sarah! We look forward to seeing you on Thursday. Have a great day!" },
];

const capabilities = [
  { icon: Phone, title: "Appointment Scheduling", desc: "AI handles inbound calls and books appointments with real-time calendar sync." },
  { icon: Mic, title: "Lead Intake Calls", desc: "Qualifies leads by gathering key information during natural phone conversations." },
  { icon: Volume2, title: "Customer Support Calls", desc: "Answers FAQs, provides business info, and handles common requests 24/7." },
  { icon: PhoneCall, title: "Call Routing", desc: "Intelligently routes calls to the right department or person based on caller needs." },
];

const VoiceAIDemo = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const startSimulation = () => {
    setVisibleMessages(0);
    setIsPlaying(true);
    let count = 0;
    const interval = setInterval(() => {
      count++;
      setVisibleMessages(count);
      if (count >= conversation.length) {
        clearInterval(interval);
        setIsPlaying(false);
      }
    }, 1500);
  };

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
          <Phone className="w-4 h-4" />
          Demo Tool #4
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Voice AI Appointment Assistant</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">See how Voice AI can handle phone calls, book appointments, and provide customer support — all automatically.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><PhoneCall className="w-5 h-5 text-green-500" /> Simulated Call</CardTitle>
            <CardDescription>Watch how Voice AI handles a real appointment booking call</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/30 rounded-xl p-4 min-h-[350px] space-y-3 overflow-y-auto max-h-[400px]">
              {visibleMessages === 0 && !isPlaying && (
                <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                  <p>Click "Start Call" to see the Voice AI in action</p>
                </div>
              )}
              {conversation.slice(0, visibleMessages).map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === "customer" ? "justify-end" : "justify-start"} animate-fade-in`}>
                  {msg.role === "ai" && (
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-green-500" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-xl px-4 py-3 text-sm ${
                    msg.role === "customer" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                  }`}>
                    <p className="text-[10px] font-medium mb-1 opacity-60">{msg.role === "ai" ? "🤖 Voice AI" : "👤 Customer"}</p>
                    {msg.text}
                  </div>
                  {msg.role === "customer" && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                  )}
                </div>
              ))}
              {isPlaying && visibleMessages < conversation.length && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="bg-muted rounded-xl px-4 py-3 text-sm animate-pulse text-muted-foreground">
                    Listening...
                  </div>
                </div>
              )}
            </div>
            <Button onClick={startSimulation} disabled={isPlaying} className="w-full btn-glow bg-green-600 hover:bg-green-700">
              <Phone className="w-4 h-4 mr-2" /> {isPlaying ? "Call in Progress..." : visibleMessages > 0 ? "Replay Call" : "Start Call Simulation"}
            </Button>
          </CardContent>
        </Card>

        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Volume2 className="w-5 h-5 text-accent" /> Voice AI Capabilities</CardTitle>
            <CardDescription>What Voice AI can automate for your business</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <cap.icon className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{cap.title}</h4>
                  <p className="text-sm text-muted-foreground">{cap.desc}</p>
                </div>
              </div>
            ))}
            <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-green-500">🎯 Result:</span> Businesses using Voice AI report 60% fewer missed calls and 40% more booked appointments with zero additional staff.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VoiceAIDemo;
