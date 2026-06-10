import Link from "next/link";
import { GitFork, ExternalLink, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <Link href="/" className="text-lg font-semibold text-white">
              Kesav<span className="text-blue-400">.</span>
            </Link>
            <p className="mt-1 text-sm text-slate-500 flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitFork className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Kesav Bonthu. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
