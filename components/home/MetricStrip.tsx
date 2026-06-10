"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/metrics";

export default function MetricStrip() {
  const featured = metrics.slice(0, 8);

  return (
    <section className="bg-slate-900 py-16 border-y border-slate-800">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
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
              className="flex flex-col items-center rounded-2xl border border-slate-700 bg-slate-800/50 p-5 text-center"
            >
              <span className="text-3xl font-extrabold text-blue-400 sm:text-4xl">{metric.value}</span>
              <span className="mt-2 text-xs text-slate-400 leading-tight">{metric.label}</span>
              <span className="mt-2 text-xs font-medium text-slate-600">{metric.company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
