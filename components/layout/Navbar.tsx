"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "Positioning" },
  { href: "#projects", label: "Case Studies" },
  { href: "#ai-projects", label: "AI Projects" },
  { href: "#consulting", label: "Consulting" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#roles", label: "Target Roles" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const sections = navLinks.map(({ href }) => document.getElementById(href.slice(1))).filter((node): node is HTMLElement => Boolean(node));
      const current = sections.filter((node) => node.getBoundingClientRect().top <= 180).at(-1);
      setActive(current ? `#${current.id}` : "");
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); };
  }, [pathname]);

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link href="/#top" className="brand" onClick={() => setOpen(false)}><span className="brand-mark" aria-hidden="true">K.</span><span>Kesav Bonthu</span></Link>
        <ul className="desktop-nav">
          {navLinks.map((link) => <li key={link.href}><Link href={`/${link.href}`} aria-current={active === link.href ? "location" : undefined}>{link.label}</Link></li>)}
        </ul>
        <div className="nav-actions">
          <ThemeToggle />
          <button className="theme-toggle xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-navigation">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && <div id="mobile-navigation" className="mobile-nav xl:hidden">
        {navLinks.map((link) => <Link key={link.href} href={`/${link.href}`} aria-current={active === link.href ? "location" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link href="/#contact" className="connect-link" onClick={() => setOpen(false)}>Let&apos;s Connect</Link>
      </div>}
      <Link href="/#contact" className="sr-only focus:not-sr-only">Let&apos;s Connect</Link>
    </header>
  );
}
