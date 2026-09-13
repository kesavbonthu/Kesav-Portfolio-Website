import { ArrowUpRight, Clock3, CircleDollarSign, Users } from "lucide-react";
import CountUp from "./CountUp";

export default function MetricStat({ value, label }: { value: string; label: string }) {
  const Icon = value.includes("$") ? CircleDollarSign : /time|schedule|faster|days|hours/i.test(label) ? Clock3 : /adoption|user/i.test(label) ? Users : ArrowUpRight;
  return (
    <div className="metric-stat">
      <Icon size={16} aria-hidden="true" />
      <div className="metric-value"><CountUp value={value} /></div>
      <div className="metric-label">{label}</div>
    </div>
  );
}
