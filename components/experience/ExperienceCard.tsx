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
      <div className="absolute left-3 top-2 h-full w-px bg-slate-700 last:hidden" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-2 border-blue-500 bg-slate-900 flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-blue-500" />
      </div>

      <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-white text-lg">{exp.role}</h3>
            <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
              <Building2 className="h-3.5 w-3.5" />
              <span className="font-medium text-slate-300">{exp.company}</span>
            </div>
          </div>
          <div className="text-right text-sm text-slate-500">
            <div className="flex items-center gap-1 justify-end">
              <Calendar className="h-3.5 w-3.5" />
              {exp.startDate} – {exp.endDate}
            </div>
            <div className="mt-0.5 flex items-center gap-1 justify-end">
              <MapPin className="h-3.5 w-3.5" />
              {exp.location}
            </div>
          </div>
        </div>

        <p className="mt-3 text-sm text-slate-400 leading-relaxed">{exp.summary}</p>

        {exp.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {exp.metrics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-4">
            {exp.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-lg font-bold text-blue-400">{m.value}</div>
                <div className="text-xs text-slate-500">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {exp.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs bg-slate-700 text-slate-300 border-0">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
