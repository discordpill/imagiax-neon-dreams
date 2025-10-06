import { Sparkles, Mail, Code2, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground">Imagiax</h3>
                <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
                  Digital Innovation
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Transforming visions into stunning digital experiences with cutting-edge technology and breathtaking design.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  E-commerce Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Backend Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  UI/UX Design
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Get in Touch
            </h4>
            <p className="text-sm text-muted-foreground">
              Ready to bring your project to life? Let's create something amazing together.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="mailto:hello@imagiax.com"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                hello@imagiax.com
              </a>
              <p className="text-sm text-muted-foreground">Available 24/7 for inquiries</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Imagiax. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> and cutting-edge tech
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-float" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none animate-float" style={{ animationDelay: "2s" }} />
    </footer>
  );
};
