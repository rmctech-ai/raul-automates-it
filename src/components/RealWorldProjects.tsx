import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Workflow, Settings, TrendingUp, Mail, Users, Clock, CheckCircle2 } from "lucide-react";

// Import project images
import ghlRepstack from "@/assets/projects/ghl-repstack.png";
import ghlMastermind from "@/assets/projects/ghl-mastermind.png";
import ghlLeadCapture from "@/assets/projects/ghl-lead-capture.png";
import zapierContent from "@/assets/projects/zapier-content.png";
import zapierLeads from "@/assets/projects/zapier-leads.png";
import zapierBlog from "@/assets/projects/zapier-blog.png";
import makeSlackSheets from "@/assets/projects/make-slack-sheets.png";
import makeFormLeads from "@/assets/projects/make-form-leads.png";
import n8nTradingAI from "@/assets/projects/n8n-trading-ai.png";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  impact: string[];
  platform: "gohighlevel" | "zapier" | "make" | "n8n";
}

const RealWorldProjects = () => {
  const projects: Project[] = [
    // GoHighLevel Projects
    {
      title: "RepStack CRM Pipeline Management",
      description: "Sophisticated opportunity tracking system managing the complete sales lifecycle from lead to close. Features intelligent stage management, automated task routing, and real-time pipeline analytics.",
      image: ghlRepstack,
      tags: ["CRM Automation", "Pipeline Management", "Sales Tracking"],
      impact: [
        "Streamlined opportunity tracking across 4 distinct stages",
        "Automated task assignment reducing manual overhead by 60%",
        "Real-time visibility into $0.00 to high-value opportunities"
      ],
      platform: "gohighlevel"
    },
    {
      title: "Hybrid Mastermind Challenge Workflow",
      description: "Intelligent enrollment automation that dynamically routes participants based on engagement criteria. Automatically segments users, triggers personalized emails, and manages waitlist operations.",
      image: ghlMastermind,
      tags: ["Marketing Automation", "Email Sequences", "Smart Routing"],
      impact: [
        "Conditional logic processing 100+ enrollments daily",
        "Personalized email journeys increasing engagement by 45%",
        "Automated waitlist management eliminating manual follow-ups"
      ],
      platform: "gohighlevel"
    },
    {
      title: "Lead Capture With Instant Follow-up",
      description: "High-speed lead processing system that captures form submissions and triggers immediate multi-channel follow-up sequences. Integrates SMS, email, and task creation for sales teams.",
      image: ghlLeadCapture,
      tags: ["Lead Generation", "Multi-Channel", "Instant Response"],
      impact: [
        "Response time reduced from hours to under 60 seconds",
        "Multi-channel touchpoints improving conversion by 35%",
        "Automated sales task creation ensuring zero leads slip through"
      ],
      platform: "gohighlevel"
    },

    // Zapier Projects
    {
      title: "Content Repurposing Engine",
      description: "AI-powered workflow that transforms meeting transcriptions into multiple content formats. Uses path conditions to intelligently route content, create transcriptions, and generate blog-ready assets.",
      image: zapierContent,
      tags: ["Content Automation", "AI Integration", "Multi-Format Output"],
      impact: [
        "Converts 1 hour of content into 5+ distribution-ready assets",
        "Path conditions ensuring quality control before publishing",
        "Time savings of 8+ hours per content piece"
      ],
      platform: "zapier"
    },
    {
      title: "Lead Action Automation System",
      description: "Sophisticated multi-path workflow managing lead qualification through intelligent routing. Integrates Asana, Gmail, and Google Drive to create a seamless lead management ecosystem.",
      image: zapierLeads,
      tags: ["Lead Routing", "Task Management", "Email Automation"],
      impact: [
        "30-step workflow handling 5 distinct lead paths",
        "Automated qualification reducing response time by 70%",
        "Cross-platform integration eliminating data silos"
      ],
      platform: "zapier"
    },
    {
      title: "Blog Publishing Automation",
      description: "End-to-end content publishing pipeline featuring AI-generated images, multi-platform distribution, and social media syndication across Instagram, LinkedIn, and Google Sheets logging.",
      image: zapierBlog,
      tags: ["Content Publishing", "AI Images", "Social Distribution"],
      impact: [
        "Automated multi-platform publishing saving 12+ hours weekly",
        "AI-generated visuals maintaining brand consistency",
        "Complete audit trail with Google Sheets integration"
      ],
      platform: "zapier"
    },

    // Make Projects
    {
      title: "Slack Team Notification System",
      description: "Real-time Google Sheets monitoring workflow that routes updates to multiple Slack channels based on content logic. Features smart filtering and multi-channel message distribution.",
      image: makeSlackSheets,
      tags: ["Team Communication", "Real-Time Alerts", "Data Monitoring"],
      impact: [
        "Instant team notifications eliminating email delays",
        "Smart routing ensuring relevant updates reach right teams",
        "15-minute polling keeping everyone synchronized"
      ],
      platform: "make"
    },
    {
      title: "Form Leads With Smart Budget Routing",
      description: "Intelligent form processing system using OpenAI for lead qualification and budget analysis. Automatically categorizes leads, updates Google Sheets, and triggers appropriate Slack notifications.",
      image: makeFormLeads,
      tags: ["AI Lead Scoring", "Budget Analysis", "Smart Routing"],
      impact: [
        "AI-powered qualification improving lead quality by 55%",
        "Budget-based routing optimizing sales team allocation",
        "Real-time Slack alerts accelerating response times"
      ],
      platform: "make"
    },

    // n8n Projects
    {
      title: "No-Code Trading AI Agent",
      description: "Advanced stock analysis workflow combining multiple timeframes, news sentiment, and AI-powered decision making. Aggregates data from APIs, processes through Google Gemini, and delivers actionable insights via Telegram.",
      image: n8nTradingAI,
      tags: ["AI Trading", "Data Aggregation", "Real-Time Analysis"],
      impact: [
        "Multi-timeframe analysis providing comprehensive market view",
        "AI-powered insights processing 100+ data points per decision",
        "Telegram integration for instant actionable alerts"
      ],
      platform: "n8n"
    }
  ];

  const platformNames = {
    gohighlevel: "GoHighLevel",
    zapier: "Zapier",
    make: "Make",
    n8n: "n8n"
  };

  const platformIcons = {
    gohighlevel: Settings,
    zapier: Zap,
    make: Workflow,
    n8n: TrendingUp
  };

  return (
    <section id="real-projects" className="section-padding bg-muted/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Real-World <span className="gradient-text">Automation Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-readable">
            Explore live implementations across multiple platforms showcasing practical automation solutions that drive real business impact.
          </p>
        </div>

        {/* Platform Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12 bg-card/50 backdrop-blur-sm border border-border/50 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              All Projects
            </TabsTrigger>
            {Object.entries(platformNames).map(([key, name]) => {
              const Icon = platformIcons[key as keyof typeof platformIcons];
              return (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {name}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* All Projects */}
          <TabsContent value="all" className="space-y-8">
            {Object.keys(platformNames).map((platform) => {
              const platformProjects = projects.filter(p => p.platform === platform);
              const Icon = platformIcons[platform as keyof typeof platformIcons];
              
              return (
                <div key={platform} className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl font-bold text-foreground">
                      {platformNames[platform as keyof typeof platformNames]} Projects
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {platformProjects.map((project, index) => (
                      <ProjectCard key={index} project={project} index={index} />
                    ))}
                  </div>
                </div>
              );
            })}
          </TabsContent>

          {/* Individual Platform Tabs */}
          {Object.keys(platformNames).map((platform) => (
            <TabsContent key={platform} value={platform} className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(p => p.platform === platform)
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Impact Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{projects.length}</div>
                  <div className="text-sm text-muted-foreground">Live Automations</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-highlight/10 border-success/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-success" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">50+ hrs</div>
                  <div className="text-sm text-muted-foreground">Saved Weekly</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">4</div>
                  <div className="text-sm text-muted-foreground">Platforms Mastered</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <Card 
      className="card-hover bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden animate-slide-up group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
      </div>

      <CardHeader>
        <CardTitle className="text-lg text-foreground leading-snug">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground text-readable leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-2 pt-2 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs font-semibold text-accent">
            <TrendingUp className="w-4 h-4" />
            Key Impact:
          </div>
          {project.impact.slice(0, 2).map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-3 h-3 text-success mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RealWorldProjects;