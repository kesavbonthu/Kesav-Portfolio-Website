import type { Metadata } from "next";
import { experiences } from "@/data/experience";
import ExperienceCard from "@/components/experience/ExperienceCard";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Kesav Bonthu's professional experience across EndoMD Health, Citibank, Microsoft consulting, Amazon Business consulting, and UW Foster MBA.",
};

export default function ExperiencePage() {
  const fullTime = experiences.filter((e) => e.type === "full-time");
  const consulting = experiences.filter((e) => e.type === "consulting");
  const education = experiences.filter((e) => e.type === "education");

  return (
    <div className="bg-slate-950 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Experience</h1>
          <p className="mt-2 text-slate-400">
            6+ years building enterprise platforms, AI products, and driving measurable impact.
          </p>
        </div>

        <div className="space-y-14">
          <section>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Industry Roles
            </h2>
            <div>
              {fullTime.map((exp) => (
                <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
              MBA Consulting Projects
            </h2>
            <div>
              {consulting.map((exp) => (
                <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
              Education
            </h2>
            <div>
              {education.map((exp) => (
                <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
