"use client";

import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 lg:py-36">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium text-blue-400 flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            {profile.location}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-blue-400">Kesav Bonthu</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-slate-300 sm:text-xl">
            Technical Product Manager · AI Product Leader · MBA Candidate at UW Foster
          </p>

          <p className="mt-6 max-w-2xl text-base text-slate-400 leading-relaxed sm:text-lg">
            I build data-driven, AI-enabled, and enterprise-scale products that improve workflows,
            increase adoption, and create measurable business impact. I bring a rare mix of
            engineering depth, product ownership, and business strategy — from launching trading
            workflow platforms at Citi to building AI-driven clinical intake systems and advising
            Microsoft and Amazon Business.
          </p>

          {/* Credential badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.credentials.map((cred) => (
              <span
                key={cred}
                className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {cred}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-transparent px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Let&apos;s Connect
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
