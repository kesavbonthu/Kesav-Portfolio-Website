import HeroSection from "@/components/home/HeroSection";
import MetricStrip from "@/components/home/MetricStrip";
import ContactCTA from "@/components/home/ContactCTA";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import ProjectCard from "@/components/projects/ProjectCard";
import ExperienceCard from "@/components/experience/ExperienceCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);
  const mainExperiences = experiences.filter((e) => e.type === "full-time").slice(0, 3);

  return (
    <>
      <HeroSection />
      <MetricStrip />

      {/* Featured Projects */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
              <p className="mt-1 text-slate-400 text-sm">
                A selection of my most impactful work across AI, FinTech, and consulting.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              All projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="bg-slate-900 py-16 border-t border-slate-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">Experience Highlights</h2>
              <p className="mt-1 text-slate-400 text-sm">
                6+ years building products across FinTech, healthcare AI, and enterprise platforms.
              </p>
            </div>
            <Link
              href="/experience"
              className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              Full experience <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div>
            {mainExperiences.map((exp) => (
              <ExperienceCard key={`${exp.company}-${exp.role}`} exp={exp} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
