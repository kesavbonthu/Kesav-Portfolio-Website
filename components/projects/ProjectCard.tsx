import MetricStat from "@/components/animation/MetricStat";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/data/projects";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}/`} className="paper-card project-card group flex h-full flex-col rounded-xl p-6">
      <div className="flex flex-col items-start gap-2">
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
        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[color:var(--portfolio-border)] pt-3">
          {project.metrics.slice(0, 3).map((m, i) => (
            <MetricStat key={i} value={m.value} label={m.label} />
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

      <span className="mt-4 flex items-center justify-between border-t border-[color:var(--portfolio-border)] pt-3 text-xs font-semibold text-[color:var(--portfolio-accent)]">
        Explore case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
