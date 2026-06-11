import { Badge } from "@/components/ui/badge";
import { type SkillCategory } from "@/data/skills";

interface SkillBadgeCloudProps {
  category: SkillCategory;
}

export default function SkillBadgeCloud({ category }: SkillBadgeCloudProps) {
  return (
    <div className="paper-card rounded-[2px] p-6">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="text-xl font-medium text-[color:var(--portfolio-ink)]">{category.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="border-0 bg-[color:var(--portfolio-cream)] px-3 py-1 text-sm text-[color:var(--portfolio-deep)] transition-colors hover:bg-[color:var(--portfolio-accent-soft)]"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
