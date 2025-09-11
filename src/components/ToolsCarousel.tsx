import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Workflow, Zap, Settings, Activity, Globe, Server, Mail, Users, Calendar, ShoppingCart, Database, Brain } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const ToolsCarousel = () => {
  const tools = [
    { name: "n8n", icon: Workflow, color: "text-red-500" },
    { name: "Zapier", icon: Zap, color: "text-orange-500" },
    { name: "GoHighLevel", icon: Activity, color: "text-red-600" },
    { name: "Make.com", icon: Settings, color: "text-purple-500" },
    { name: "OpenAI", icon: Brain, color: "text-green-600" },
    { name: "Google Workspace", icon: Mail, color: "text-blue-500" },
    { name: "Monday.com", icon: Calendar, color: "text-purple-600" },
    { name: "WordPress", icon: Globe, color: "text-blue-600" },
    { name: "Shopify", icon: ShoppingCart, color: "text-green-500" },
    { name: "Airtable", icon: Database, color: "text-orange-400" },
    { name: "HubSpot", icon: Users, color: "text-orange-600" },
    { name: "Linux", icon: Server, color: "text-gray-700" },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          
          <Carousel
            className="w-full max-w-5xl mx-auto"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {tools.map((tool) => (
                <CarouselItem key={tool.name} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div className="card-hover bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 text-center space-y-3 h-full">
                    <tool.icon className={`w-12 h-12 mx-auto ${tool.color}`} />
                    <p className="font-medium text-sm text-foreground">{tool.name}</p>
                  </div>
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