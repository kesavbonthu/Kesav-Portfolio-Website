import { Badge } from "@/components/ui/badge";
import { type SkillCategory } from "@/data/skills";

interface SkillBadgeCloudProps {
  category: SkillCategory;
}

export default function SkillBadgeCloud({ category }: SkillBadgeCloudProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-5">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">{category.icon}</span>
        <h3 className="font-semibold text-white">{category.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="bg-slate-700 text-slate-300 border-0 hover:bg-slate-600 transition-colors"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
