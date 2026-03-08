import { Mail, Github, Linkedin, Terminal } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="font-mono text-primary text-sm">05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In Touch</h2>
        </div>
        <div className="w-20 h-0.5 bg-primary mx-auto mb-8" />

        <div className="font-mono text-muted-foreground mb-8 p-6 border border-border bg-card rounded-sm card-glow">
          <p className="mb-2">
            <span className="text-primary">$</span> echo "Let's connect"
          </p>
          <p className="text-foreground text-sm">
            Interested in cybersecurity collaboration, penetration testing projects, or just want to talk security? Feel free to reach out.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2 px-6 py-3 border border-primary text-primary font-mono text-sm rounded-sm hover:bg-primary/10 transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm rounded-sm hover:border-primary hover:text-primary transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm rounded-sm hover:border-primary hover:text-primary transition-all duration-200"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center font-mono text-xs text-muted-foreground">
        <Terminal className="w-4 h-4 inline-block mr-2" />
        Built with passion for security • {new Date().getFullYear()}
      </div>
    </section>
  );
};

export default ContactSection;
