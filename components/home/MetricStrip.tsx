"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/metrics";

export default function MetricStrip() {
  const featured = metrics.slice(0, 8);

  return (
    <section className="border-y border-[color:var(--portfolio-border)] bg-[rgba(255,253,249,0.65)] py-16">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        <p className="mono-label mb-10 text-center text-[color:var(--portfolio-muted)]">
          Impact by the numbers
        </p>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 xl:grid-cols-8">
          {featured.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="paper-card flex flex-col items-center rounded-[2px] p-5 text-center"
            >
              <span className="text-3xl font-semibold text-[color:var(--portfolio-accent)] sm:text-4xl">{metric.value}</span>
              <span className="mt-2 text-xs leading-tight text-[color:var(--portfolio-muted)]">{metric.label}</span>
              <span className="mono-label mt-2 text-[color:var(--portfolio-muted)]/70">{metric.company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
