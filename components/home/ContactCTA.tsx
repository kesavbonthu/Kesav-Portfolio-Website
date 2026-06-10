import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function ContactCTA() {
  return (
    <section className="bg-slate-900 py-24 border-t border-slate-800">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Let&apos;s build something together
        </h2>
        <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto">
          I&apos;m actively exploring Senior PM, AI PM, TPM, and Product Strategy roles. If you&apos;re
          looking for a technical product leader who can bridge engineering, business, and AI —
          let&apos;s talk.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white hover:bg-blue-500 transition-colors"
          >
            <Mail className="h-5 w-5" />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800 px-7 py-3.5 text-base font-semibold text-white hover:bg-slate-700 transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
            LinkedIn
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-base font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Full contact page <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
