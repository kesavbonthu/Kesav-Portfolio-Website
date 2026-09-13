"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export default function ExpandableExperience({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="career-experience-details"
        onClick={() => setOpen((value) => !value)}
        className="mb-2 flex min-h-11 items-center gap-3 rounded-lg border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-panel)] px-4 py-3 text-sm font-semibold text-[color:var(--portfolio-accent)] hover:bg-[color:var(--portfolio-accent-soft)]"
      >
        {open ? "Hide career experience" : "View career experience"}
        <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div id="career-experience-details" hidden={!open} className="pt-6">
        {children}
      </div>
    </div>
  );
}
