import { experiences } from "@/data/experience";
import MetricStat from "@/components/animation/MetricStat";

export default function ImpactHighlights() {
  const metrics = experiences.flatMap((experience) => experience.metrics);
  const selected = ["$300K", "80%", "20%"].map((value) => metrics.find((metric) => metric.value === value)).filter((metric) => metric !== undefined);
  return <div className="impact-strip mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16" aria-label="Key achievements">
    <div className="grid gap-4 sm:grid-cols-3">{selected.map((metric) => <MetricStat key={metric.value} {...metric} />)}</div>
  </div>;
}
