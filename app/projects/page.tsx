"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";

export default function ProjectsPage() {
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCat = selected === "All" || p.categories.includes(selected);
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      (p.company ?? "").toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-950 py-16">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Projects</h1>
          <p className="mt-2 text-slate-400">
            Product work, AI builds, consulting case studies, and data science projects.
          </p>
        </div>

        <div className="mb-6 space-y-4">
          <input
            type="text"
            placeholder="Search by title, tag, or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
          />
          <ProjectFilter selected={selected} onChange={setSelected} />
        </div>

        {filtered.length === 0 ? (
          <p className="text-slate-500 text-sm">No projects match your filter.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
