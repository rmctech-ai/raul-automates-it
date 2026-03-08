import { Card, CardContent } from "@/components/ui/card";
import { Server, Settings, Globe, Mail, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  const skills = [
    { icon: Server, label: "DNS Configuration", color: "text-primary" },
    { icon: Settings, label: "Linux Server Support", color: "text-accent" },
    { icon: Globe, label: "WordPress & CMS", color: "text-primary" },
    { icon: Mail, label: "Email Setup", color: "text-accent" },
    { icon: Zap, label: "Process Automation", color: "text-primary" },
    { icon: Users, label: "CRM Management", color: "text-accent" },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                <img 
                  src={profilePhoto} 
                  alt="Raul M. Cachola - Virtual Assistant & Automation Specialist"
                  className="relative w-48 h-48 rounded-2xl object-cover border border-primary/20"
                />
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
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center lg:text-left">Core Expertise</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover bg-card/50 backdrop-blur-sm border-border/50 group">
                    <CardContent className="p-6 text-center space-y-4">
                      <skill.icon className={`w-8 h-8 mx-auto ${skill.color} group-hover:drop-shadow-[0_0_8px_hsl(187_100%_50%/0.5)] transition-all duration-300`} />
                      <h4 className="font-semibold text-foreground text-sm">{skill.label}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center space-y-2 p-4 rounded-xl border border-primary/10 bg-primary/5">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years at HostGator</div>
              </div>
              <div className="text-center space-y-2 p-4 rounded-xl border border-primary/10 bg-primary/5">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Issues Resolved</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
