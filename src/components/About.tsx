import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Settings, Globe, Mail, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Server, label: "DNS Configuration", color: "text-primary" },
    { icon: Settings, label: "Linux Server Support", color: "text-accent" },
    { icon: Globe, label: "WordPress & CMS", color: "text-primary" },
    { icon: Mail, label: "Email Setup", color: "text-accent" },
    { icon: Zap, label: "Process Automation", color: "text-primary" },
    { icon: Users, label: "CRM Management", color: "text-accent" },
  ];

  const tools = [
    "n8n", "Zapier", "Make.com", "GoHighLevel", "WordPress", "Linux", "DNS Management",
    "G-Suite", "Outlook", "Webmail", "HostGator", "Domain Management", "AI Integration"
  ];

  return (
    <section id="about" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/ddc22428-c63a-4518-9b5e-c92ab237f29a.png" 
                  alt="Raul M. Cachola - Virtual Assistant & Automation Specialist"
                  className="w-48 h-48 rounded-2xl object-cover border-4 border-primary/20 shadow-lg"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Raul M. Cachola</span>, a Virtual Assistant and 
                Automation Specialist with a background in customer service, technical website support, 
                and business process automation.
              </p>

              <p>
                I previously worked as a <span className="text-primary font-medium">Technical Website Advisor at HostGator</span> where 
                I gained deep experience in DNS configuration, Linux server support, WordPress troubleshooting, 
                hosting management, and email setup across various platforms.
              </p>

              <p>
                Today, I specialize in helping businesses automate processes using tools like{" "}
                <span className="text-accent font-medium">n8n, Zapier, and GoHighLevel</span>. My mission is to save 
                clients time, reduce manual work, and create systems that deliver measurable results.
              </p>
            </div>

            {/* Tools & Technologies */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge 
                    key={tool} 
                    variant="secondary" 
                    className="bg-secondary/50 text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="space-y-8 animate-scale-in">
            <h3 className="text-2xl font-bold text-center lg:text-left">Core Expertise</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <Card key={skill.label} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6 text-center space-y-4">
                    <skill.icon className={`w-8 h-8 mx-auto ${skill.color}`} />
                    <h4 className="font-semibold text-foreground">{skill.label}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years at HostGator</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Issues Resolved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;