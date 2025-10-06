import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Sparkles, TrendingUp } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-cyan-950/20 pointer-events-none" />

      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Crafting Digital Excellence Since 2020</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-bold text-foreground leading-tight tracking-tight">
          We Build What You{" "}
          <span className="relative inline-block">
            <span className="text-[#66CCFF] neon-text">Imagine</span>
            <div className="absolute -inset-2 bg-cyan-500/20 blur-xl -z-10" />
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
          Transforming your vision into stunning digital experiences with cutting-edge technology and breathtaking design.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-6">
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:bg-card/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">Lightning Fast</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:bg-card/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">Secure</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:bg-card/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">Beautiful</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all hover:bg-card/50">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">Scalable</span>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={onGetStarted}
            className="text-base px-8 h-14 group bg-primary hover:bg-primary/90 text-primary-foreground neon-glow animate-pulse-glow text-lg font-semibold"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-base px-8 h-14 border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-lg font-semibold"
          >
            View Our Work
          </Button>
        </div>

        <div className="pt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>50+ Projects Delivered</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            <span>100% Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};
