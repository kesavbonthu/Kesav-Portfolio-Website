import { Badge } from "@/components/ui/badge";
import { type Experience } from "@/data/experience";
import { Building2, Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
  exp: Experience;
}

export default function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-3 top-2 h-full w-px bg-[color:var(--portfolio-border)] last:hidden" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[color:var(--portfolio-accent)] bg-[color:var(--portfolio-paper)]">
        <div className="h-2 w-2 rounded-full bg-[color:var(--portfolio-accent)]" />
      </div>

      <div className="paper-card rounded-[2px] p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-medium text-[color:var(--portfolio-ink)]">{exp.role}</h3>
            <div className="mt-1.5 flex items-center gap-2 text-base text-[color:var(--portfolio-muted)]">
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-5 w-5 rounded-sm object-contain"
                />
              ) : (
                <Building2 className="h-4 w-4" />
              )}
              <span className="font-semibold text-[color:var(--portfolio-deep)]">{exp.company}</span>
            </div>
          </div>
          <div className="mono-label text-right text-[color:var(--portfolio-muted)]">
            <div className="flex items-center gap-1.5 justify-end">
              <Calendar className="h-4 w-4" />
              {exp.startDate} – {exp.endDate}
            </div>
            <div className="mt-1 flex items-center gap-1.5 justify-end">
              <MapPin className="h-4 w-4" />
              {exp.location}
            </div>
          </div>
        </div>

        <p className="mt-4 text-base leading-relaxed text-[color:var(--portfolio-muted)]">{exp.summary}</p>

        {exp.highlights.length > 0 && (
          <ul className="mt-5 space-y-2">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[color:var(--portfolio-muted)]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--portfolio-highlight)]" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {exp.metrics.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-6 border-t border-[color:var(--portfolio-border)] pt-5">
            {exp.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-semibold text-[color:var(--portfolio-accent)]">{m.value}</div>
                <div className="mono-label mt-1 text-[color:var(--portfolio-muted)]">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {exp.skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="border-0 bg-[color:var(--portfolio-cream)] text-xs text-[color:var(--portfolio-deep)]"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
