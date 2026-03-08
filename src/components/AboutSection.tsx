import { User, MapPin, Mail, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      <div className="max-w-4xl mx-auto relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="font-mono text-sm text-primary tracking-widest uppercase">01. Who I Am</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 gradient-text">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="p-8 md:p-10 border border-border bg-card rounded-xl border-glow-cyan">
            <div className="flex items-start gap-4 mb-6">
              <User className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground leading-relaxed text-lg">
                I am a <span className="text-primary font-semibold">Junior Penetration Tester</span> with practical experience in web application testing and identifying real vulnerabilities. Skilled in using <span className="text-accent font-semibold">Burp Suite</span>, <span className="text-accent font-semibold">Nmap</span>, and other offensive security tools. Committed to improving security posture through hands-on testing and delivering clear, actionable reports.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                <MapPin className="w-5 h-5 text-cyan flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Location</p>
                  <p className="text-sm text-foreground">Bani Suef, Egypt</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                <Mail className="w-5 h-5 text-violet flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Email</p>
                  <p className="text-sm text-foreground break-all">abdelrhmanmohamed.pentester@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                <Phone className="w-5 h-5 text-emerald flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Phone</p>
                  <p className="text-sm text-foreground">+20 114 982 5243</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
