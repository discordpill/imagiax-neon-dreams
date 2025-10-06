import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-cyan-950/20 pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight tracking-tight neon-text">
          We Build What You <span className="text-gradient">Imagine</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Turning your ideas into reality with sleek design and intelligent development.
        </p>

        <div className="pt-4">
          <Button
            size="lg"
            onClick={onGetStarted}
            className="text-base px-8 h-12 group bg-primary hover:bg-primary/90 text-primary-foreground neon-glow animate-pulse-glow"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
