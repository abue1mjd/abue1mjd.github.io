import { Shield, Bug, Search, Code, Database, Globe, Zap } from "lucide-react";

const vulnerabilities = [
  { name: "SQL Injection", color: "text-cyan" },
  { name: "XSS", color: "text-rose" },
  { name: "File Upload", color: "text-amber" },
  { name: "LFI / LFD", color: "text-violet" },
  { name: "Path Traversal", color: "text-emerald" },
  { name: "CSRF", color: "text-cyan" },
  { name: "CORS", color: "text-rose" },
  { name: "IDOR", color: "text-amber" },
  { name: "Info Disclosure", color: "text-violet" },
  { name: "Command Injection", color: "text-emerald" },
];

const tools = [
  { name: "Burp Suite", icon: Bug, color: "text-cyan" },
  { name: "SQLMap", icon: Database, color: "text-violet" },
  { name: "Nmap", icon: Search, color: "text-rose" },
  { name: "Recon Tools", icon: Globe, color: "text-amber" },
];

const devSkills = [
  { name: "PHP", color: "text-violet" },
  { name: "C++", color: "text-cyan" },
  { name: "C#", color: "text-emerald" },
  { name: "HTML/CSS", color: "text-rose" },
  { name: "JavaScript", color: "text-amber" },
  { name: "Full Stack Web", color: "text-cyan" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">02. What I Do</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 gradient-text">Skills & Arsenal</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Vulnerabilities */}
        <div className="mb-16">
          <h3 className="font-mono text-lg text-foreground mb-6 flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary" />
            Vulnerability Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {vulnerabilities.map((vuln) => (
              <span
                key={vuln.name}
                className={`px-5 py-2.5 border border-border bg-card rounded-lg font-mono text-sm ${vuln.color} card-hover cursor-default`}
              >
                {vuln.name}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-16">
          <h3 className="font-mono text-lg text-foreground mb-6 flex items-center gap-3">
            <Zap className="w-5 h-5 text-accent" />
            Security Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="p-6 border border-border bg-card rounded-lg text-center card-hover cursor-default group"
              >
                <Icon className={`w-10 h-10 ${color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <span className="font-mono text-sm text-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dev Skills */}
        <div>
          <h3 className="font-mono text-lg text-foreground mb-6 flex items-center gap-3">
            <Code className="w-5 h-5 text-emerald" />
            Development
          </h3>
          <div className="flex flex-wrap gap-3">
            {devSkills.map((skill) => (
              <span
                key={skill.name}
                className={`px-5 py-2.5 border border-border bg-card rounded-lg font-mono text-sm ${skill.color} card-hover cursor-default`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
