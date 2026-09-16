import MetricStat from "@/components/animation/MetricStat";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="project-detail bg-[color:var(--portfolio-paper)] py-12">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        {/* Back */}
        <Link
          href="/#projects"
          className="mb-8 flex items-center gap-1.5 text-sm text-[color:var(--portfolio-muted)] hover:text-[color:var(--portfolio-deep)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-[color:var(--portfolio-cream)] text-[color:var(--portfolio-deep)] border-0 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-extrabold text-[color:var(--portfolio-ink)] sm:text-5xl">{project.title}</h1>
          <p className="mt-3 text-xl text-[color:var(--portfolio-muted)]">{project.subtitle}</p>
          {project.company && (
            <p className="mt-1 text-sm text-[color:var(--portfolio-muted)]">
              {project.company}{project.timeframe ? ` · ${project.timeframe}` : ""}
            </p>
          )}
        </div>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {project.metrics.map((m, i) => (
              <MetricStat key={i} value={m.value} label={m.label} />
            ))}
          </div>
        )}

        <div className="space-y-10">
          {/* Problem */}
          <Section title="Problem">
            <p className="text-[color:var(--portfolio-muted)] leading-relaxed">{project.problem}</p>
          </Section>

          {/* Users */}
          <Section title="Users & Stakeholders">
            <ul className="space-y-1">
              {project.users.map((u, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[color:var(--portfolio-muted)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--portfolio-accent)]" />
                  {u}
                </li>
              ))}
            </ul>
          </Section>

          {/* Role */}
          <Section title="My Role">
            <p className="text-[color:var(--portfolio-muted)] leading-relaxed">{project.role}</p>
          </Section>

          {/* Approach */}
          <Section title="Product Approach">
            <ol className="space-y-2">
              {project.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[color:var(--portfolio-muted)]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--portfolio-cream)] text-xs font-bold text-[color:var(--portfolio-deep)]">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </Section>

          {/* Solution */}
          <Section title="Solution">
            <ul className="space-y-2">
              {project.solution.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[color:var(--portfolio-muted)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--portfolio-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* Impact */}
          <Section title="Impact">
            <ul className="space-y-2">
              {project.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[color:var(--portfolio-muted)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--portfolio-highlight)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* Skills */}
          <Section title="Skills Demonstrated">
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-[color:var(--portfolio-cream)] text-[color:var(--portfolio-deep)] border-0">
                  {skill}
                </Badge>
              ))}
            </div>
          </Section>

          {/* Lessons */}
          {project.lessonsLearned && (
            <Section title="Lessons Learned">
              <p className="text-[color:var(--portfolio-muted)] leading-relaxed">{project.lessonsLearned}</p>
            </Section>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-[color:var(--portfolio-border)] bg-[color:var(--portfolio-surface)] p-6 text-center">
          <p className="text-[color:var(--portfolio-ink)] font-medium">Interested in this kind of work?</p>
          <p className="mt-2 text-[color:var(--portfolio-muted)] text-sm">
            I enjoy building product, program, and AI workflow solutions across complex operating environments. Let&apos;s connect
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[color:var(--portfolio-accent)] px-5 py-2.5 text-sm font-semibold text-[color:var(--portfolio-paper)] hover:bg-[color:var(--portfolio-accent)] transition-colors"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-bold text-[color:var(--portfolio-ink)] border-b border-[color:var(--portfolio-border)] pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
