import { Badge } from "@/components/ui/badge";
import { type SkillCategory } from "@/data/skills";

interface SkillBadgeCloudProps {
  category: SkillCategory;
}

export default function SkillBadgeCloud({ category }: SkillBadgeCloudProps) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-6">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="font-bold text-white text-lg">{category.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="text-sm py-1 px-3 bg-slate-700 text-slate-300 border-0 hover:bg-slate-600 transition-colors"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
