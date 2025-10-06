import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Code as Code2, Rocket } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
  onSendMessageClick: () => void;
}

export const Navbar = ({ onContactClick, onSendMessageClick }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-background/50 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                Imagiax
              </h1>
              <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
                Digital Innovation
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Rocket className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
              Projects
            </button>
            <div className="w-px h-6 bg-border/50" />
            <Button
              variant="ghost"
              onClick={onContactClick}
              className="text-sm font-medium hover:text-primary"
            >
              Contact Us
            </Button>
            <Button
              onClick={onSendMessageClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 neon-glow"
            >
              Get Started
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 space-y-3 animate-fade-in border-t border-border/50 pt-4">
            <button
              onClick={() => scrollToSection("services")}
              className="w-full text-left px-4 py-3 rounded-lg bg-card/50 hover:bg-card text-foreground hover:text-primary transition-all flex items-center gap-3"
            >
              <Code2 className="w-5 h-5" />
              <span className="font-medium">Services</span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full text-left px-4 py-3 rounded-lg bg-card/50 hover:bg-card text-foreground hover:text-primary transition-all flex items-center gap-3"
            >
              <Rocket className="w-5 h-5" />
              <span className="font-medium">Projects</span>
            </button>
            <div className="h-px bg-border/50" />
            <Button
              variant="ghost"
              onClick={() => {
                onContactClick();
                setMobileMenuOpen(false);
              }}
              className="w-full justify-start text-base"
            >
              Contact Us
            </Button>
            <Button
              onClick={() => {
                onSendMessageClick();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
