import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, Calendar, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Automation Workflows",
      subtitle: "(n8n, Zapier, GoHighLevel)",
      description: "Save time and eliminate repetitive tasks with smart automations. I design custom workflows that connect your favorite apps and platforms, ensuring your business runs smoothly with minimal manual effort.",
      features: [
        "Custom workflow design",
        "App integrations",
        "Process optimization",
        "Error handling & monitoring"
      ],
      gradient: "from-primary/20 to-primary-glow/20",
    },
    {
      icon: Users,
      title: "CRM & Funnel Setup",
      subtitle: "(GoHighLevel Admin/Automation)",
      description: "I build high-converting funnels and fully functional CRM systems in GoHighLevel. From lead capture to nurturing and follow-up, I'll set up automations that help you close more deals while staying organized.",
      features: [
        "Complete CRM setup",
        "Sales funnel design",
        "Lead nurturing sequences",
        "Performance tracking"
      ],
      gradient: "from-accent/20 to-success/20",
    },
    {
      icon: Calendar,
      title: "Appointment Setting & Lead Generation",
      subtitle: "Never miss an opportunity",
      description: "I set up systems that automatically generate and qualify leads, schedule appointments, and send reminders to reduce no-shows. You'll get more clients booked without lifting a finger.",
      features: [
        "Automated lead capture",
        "Qualification systems",
        "Appointment scheduling",
        "Reminder automations"
      ],
      gradient: "from-success/20 to-primary/20",
    },
    {
      icon: Settings,
      title: "Technical Website Support",
      subtitle: "(WordPress, DNS, Hosting, Email Setup)",
      description: "With years of experience as a Web Advisor, I can handle all your website and hosting needs. From domain setup and DNS troubleshooting to WordPress management and email configuration, I'll ensure your online presence stays secure and professional.",
      features: [
        "WordPress management",
        "DNS configuration",
        "Email setup (G-Suite, Outlook)",
        "Hosting & domain support"
      ],
      gradient: "from-primary/20 to-accent/20",
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            What I Can Do <span className="gradient-text">For You</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation and technical support services to streamline your business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`card-hover bg-gradient-to-br ${service.gradient} backdrop-blur-sm border-border/50 h-full animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                    <p className="text-sm text-primary font-medium">{service.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="space-y-4 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <h3 className="text-2xl font-bold text-foreground">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific needs and create a tailored automation strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;