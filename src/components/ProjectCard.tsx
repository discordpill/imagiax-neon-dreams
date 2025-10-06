import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/supabase";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden bg-muted">
        {project.images.length > 0 ? (
          <>
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {project.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-primary w-6'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No images available
          </div>
        )}
      </div>

      <CardHeader className="flex-grow">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          {project.live_url && (
            <Button
              variant="ghost"
              size="icon"
              className="flex-shrink-0"
              asChild
            >
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit live site"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
        <CardDescription className="text-muted-foreground line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-lg transition-all duration-300 pointer-events-none" />
    </Card>
  );
};
