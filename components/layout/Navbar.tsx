"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#projects", label: "Case Studies" },
  { href: "#ai-projects", label: "AI Projects" },
  { href: "#consulting", label: "Consulting" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[color:var(--portfolio-border)]/70 bg-[rgba(246,243,238,0.88)] backdrop-blur supports-[backdrop-filter]:bg-[rgba(246,243,238,0.72)]">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="#top" className="font-heading text-xl font-semibold tracking-[0.04em] text-[color:var(--portfolio-ink)]">
          Kesav Bonthu
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="mono-label rounded-md px-2 py-2 text-[color:var(--portfolio-muted)] transition-colors hover:text-[color:var(--portfolio-accent)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#contact"
            className="mono-label rounded-sm bg-[color:var(--portfolio-accent)] px-4 py-2 text-white transition-colors hover:bg-[color:var(--portfolio-highlight)]"
          >
            Let&apos;s Connect
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-[color:var(--portfolio-muted)] hover:text-[color:var(--portfolio-accent)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-paper)] px-4 py-4 lg:hidden">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="mono-label block rounded-md px-3 py-2 text-[color:var(--portfolio-muted)] transition-colors hover:bg-[color:var(--portfolio-accent-soft)] hover:text-[color:var(--portfolio-accent)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-[color:var(--portfolio-border)] pt-4">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mono-label flex items-center justify-center rounded-sm bg-[color:var(--portfolio-accent)] px-4 py-2 text-white transition-colors hover:bg-[color:var(--portfolio-highlight)]"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
