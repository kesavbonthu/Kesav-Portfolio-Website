"use client";

import { ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-[color:var(--portfolio-paper)] py-20 sm:py-28 lg:py-36">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-8rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.16),transparent_70%)]" />
        <div className="absolute bottom-[-12rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.12),transparent_70%)]" />
      </div>

      <div className="relative mx-auto grid max-w-screen-2xl items-center gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.72fr)] lg:gap-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="section-eyebrow mb-5 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </p>

          <h1 className="max-w-4xl text-4xl font-light tracking-tight text-[color:var(--portfolio-ink)] sm:text-5xl lg:text-6xl xl:text-[4.75rem]">
            Product and Program Manager building AI, financial services, and enterprise workflow solutions
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--portfolio-muted)] sm:text-lg lg:max-w-2xl">
            Recent MBA grad at UW Foster with 6+ years of experience across product management,
            technical program execution, and software engineering. I specialize in building
            data-driven products, managing complex cross-functional initiatives, and turning technical
            complexity into measurable business outcomes
          </p>

          {/* Credential badges */}
          <div className="mt-8 flex max-w-3xl flex-wrap gap-2.5">
            {profile.credentials.map((cred) => (
              <span
                key={cred}
                className="mono-label rounded-full border border-[color:var(--portfolio-border)] bg-[rgba(255,253,249,0.85)] px-4 py-2 text-[color:var(--portfolio-muted)]"
              >
                {cred}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={profile.linkedin}
              className="mono-label flex items-center gap-2 rounded-sm border border-[color:var(--portfolio-border)] bg-[rgba(255,253,249,0.72)] px-7 py-3.5 text-[color:var(--portfolio-ink)] transition-colors hover:border-[color:var(--portfolio-accent)] hover:text-[color:var(--portfolio-accent)]"
            >
              <ExternalLink className="h-5 w-5" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto w-full max-w-[26rem]"
        >
          <div className="paper-card overflow-hidden rounded-[2px] p-3 sm:p-4">
            <div className="aspect-[4/4.85] overflow-hidden rounded-[2px] bg-[color:var(--portfolio-cream)] sm:aspect-[4/4.7]">
              <img
                src="/kesav-headshot.jpeg"
                alt="Portrait of Kesav Bonthu"
                className="h-full w-full object-cover object-[center_20%]"
              />
            </div>
            <div className="px-2 pb-1 pt-4 sm:px-1">
              <p className="text-lg font-medium text-[color:var(--portfolio-deep)] sm:text-xl">
                Kesav Bonthu
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
