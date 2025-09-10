import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, ExternalLink } from "lucide-react";

const RealWorldProjects = () => {
  // Placeholder for real projects - will be populated later
  const placeholderProjects = [
    {
      id: 1,
      title: "Project Coming Soon",
      description: "Real-world project details will be added here.",
      status: "placeholder"
    },
    {
      id: 2,
      title: "Project Coming Soon", 
      description: "Real-world project details will be added here.",
      status: "placeholder"
    },
    {
      id: 3,
      title: "Project Coming Soon",
      description: "Real-world project details will be added here.", 
      status: "placeholder"
    }
  ];

  return (
    <section id="real-projects" className="section-padding bg-muted/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Real-World <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore actual client projects and live implementations that showcase practical automation solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-hover bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <Badge variant="outline" className="text-muted-foreground border-muted-foreground/30">
                    Coming Soon
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                {/* Placeholder Content */}
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded animate-pulse" />
                  <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
                  <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    disabled
                    className="w-full opacity-50"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Project Details
                  </Button>
                </div>
              </CardContent>

              {/* Overlay for future content */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-sm text-muted-foreground">Space reserved for</div>
                  <div className="text-lg font-medium text-foreground">Real Project Data</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Admin Note */}
        <div className="text-center mt-12 p-6 rounded-xl bg-primary/10 border border-primary/20">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Ready to Add Your Projects?
          </h3>
          <p className="text-muted-foreground">
            This section is prepared for your real-world project showcases. Update the component with actual project data, images, and links when ready.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealWorldProjects;