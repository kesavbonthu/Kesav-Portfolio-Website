import type { Metadata } from "next";
import { Download, GitFork, ExternalLink, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download Kesav Bonthu's resume or view his LinkedIn and GitHub profiles.",
};

export default function ResumePage() {
  return (
    <div className="bg-slate-950 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Resume</h1>
          <p className="mt-2 text-slate-400">
            Download my resume or connect with me directly.
          </p>
        </div>

        <div className="space-y-6">
          {/* Download */}
          <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-6">
            <h2 className="font-semibold text-white mb-2">Resume Download</h2>
            <p className="text-sm text-slate-400 mb-4">
              My resume covers my experience at EndoMD Health, Citibank, and my MBA consulting
              engagements with Microsoft and Amazon Business.
            </p>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Resume (PDF)
            </a>
          </div>

          {/* Links */}
          <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-6">
            <h2 className="font-semibold text-white mb-4">Connect</h2>
            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-blue-400" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <ExternalLink className="h-4 w-4 text-blue-400" />
                linkedin.com/in/kesav-bonthu
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <GitFork className="h-4 w-4 text-blue-400" />
                GitHub
              </a>
            </div>
          </div>

          {/* Quick summary */}
          <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-6">
            <h2 className="font-semibold text-white mb-3">Quick Summary</h2>
            <p className="text-sm text-slate-400 leading-relaxed">{profile.summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
