"use client";

import { useState } from "react";
import type { SkillCategory } from "@/data/skills";
import SkillBadgeCloud from "./SkillBadgeCloud";

export default function SkillsExplorer({ categories }: { categories: SkillCategory[] }) {
  const [selected, setSelected] = useState("All");
  const names = ["Product", "Program", "AI / LLM", "Technical"];
  return (
    <div>
      <div className="skill-filters" role="group" aria-label="Filter skills by category">
        {["All", ...categories.map((c) => c.category)].map((category, index) => (
          <button type="button" key={category} aria-pressed={selected === category} onClick={() => setSelected(category)}>
            {index === 0 ? "All" : names[index - 1]}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => <div key={category.category} hidden={selected !== "All" && selected !== category.category} className={selected !== "All" ? "sm:col-span-2 lg:col-span-4" : ""}>
          <SkillBadgeCloud category={category} />
        </div>)}
      </div>
    </div>
  );
}
