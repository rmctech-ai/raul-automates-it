import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Workflow, Zap, Settings, Activity, Globe, Server, Mail, Users, Calendar, 
  ShoppingCart, Database, Brain, Bot, Code, BarChart3, Cloud, MessageSquare,
  GitBranch, TestTube, Phone, FileText, Layers, Cpu, Terminal, Building2,
  Search, Monitor, Palette, Shield, Lock, ChevronRight, Sparkles, Eye,
  PenTool, LineChart, Map, Briefcase, TrendingUp
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

const ToolsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const toolCategories = [
    {
      title: "Tools & Technologies I Use Daily",
      subtitle: "Automation Specialist Portfolio",
      isTitle: true,
      tools: []
    },
    {
      title: "Workflow Automation & Integration",
      subtitle: "Streamlining business processes with powerful automation platforms",
      tools: [
        { name: "n8n", icon: Workflow, color: "text-red-500", description: "Visual workflow automation" },
        { name: "Zapier", icon: Zap, color: "text-orange-500", description: "Connect your apps" },
        { name: "Make.com", icon: Settings, color: "text-purple-500", description: "Advanced automation" },
        { name: "GoHighLevel", icon: Activity, color: "text-red-600", description: "All-in-one platform" },
        { name: "Tray.io", icon: Layers, color: "text-blue-500", description: "Enterprise integration" },
        { name: "Workato", icon: Bot, color: "text-green-600", description: "Intelligent automation" },
        { name: "IFTTT", icon: ChevronRight, color: "text-blue-400", description: "Simple automation" }
      ]
    },
    {
      title: "Web & CMS Platforms",
      subtitle: "Building and managing digital presence across multiple platforms",
      tools: [
        { name: "WordPress", icon: Globe, color: "text-blue-600", description: "Content management" },
        { name: "Shopify", icon: ShoppingCart, color: "text-green-500", description: "E-commerce platform" },
        { name: "Domain Management", icon: Search, color: "text-purple-600", description: "DNS & hosting" },
        { name: "DNS Management", icon: Server, color: "text-gray-700", description: "Domain configuration" }
      ]
    },
    {
      title: "Communication & Productivity",
      subtitle: "Enhancing team collaboration and streamlining communication workflows",
      tools: [
        { name: "G-Suite", icon: Mail, color: "text-blue-500", description: "Google Workspace" },
        { name: "Outlook", icon: Mail, color: "text-blue-600", description: "Microsoft email" },
        { name: "Webmail", icon: Mail, color: "text-green-500", description: "Email management" },
        { name: "Slack", icon: MessageSquare, color: "text-purple-500", description: "Team messaging" },
        { name: "Discord Bots", icon: Bot, color: "text-indigo-500", description: "Community automation" },
        { name: "Calendly", icon: Calendar, color: "text-blue-500", description: "Appointment scheduling" },
        { name: "TidyCal", icon: Calendar, color: "text-green-600", description: "Calendar management" }
      ]
    },
    {
      title: "AI & Machine Learning",
      subtitle: "Leveraging artificial intelligence for intelligent automation solutions",
      tools: [
        { name: "OpenAI", icon: Brain, color: "text-green-600", description: "GPT & AI models" },
        { name: "Claude", icon: Bot, color: "text-orange-500", description: "Anthropic AI assistant" },
        { name: "ChatGPT", icon: MessageSquare, color: "text-green-500", description: "Conversational AI" },
        { name: "ChatGPT Deep Research", icon: Search, color: "text-teal-500", description: "Advanced AI research" },
        { name: "Gemini", icon: Brain, color: "text-blue-500", description: "Google AI" },
        { name: "NotebookLM", icon: FileText, color: "text-blue-600", description: "AI-powered note-taking" },
        { name: "Chataid", icon: MessageSquare, color: "text-purple-500", description: "AI chat assistance" },
        { name: "LangChain", icon: Code, color: "text-purple-600", description: "AI development framework" },
        { name: "Pinecone", icon: Database, color: "text-blue-600", description: "Vector database" },
        { name: "Weaviate", icon: Database, color: "text-green-500", description: "Vector search engine" },
        { name: "AI Integration", icon: Cpu, color: "text-red-500", description: "Custom AI solutions" }
      ]
    },
    {
      title: "Data & Analytics",
      subtitle: "Transforming data into actionable insights with powerful analytics tools",
      tools: [
        { name: "Airtable", icon: Database, color: "text-orange-400", description: "Collaborative database" },
        { name: "Fathom Analytics", icon: LineChart, color: "text-purple-600", description: "Privacy-first analytics" },
        { name: "Google BigQuery", icon: BarChart3, color: "text-blue-500", description: "Data warehouse" },
        { name: "Snowflake", icon: Cloud, color: "text-blue-600", description: "Cloud data platform" },
        { name: "Looker", icon: BarChart3, color: "text-purple-500", description: "Business intelligence" },
        { name: "Power BI", icon: BarChart3, color: "text-yellow-500", description: "Microsoft analytics" },
        { name: "Supermetrics", icon: BarChart3, color: "text-green-500", description: "Marketing data" }
      ]
    },
    {
      title: "Development & Design Tools",
      subtitle: "Building and designing with cutting-edge development platforms",
      tools: [
        { name: "Cursor", icon: Code, color: "text-blue-600", description: "AI code editor" },
        { name: "Lovable", icon: Sparkles, color: "text-pink-500", description: "AI app builder" },
        { name: "Gamma", icon: PenTool, color: "text-purple-600", description: "AI presentation design" },
        { name: "Icon", icon: Palette, color: "text-orange-500", description: "Design resources" },
        { name: "Gumloop", icon: Workflow, color: "text-green-600", description: "Visual automation builder" }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      subtitle: "Managing and deploying scalable automation infrastructure",
      tools: [
        { name: "Linux", icon: Terminal, color: "text-gray-700", description: "Server management" },
        { name: "Docker", icon: Layers, color: "text-blue-500", description: "Containerization" },
        { name: "GitHub Actions", icon: GitBranch, color: "text-gray-800", description: "CI/CD automation" },
        { name: "GitLab CI", icon: GitBranch, color: "text-orange-500", description: "DevOps platform" },
        { name: "Jenkins", icon: Settings, color: "text-blue-600", description: "Build automation" },
        { name: "Terraform", icon: Cloud, color: "text-purple-600", description: "Infrastructure as code" }
      ]
    },
    {
      title: "CRM & Project Management",
      subtitle: "Optimizing customer relationships and business processes",
      tools: [
        { name: "HubSpot", icon: Users, color: "text-orange-600", description: "Inbound marketing CRM" },
        { name: "monday.com", icon: Calendar, color: "text-purple-600", description: "Work management" },
        { name: "Pipedrive", icon: Building2, color: "text-green-500", description: "Sales CRM" },
        { name: "Salesforce", icon: Cloud, color: "text-blue-500", description: "Enterprise CRM" },
        { name: "Atlas", icon: Map, color: "text-indigo-500", description: "Project mapping & tracking" },
        { name: "Precision", icon: TrendingUp, color: "text-teal-600", description: "Business optimization" },
        { name: "Revio", icon: Briefcase, color: "text-blue-700", description: "Revenue management" }
      ]
    },
    {
      title: "API & Testing Tools",
      subtitle: "Building and testing robust automation integrations",
      tools: [
        { name: "Postman", icon: TestTube, color: "text-orange-500", description: "API testing platform" },
        { name: "Swagger/OpenAPI", icon: FileText, color: "text-green-600", description: "API documentation" }
      ]
    },
    {
      title: "Empowering Automation Across Every Workflow",
      subtitle: "Ready to transform your business processes with intelligent automation solutions",
      isClosing: true,
      tools: []
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center space-y-8">
          <Carousel
            className="w-full max-w-6xl mx-auto"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {toolCategories.map((category, index) => (
                <CarouselItem key={index}>
                  <Card className="min-h-[600px] bg-card/80 backdrop-blur-sm border border-border/50">
                    <CardHeader className="text-center pb-8">
                      <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
                        {category.isTitle ? (
                          <>
                            Tools & <span className="gradient-text">Technologies</span>
                          </>
                        ) : category.isClosing ? (
                          <span className="gradient-text">{category.title}</span>
                        ) : (
                          category.title
                        )}
                      </CardTitle>
                      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {category.subtitle}
                      </p>
                      <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
                    </CardHeader>
                    
                    {!category.isTitle && !category.isClosing && (
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                          {category.tools.map((tool, toolIndex) => (
                            <div 
                              key={toolIndex} 
                              className="card-hover bg-background/60 backdrop-blur-sm p-6 rounded-xl border border-border/30 text-center space-y-4 group"
                            >
                              <div className="flex justify-center">
                                <tool.icon className={`w-12 h-12 ${tool.color} group-hover:scale-110 transition-transform duration-300`} />
                              </div>
                              <div>
                                <h3 className="font-semibold text-foreground text-lg">{tool.name}</h3>
                                <p className="text-muted-foreground text-sm mt-2">{tool.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    )}

                    {category.isTitle && (
                      <CardContent className="flex items-center justify-center flex-1">
                        <div className="text-center space-y-6">
                          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                            <Bot className="w-16 h-16 text-white" />
                          </div>
                          <p className="text-xl text-muted-foreground max-w-md">
                            Raul M. Cachola - Virtual Assistant & Automation Specialist
                          </p>
                        </div>
                      </CardContent>
                    )}

                    {category.isClosing && (
                      <CardContent className="flex items-center justify-center flex-1">
                        <div className="text-center space-y-6">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-success">50+</div>
                              <div className="text-sm text-muted-foreground">Automated Systems</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-accent">3+</div>
                              <div className="text-sm text-muted-foreground">Years Experience</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-primary">95%</div>
                              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-highlight">24/7</div>
                              <div className="text-sm text-muted-foreground">Automation Support</div>
                            </div>
                          </div>
                          <p className="text-muted-foreground max-w-lg mx-auto">
                            Contact me to discuss how automation can transform your business workflows
                          </p>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;