import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Penetration Testing Intern",
    org: "DEPI",
    desc: "Hands-on penetration testing, vulnerability assessment and security auditing.",
    color: "border-l-cyan",
  },
  {
    title: "Junior Pentester",
    org: "CAT Reloaded",
    desc: "Web application security testing, OWASP Top 10 vulnerability analysis.",
    color: "border-l-violet",
  },
  {
    title: "Full Stack Web Developer",
    org: "NTI",
    desc: "Full stack web development with PHP, building dynamic web applications.",
    color: "border-l-rose",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary tracking-widest uppercase">03. Where I've Been</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 gradient-text">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`p-6 border border-border ${exp.color} border-l-4 bg-card rounded-lg card-hover`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs text-primary">{exp.org}</span>
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{exp.title}</h3>
              <p className="text-muted-foreground text-sm">{exp.desc}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
          </div>
          <div className="p-8 border border-border bg-card rounded-lg text-center border-glow-violet">
            <h4 className="font-semibold text-foreground text-xl mb-2">
              Faculty of Computers & Artificial Intelligence
            </h4>
            <p className="font-mono text-accent">Beni-Suef University</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
