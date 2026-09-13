"use client";

import { ExternalLink, MapPin } from "lucide-react";
import RollingTitle from "@/components/animation/RollingTitle";
import RotatingRole from "./RotatingRole";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { assetPath } from "@/lib/asset-path";

export default function HeroSection() {
  const reduced = useReducedMotion();
  return (
    <section id="top" className="hero-section relative overflow-hidden py-14 sm:py-20 lg:py-24">
      <div className="hero-ambient" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-screen-2xl items-center gap-7 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.72fr)] lg:gap-10 lg:px-16">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="section-eyebrow mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </p>

          <RotatingRole />

          <h1 className="hero-title">
            <RollingTitle>Product and Program Manager building AI, financial services, and enterprise workflow solutions</RollingTitle>
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[color:var(--portfolio-muted)] sm:text-lg lg:max-w-2xl">
            Recent MBA graduate at UW Foster with 6+ years of experience across product management,
            technical program execution, and software engineering. I specialize in building
            data-driven products, managing complex cross-functional initiatives, and turning technical
            complexity into measurable business outcomes
          </p>

          {/* Credential badges */}
          <div className="mt-5 flex max-w-3xl flex-wrap gap-2.5">
            {profile.credentials.map((cred) => (
              <span
                key={cred}
                className="mono-label rounded-full border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-panel)] px-4 py-2 text-[color:var(--portfolio-muted)]"
              >
                {cred}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={profile.linkedin}
              className="mono-label flex items-center gap-2 rounded-sm border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-panel)] px-7 py-3.5 text-[color:var(--portfolio-ink)] transition-colors hover:border-[color:var(--portfolio-accent)] hover:text-[color:var(--portfolio-accent)]"
            >
              <ExternalLink className="h-5 w-5" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hero-portrait mx-auto w-full max-w-[24rem]"
        >
          <div className="portrait-frame overflow-hidden p-3 sm:p-4">
            <div className="aspect-[4/4.85] overflow-hidden rounded-[2px] bg-[color:var(--portfolio-cream)] sm:aspect-[4/4.7]">
              <img
                width={640}
                height={760}
                fetchPriority="high"
                src={assetPath("/kesav-headshot.jpeg")}
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
