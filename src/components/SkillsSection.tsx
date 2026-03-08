import { Shield, Bug, Search, Code, Database, Globe } from "lucide-react";

const vulnerabilities = [
  "SQL Injection", "XSS", "File Upload", "LFI/LFD", "Path Traversal",
  "CSRF", "CORS", "IDOR", "Info Disclosure", "Command Injection"
];

const tools = [
  { name: "Burp Suite", icon: Bug },
  { name: "SQLMap", icon: Database },
  { name: "Nmap", icon: Search },
  { name: "Recon Tools", icon: Globe },
];

const devSkills = [
  "PHP", "C++", "C#", "HTML/CSS", "JavaScript", "Full Stack Web"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-primary text-sm">02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Arsenal</h2>
        </div>
        <div className="w-20 h-0.5 bg-primary mb-12" />

        {/* Vulnerabilities */}
        <div className="mb-12">
          <h3 className="font-mono text-primary mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Vulnerability Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {vulnerabilities.map((vuln) => (
              <span
                key={vuln}
                className="px-4 py-2 border border-border bg-card rounded-sm font-mono text-sm text-foreground hover:border-primary hover:text-primary transition-colors duration-200 card-glow"
              >
                {vuln}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-12">
          <h3 className="font-mono text-primary mb-6 flex items-center gap-2">
            <Code className="w-5 h-5" />
            Security Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="p-4 border border-border bg-card rounded-sm text-center hover:border-primary transition-colors duration-200 card-glow"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="font-mono text-sm text-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dev Skills */}
        <div>
          <h3 className="font-mono text-primary mb-6 flex items-center gap-2">
            <Code className="w-5 h-5" />
            Development
          </h3>
          <div className="flex flex-wrap gap-3">
            {devSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-terminal-dim bg-card rounded-sm font-mono text-sm text-terminal-dim hover:border-terminal-amber hover:text-terminal-amber transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
