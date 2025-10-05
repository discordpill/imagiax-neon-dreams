import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gradient animate-gradient-shift bg-[length:200%_auto] leading-tight">
          We Build What You Imagine
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light animate-float">
          Turning your ideas into reality with sleek design and intelligent development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button
            variant="hero"
            size="lg"
            onClick={onGetStarted}
            className="text-lg px-8 py-6 group"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Floating accent elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-accent/20 blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </section>
  );
};
