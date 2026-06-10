import type { Metadata } from "next";
import { GitFork, ExternalLink, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kesav Bonthu — technical product manager and AI product leader based in Seattle, WA.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-950 py-16">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Contact</h1>
          <p className="mt-2 text-slate-400">
            I&apos;m actively exploring Senior PM, AI PM, TPM, and Product Strategy roles.
            Let&apos;s connect.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="group rounded-xl border border-slate-700 bg-slate-800/40 p-5 hover:border-blue-500/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg bg-blue-600/10 p-2">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <span className="font-medium text-white">Email</span>
            </div>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
              {profile.email}
            </p>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-slate-700 bg-slate-800/40 p-5 hover:border-blue-500/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg bg-blue-600/10 p-2">
                <ExternalLink className="h-5 w-5 text-blue-400" />
              </div>
              <span className="font-medium text-white">LinkedIn</span>
            </div>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
              linkedin.com/in/kesav-bonthu
            </p>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-slate-700 bg-slate-800/40 p-5 hover:border-blue-500/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg bg-blue-600/10 p-2">
                <GitFork className="h-5 w-5 text-blue-400" />
              </div>
              <span className="font-medium text-white">GitHub</span>
            </div>
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
              Personal and project repositories
            </p>
          </a>

          <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="rounded-lg bg-blue-600/10 p-2">
                <MapPin className="h-5 w-5 text-blue-400" />
              </div>
              <span className="font-medium text-white">Location</span>
            </div>
            <p className="text-sm text-slate-400">{profile.location}</p>
            <p className="mt-1 text-xs text-slate-500">Open to remote, hybrid, and in-person roles</p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
          <h2 className="font-semibold text-white mb-2">What I&apos;m looking for</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            I&apos;m targeting Senior PM, Technical PM, AI PM, and Product Strategy roles — ideally
            at companies building AI-enabled products, enterprise SaaS, or healthcare technology.
            I&apos;m particularly drawn to roles where technical depth matters and where there&apos;s
            a clear connection between product decisions and measurable business outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}
