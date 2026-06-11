"use client";

import { categories } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectFilterProps {
  selected: string;
  onChange: (cat: string) => void;
}

export default function ProjectFilter({ selected, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            selected === cat
              ? "bg-blue-600 text-white"
              : "border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-white hover:border-slate-500"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
