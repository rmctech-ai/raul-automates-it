import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Linkedin, 
  Facebook, 
  Download, 
  Send, 
  MapPin, 
  Clock,
  CheckCircle,
  Briefcase 
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rapaulskie33@gmail.com",
      action: () => window.open("mailto:rapaulskie33@gmail.com"),
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      action: () => window.open("https://www.linkedin.com/in/raulcachola/", "_blank"),
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Follow me",
      action: () => window.open("https://www.facebook.com/pgenri.cachola/", "_blank"),
    },
    {
      icon: Briefcase,
      label: "Upwork",
      value: "Hire me",
      action: () => window.open("https://www.upwork.com/freelancers/~01e9036c554823230c?mp_source=share", "_blank"),
    },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business operations? Let's discuss your project and create 
            a customized automation solution that delivers results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-hover bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Send me a message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, challenges, and goals..."
                    rows={6}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-glow bg-primary hover:bg-primary-glow text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {/* Contact Details */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Get in touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <button
                    key={info.label}
                    onClick={info.action}
                    className="flex items-center gap-4 w-full p-3 rounded-lg bg-background/30 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-foreground font-medium">{info.value}</div>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-br from-success/10 to-primary/10 backdrop-blur-sm border-success/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Currently Available</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      I'm accepting new projects and typically respond within 24 hours.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone & Working Hours */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Contact & Hours</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone</span>
                    <span className="text-foreground">+639169819621</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM (PST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="text-primary font-medium">Within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Button 
              variant="outline" 
              className="w-full btn-glow border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/AI_RESUME.pdf';
                link.download = 'Raul_Cachola_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                toast({
                  title: "Resume Downloaded",
                  description: "Thank you for your interest!",
                });
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;