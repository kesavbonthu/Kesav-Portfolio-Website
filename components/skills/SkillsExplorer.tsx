"use client";

import { useState } from "react";
import type { SkillCategory } from "@/data/skills";
import SkillBadgeCloud from "./SkillBadgeCloud";

export default function SkillsExplorer({ categories }: { categories: SkillCategory[] }) {
  const [selected, setSelected] = useState("All");
  const names: Record<string, string> = { "Product Management": "Product", "AI / LLM / Agentic AI": "AI / LLM", "Technical": "Technical" };
  return (
    <div>
      <div className="skill-filters" role="group" aria-label="Filter skills by category">
        {["All", ...categories.map((c) => c.category)].map((category) => (
          <button type="button" key={category} aria-pressed={selected === category} onClick={() => setSelected(category)}>
            {names[category] || category}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => <div key={category.category} hidden={selected !== "All" && selected !== category.category} className={selected !== "All" ? "sm:col-span-2 lg:col-span-3" : ""}>
          <SkillBadgeCloud category={category} />
        </div>)}
      </div>
    </div>
  );
}
