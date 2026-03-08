import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Target, Zap, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react";

const AILeadQualification = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", budget: "", need: "" });
  const [result, setResult] = useState({ score: 0, priority: "", recommendation: "", color: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let score = 5;
    if (formData.budget === "10k-25k" || formData.budget === "25k+") score += 2;
    else if (formData.budget === "5k-10k") score += 1;
    if (formData.company) score += 1;
    if (formData.need && formData.need.length > 20) score += 1;
    if (formData.email.includes("@gmail") || formData.email.includes("@yahoo")) score -= 1;
    score = Math.min(10, Math.max(1, score));

    let priority = "Medium", recommendation = "Add to nurture sequence.", color = "text-yellow-500";
    if (score >= 8) { priority = "High"; recommendation = "Schedule a consultation immediately."; color = "text-green-500"; }
    else if (score >= 6) { priority = "Medium"; recommendation = "Send personalized follow-up within 24 hours."; color = "text-yellow-500"; }
    else { priority = "Low"; recommendation = "Add to email nurture campaign."; color = "text-muted-foreground"; }

    setResult({ score, priority, recommendation, color });
    setSubmitted(true);
  };

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium">
          <Target className="w-4 h-4" />
          Demo Tool #6
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI Lead Qualification Demo</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">See how AI instantly scores and qualifies leads to prioritize your sales efforts.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Target className="w-5 h-5 text-orange-500" /> Lead Information</CardTitle>
            <CardDescription>Submit lead details to see AI qualification in action</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Name *</Label>
                <Input placeholder="Jane Smith" value={formData.name} onChange={e => setFormData(p => ({...p, name: e.target.value}))} required />
              </div>
              <div className="space-y-2">
                <Label>Email *</Label>
                <Input type="email" placeholder="jane@company.com" value={formData.email} onChange={e => setFormData(p => ({...p, email: e.target.value}))} required />
              </div>
              <div className="space-y-2">
                <Label>Company</Label>
                <Input placeholder="Acme Corp" value={formData.company} onChange={e => setFormData(p => ({...p, company: e.target.value}))} />
              </div>
              <div className="space-y-2">
                <Label>Budget Range</Label>
                <Select onValueChange={v => setFormData(p => ({...p, budget: v}))}>
                  <SelectTrigger><SelectValue placeholder="Select budget" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k+">$25,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Automation Need</Label>
                <Textarea placeholder="Describe what you'd like to automate..." value={formData.need} onChange={e => setFormData(p => ({...p, need: e.target.value}))} />
              </div>
              <Button type="submit" className="w-full btn-glow">
                <Zap className="w-4 h-4 mr-2" /> Qualify Lead
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className={`border-border/50 bg-card/80 backdrop-blur-sm transition-all ${submitted ? "animate-fade-in" : ""}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><TrendingUp className="w-5 h-5 text-primary" /> AI Qualification Results</CardTitle>
            <CardDescription>Real-time lead scoring and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <div className="flex flex-col items-center justify-center h-[300px] text-muted-foreground text-sm text-center space-y-2">
                <Target className="w-12 h-12 opacity-20" />
                <p>Submit lead information to see<br />AI qualification results</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Score */}
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">Lead Score</p>
                  <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                      <circle cx="60" cy="60" r="50" fill="none" stroke={result.score >= 8 ? "#22c55e" : result.score >= 6 ? "#eab308" : "#94a3b8"} strokeWidth="10" strokeDasharray={`${result.score * 31.4} 314`} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-foreground">{result.score}/10</span>
                    </div>
                  </div>
                </div>

                {/* Priority */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                  <span className="text-sm font-medium text-muted-foreground">Priority</span>
                  <span className={`font-bold flex items-center gap-1 ${result.color}`}>
                    {result.priority === "High" && <CheckCircle className="w-4 h-4" />}
                    {result.priority === "Medium" && <Clock className="w-4 h-4" />}
                    {result.priority === "Low" && <AlertCircle className="w-4 h-4" />}
                    {result.priority}
                  </span>
                </div>

                {/* Recommendation */}
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm font-medium text-primary mb-1">📋 Recommended Action</p>
                  <p className="text-sm text-muted-foreground">{result.recommendation}</p>
                </div>

                <Button variant="outline" onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", budget: "", need: "" }); }} className="w-full">
                  Test Another Lead
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AILeadQualification;
