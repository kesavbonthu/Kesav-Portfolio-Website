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
    <div className="bg-slate-950 py-12">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        {/* Back */}
        <Link
          href="/projects"
          className="mb-8 flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          All Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-slate-700 text-slate-300 border-0 text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">{project.title}</h1>
          <p className="mt-3 text-xl text-slate-400">{project.subtitle}</p>
          {project.company && (
            <p className="mt-1 text-sm text-slate-500">
              {project.company}{project.timeframe ? ` · ${project.timeframe}` : ""}
            </p>
          )}
        </div>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-6 rounded-xl border border-slate-700 bg-slate-800/40 p-5">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-blue-400">{m.value}</div>
                <div className="text-xs text-slate-400">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-10">
          {/* Problem */}
          <Section title="Problem">
            <p className="text-slate-400 leading-relaxed">{project.problem}</p>
          </Section>

          {/* Users */}
          <Section title="Users & Stakeholders">
            <ul className="space-y-1">
              {project.users.map((u, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  {u}
                </li>
              ))}
            </ul>
          </Section>

          {/* Role */}
          <Section title="My Role">
            <p className="text-slate-400 leading-relaxed">{project.role}</p>
          </Section>

          {/* Approach */}
          <Section title="Product Approach">
            <ol className="space-y-2">
              {project.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-slate-300">
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
                <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* Impact */}
          <Section title="Impact">
            <ul className="space-y-2">
              {project.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* Skills */}
          <Section title="Skills Demonstrated">
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-slate-700 text-slate-300 border-0">
                  {skill}
                </Badge>
              ))}
            </div>
          </Section>

          {/* Lessons */}
          {project.lessonsLearned && (
            <Section title="Lessons Learned">
              <p className="text-slate-400 leading-relaxed">{project.lessonsLearned}</p>
            </Section>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-xl border border-slate-700 bg-slate-800/40 p-6 text-center">
          <p className="text-white font-medium">Interested in this kind of work?</p>
          <p className="mt-2 text-slate-400 text-sm">
            I&apos;m exploring Senior PM, AI PM, and TPM roles. Let&apos;s connect.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
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
      <h2 className="mb-4 text-lg font-bold text-white border-b border-slate-800 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
