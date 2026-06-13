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
    startDate: "June 2025",
    endDate: "August 2025",
    location: "Richmond, VA",
    type: "full-time",
    summary:
      "Own AI-enabled clinical workflow product development for pediatric endocrinology, improving triage accuracy, referral completeness, intake throughput, and scheduling operations",
    highlights: [
      "Led the 0-to-1 development of an AI-enabled clinical intake and triage workflow for pediatric endocrinology, translating clinician pain points and referral bottlenecks into MVP scope, product requirements, and launch milestones.",
      "Delivered the MVP 20% ahead of schedule by aligning clinical, operational, and engineering stakeholders around a focused roadmap, clear prioritization criteria, and rapid iteration cycles.",
      "Designed and implemented an acuity-based prioritization system to classify referrals by urgency, enabling clinicians to identify high-priority cases faster and accelerate urgent case scheduling by 2 days on average.",
      "Improved patient access and operational efficiency by reducing intake friction and optimizing referral routing, contributing to a 15% faster time-to-appointment and ~10% month-over-month growth in patient intake.",
      "Expanded physician revenue capacity by 10% through better scheduling efficiency, improved referral throughput, and streamlined intake workflows that reduced manual review burden.",
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
    startDate: "Jan 2023",
    endDate: "Jul 2024",
    location: "Pune, India",
    type: "full-time",
    summary:
      "Owned roadmap, stakeholder alignment, and execution for internal financial technology platforms spanning trading workflows, revenue visibility, automation, and release operations",
    highlights: [
      "Drove the 0-to-1 product vision and roadmap for a multi-platform trading solution, translating trader workflows, legacy platform gaps, and business requirements into a scalable product strategy adopted across 6 global trading desks.",
      "Led a six-person cross-functional team across engineering, QA, and business stakeholders to deliver the trading platform MVP, achieving 80% adoption and 110+ monthly active users within the first 3 months of launch.",
      "Owned the end-to-end lifecycle of a dynamic revenue dashboard, replacing static email-based reporting with a real-time, customizable web interface that improved visibility into trading performance and reached 64% DAU penetration across 90+ active users.",
      "Partnered with sales desks and business managers to launch a revenue-splitting feature that automated manual allocation workflows, reduced revenue allocation time by 40%, and drove 2× growth in feature utilization.",
      "Launched a scalable test automation strategy by collaborating with 10+ QA analysts and 30+ developers, designing a Playwright test suite that reduced manual testing effort by 40%, saved $300K annually, and accelerated release cycles.",
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
    role: "Senior Software Engineer",
    startDate: "Aug 2020",
    endDate: "Dec 2022",
    location: "Pune, India",
    type: "full-time",
    summary:
      "Built and modernized internal platforms that improved reliability, release efficiency, reporting capabilities, and operational cost performance at enterprise scale",
    highlights: [
      "Built an automated deals pipeline to streamline trade processing workflows, improve operational throughput, and reduce manual intervention, achieving 80% feature utilization among target users.",
      "Expanded processing capacity for high-volume financial workflows, supporting 5% month-over-month revenue growth by enabling faster, more reliable deal execution and downstream processing.",
      "Reduced release cycle times by 50% by improving CI/CD workflows, deployment readiness, and engineering handoffs, saving 1,000+ developer hours annually across delivery teams.",
    ],
    metrics: [
      { value: "50%", label: "Faster releases" },
      { value: "80%", label: "Feature utilization" },
      { value: "5%", label: "MoM revenue growth" },
      { value: "1,000+", label: "Developer hours saved" },
    ],
    skills: [
      "Java",
      "React",
      "TypeScript",
      "Spring",
      "CI/CD",
      "API Design",
      "Test Automation",
      "Release Engineering",
      "Platform Reliability",
    ],
  },
  {
    company: "Citibank",
    role: "Software Engineer",
    startDate: "Aug 2018",
    endDate: "Jul 2020",
    location: "Pune, India",
    type: "full-time",
    summary:
      "Built and modernized internal platforms that improved reliability, release efficiency, reporting capabilities, and operational cost performance at enterprise scale",
    highlights: [
      "Containerized Citi FX services processing 10M+ daily transactions, modernizing legacy infrastructure to improve scalability, resilience, and production reliability for business-critical trading systems.",
      "Reduced infrastructure costs by $250K annually and achieved an 80% reduction in downtime through service modernization, containerization, and improved runtime monitoring.",
    ],
    metrics: [
      { value: "10M+", label: "Daily transactions supported" },
      { value: "$250K", label: "Infrastructure cost reduction" },
      { value: "80%", label: "Downtime reduction" },
    ],
    skills: [
      "Java",
      "Docker",
      "SQL",
      "GraphQL",
      "CI/CD",
      "Platform Modernization",
      "Production Reliability",
    ],
  },
  {
    company: "Microsoft",
    role: "MBA Consultant",
    startDate: "Mar 2026",
    endDate: "Jun 2026",
    location: "Seattle, WA",
    type: "consulting",
    summary:
      "Worked on a Microsoft Unified consulting project focused on standardizing Sales BOM creation, improving sales enablement workflows, and exploring AI-assisted feedback approaches",
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
    role: "MBA Consultant",
    startDate: "Jan 2026",
    endDate: "Mar 2026",
    location: "Seattle, WA",
    type: "consulting",
    summary:
      "Delivered payment strategy recommendations for Amazon Business Mexico by analyzing market dynamics, competitive landscape, customer segmentation, and payment rail adoption",
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
    startDate: "2024",
    endDate: "2026",
    location: "Seattle, WA",
    type: "education",
    summary:
      "Full-time MBA focused on technology product management, strategy, and entrepreneurship, with coursework and applied projects centered on product leadership",
    highlights: [
      "Recipient of Dean's Merit Scholarship",
      "UW Undergraduate Mentor",
      "Foster Wine Club VP",
    ],
    metrics: [],
    skills: ["Strategy", "Consulting", "Leadership", "Finance", "Marketing"],
    logo: "/uw-logo.png",
  },
  {
    company: "IIT Madras",
    role: "Bachelor of Engineering",
    startDate: "2014",
    endDate: "2018",
    location: "Chennai, India",
    type: "education",
    summary:
      "Undergraduate engineering foundation that built the technical base for later work across software engineering, enterprise platforms, and product execution",
    highlights: [
      "Student Recruitment Lead",
      "Residential Community Secretary",
      "Student Athlete, Cricket - IIT Madras",
    ],
    metrics: [],
    skills: ["Engineering", "Analytical Thinking", "Technical Foundation"],
    logo: "/iitm-logo.png",
  },
];
