export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
  skills: string[];
  type: "full-time" | "consulting" | "education";
  logo?: string;
}

export const experiences: Experience[] = [
  {
    company: "EndoMD Health",
    role: "AI Product Manager",
    startDate: "2024",
    endDate: "Present",
    location: "Seattle, WA",
    type: "full-time",
    summary:
      "Leading AI-powered clinical workflow product development for pediatric endocrinology, focusing on triage, intake, referral completeness, and care operations.",
    highlights: [
      "Led AI-driven triage and intake workflow from inception to launch",
      "Delivered MVP 20% ahead of schedule through disciplined prioritization",
      "Drove ~10% month-over-month growth in patient intake",
      "Expanded physician revenue capacity by 10%",
      "Improved time-to-appointment by 15%",
      "Helped urgent cases get scheduled 2 days earlier on average",
      "Owned AI evaluation, solution architecture, and user journey mapping",
      "Collaborated with clinical staff to ensure responsible AI deployment",
    ],
    metrics: [
      { value: "20%", label: "Ahead of schedule" },
      { value: "15%", label: "Faster time-to-appointment" },
      { value: "10%", label: "MoM patient intake growth" },
      { value: "2 days", label: "Earlier urgent scheduling" },
    ],
    skills: [
      "Healthcare AI",
      "AI Evaluation",
      "Product Roadmap",
      "User Journey Mapping",
      "Clinical Workflow",
      "Stakeholder Management",
      "MVP Delivery",
    ],
  },
  {
    company: "Citibank",
    role: "Technical Product Manager",
    startDate: "2022",
    endDate: "2024",
    location: "New York, NY",
    type: "full-time",
    summary:
      "Drove product vision, roadmap, stakeholder alignment, and execution for internal financial technology platforms across trading, revenue reporting, automation, and release workflows.",
    highlights: [
      "Led 0-to-1 product roadmap for a multi-platform trading solution",
      "Managed a six-person cross-functional team across engineering and design",
      "Achieved 80% adoption across 6 global trading desks within 3 months",
      "Owned lifecycle of dynamic revenue dashboard with 64% DAU penetration",
      "Launched Playwright test automation strategy reducing manual effort by 40%",
      "Saved approximately $300K annually through automation",
      "Partnered with business and engineering to launch revenue-splitting automation",
      "Delivered quarterly roadmap reviews to executive stakeholders",
    ],
    metrics: [
      { value: "80%", label: "Adoption across 6 trading desks" },
      { value: "110+", label: "Monthly active users" },
      { value: "64%", label: "DAU penetration" },
      { value: "$300K", label: "Annual savings" },
    ],
    skills: [
      "Technical Product Management",
      "Roadmap Ownership",
      "Cross-functional Leadership",
      "Trading Workflows",
      "Dashboard UX",
      "QA Automation",
      "Executive Communication",
    ],
  },
  {
    company: "Citibank",
    role: "Software Engineer",
    startDate: "2019",
    endDate: "2022",
    location: "New York, NY",
    type: "full-time",
    summary:
      "Built scalable internal platforms that improved reporting, trading workflows, release efficiency, reliability, and operational cost performance.",
    highlights: [
      "Built automated deals pipeline with 80% feature utilization",
      "Supported 5% MoM revenue growth through expanded processing capacity",
      "Improved deployment efficiency through CI/CD automation",
      "Reduced release times by 50%, saving 1,000+ developer hours annually",
      "Reduced operational costs by $150K",
      "Containerized Citi FX services processing 10M+ daily transactions",
      "Reduced infrastructure costs by $250K annually",
      "Achieved 80% downtime reduction through service modernization",
    ],
    metrics: [
      { value: "50%", label: "Faster releases" },
      { value: "$250K", label: "Infrastructure cost reduction" },
      { value: "10M+", label: "Daily transactions supported" },
      { value: "80%", label: "Downtime reduction" },
    ],
    skills: [
      "Java",
      "React",
      "TypeScript",
      "Spring",
      "Docker",
      "CI/CD",
      "SQL",
      "GraphQL",
      "API Design",
      "Test Automation",
    ],
  },
  {
    company: "Microsoft",
    role: "MBA Consultant",
    startDate: "2024",
    endDate: "2025",
    location: "Seattle, WA",
    type: "consulting",
    summary:
      "Worked on a Microsoft Unified consulting project focused on standardizing Sales BOM creation, improving sales enablement workflows, and exploring AI-assisted feedback approaches.",
    highlights: [
      "Recommended standardized Sales BOM structure with sizing model (S/M/L)",
      "Designed asset taxonomy and governance structure",
      "Proposed AI-assisted first-draft and seller feedback workflow",
      "Identified seller adoption tracking and usage monitoring frameworks",
      "Delivered executive-ready presentation with prioritized recommendations",
    ],
    metrics: [],
    skills: [
      "MBA Consulting",
      "Sales Enablement",
      "Process Design",
      "AI Workflow Ideation",
      "Stakeholder Alignment",
      "Executive Communication",
    ],
  },
  {
    company: "Amazon Business",
    role: "MBA Consultant, Payment Products",
    startDate: "2024",
    endDate: "2025",
    location: "Seattle, WA",
    type: "consulting",
    summary:
      "Delivered payment strategy recommendations for Amazon Business Mexico by analyzing market dynamics, competitive landscape, customer segmentation, and payment rail adoption.",
    highlights: [
      "Analyzed SMB customer segmentation across banked, underbanked, and cash-first segments",
      "Benchmarked competitor payment options and rails",
      "Prioritized payment rail adoption for SMB acquisition and growth",
      "Developed embedded finance opportunity analysis",
      "Delivered go-to-market recommendations with market sizing",
    ],
    metrics: [],
    skills: [
      "Market Research",
      "B2B Commerce Strategy",
      "Payments Strategy",
      "Customer Segmentation",
      "Growth Modeling",
      "Consulting Communication",
    ],
  },
  {
    company: "University of Washington Foster School of Business",
    role: "MBA Candidate",
    startDate: "2023",
    endDate: "2025",
    location: "Seattle, WA",
    type: "education",
    summary:
      "Full-time MBA with focus on technology product management, strategy, and entrepreneurship.",
    highlights: [
      "Product Management and Technology Strategy coursework",
      "MBA Consulting projects with Microsoft and Amazon Business",
      "Leadership and cross-functional collaboration",
    ],
    metrics: [],
    skills: ["Strategy", "Consulting", "Leadership", "Finance", "Marketing"],
  },
];
