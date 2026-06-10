import type { Metadata } from "next";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kesav Bonthu — technical product manager, MBA candidate, and AI product leader with 6+ years building enterprise platforms.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 py-16">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-16">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">About Me</h1>
          <p className="mt-2 text-slate-400">
            The story behind the product leader.
          </p>
        </div>

        <div className="space-y-10">
          {/* Professional narrative */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Professional Story</h2>
            <div className="prose prose-invert max-w-none text-slate-400 space-y-4">
              <p>
                I started my career as a software engineer at Citibank, where I spent three years building
                scalable internal platforms — from FX transaction services processing 10M+ daily transactions
                to automated deals pipelines and CI/CD systems that cut release times in half. Engineering gave
                me something most PMs don&apos;t have: a deep intuition for what&apos;s technically possible,
                what&apos;s risky, and what a strong technical spec needs to say to actually get built right.
              </p>
              <p>
                After three years building, I moved into product. As a Technical Product Manager at Citi,
                I owned the full product lifecycle for multiple internal platforms — from 0-to-1 roadmap
                definition to stakeholder alignment to adoption tracking. My most meaningful wins were
                a multi-platform trading solution adopted by 80% of global desks in 3 months and a
                dynamic revenue dashboard that replaced email reports and achieved 64% DAU penetration.
              </p>
              <p>
                I then joined EndoMD Health as an AI Product Manager, where I led an AI-driven clinical
                intake and triage workflow for pediatric endocrinology. This was my first deep healthcare
                AI role — one that required thinking carefully about AI evaluation, clinical stakeholder
                trust, and responsible deployment alongside the usual product execution discipline.
                We delivered the MVP 20% ahead of schedule.
              </p>
              <p>
                I&apos;m currently an MBA candidate at UW Foster School of Business in Seattle, where
                I&apos;ve completed consulting engagements with Microsoft (Sales BOM standardization) and
                Amazon Business (Mexico payments strategy). On the side, I&apos;ve been building AI products —
                JobLens AI and an AI Inbox Task List — that put me in the builder seat for the kinds
                of agentic workflows I want to manage as a PM.
              </p>
            </div>
          </section>

          {/* Product philosophy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Product Philosophy</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Adoption is the metric",
                  body:
                    "A product nobody uses isn&apos;t a product. I optimize for adoption early — it forces honest prioritization and surfaces user friction before it becomes technical debt.",
                },
                {
                  title: "Technical depth unlocks trust",
                  body:
                    "Engineers trust PMs who understand tradeoffs. My engineering background lets me have honest conversations about cost, complexity, and risk — not just features.",
                },
                {
                  title: "Measure what matters",
                  body:
                    "KPIs should be tied to business outcomes, not vanity metrics. I spend time aligning on the right metrics before building so we know what success looks like.",
                },
                {
                  title: "AI requires evaluation rigor",
                  body:
                    "LLMs aren&apos;t magic. AI products need evaluation frameworks, fallback logic, and user trust-building — especially in high-stakes domains like healthcare.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-700 bg-slate-800/40 p-5"
                >
                  <h3 className="font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400" dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              ))}
            </div>
          </section>

          {/* Technical foundation */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Technical Foundation</h2>
            <p className="text-slate-400">
              My engineering background spans Java, Spring, React, TypeScript, SQL, Docker, CI/CD, and
              GraphQL — built across 3 years of hands-on platform development at Citi. I&apos;ve since
              expanded into Python, R, and modern AI tooling including LLM APIs, RAG patterns, and
              agentic workflow design with tools like n8n and the Gemini and Claude APIs.
            </p>
            <p className="mt-3 text-slate-400">
              I don&apos;t write production code in my PM role — but I review technical specs, debug
              integration issues, contribute to architecture discussions, and write enough exploratory
              code to validate whether ideas are technically sound before committing engineering resources.
            </p>
          </section>

          {/* MBA story */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">MBA & Strategy</h2>
            <p className="text-slate-400">
              I came to UW Foster to build the business and strategy layer that complements my technical
              product background. The consulting projects with Microsoft and Amazon Business gave me
              a different muscle: market sizing, stakeholder interviewing at the C-suite level,
              competitive analysis, and translating research into executive-facing recommendations.
            </p>
            <p className="mt-3 text-slate-400">
              The MBA has reinforced my conviction that the best PM decisions are made at the
              intersection of user insight, technical feasibility, and business strategy —
              and that most PM failures come from overweighting one of the three.
            </p>
          </section>

          {/* Personal */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Outside Work</h2>
            <div className="flex flex-wrap gap-3">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm text-slate-300"
                >
                  {interest}
                </span>
              ))}
            </div>
            <p className="mt-4 text-slate-400 text-sm">
              Running keeps me disciplined. Cooking keeps me creative. Hiking resets my perspective.
              Photography trains me to notice what others overlook — a skill that transfers
              surprisingly well to user research.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
