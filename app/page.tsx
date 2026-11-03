import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import HeroSection from "@/components/home/HeroSection";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/animation/ScrollReveal";
import ExperienceCard from "@/components/experience/ExperienceCard";
import ProjectCard from "@/components/projects/ProjectCard";
import { experiences } from "@/data/experience";
import { projects, type Project } from "@/data/projects";

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

    </>
  );
}
