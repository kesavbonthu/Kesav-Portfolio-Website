import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-slate-700 bg-slate-800/40 p-5 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all duration-200">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-white text-base leading-tight group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        {project.company && (
          <span className="shrink-0 text-xs text-slate-500">{project.company}</span>
        )}
      </div>

      <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>

      <p className="mt-3 text-sm text-slate-400 leading-relaxed flex-1">{project.summary}</p>

      {project.metrics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {project.metrics.slice(0, 3).map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-base font-bold text-blue-400">{m.value}</div>
              <div className="text-xs text-slate-500">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs bg-slate-700 text-slate-300 border-0">
            {tag}
          </Badge>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
      >
        View Case Study
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
