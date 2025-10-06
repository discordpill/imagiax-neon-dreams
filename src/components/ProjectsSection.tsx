import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { supabase, Project } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

const INITIAL_DISPLAY_COUNT = 8;

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;

      setProjects(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load projects');
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const showMore = () => {
    setDisplayCount((prev) => Math.min(prev + 8, projects.length));
  };

  const showLess = () => {
    setDisplayCount(INITIAL_DISPLAY_COUNT);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-destructive">Error loading projects: {error}</p>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient neon-text mb-6">
            Our Projects
          </h2>
          <p className="text-muted-foreground">No projects available yet. Check back soon!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient neon-text">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of stunning websites and applications we've crafted for clients worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.slice(0, displayCount).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length > INITIAL_DISPLAY_COUNT && (
          <div className="flex justify-center gap-4">
            {displayCount < projects.length && (
              <Button
                onClick={showMore}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow"
              >
                See More Projects
              </Button>
            )}
            {displayCount > INITIAL_DISPLAY_COUNT && (
              <Button
                onClick={showLess}
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/10"
              >
                Show Less
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
