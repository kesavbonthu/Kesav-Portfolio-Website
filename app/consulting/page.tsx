import type { Metadata } from "next";
import { consultingProjects } from "@/data/consulting";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "MBA consulting projects by Kesav Bonthu: Microsoft Sales BOM standardization and Amazon Business Mexico payments strategy.",
};

export default function ConsultingPage() {
  return (
    <div className="bg-slate-950 py-16">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">MBA Consulting</h1>
          <p className="mt-2 text-slate-400">
            Strategy and product consulting projects from UW Foster MBA program.
          </p>
        </div>

        <div className="space-y-10">
          {consultingProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-xl border border-slate-700 bg-slate-800/40 p-6"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-slate-700 text-slate-300 border-0 text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h2 className="text-xl font-bold text-white">{project.project}</h2>
              <p className="mt-1 text-sm font-medium text-blue-400">{project.client}</p>
              <p className="mt-3 text-sm text-slate-400">{project.context}</p>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-2">Business Challenge</h3>
                  <p className="text-sm text-slate-400">{project.challenge}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-2">Approach</h3>
                  <ul className="space-y-1.5">
                    {project.approach.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-2">Recommendations</h3>
                  <ul className="space-y-1.5">
                    {project.recommendations.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.impact.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2">Impact</h3>
                    <ul className="space-y-1.5">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-2">Skills Demonstrated</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-700 text-slate-300 border-0 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
