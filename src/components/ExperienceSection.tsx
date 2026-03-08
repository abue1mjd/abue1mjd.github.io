import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Penetration Testing Intern",
    org: "DEPI",
    period: "Internship",
    desc: "Hands-on penetration testing experience, vulnerability assessment and security auditing.",
  },
  {
    title: "Junior Pentester",
    org: "CAT Reloaded",
    period: "Team Member",
    desc: "Web application security testing, studying OWASP Top 10 vulnerabilities.",
  },
  {
    title: "Full Stack Web Developer",
    org: "NTI",
    period: "Training",
    desc: "Full stack web development with PHP, building dynamic web applications.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-primary text-sm">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
        </div>
        <div className="w-20 h-0.5 bg-primary mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-20">
                {/* Dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary border-glow" />

                <div className="p-6 border border-border bg-card rounded-sm card-glow hover:border-primary/50 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-foreground text-lg">{exp.title}</h3>
                    <span className="font-mono text-xs px-2 py-1 bg-primary/10 text-primary rounded-sm">{exp.period}</span>
                  </div>
                  <p className="font-mono text-sm text-primary/70 mb-2">{exp.org}</p>
                  <p className="text-muted-foreground text-sm">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Education</h3>
          </div>
          <div className="p-6 border border-border bg-card rounded-sm card-glow">
            <h4 className="font-semibold text-foreground text-lg">Faculty of Computers and Artificial Intelligence</h4>
            <p className="font-mono text-sm text-primary/70">Beni-Suef University</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
