import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Clock, Target } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "AI Agent Appointment Setter with Retell Integration",
      description: "Built an intelligent n8n workflow that uses AI agents to automatically notify customers about appointments via Retell voice technology.",
      tags: ["n8n", "Retell", "AI Agent"],
      results: [
        { icon: Target, label: "90% appointment confirmation rate", color: "text-success" },
        { icon: TrendingUp, label: "Reduced no-shows by 60%", color: "text-primary" },
      ],
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "Lead Generation & Email Scraping to Google Sheets",
      description: "Created an automated n8n workflow that scrapes email leads from various sources and organizes them into structured Google Sheets for sales teams.",
      tags: ["n8n", "Google Sheets", "Lead Generation"],
      results: [
        { icon: Users, label: "500+ leads per day automated", color: "text-accent" },
        { icon: Target, label: "95% data accuracy", color: "text-success" },
      ],
      gradient: "from-accent/20 to-primary/20",
    },
    {
      title: "AI-Powered Resume Screener Automation",
      description: "Designed an intelligent n8n workflow that uses AI to automatically screen resumes, evaluate candidates, and sort applications by qualification score.",
      tags: ["n8n", "OpenAI", "Resume Screening"],
      results: [
        { icon: Clock, label: "80% faster screening process", color: "text-primary" },
        { icon: Target, label: "Consistent evaluation criteria", color: "text-success" },
      ],
      gradient: "from-primary/20 to-purple-500/20",
    },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Real <span className="gradient-text">Results</span>, Real Impact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how I've transformed business operations through intelligent automation 
            solutions that deliver measurable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-hover bg-card/80 backdrop-blur-sm border-border/50 animate-slide-up shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <div className="space-y-4">
                        <CardTitle className="text-2xl lg:text-3xl text-foreground leading-tight">
                          {project.title}
                        </CardTitle>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {project.description}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge 
                              key={tag} 
                              variant="secondary" 
                              className="bg-primary/15 text-primary border-primary/20 px-3 py-1 font-medium"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:min-w-[320px] bg-muted/30 rounded-xl p-6 border border-border/30">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Key Results
                    </h4>
                    <div className="space-y-4">
                      {project.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                          <div className="flex-shrink-0">
                            <result.icon className={`w-5 h-5 ${result.color}`} />
                          </div>
                          <span className="text-muted-foreground font-medium">{result.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Transform Your Business Operations?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can help you automate your workflows and achieve similar results.
            </p>
            <Button 
              size="lg" 
              className="btn-glow bg-primary hover:bg-primary-glow text-primary-foreground px-8"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Your Project
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;