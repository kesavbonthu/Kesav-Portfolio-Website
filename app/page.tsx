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
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
              <p className="mt-2 text-slate-400 text-base">
                A selection of my most impactful work across AI, FinTech, and consulting.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-base font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              All projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="bg-slate-900 py-20 border-t border-slate-800">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Experience Highlights</h2>
              <p className="mt-2 text-slate-400 text-base">
                6+ years building products across FinTech, healthcare AI, and enterprise platforms.
              </p>
            </div>
            <Link
              href="/experience"
              className="flex items-center gap-2 text-base font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              Full experience <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="max-w-4xl">
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
