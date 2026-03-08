import { FileText, Bug, Cpu, Server, Database, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const writeups = [
  {
    title: "XSS to RCE: A Complete Exploitation Chain",
    date: "January 15, 2024",
    category: "Bug Bounty",
    excerpt: "Demonstrating how a reflected XSS vulnerability can be escalated to remote code execution through careful payload crafting and server-side exploitation techniques.",
    tags: ["XSS", "RCE", "Web Security"],
    icon: Bug,
    accent: "text-rose",
  },
  {
    title: "Reverse Engineering a Custom Protocol",
    date: "January 10, 2024",
    category: "Reverse Engineering",
    excerpt: "Deep dive into network protocol reverse engineering using Wireshark, custom Python scripts, and binary analysis to understand proprietary communication protocols.",
    tags: ["Reverse Engineering", "Wireshark", "Network Analysis"],
    icon: Cpu,
    accent: "text-violet",
  },
  {
    title: "HackTheBox Challenge: Complete Walkthrough",
    date: "January 5, 2024",
    category: "CTFs",
    excerpt: "Complete walkthrough of a medium-difficulty box. Privilege escalation via kernel exploit and lateral movement through Active Directory enumeration.",
    tags: ["HTB", "PrivEsc", "Kernel Exploit"],
    icon: Server,
    accent: "text-cyan",
  },
  {
    title: "Binary Analysis with IDA and Ghidra",
    date: "December 28, 2023",
    category: "Reverse Engineering",
    excerpt: "Advanced malware analysis using x64dbg and Ghidra. Identified buffer overflow vulnerabilities in proprietary software and developed proof-of-concept exploits.",
    tags: ["x64dbg", "Ghidra", "Buffer Overflow"],
    icon: Shield,
    accent: "text-emerald",
  },
  {
    title: "SQL Injection Exploitation Methodology",
    date: "December 20, 2023",
    category: "Bug Bounty",
    excerpt: "Comprehensive SQLi testing methodology with automated tools and manual techniques. Bypassed WAF protections and achieved database compromise.",
    tags: ["SQLi", "WAF Bypass", "Burp Suite"],
    icon: Database,
    accent: "text-amber",
  },
];

const WriteupsSection = () => {
  return (
    <section id="writeups" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-primary tracking-widest uppercase">05. Research & Writing</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 gradient-text">Writeups</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {writeups.map((writeup, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <article className="group flex flex-col md:flex-row gap-6 p-6 border border-border bg-card rounded-lg card-hover">
                <div className="flex-shrink-0 flex items-start pt-1">
                  <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center ${writeup.accent}`}>
                    <writeup.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-muted-foreground">{writeup.date}</span>
                    <span className="font-mono text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">{writeup.category}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                    {writeup.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{writeup.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {writeup.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs px-2.5 py-1 bg-secondary text-muted-foreground rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WriteupsSection;
