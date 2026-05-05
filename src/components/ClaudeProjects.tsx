import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Get Started with Claude Code",
    description:
      "Built a personal portfolio website using Claude Code in the terminal through prompt-driven development. Practiced AI-assisted coding workflows, project memory with CLAUDE.md, and frontend fundamentals using HTML and CSS.",
    tags: ["Claude Code", "HTML", "CSS", "CLAUDE.md", "AI-Assisted Development"],
    link: "http://learn.nextwork.org/projects/ai-claude-code",
  },
  {
    title: "Claude Code Skills Basics",
    description:
      "Built automated Git workflows using Claude Code Skills — including a changelog generator, smart commit skill, and a dev pipeline that chains multiple skills in one command. Also implemented Python auto-formatting via PostToolUse hooks.",
    tags: ["Claude Code", "Git", "YAML", "Python", "Automation", "Claude Skills"],
    link: "http://learn.nextwork.org/projects/ai-claude-code-skills",
  },
  {
    title: "Set Up Claude Code Guardrails",
    description:
      "Built a defense-in-depth security system for Claude Code using permission deny rules, validation hooks, and a CLAUDE.md policy file. Red-teamed the setup to identify gaps and validate protection against unsafe AI actions.",
    tags: ["Claude Code", "Security", "jq", "Hook Scripts", "CLAUDE.md"],
    link: "http://learn.nextwork.org/projects/claude-code-safety-guardrails",
  },
  {
    title: "Claude Code Status Line",
    description:
      "Built a real-time terminal status line for Claude Code using Node.js, displaying model, context usage, session cost, and Git branch. Added ANSI color-coded warnings for context thresholds to improve session management.",
    tags: ["Claude Code", "Node.js", "CLI", "ANSI", "Terminal Customization"],
    link: "http://learn.nextwork.org/projects/claude-code-statusline",
  },
  {
    title: "Build an AI Second Brain with Claude Code",
    description:
      "Built an AI-powered knowledge base using Claude Code and Obsidian. Converted 150+ raw notes from ChatGPT and Notion into structured, cross-linked wiki pages using custom slash commands: /ingest, /query, /lint, and /log.",
    tags: ["Claude Code", "Obsidian", "Knowledge Management", "AI Workflows"],
    link: "http://learn.nextwork.org/projects/ai-second-brain-claude-code",
  },
  {
    title: "Explore Claude.ai, Code & Cowork",
    description:
      "Built an end-to-end data workflow analyzing cloud job salary data across three Claude environments. Used Claude.ai for exploratory analysis, Claude Code to generate a local Chart.js dashboard, and Cowork to organize and document the project.",
    tags: ["Claude.ai", "Claude Code", "Cowork", "Chart.js", "Data Analysis"],
    link: "http://learn.nextwork.org/projects/ai-claude-compare",
  },
  {
    title: "Prompt Engineering for Healthcare",
    description:
      "Configured a Claude Project as a persistent clinical AI assistant using role prompting, audience adaptation, and structured output formatting. Built workflows for drug interaction analysis, patient education content, and differential diagnosis generation with a clinical safety layer.",
    tags: ["Claude Projects", "Prompt Engineering", "Healthcare AI", "Claude Skills"],
    link: "http://learn.nextwork.org/projects/ai-prompt-engineering-healthcare",
  },
  {
    title: "Prompt Engineering for Research",
    description:
      "Built a structured prompt engineering framework for research methodology using four core techniques: role prompting, iterative refinement, chain-of-thought, and adversarial prompting. Combined all into a reusable mega-prompt template for end-to-end research workflows.",
    tags: ["Claude AI", "Prompt Engineering", "Research", "Chain-of-Thought"],
    link: "http://learn.nextwork.org/projects/ai-prompt-engineering-research",
  },
];

const ClaudeProjects = () => {
  return (
    <section id="claude-projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <div className="flex justify-center">
            <Badge className="bg-accent/15 text-accent border border-accent/30 hover:bg-accent/20 px-3 py-1">
              <Sparkles className="w-3 h-3 mr-1.5" />
              NextWork Certified
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Claude Code & <span className="gradient-text">AI Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hands-on projects built using Anthropic's Claude ecosystem — exploring AI-assisted
            development, prompt engineering, and intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="card-hover animate-slide-up flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground leading-snug">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 gap-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto pt-2">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClaudeProjects;
