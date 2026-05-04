import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Workflow, Settings, TrendingUp, Mail, Users, Clock, CheckCircle2, Bot, Video, Globe, Star, Sparkles } from "lucide-react";

// Import workflow diagram images
import zapierTypeformFlow from "@/assets/projects/zapier-typeform-flow.png";
import makeConvertkitFlow from "@/assets/projects/make-convertkit-flow.png";
import n8nGhlLeadFlow from "@/assets/projects/n8n-ghl-lead-flow.png";
import ghlN8nCampaignFlow from "@/assets/projects/ghl-n8n-campaign-flow.png";
import n8nSmsIntegrationFlow from "@/assets/projects/n8n-sms-integration-flow.png";

// Import workflow screenshots
import n8nEcommerceChat from "@/assets/projects/n8n-ecommerce-chat.png";
import n8nTelecomWebhook from "@/assets/projects/n8n-telecom-webhook.png";
import n8nFormMultiplatform from "@/assets/projects/n8n-form-multiplatform.png";
import mondayAutomation from "@/assets/projects/monday-automation.png";

// Import original project images
import ghlRepstack from "@/assets/projects/ghl-repstack.png";
import ghlMastermind from "@/assets/projects/ghl-mastermind.png";
import ghlLeadCapture from "@/assets/projects/ghl-lead-capture.png";
import zapierContent from "@/assets/projects/zapier-content.png";
import zapierLeads from "@/assets/projects/zapier-leads.png";
import zapierLeadsDetailed from "@/assets/projects/zapier-leads-detailed.png";
import zapierBlog from "@/assets/projects/zapier-blog.png";
import makeFormLeads from "@/assets/projects/make-form-leads.png";
import makeSlackSheets from "@/assets/projects/make-slack-sheets.png";
import n8nTradingAI from "@/assets/projects/n8n-trading-ai.png";

// Import CMS & CRM Tools images
import hubspotCrm from "@/assets/projects/hubspot-crm.png";
import wordpressAutomation from "@/assets/projects/wordpress-automation.png";

// Import Video & Email Marketing images
import wistiaContent from "@/assets/projects/wistia-content.png";
import convertkitDashboard from "@/assets/projects/convertkit-dashboard.png";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  impact: string[];
  platform: "gohighlevel" | "zapier" | "make" | "n8n" | "cms_crm" | "video" | "email" | "other";
  branded?: boolean;
  accent?: string; // tailwind color class fragment, e.g. 'sky' or hsl
  featured?: boolean;
}

const RealWorldProjects = () => {
  const projects: Project[] = [
    // Featured n8n Projects
    {
      title: "AI Agent Appointment Setter with Retell Integration",
      description: "Built an intelligent n8n workflow that uses AI agents to automatically notify customers about appointments via Retell voice technology, confirming bookings and reducing no-shows.",
      image: "",
      tags: ["n8n", "Retell", "AI Agent", "Voice"],
      impact: [
        "90% appointment confirmation rate",
        "Reduced no-shows by 60%"
      ],
      platform: "n8n",
      branded: true,
      featured: true
    },
    {
      title: "Lead Generation & Email Scraping to Google Sheets",
      description: "Created an automated n8n workflow that scrapes email leads from various sources and organizes them into structured Google Sheets for sales teams.",
      image: "",
      tags: ["n8n", "Google Sheets", "Lead Generation"],
      impact: [
        "500+ leads per day automated",
        "95% data accuracy"
      ],
      platform: "n8n",
      branded: true,
      featured: true
    },
    // GoHighLevel Projects
    {
      title: "GoHighLevel CRM Campaign Setup",
      description: "Designed and implemented a sophisticated CRM campaign system that tracks visitor behavior across multiple touchpoints, automatically segments leads, and triggers personalized email sequences based on engagement patterns.",
      image: ghlN8nCampaignFlow,
      tags: ["GoHighLevel", "n8n", "Campaign Management", "Email Automation"],
      impact: [
        "Automated follow-ups for leads who visited product pages",
        "Tracked email engagement and adjusted campaigns in real-time",
        "Increased email open rates by 60%"
      ],
      platform: "gohighlevel",
      featured: true
    },
    {
      title: "Two-Way SMS & API Integration",
      description: "Developed a robust two-way SMS communication system integrating Telekom's API with GoHighLevel through n8n. The system enables automated SMS conversations, lead qualification, and seamless CRM updates based on customer responses.",
      image: n8nSmsIntegrationFlow,
      tags: ["GoHighLevel", "n8n", "SMS", "Telekom API", "Two-Way Communication"],
      impact: [
        "Enabled real-time SMS conversations with leads",
        "Automated lead scoring based on SMS responses",
        "Reduced manual data entry by 90%"
      ],
      platform: "gohighlevel"
    },
    {
      title: "Lead Capture via n8n + GHL",
      description: "Built an automated lead capture system that tracks website visitor behavior, sends targeted freebies based on pages visited, and syncs all contact information with GoHighLevel CRM for comprehensive lead nurturing.",
      image: n8nGhlLeadFlow,
      tags: ["n8n", "GoHighLevel", "Lead Generation", "Behavioral Tracking"],
      impact: [
        "Captured and synced 500+ leads per week automatically",
        "Personalized offers based on visitor behavior increased conversions by 55%",
        "Streamlined lead data flow between systems"
      ],
      platform: "gohighlevel"
    },
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
      title: "Form Submission Workflow",
      description: "Created an intelligent form automation that captures Typeform responses, enriches lead data through multiple touchpoints, updates Google Sheets for team visibility, and automatically creates detailed contact records in HubSpot CRM with lead scoring.",
      image: zapierTypeformFlow,
      tags: ["Zapier", "Typeform", "Google Sheets", "HubSpot", "Lead Scoring"],
      impact: [
        "Automated complete onboarding workflow from form to CRM",
        "Synced form responses across 3 platforms in real-time",
        "Eliminated 15 hours of manual data entry per week"
      ],
      platform: "zapier",
      featured: true
    },
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
      title: "Advanced Lead Management System",
      description: "Engineered a sophisticated lead management workflow that captures leads from multiple sources, enriches data through third-party APIs, and distributes qualified leads to the appropriate sales representatives based on territory and expertise.",
      image: zapierLeadsDetailed,
      tags: ["Zapier", "Lead Distribution", "CRM", "Sales Automation"],
      impact: [
        "Routed 800+ leads monthly with 100% accuracy",
        "Reduced lead assignment time from 2 hours to 30 seconds",
        "Improved sales team response time by 65%"
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
      title: "ConvertKit Audience Tracking",
      description: "Engineered a comprehensive marketing automation that tracks email subscriber behavior through ConvertKit tags, monitors video engagement via Wistia analytics, and updates lead scores in HubSpot CRM based on multi-channel engagement patterns.",
      image: makeConvertkitFlow,
      tags: ["Make", "ConvertKit", "Wistia", "HubSpot", "Behavioral Analytics"],
      impact: [
        "Tracked audience engagement across email and video platforms",
        "Automated lead scoring based on content consumption patterns",
        "Identified high-intent leads 3x faster"
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

    // n8n Projects
    {
      title: "E-Commerce AI Chat Assistant",
      description: "Built an intelligent conversational AI using n8n that handles customer inquiries, processes bulk orders, applies dynamic discounts, and maintains context throughout the conversation using Google Gemini Chat Model and Simple Memory for personalized shopping experiences.",
      image: n8nEcommerceChat,
      tags: ["n8n", "AI Agent", "Google Gemini", "E-Commerce", "Chatbot"],
      impact: [
        "Handled 500+ customer conversations simultaneously",
        "Automated bulk order processing with 25% discount logic",
        "Reduced customer service workload by 70%"
      ],
      platform: "n8n"
    },
    {
      title: "Telecom Webhook Integration",
      description: "Developed a robust webhook-based automation that receives telecom events, normalizes data formats, performs conditional logic checks, and integrates with GoHighLevel CRM to create or update contacts while triggering appropriate communication workflows.",
      image: n8nTelecomWebhook,
      tags: ["n8n", "Webhooks", "GoHighLevel", "Telecom API", "Contact Management"],
      impact: [
        "Processed 1000+ webhook events daily",
        "Achieved 99.9% uptime for critical integrations",
        "Reduced contact sync delays to under 3 seconds"
      ],
      platform: "n8n"
    },
    {
      title: "Multi-Platform Form Sync",
      description: "Created a comprehensive form processing system that captures Google Form submissions, enriches and validates data, then simultaneously updates Google Sheets for reporting, sends formatted notifications to Slack channels, and delivers personalized confirmation emails via Gmail.",
      image: n8nFormMultiplatform,
      tags: ["n8n", "Google Forms", "Google Sheets", "Slack", "Gmail"],
      impact: [
        "Synced data across 4 platforms in under 5 seconds",
        "Automated 100% of form response handling",
        "Enabled real-time team collaboration on new submissions"
      ],
      platform: "n8n"
    },
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
    },

    // CMS & CRM Tools
    {
      title: "HubSpot CRM + N8N Contact Automation",
      description: "Engineered a sophisticated CRM automation connecting HubSpot with n8n to streamline contact management, lead scoring, and multi-channel engagement tracking. The system automatically enriches contact records, triggers personalized workflows based on interaction data, and synchronizes customer journeys across email, forms, and website activity.",
      image: hubspotCrm,
      tags: ["HubSpot", "n8n", "CRM Automation", "Lead Scoring", "Contact Management"],
      impact: [
        "Automated contact enrichment reducing manual data entry by 85%",
        "Intelligent lead scoring identifying high-value prospects 4x faster",
        "Seamless multi-platform sync ensuring 100% data accuracy"
      ],
      platform: "cms_crm"
    },
    {
      title: "WordPress + WooCommerce Automation Suite",
      description: "Developed a comprehensive WordPress automation ecosystem integrating WooCommerce with HostGator hosting infrastructure. Built custom form integrations that capture leads and trigger automated workflows, implemented server-side automation for order processing, inventory management, and customer communication. Optimized hosting configurations for peak performance and reliability.",
      image: wordpressAutomation,
      tags: ["WordPress", "WooCommerce", "HostGator", "Form Integration", "Server Management"],
      impact: [
        "Automated 100% of order fulfillment workflows",
        "Form integration capturing 300+ qualified leads monthly",
        "Server optimization achieving 99.8% uptime and 2.1s load times"
      ],
      platform: "cms_crm"
    },

    // Video Marketing
    {
      title: "Wistia Video Analytics + Automation",
      description: "Created an intelligent video marketing automation leveraging Wistia's analytics capabilities to track viewer engagement, identify high-intent prospects, and trigger personalized follow-up sequences. The system monitors video completion rates, heat maps, and viewer behavior patterns to automatically segment audiences and deliver targeted content recommendations based on viewing history.",
      image: wistiaContent,
      tags: ["Wistia", "Video Marketing", "Analytics", "Audience Segmentation", "Engagement Tracking"],
      impact: [
        "Tracked video engagement across 500+ prospects monthly",
        "Automated audience segmentation based on viewing behavior",
        "Increased video-to-lead conversion rate by 72%"
      ],
      platform: "video",
      branded: true,
      accent: "sky"
    },

    // Email Marketing
    {
      title: "ConvertKit Email Campaign Automation",
      description: "Built a sophisticated email marketing automation system using ConvertKit to manage subscriber journeys, segment audiences based on engagement patterns, and deliver personalized content sequences. Integrated with landing page forms, automated tagging systems, and behavioral triggers to nurture leads through customized email workflows that adapt based on subscriber actions and preferences.",
      image: convertkitDashboard,
      tags: ["ConvertKit", "Email Automation", "Subscriber Management", "Segmentation", "Campaign Workflows"],
      impact: [
        "Managed 5,000+ subscriber email journeys with automated sequences",
        "Behavioral segmentation improving open rates by 58%",
        "Automated tag-based workflows reducing manual campaign management by 90%"
      ],
      platform: "email"
    },

    // Project Management
    {
      title: "Technical Virtual Assistant Journey",
      description: "Comprehensive project tracking system built on Monday.dev to manage my automation portfolio across multiple platforms. Tracks automation tasks, email campaigns, and integration projects with detailed status monitoring, priority management, and timeline visualization.",
      image: mondayAutomation,
      tags: ["Monday.dev", "Project Management", "Task Tracking", "Portfolio"],
      impact: [
        "Organized 50+ automation projects across 4 platforms",
        "Improved project visibility and client communication",
        "Streamlined workflow documentation and delivery"
      ],
      platform: "other"
    },
  ];

  const platformNames = {
    gohighlevel: "GoHighLevel",
    zapier: "Zapier",
    make: "Make",
    n8n: "n8n",
    cms_crm: "CMS & CRM Tools",
    video: "Video Marketing",
    email: "Email Marketing",
    other: "Project Management"
  };

  const platformIcons = {
    gohighlevel: Settings,
    zapier: Zap,
    make: Workflow,
    n8n: TrendingUp,
    cms_crm: Globe,
    video: Video,
    email: Mail,
    other: Bot
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
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 mb-12 bg-card/50 backdrop-blur-sm border border-border/50 p-1 gap-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground col-span-3 lg:col-span-1">
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
                      {platformNames[platform as keyof typeof platformNames]}{platform !== 'other' && ' Projects'}
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
                  <div className="text-3xl font-bold text-foreground">{projects.length}+</div>
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
                  <div className="text-3xl font-bold text-foreground">5+</div>
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