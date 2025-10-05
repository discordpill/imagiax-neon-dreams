import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight tracking-tight">
          We Build What You <span className="text-gradient">Imagine</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Turning your ideas into reality with sleek design and intelligent development.
        </p>

        <div className="pt-4">
          <Button
            size="lg"
            onClick={onGetStarted}
            className="text-base px-8 h-12 group"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
