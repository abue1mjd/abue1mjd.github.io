import { Shield, Terminal, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 scanline pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile photo */}
          <div className="animate-fade-in-up flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-primary/50 profile-glow animate-pulse-glow">
                <img src={profilePhoto} alt="Abdelrhman Mohamed" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 animate-fade-in-up">
              <div className="h-px w-8 bg-primary" />
              <span className="font-mono text-sm text-primary tracking-widest uppercase">
                Penetration Tester
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up delay-100">
              <span className="gradient-text">Abdelrhman</span>
              <br />
              <span className="text-foreground">Mohamed</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-lg animate-fade-in-up delay-200">
              Breaking systems to make them stronger. Junior Pentester & Full Stack Developer passionate about cybersecurity.
            </p>

            <div className="font-mono text-sm text-muted-foreground mb-8 animate-fade-in-up delay-300 bg-card/80 p-3 rounded-lg border border-border inline-block">
              <span className="text-primary">$</span> whoami <span className="text-accent">→</span> <span className="text-foreground">security_researcher</span>
              <span className="animate-blink text-primary ml-1">▊</span>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up delay-400">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <Terminal className="w-4 h-4" />
                Explore Skills
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary/60" />
      </div>
    </section>
  );
};

export default HeroSection;
