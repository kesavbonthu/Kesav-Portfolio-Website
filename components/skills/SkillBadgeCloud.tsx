import { type SkillCategory } from "@/data/skills";

interface SkillBadgeCloudProps {
  category: SkillCategory;
}

export default function SkillBadgeCloud({ category }: SkillBadgeCloudProps) {
  return (
    <div className="paper-card h-full rounded-xl p-5">
      <div className="mb-4 flex items-center gap-3">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="text-xl font-medium text-[color:var(--portfolio-ink)]">{category.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <div
            key={skill}
            className="rounded-[2px] border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-cream)]/35 px-2.5 py-1.5 text-sm font-medium text-[color:var(--portfolio-deep)]"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
