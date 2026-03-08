import { Mail, Github, Linkedin, BookOpen, Terminal, Send, Twitter } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const socials = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abdelrhman-mohamed-ewais/",
    color: "hover:border-cyan/50 hover:text-cyan",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/abue1mjd",
    color: "hover:border-violet/50 hover:text-violet",
  },
  {
    label: "Medium",
    icon: BookOpen,
    href: "https://medium.com/@abu.elmjd05",
    color: "hover:border-emerald/50 hover:text-emerald",
  },
  {
    label: "X (Twitter)",
    icon: Twitter,
    href: "https://x.com/abue1mjd",
    color: "hover:border-rose/50 hover:text-rose",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:abdelrhmanmohamed.pentester@gmail.com",
    color: "hover:border-amber/50 hover:text-amber",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      <div className="max-w-3xl mx-auto relative text-center">
        <ScrollReveal>
          <span className="font-mono text-sm text-primary tracking-widest uppercase">05. Let's Connect</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 mb-8 rounded-full" />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="font-mono text-sm text-muted-foreground mb-12 p-6 bg-card border border-border rounded-lg border-glow-cyan max-w-lg mx-auto">
            <p className="mb-1">
              <span className="text-primary">$</span> echo <span className="text-accent">"Let's collaborate"</span>
            </p>
            <p className="text-foreground">
              Interested in cybersecurity collaboration, pen testing projects, bug bounty, or security research? Let's talk.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-3 p-6 border border-border bg-card rounded-lg text-muted-foreground transition-all duration-300 card-hover ${social.color}`}
              >
                <social.icon className="w-7 h-7" />
                <span className="font-mono text-sm">{social.label}</span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <a
            href="mailto:abdelrhmanmohamed.pentester@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg text-lg"
          >
            <Send className="w-5 h-5" />
            Say Hello
          </a>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center font-mono text-xs text-muted-foreground">
        <Terminal className="w-4 h-4 inline-block mr-2" />
        Designed & Built by <span className="text-primary">Abdelrhman Mohamed</span> • {new Date().getFullYear()}
      </div>
    </section>
  );
};

export default ContactSection;
