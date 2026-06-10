import type { Metadata } from "next";
import { skillCategories, signatureStrengths } from "@/data/skills";
import SkillBadgeCloud from "@/components/skills/SkillBadgeCloud";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Kesav Bonthu's skills across product management, AI/LLM, technical program management, engineering, data analytics, and strategy.",
};

export default function SkillsPage() {
  return (
    <div className="bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Skills</h1>
          <p className="mt-2 text-slate-400">
            Capabilities built across product, engineering, AI, data, and strategy.
          </p>
        </div>

        {/* Signature strengths */}
        <section className="mb-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Signature Strengths
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {signatureStrengths.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="text-sm font-medium text-slate-200">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* All skills by category */}
        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-500">
            All Skills
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat) => (
              <SkillBadgeCloud key={cat.category} category={cat} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
