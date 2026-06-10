import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactCTA() {
  return (
    <section className="bg-slate-900 py-16 border-t border-slate-800">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Let&apos;s build something together
        </h2>
        <p className="mt-4 text-slate-400">
          I&apos;m actively exploring Senior PM, AI PM, TPM, and Product Strategy roles. If you&apos;re
          looking for a technical product leader who can bridge engineering, business, and AI —
          let&apos;s talk.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            LinkedIn
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Full contact page <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
