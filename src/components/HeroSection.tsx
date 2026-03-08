import { Shield, Terminal, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 scanline pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
          <Shield className="w-8 h-8 text-primary" />
          <span className="font-mono text-sm text-primary tracking-widest uppercase">
            Penetration Tester
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-glow-strong text-primary">
          Breaking Systems
          <br />
          <span className="text-foreground">To Make Them</span>
          <br />
          <span className="text-primary">Stronger</span>
        </h1>

        <div className="font-mono text-muted-foreground text-sm md:text-base mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="text-primary">$</span> whoami
          <br />
          <span className="text-foreground">→ Junior Penetration Tester | Full Stack Developer | Cybersecurity Enthusiast</span>
        </div>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#skills"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-sm hover:shadow-[var(--cyber-glow-strong)] transition-all duration-300 hover:scale-105"
          >
            <Terminal className="w-4 h-4" />
            View Skills
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-mono font-semibold rounded-sm hover:bg-primary/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary/50" />
      </div>
    </section>
  );
};

export default HeroSection;
