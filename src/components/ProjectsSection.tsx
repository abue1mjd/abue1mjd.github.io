import { Code, Smartphone, Globe, Terminal } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Bank System",
    tech: "C++",
    desc: "Banking system with account management, transactions, and queue management.",
    icon: Terminal,
    tags: ["C++", "OOP", "DSA"],
    accent: "text-cyan",
  },
  {
    title: "Bank Queue System",
    tech: "C++",
    desc: "Queue management system for banking operations using data structures.",
    icon: Terminal,
    tags: ["C++", "Queue", "DSA"],
    accent: "text-violet",
  },
  {
    title: "Azkar App",
    tech: "C#",
    desc: "Islamic remembrance app with categorized supplications.",
    icon: Smartphone,
    tags: ["C#", ".NET", "Desktop"],
    accent: "text-emerald",
  },
  {
    title: "XO Game",
    tech: "C#",
    desc: "Tic-Tac-Toe game with player vs player functionality.",
    icon: Code,
    tags: ["C#", "Game", "UI"],
    accent: "text-rose",
  },
  {
    title: "Todo List & CRUD",
    tech: "Frontend",
    desc: "Interactive task management with full CRUD operations.",
    icon: Globe,
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "text-amber",
  },
  {
    title: "Note App",
    tech: "PHP",
    desc: "Full-stack note-taking app with CRUD functionality.",
    icon: Globe,
    tags: ["PHP", "MySQL", "Full Stack"],
    accent: "text-cyan",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-primary tracking-widest uppercase">04. What I've Built</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 gradient-text">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
            <p className="text-muted-foreground text-sm mt-4 font-mono">GitHub links coming soon</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="group p-6 border border-border bg-card rounded-lg card-hover h-full">
                <div className="flex items-center justify-between mb-4">
                  <project.icon className={`w-8 h-8 ${project.accent}`} />
                  <span className="font-mono text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{project.tech}</span>
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-2.5 py-1 bg-secondary text-muted-foreground rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
