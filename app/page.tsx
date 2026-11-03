import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, GitFork, Mail } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/animation/ScrollReveal";
import ExperienceCard from "@/components/experience/ExperienceCard";
import ProjectCard from "@/components/projects/ProjectCard";
import SkillsExplorer from "@/components/skills/SkillsExplorer";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects, type Project } from "@/data/projects";
import { skillCategories } from "@/data/skills";

function selectProjects(slugs: string[]) {
  return slugs.map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
}

const strengths = [
  { title: "Find the right problem", body: "Turn user research and workflow friction into clear product opportunities." },
  { title: "Build with focus", body: "Prioritize the roadmap, define the MVP, and partner with engineering to ship." },
  { title: "Measure what matters", body: "Use adoption, efficiency, and customer outcomes to guide the next iteration." },
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="border-t border-[color:var(--portfolio-border)] py-10 sm:py-14">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        <ScrollRevealGroup>
          <ScrollRevealItem className="mb-6">
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 className="section-heading">{title}</h2>
          </ScrollRevealItem>
          {children}
        </ScrollRevealGroup>
      </div>
    </section>
  );
}

function CompactProject({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}/`} className="paper-card group flex h-full flex-col p-5">
      {project.company && <p className="section-eyebrow">{project.company}</p>}
      <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--portfolio-muted)]">{project.summary}</p>
      <span className="mt-4 flex items-center justify-between text-xs font-semibold text-[color:var(--portfolio-accent)]">Explore case study <ArrowUpRight size={16} aria-hidden="true" /></span>
    </Link>
  );
}

export default function Home() {
  const featured = selectProjects(["endomd-ai-triage", "citi-trading-platform", "dynamic-revenue-dashboard"]);
  const aiProjects = selectProjects(["joblens-ai", "ai-inbox-task-list"]);
  const skills = skillCategories.filter(({ category }) => ["Product Management", "AI / LLM / Agentic AI", "Technical"].includes(category))
    .map((category) => ({ ...category, skills: category.skills.slice(0, 6) }));

  return (
    <>
      <HeroSection />
      <Section id="about" eyebrow="01 / Product approach" title="User problems. Clear priorities. Measurable outcomes.">
        <div className="grid gap-4 md:grid-cols-3">
          {strengths.map((strength) => <ScrollRevealItem key={strength.title}>
            <div className="paper-card h-full p-5">
              <h3 className="text-lg font-semibold">{strength.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--portfolio-muted)]">{strength.body}</p>
            </div>
          </ScrollRevealItem>)}
        </div>
      </Section>
      <Section id="projects" eyebrow="02 / Selected work" title="Products with measurable impact">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => <ScrollRevealItem key={project.slug}><ProjectCard project={project} /></ScrollRevealItem>)}
        </div>
      </Section>
      <Section id="ai-projects" eyebrow="03 / Independent projects" title="AI tools for everyday workflows">
        <div className="grid gap-4 md:grid-cols-2">
          {aiProjects.map((project) => <ScrollRevealItem key={project.slug}><CompactProject project={project} /></ScrollRevealItem>)}
        </div>
      </Section>
      <Section id="experience" eyebrow="04 / Experience" title="Product ownership. Engineering depth.">
        {experiences.filter((experience) => experience.type === "full-time").map((experience) => <ScrollRevealItem key={`${experience.company}-${experience.role}`}><ExperienceCard exp={experience} /></ScrollRevealItem>)}
      </Section>
      <Section id="skills" eyebrow="05 / Toolkit" title="Skills behind the work">
        <SkillsExplorer categories={skills} />
      </Section>
      <Section id="contact" eyebrow="06 / Let’s connect" title="Let’s build a product that matters.">
        <div id="roles" className="mb-5 max-w-2xl text-[color:var(--portfolio-muted)]">
          <p>Seeking Product Manager roles in AI, fintech, and enterprise software.</p>
          <p className="mt-2 text-sm">{profile.location} · Open to relocation within the US, on-site, hybrid, and remote work.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="paper-card inline-flex items-center gap-2 px-5 py-3 text-sm"><Mail size={16} />{profile.email}</a>
          <a href={profile.linkedin} className="paper-card inline-flex items-center gap-2 px-5 py-3 text-sm"><ExternalLink size={16} />LinkedIn</a>
          <a href={profile.github} className="paper-card inline-flex items-center gap-2 px-5 py-3 text-sm"><GitFork size={16} />GitHub</a>
        </div>
      </Section>
    </>
  );
}
