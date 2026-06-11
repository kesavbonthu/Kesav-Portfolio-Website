import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import ExperienceCard from "@/components/experience/ExperienceCard";
import ProjectCard from "@/components/projects/ProjectCard";
import SkillBadgeCloud from "@/components/skills/SkillBadgeCloud";
import { consultingProjects } from "@/data/consulting";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects, type Project } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { ExternalLink, GitFork, Mail, MapPin } from "lucide-react";

const featuredCaseStudyOrder = [
  "endomd-ai-triage",
  "citi-trading-platform",
  "dynamic-revenue-dashboard",
  "revenue-splitting-automation",
  "joblens-ai",
  "genesis-healthcare-automation",
];

const aiProjectSlugs = ["joblens-ai", "ai-inbox-task-list"];

const whatIBring = [
  {
    title: "Product Thinking",
    body:
      "I define user problems, translate them into product requirements, prioritize roadmaps, and measure success through adoption, efficiency, and business impact.",
  },
  {
    title: "Program Execution",
    body:
      "I manage cross-functional delivery across engineering, QA, business, and leadership teams by aligning stakeholders, reducing ambiguity, and driving launches forward.",
  },
  {
    title: "Technical Depth",
    body:
      "With 6+ years in financial services engineering and technical product work, I can work closely with teams on APIs, automation, dashboards, cloud modernization, and system tradeoffs.",
  },
];

const targetRoles = [
  {
    title: "Product Manager",
    body: "Best fit for AI products, workflow tools, fintech platforms, data products, and enterprise SaaS.",
  },
  {
    title: "Technical Product Manager",
    body: "Best fit for platform products, internal tooling, automation, APIs, and infrastructure-adjacent workflows.",
  },
  {
    title: "Technical Program Manager",
    body: "Best fit for cross-functional execution, release management, process standardization, and developer productivity.",
  },
  {
    title: "Program Manager",
    body: "Best fit for operational improvement, stakeholder coordination, initiative tracking, workflow transformation, and scalable execution.",
  },
];

export default function Home() {
  const featuredCaseStudies = featuredCaseStudyOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
  const aiProjects = aiProjectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
  const consultingWork = consultingProjects;
  const fullTime = experiences.filter((exp) => exp.type === "full-time");
  const consulting = experiences.filter((exp) => exp.type === "consulting");
  const education = experiences.filter((exp) => exp.type === "education");
  const skillAreas = [
    "Product Management",
    "Technical Program Management",
    "AI / LLM / Agentic AI",
    "Engineering",
  ];
  const filteredSkillCategories = skillCategories.filter((category) =>
    skillAreas.includes(category.category)
  );

  return (
    <>
      <HeroSection />

      <section id="about" className="border-t border-[color:var(--portfolio-border)] bg-transparent py-20">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="section-eyebrow">01 / Positioning</p>
              <h2 className="section-heading mt-4">
                Product and Program Manager with engineering depth, AI experience, and a track record of measurable impact.
              </h2>
              <p className="section-copy mt-6 max-w-3xl text-lg">
                {profile.summary}
              </p>
              <div className="section-copy mt-8 space-y-4">
                <p>
                  I combine product strategy, technical program execution, and hands-on engineering
                  depth. My experience spans software engineering and technical product roles at
                  Citi, AI product management at EndoMD Health, and MBA consulting work at UW
                  Foster across enterprise process design and payments strategy.
                </p>
                <p>
                  I bring a blend of product thinking, program execution, and technical fluency to
                  teams building data-driven products, leading complex cross-functional initiatives,
                  and turning technical complexity into business outcomes.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whatIBring.map((item) => (
                <div key={item.title} className="paper-card rounded-[2px] p-6">
                  <h3 className="text-xl font-medium text-[color:var(--portfolio-ink)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--portfolio-muted)]">
                    {item.body}
                  </p>
                </div>
              ))}
              <div className="paper-card rounded-[2px] p-6 sm:col-span-2">
                <p className="mono-label text-[color:var(--portfolio-muted)]">Core Differentiator</p>
                <p className="mt-3 text-lg leading-relaxed text-[color:var(--portfolio-deep)]">
                  Equally strong in product strategy and program execution, with the technical
                  fluency to work credibly across engineering, operations, analytics, and
                  executive stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-[color:var(--portfolio-border)] bg-transparent py-20">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-eyebrow">02 / Featured Case Studies</p>
              <h2 className="section-heading mt-4">
                Product, program, AI, financial services, and enterprise execution in one portfolio.
              </h2>
            </div>
            <p className="section-copy max-w-2xl">
              These are the strongest case studies for demonstrating AI product management,
              technical product ownership, enterprise delivery, and operating leverage.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCaseStudies.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="ai-projects" className="border-t border-[color:var(--portfolio-border)] bg-[rgba(255,253,249,0.45)] py-20">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <p className="section-eyebrow">03 / AI Projects</p>
            <h2 className="section-heading mt-4">
              Personal AI and agentic workflow work beyond core operating roles.
            </h2>
            <p className="section-copy mt-4 max-w-3xl">
              These projects demonstrate practical AI product experience across LLM-enabled workflows,
              prompt engineering, recommendation systems, prioritization logic, and workflow automation,
              with a focus on translating emerging AI capabilities into usable product solutions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {aiProjects.map((project) => (
              <div key={project.slug} className="paper-card rounded-[2px] p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="mono-label text-[color:var(--portfolio-accent)]">{project.subtitle}</p>
                    <h3 className="mt-2 text-3xl font-medium text-[color:var(--portfolio-ink)]">{project.title}</h3>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mono-label text-[color:var(--portfolio-accent)] hover:text-[color:var(--portfolio-highlight)]"
                  >
                    Read Case Study
                  </Link>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--portfolio-muted)]">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.skills.slice(0, 6).map((skill) => (
                    <span
                      key={skill}
                      className="mono-label rounded-full border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-cream)] px-3 py-1 text-[color:var(--portfolio-deep)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="consulting" className="border-t border-[color:var(--portfolio-border)] bg-transparent py-20">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <p className="section-eyebrow">04 / Consulting Work</p>
            <h2 className="section-heading mt-4">
              MBA strategy work across enterprise workflow design and payments growth.
            </h2>
            <p className="section-copy mt-4 max-w-3xl">
              These projects show business analysis, executive communication, market sizing, process design,
              and stakeholder alignment in settings adjacent to product and program leadership.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {consultingWork.map((project) => (
              <div key={project.slug} className="paper-card rounded-[2px] p-6">
                <p className="mono-label text-[color:var(--portfolio-accent)]">{project.client}</p>
                <h3 className="mt-2 text-3xl font-medium text-[color:var(--portfolio-ink)]">{project.project}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--portfolio-muted)]">
                  {project.challenge}
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="mono-label text-[color:var(--portfolio-muted)]">Approach</p>
                    <ul className="mt-3 space-y-2">
                      {project.approach.slice(0, 3).map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-[color:var(--portfolio-muted)]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mono-label text-[color:var(--portfolio-muted)]">Impact</p>
                    <ul className="mt-3 space-y-2">
                      {project.impact.map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-[color:var(--portfolio-muted)]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-[color:var(--portfolio-border)] bg-[rgba(255,253,249,0.45)] py-20">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <p className="section-eyebrow">05 / Experience</p>
            <h2 className="section-heading mt-4">
              Career Journey: Engineering Depth → Product & Program Management → AI and Strategy
            </h2>
          </div>

          <div className="space-y-14">
            <section>
              <h3 className="mono-label mb-6 text-[color:var(--portfolio-muted)]">Industry Roles</h3>
              <div>
                {fullTime.map((exp) => (
                  <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
                ))}
              </div>
            </section>

            <section>
              <h3 className="mono-label mb-6 text-[color:var(--portfolio-muted)]">MBA Consulting Projects</h3>
              <div>
                {consulting.map((exp) => (
                  <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
                ))}
              </div>
            </section>

            <section>
              <h3 className="mono-label mb-6 text-[color:var(--portfolio-muted)]">Education</h3>
              <div>
                {education.map((exp) => (
                  <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-[color:var(--portfolio-border)] bg-transparent py-20">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <p className="section-eyebrow">06 / Skills by Role</p>
            <h2 className="section-heading mt-4">
              Skills grouped by the types of work I do best.
            </h2>
            <p className="section-copy mt-4 max-w-3xl">
              Rather than one long skills paragraph, these categories map directly to Product Manager,
              Technical Product Manager, Technical Program Manager, and AI Product Manager roles.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredSkillCategories.map((category) => (
              <SkillBadgeCloud key={category.category} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section id="roles" className="border-t border-[color:var(--portfolio-border)] bg-[rgba(255,253,249,0.45)] py-20">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <p className="section-eyebrow">07 / Roles I&apos;m Targeting</p>
            <h2 className="section-heading mt-4">
              Clear fit for product, technical product, technical program, and program roles.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {targetRoles.map((role) => (
              <div key={role.title} className="paper-card rounded-[2px] p-6">
                <h3 className="text-2xl font-medium text-[color:var(--portfolio-ink)]">{role.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--portfolio-muted)]">{role.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[color:var(--portfolio-border)] bg-[rgba(255,253,249,0.45)] py-20">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-eyebrow">08 / Let&apos;s Connect</p>
              <h2 className="section-heading mt-4">
                Open to conversations around product, program, AI, and enterprise platform work.
              </h2>
              <p className="section-copy mt-5 max-w-2xl text-lg">
                I&apos;m currently exploring opportunities where I can combine product thinking,
                program execution, technical depth, and measurable business impact.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <a
                href={`mailto:${profile.email}`}
                className="paper-card group rounded-[2px] p-5 transition-colors hover:border-[color:var(--portfolio-accent)]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-sm bg-[color:var(--portfolio-accent-soft)] p-2">
                    <Mail className="h-5 w-5 text-[color:var(--portfolio-accent)]" />
                  </div>
                  <span className="font-medium text-[color:var(--portfolio-ink)]">Email Me</span>
                </div>
                <p className="text-sm text-[color:var(--portfolio-muted)] transition-colors group-hover:text-[color:var(--portfolio-deep)]">
                  {profile.email}
                </p>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-card group rounded-[2px] p-5 transition-colors hover:border-[color:var(--portfolio-accent)]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-sm bg-[color:var(--portfolio-accent-soft)] p-2">
                    <ExternalLink className="h-5 w-5 text-[color:var(--portfolio-accent)]" />
                  </div>
                  <span className="font-medium text-[color:var(--portfolio-ink)]">LinkedIn</span>
                </div>
                <p className="text-sm text-[color:var(--portfolio-muted)] transition-colors group-hover:text-[color:var(--portfolio-deep)]">
                  linkedin.com/in/kesav-bonthu
                </p>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-card group rounded-[2px] p-5 transition-colors hover:border-[color:var(--portfolio-accent)]"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-sm bg-[color:var(--portfolio-accent-soft)] p-2">
                    <GitFork className="h-5 w-5 text-[color:var(--portfolio-accent)]" />
                  </div>
                  <span className="font-medium text-[color:var(--portfolio-ink)]">GitHub</span>
                </div>
                <p className="text-sm text-[color:var(--portfolio-muted)] transition-colors group-hover:text-[color:var(--portfolio-deep)]">
                  Personal and project repositories
                </p>
              </a>

              <div className="paper-card rounded-[2px] p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className="rounded-sm bg-[color:var(--portfolio-accent-soft)] p-2">
                    <MapPin className="h-5 w-5 text-[color:var(--portfolio-accent)]" />
                  </div>
                  <span className="font-medium text-[color:var(--portfolio-ink)]">Location</span>
                </div>
                <p className="text-sm text-[color:var(--portfolio-muted)]">{profile.location}</p>
                <p className="mono-label mt-1 text-[color:var(--portfolio-muted)]">
                  Open to on-site, hybrid, and remote roles
                </p>
                <p className="mono-label mt-1 text-[color:var(--portfolio-muted)]">
                  Open to relocation within US
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
