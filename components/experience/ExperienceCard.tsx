import MetricStat from "@/components/animation/MetricStat";
import ExpandableExperience from "@/components/experience/ExpandableExperience";
import { Badge } from "@/components/ui/badge";
import { assetPath } from "@/lib/asset-path";
import { type Experience } from "@/data/experience";
import { Building2, Calendar, MapPin, BriefcaseBusiness, GraduationCap } from "lucide-react";

interface ExperienceCardProps {
  exp: Experience;
}

export default function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <div className="experience-entry relative pl-10 pb-5">
      {/* Timeline line */}
      <div className="absolute left-3.5 top-5 h-full w-px bg-[color:var(--portfolio-border)]" />
      {/* Timeline dot */}
      <div className="timeline-marker" aria-hidden="true">
        {exp.type === "education" ? <GraduationCap size={15} /> : <BriefcaseBusiness size={15} />}
      </div>

      <div className="paper-card rounded-xl p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-medium text-[color:var(--portfolio-ink)]">{exp.role}</h3>
            <div className="mt-1.5 flex items-center gap-2 text-base text-[color:var(--portfolio-muted)]">
              {exp.logo ? (
                <img
                  loading="lazy"
                  width={20}
                  height={20}
                  src={assetPath(exp.logo)}
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

        {exp.summary && (
          <p className="mt-4 text-base leading-relaxed text-[color:var(--portfolio-muted)]">{exp.summary}</p>
        )}

        <ExpandableExperience label={`${exp.role} at ${exp.company}`}>
          {exp.highlights.length > 0 && (
            exp.type === "education" ? (
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[color:var(--portfolio-muted)]">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--portfolio-highlight)]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[color:var(--portfolio-muted)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--portfolio-highlight)]" />
                    {h}
                  </li>
                ))}
              </ul>
            )
          )}

          {exp.metrics.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-[color:var(--portfolio-border)] pt-4">
              {exp.metrics.map((m, i) => (
                <MetricStat key={i} value={m.value} label={m.label} />
              ))}
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
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
        </ExpandableExperience>
      </div>
    </div>
  );
}
