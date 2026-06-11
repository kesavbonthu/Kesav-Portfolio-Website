import Link from "next/link";
import { GitFork, ExternalLink, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--portfolio-border)] bg-[rgba(255,253,249,0.82)]">
      <div className="mx-auto max-w-screen-2xl px-6 py-10 sm:px-10 lg:px-16">
        <p className="mono-label mb-4 text-[color:var(--portfolio-muted)]">Academic Affiliation</p>
        <div className="mb-8 grid gap-4 border-b border-[color:var(--portfolio-border)] pb-8 sm:grid-cols-2">
          <div className="paper-card flex items-center gap-4 rounded-[2px] p-4">
            <img
              src="/uw-logo.png"
              alt="University of Washington logo"
              className="h-12 w-12 rounded-sm object-contain"
            />
            <div>
              <p className="mono-label text-[color:var(--portfolio-muted)]">MBA</p>
              <p className="text-sm font-medium text-[color:var(--portfolio-ink)]">UW Foster School of Business</p>
            </div>
          </div>

          <div className="paper-card flex items-center gap-4 rounded-[2px] p-4">
            <img
              src="/iitm-logo.png"
              alt="IIT Madras logo"
              className="h-12 w-12 rounded-sm object-contain"
            />
            <div>
              <p className="mono-label text-[color:var(--portfolio-muted)]">Bachelors of Engineering</p>
              <p className="text-sm font-medium text-[color:var(--portfolio-ink)]">IIT Madras</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <Link href="/" className="font-heading text-xl font-semibold text-[color:var(--portfolio-ink)]">
              Kesav Bonthu
            </Link>
            <p className="mt-1 flex items-center gap-1 text-sm text-[color:var(--portfolio-muted)]">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="text-[color:var(--portfolio-muted)] transition-colors hover:text-[color:var(--portfolio-accent)]"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--portfolio-muted)] transition-colors hover:text-[color:var(--portfolio-accent)]"
              aria-label="LinkedIn"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--portfolio-muted)] transition-colors hover:text-[color:var(--portfolio-accent)]"
              aria-label="GitHub"
            >
              <GitFork className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mono-label mt-8 border-t border-[color:var(--portfolio-border)] pt-6 text-center text-[color:var(--portfolio-muted)]">
          © {new Date().getFullYear()} Kesav Bonthu · Product portfolio
        </div>
      </div>
    </footer>
  );
}
