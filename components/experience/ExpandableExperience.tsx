"use client";

import { useId, useState, type ReactNode } from "react";
import { Minus, Plus } from "lucide-react";

export default function ExpandableExperience({ children, label }: { children: ReactNode; label: string }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={detailsId}
        aria-label={`${open ? "Hide" : "Show"} highlights for ${label}`}
        onClick={() => setOpen((value) => !value)}
        className="mt-3 flex h-11 w-11 items-center justify-center rounded-lg border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-panel)] text-[color:var(--portfolio-accent)] hover:bg-[color:var(--portfolio-accent-soft)]"
      >
        {open ? <Minus aria-hidden="true" className="h-5 w-5" /> : <Plus aria-hidden="true" className="h-5 w-5" />}
      </button>
      <div id={detailsId} hidden={!open}>
        {children}
      </div>
    </div>
  );
}
