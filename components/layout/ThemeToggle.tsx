"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("portfolio-theme-v2", dark ? "dark" : "light"); } catch {}
  }
  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle light or dark theme">
      <Moon className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
    </button>
  );
}
