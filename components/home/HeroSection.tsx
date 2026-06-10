"use client";

import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32 lg:py-44">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[900px] w-[900px] rounded-full bg-blue-600/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-400 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Hi, I&apos;m{" "}
            <span className="text-blue-400">Kesav Bonthu</span>
          </h1>

          <p className="mt-5 text-xl font-medium text-slate-300 sm:text-2xl lg:text-3xl">
            Technical Product Manager · AI Product Leader · MBA @ UW Foster
          </p>

          <p className="mt-7 max-w-3xl text-lg text-slate-400 leading-relaxed sm:text-xl">
            I build data-driven, AI-enabled, and enterprise-scale products that improve workflows,
            increase adoption, and create measurable business impact. Engineering depth + product
            ownership + business strategy — from Citi trading platforms to healthcare AI to
            Microsoft &amp; Amazon Business consulting.
          </p>

          {/* Credential badges */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {profile.credentials.map((cred) => (
              <span
                key={cred}
                className="rounded-full border border-slate-600 bg-slate-800/70 px-4 py-1.5 text-sm font-medium text-slate-200"
              >
                {cred}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors"
            >
              View My Work
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-800 px-7 py-3.5 text-base font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl border border-slate-600 bg-transparent px-7 py-3.5 text-base font-semibold text-slate-300 hover:text-white hover:border-slate-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Let&apos;s Connect
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
