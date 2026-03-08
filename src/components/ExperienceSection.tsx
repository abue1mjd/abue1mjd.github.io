import { Briefcase, GraduationCap, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Bug Bounty Hunter",
    org: "HackerOne / Bugcrowd",
    period: "Nov 2025 – Present",
    desc: "Practicing bug hunting on HackerOne and Bugcrowd. Testing for IDOR, XSS, and misconfigurations using manual techniques and focused automation.",
    color: "border-l-cyan",
    badge: "Active",
  },
  {
    title: "Penetration Tester – Labs",
    org: "Hack The Box (HTB)",
    period: "Jun 2025 – Nov 2025",
    desc: "Completed multiple real-world vulnerable machines. Applied enumeration, privilege escalation, and exploitation techniques using Nmap, Burp Suite, FFUF, Hydra, and LinPEAS.",
    color: "border-l-violet",
    badge: "Lab Work",
  },
  {
    title: "Penetration Tester (Capstone)",
    org: "GinAndJuice Shop",
    period: "Aug 2024 – Sep 2024",
    desc: "Conducted full black-box penetration test on an e-commerce app following OWASP Testing Guide. Identified SQL Injection, Stored XSS, and IDOR.",
    color: "border-l-rose",
    badge: "Project",
  },
  {
    title: "Penetration Testing Intern",
    org: "DEPI",
    period: "Internship",
    desc: "Hands-on penetration testing, vulnerability assessment and security auditing.",
    color: "border-l-amber",
    badge: "Intern",
  },
  {
    title: "Junior Pentester",
    org: "CAT Reloaded",
    period: "Team Member",
    desc: "Web application security testing, OWASP Top 10 vulnerability analysis.",
    color: "border-l-emerald",
    badge: "Team",
  },
  {
    title: "Full Stack Web Developer",
    org: "NTI",
    period: "Training",
    desc: "Full stack web development with PHP, building dynamic web applications.",
    color: "border-l-cyan",
    badge: "Training",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-primary tracking-widest uppercase">03. Where I've Been</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 gradient-text">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative pl-12 md:pl-20">
                  <div className="absolute left-2.5 md:left-6.5 top-6 w-3 h-3 rounded-full bg-primary border-glow-cyan" />
                  <div className={`p-6 border border-border ${exp.color} border-l-4 bg-card rounded-lg card-hover`}>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <h3 className="font-semibold text-foreground text-lg">{exp.title}</h3>
                      <span className="font-mono text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full border border-primary/20">{exp.badge}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="font-mono text-sm text-accent">{exp.org}</span>
                      <span className="text-xs text-muted-foreground">• {exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <ScrollReveal delay={200}>
          <div className="mt-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            <div className="max-w-2xl mx-auto p-8 border border-border bg-card rounded-xl text-center border-glow-violet">
              <h4 className="font-semibold text-foreground text-xl mb-2">
                B.Sc. in Computer Science
              </h4>
              <p className="font-mono text-accent mb-2">Faculty of Computers & AI — Beni-Suef University</p>
              <p className="text-muted-foreground text-sm">2023 – Present • CGPA: 3.09</p>
              <p className="text-muted-foreground text-xs mt-3">
                Coursework: Networks, Web Technologies, Operating Systems, Cybersecurity Fundamentals
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExperienceSection;
