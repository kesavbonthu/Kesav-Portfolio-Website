import { Badge } from "@/components/ui/badge";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="paper-card group flex flex-col rounded-[2px] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[color:var(--portfolio-accent)]">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-2xl font-medium leading-tight text-[color:var(--portfolio-ink)] transition-colors group-hover:text-[color:var(--portfolio-accent)]">
          {project.title}
        </h3>
        {project.company && (
          <span className="mono-label shrink-0 text-[color:var(--portfolio-muted)]">{project.company}</span>
        )}
      </div>

      <p className="mono-label mt-2 text-[color:var(--portfolio-accent)]">{project.subtitle}</p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-[color:var(--portfolio-muted)]">{project.summary}</p>

      {project.metrics.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-5 border-t border-[color:var(--portfolio-border)] pt-5">
          {project.metrics.slice(0, 3).map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-xl font-semibold text-[color:var(--portfolio-accent)]">{m.value}</div>
              <div className="mono-label mt-1 text-[color:var(--portfolio-muted)]">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="border-0 bg-[color:var(--portfolio-cream)] text-xs text-[color:var(--portfolio-deep)]"
          >
            {tag}
          </Badge>
        ))}
      </div>

    </div>
  );
}
