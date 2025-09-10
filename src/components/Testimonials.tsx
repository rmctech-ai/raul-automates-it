import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "TechStart Solutions",
      content: "Raul made our workflows so much smoother. His automation expertise saved us hours every week and significantly improved our team's productivity.",
      rating: 5,
      gradient: "from-primary/10 to-accent/10",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director", 
      company: "Growth Dynamics",
      content: "The lead generation system Raul built for us has been incredible. We're capturing 3x more qualified leads with half the manual work.",
      rating: 5,
      gradient: "from-accent/10 to-success/10",
    },
    {
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      company: "Creative Agency Pro",
      content: "Professional, reliable, and results-driven. Raul transformed our appointment booking process and eliminated no-shows almost entirely.",
      rating: 5,
      gradient: "from-success/10 to-primary/10",
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here's what my clients have to say about working with me and the results we've achieved together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className={`card-hover bg-gradient-to-br ${testimonial.gradient} backdrop-blur-sm border-border/50 h-full animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-primary/60" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div className="pt-4 border-t border-border/30">
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold gradient-text">24h</div>
              <div className="text-sm text-muted-foreground">Average Response Time</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold gradient-text">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;