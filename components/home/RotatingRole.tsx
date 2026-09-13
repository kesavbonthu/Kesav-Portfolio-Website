"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const roles = ["Product Manager", "AI Product Leader", "Technical PM"];

export default function RotatingRole() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (paused || reduced) return;
    const timer = setInterval(() => setIndex((value) => (value + 1) % roles.length), 3400);
    return () => clearInterval(timer);
  }, [paused, reduced]);
  return (
    <div className="role-rotator">
      <span className="role-dot" aria-hidden="true" />
      <span className="sr-only">{roles.join(", ")}</span>
      <span key={index} className="role-text" aria-hidden="true">{roles[index]}</span>
      {!reduced && <button type="button" className="role-pause" aria-label={paused ? "Resume role animation" : "Pause role animation"} onClick={() => setPaused(!paused)}>
        {paused ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
      </button>}
    </div>
  );
}
