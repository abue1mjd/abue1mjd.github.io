import { Code, Smartphone, Globe, Terminal } from "lucide-react";

const projects = [
  {
    title: "Bank System",
    tech: "C++",
    desc: "A banking system with account management, transactions, and queue management.",
    icon: Terminal,
    tags: ["C++", "OOP", "Data Structures"],
  },
  {
    title: "Queue for Bank",
    tech: "C++",
    desc: "Queue management system for banking operations using data structures.",
    icon: Terminal,
    tags: ["C++", "Queue", "DSA"],
  },
  {
    title: "Azkar App",
    tech: "C#",
    desc: "Islamic remembrance (Azkar) application with categorized supplications.",
    icon: Smartphone,
    tags: ["C#", ".NET", "Desktop"],
  },
  {
    title: "XO Game",
    tech: "C#",
    desc: "Tic-Tac-Toe game with player vs player functionality.",
    icon: Code,
    tags: ["C#", "Game", "UI"],
  },
  {
    title: "Todo List & CRUD App",
    tech: "Frontend",
    desc: "Interactive task management and CRUD operations with modern UI.",
    icon: Globe,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Note App",
    tech: "PHP",
    desc: "Full-stack note-taking application with create, read, update, delete.",
    icon: Globe,
    tags: ["PHP", "MySQL", "Full Stack"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-primary text-sm">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        </div>
        <div className="w-20 h-0.5 bg-primary mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group p-6 border border-border bg-card rounded-sm card-glow hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <project.icon className="w-6 h-6 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">{project.tech}</span>
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
