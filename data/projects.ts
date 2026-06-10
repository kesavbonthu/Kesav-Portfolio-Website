export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  categories: string[];
  company?: string;
  timeframe?: string;
  summary: string;
  problem: string;
  users: string[];
  role: string;
  approach: string[];
  solution: string[];
  impact: string[];
  metrics: { value: string; label: string }[];
  skills: string[];
  tags: string[];
  featured: boolean;
  lessonsLearned?: string;
}

export const projects: Project[] = [
  {
    slug: "joblens-ai",
    title: "JobLens AI",
    subtitle: "AI-powered job application intelligence platform",
    categories: ["AI", "Personal Projects"],
    timeframe: "2024",
    featured: true,
    summary:
      "AI-powered job application platform that analyzes job postings against a resume, generates match scores, recommends improvements, and supports tailored cover letter creation.",
    problem:
      "Job seekers spend significant time manually reviewing job descriptions, estimating fit, editing resumes, and writing cover letters. The process is repetitive, inconsistent, and difficult to scale across dozens of applications.",
    users: ["Job seekers", "MBA students", "Career changers", "Engineers pivoting to PM roles"],
    role:
      "Solo product builder — defined scope, designed user flows, built architecture, integrated LLM APIs, and shipped the full product.",
    approach: [
      "Mapped the end-to-end job application workflow to identify friction points",
      "Prioritized match scoring and resume gap analysis as the core value drivers",
      "Designed a lightweight dashboard UX for tracking job pipeline status",
      "Iterated on LLM prompts for consistent, high-quality analysis output",
      "Built a modular architecture allowing for future CRM and ATS integrations",
    ],
    solution: [
      "Job posting parser that extracts requirements, responsibilities, and keywords",
      "Resume profile manager for storing and versioning resume content",
      "Match score engine with skill gap analysis powered by LLM",
      "Resume improvement suggestions tailored to specific job postings",
      "Cover letter generator with company-specific personalization",
      "Application tracking dashboard showing pipeline status and metrics",
    ],
    impact: [
      "Reduced time spent on job application prep per role",
      "Enabled data-driven prioritization of which roles to pursue",
      "Improved quality and consistency of cover letters",
      "Created a reusable personal job search CRM",
    ],
    metrics: [],
    skills: [
      "AI Product Thinking",
      "LLM Workflow Design",
      "Resume Intelligence",
      "User-centered Product Development",
      "Next.js",
      "Supabase",
      "Prompt Engineering",
    ],
    tags: ["AI Product", "Resume Intelligence", "Job Search Automation", "LLM Workflow", "Personal Project"],
    lessonsLearned:
      "LLM output quality depends heavily on structured prompting and context injection. Investing time in prompt engineering upfront saved significant iteration cycles. Starting with the core value loop (paste job → get match score) before adding features kept early scope manageable.",
  },
  {
    slug: "ai-inbox-task-list",
    title: "AI Inbox Task List",
    subtitle: "Agentic email-to-task workflow powered by Gmail API and LLM analysis",
    categories: ["AI", "Personal Projects"],
    timeframe: "2024",
    featured: true,
    summary:
      "Agentic workflow that syncs emails into a prioritized to-do dashboard using Gmail API and Gemini-based email analysis.",
    problem:
      "Important action items get buried in email inboxes, making it hard to identify, prioritize, and follow up on tasks. Switching between inbox and to-do tools adds friction and leads to missed commitments.",
    users: ["Busy professionals", "MBA students managing multiple workstreams", "PMs handling cross-functional communication"],
    role:
      "Solo product builder — designed the agentic workflow, integrated Gmail API, built LLM-based extraction pipeline, and shipped the dashboard UI.",
    approach: [
      "Mapped the inbox-to-action workflow to identify extraction and prioritization signals",
      "Used Gmail API for email sync with OAuth authentication",
      "Designed LLM prompts for action item extraction and priority scoring",
      "Built deadline detection from natural language signals in email content",
      "Created a clean dashboard UI with status tracking and manual override",
    ],
    solution: [
      "Gmail API integration with OAuth for secure email sync",
      "LLM-based action item extraction from email threads",
      "Priority classification based on sender, urgency signals, and content",
      "Deadline detection from natural language (e.g., 'by Friday', 'before EOD')",
      "Task dashboard with sender context, priority ranking, and status tracking",
      "Manual override for editing extracted tasks and priorities",
    ],
    impact: [
      "Eliminated manual inbox scanning for action items",
      "Reduced time to identify high-priority follow-ups",
      "Created a single view for email-derived tasks and their status",
    ],
    metrics: [],
    skills: [
      "Agentic AI Workflow Design",
      "Gmail API",
      "LLM Classification",
      "Productivity Automation",
      "Dashboard UX",
      "Gemini",
    ],
    tags: ["Agentic AI", "Gmail API", "Workflow Automation", "Gemini", "Productivity"],
    lessonsLearned:
      "Agentic workflows need reliable fallback logic when LLM extraction is ambiguous. Building manual override early prevents user trust issues. OAuth token management and refresh logic is underestimated complexity in email integrations.",
  },
  {
    slug: "endomd-ai-triage",
    title: "EndoMD AI Triage Workflow",
    subtitle: "AI-enabled clinical intake and triage for pediatric endocrinology",
    categories: ["AI", "Healthcare", "Product Management"],
    company: "EndoMD Health",
    timeframe: "2024–Present",
    featured: true,
    summary:
      "AI-driven clinical intake and triage workflow for pediatric endocrinology, improving referral completeness, prioritization, and scheduling efficiency.",
    problem:
      "Clinical intake and referral workflows were slow, incomplete, and difficult to prioritize manually. Urgent pediatric cases required faster attention but had no automated urgency detection, leading to delays in time-to-appointment.",
    users: [
      "Pediatric patients and their families",
      "Referring physicians and their staff",
      "Intake coordinators",
      "Pediatric endocrinologists",
      "Clinical operations team",
    ],
    role:
      "AI Product Manager — owned product vision, roadmap, user research, AI evaluation, stakeholder management, and delivery.",
    approach: [
      "Conducted user research with intake coordinators and clinicians to map pain points",
      "Defined urgency classification logic with clinical stakeholders",
      "Evaluated LLM options for clinical summarization and triage classification",
      "Prioritized referral completeness checking as the highest-impact early feature",
      "Ran structured AI evaluations to validate output quality before deployment",
      "Mapped the full patient journey from referral receipt to appointment scheduling",
    ],
    solution: [
      "AI-assisted workflow for processing incoming referrals",
      "Automated referral completeness checking with missing info flagging",
      "Urgency classification to prioritize high-acuity cases",
      "Clinical summary generation for intake staff",
      "Scheduling support with urgency-based queue management",
    ],
    impact: [
      "Delivered MVP 20% ahead of schedule",
      "~10% month-over-month growth in patient intake volume",
      "Improved time-to-appointment by 15%",
      "Urgent cases scheduled 2 days earlier on average",
      "Expanded physician revenue capacity by 10%",
    ],
    metrics: [
      { value: "20%", label: "Ahead of schedule" },
      { value: "15%", label: "Faster time-to-appointment" },
      { value: "2 days", label: "Earlier urgent case scheduling" },
      { value: "10%", label: "Revenue capacity expansion" },
    ],
    skills: [
      "Healthcare AI Product Management",
      "AI Evaluation",
      "Clinical Workflow Mapping",
      "Stakeholder Management",
      "Responsible AI",
      "MVP Delivery",
    ],
    tags: ["Healthcare AI", "Clinical Workflow", "Product Management", "AI Evaluation", "User Journey Mapping"],
    lessonsLearned:
      "Clinical AI products require more rigorous evaluation frameworks than consumer products. Building trust with clinical staff early — through transparency about AI capabilities and limitations — was essential to adoption. Involving end users in urgency classification criteria led to more clinically appropriate outcomes than a purely data-driven approach.",
  },
  {
    slug: "citi-trading-platform",
    title: "Citi Multi-Platform Trading Solution",
    subtitle: "0-to-1 enterprise trading workflow platform across global desks",
    categories: ["FinTech", "Product Management"],
    company: "Citibank",
    timeframe: "2022–2024",
    featured: true,
    summary:
      "Enterprise trading workflow platform adopted across global trading desks to improve usability, workflow consistency, and trader productivity.",
    problem:
      "Trading users needed a more flexible and unified workflow experience across platforms, with better usability and support for high-volume workflows. Fragmented tooling across desks created inconsistency, reduced efficiency, and limited business visibility.",
    users: [
      "Traders across 6 global desks",
      "Trading desk managers",
      "Business operations teams",
      "Technology and engineering partners",
    ],
    role:
      "Technical Product Manager — owned full product roadmap, led a six-person cross-functional team, managed stakeholder alignment, and drove adoption.",
    approach: [
      "Conducted discovery with trading desk users to surface workflow pain points",
      "Mapped current-state workflows across desks to identify consistency gaps",
      "Defined product vision and phased roadmap with engineering and design",
      "Managed six-person cross-functional delivery team across two time zones",
      "Implemented structured feedback loops with trading desk managers",
      "Tracked adoption metrics weekly and adjusted priorities based on usage data",
    ],
    solution: [
      "Multi-platform trading workflow solution with unified UX across desks",
      "Flexible workflow configuration supporting desk-specific needs",
      "Real-time visibility into trading activity for managers",
      "Integration with existing Citi trading infrastructure and data systems",
      "Role-based access and workflow controls",
    ],
    impact: [
      "80% adoption across 6 global trading desks within 3 months",
      "110+ monthly active users",
      "Improved workflow consistency and user engagement across desks",
      "Reduced time for traders to complete common workflow tasks",
    ],
    metrics: [
      { value: "80%", label: "Adoption in 3 months" },
      { value: "110+", label: "Monthly active users" },
      { value: "6", label: "Global trading desks" },
    ],
    skills: [
      "Technical Product Management",
      "Enterprise Product Development",
      "Roadmap Ownership",
      "Cross-functional Leadership",
      "Trader Workflow Understanding",
      "Adoption-driven Execution",
    ],
    tags: ["FinTech", "Enterprise Product", "Trading Workflows", "Cross-functional Leadership", "Product Roadmap"],
    lessonsLearned:
      "Adoption at scale requires more than a good product — you need champions on each desk. Embedding myself in trader workflows early surfaced requirements that would have been missed in a traditional discovery phase. Weekly metric reviews with stakeholders kept alignment tight and prevented scope drift.",
  },
  {
    slug: "dynamic-revenue-dashboard",
    title: "Dynamic Revenue Dashboard",
    subtitle: "Real-time web dashboard replacing static email reports",
    categories: ["FinTech", "Data Analytics", "Product Management"],
    company: "Citibank",
    timeframe: "2022–2023",
    featured: false,
    summary:
      "Real-time revenue dashboard that replaced static email reports and improved business visibility for 90+ stakeholders.",
    problem:
      "Business stakeholders relied on static email reports, creating delays, limited interactivity, and poor visibility into revenue performance. There was no way to filter, drill down, or explore data in real time.",
    users: ["Business operations stakeholders", "Revenue managers", "Trading desk leadership", "Finance teams"],
    role:
      "Technical Product Manager — owned requirements, UX direction, data modeling, and stakeholder adoption.",
    approach: [
      "Interviewed 20+ stakeholders across business and finance teams to identify reporting gaps",
      "Mapped data sources and defined a unified revenue data model",
      "Designed interactive dashboard with customizable filters and drill-down capabilities",
      "Worked with engineering on real-time data pipeline architecture",
      "Drove adoption through structured onboarding and stakeholder enablement sessions",
    ],
    solution: [
      "Web-based dashboard with real-time revenue visibility",
      "Dynamic filters by desk, product, and time period",
      "Drill-down from summary to transaction-level views",
      "Export capabilities for offline analysis",
      "Role-based access control for sensitive revenue data",
    ],
    impact: [
      "64% DAU penetration among target business users",
      "90+ active users out of 140 total stakeholders",
      "Eliminated reliance on static email reports",
      "Improved decision speed and data accessibility",
    ],
    metrics: [
      { value: "64%", label: "DAU penetration" },
      { value: "90+", label: "Active users" },
      { value: "140", label: "Total stakeholders" },
    ],
    skills: ["Data Product Management", "Dashboard UX", "Stakeholder Discovery", "Metrics Design", "Business Intelligence"],
    tags: ["FinTech", "Data Analytics", "Dashboard", "Product Management", "Business Intelligence"],
    lessonsLearned:
      "The biggest adoption driver was replacing the exact same information users already trusted in email reports, but making it interactive. Starting with familiar data — not new data — lowered the learning curve. Usage metrics revealed that 80% of value came from 20% of features, which shaped the v2 roadmap significantly.",
  },
  {
    slug: "microsoft-sales-bom",
    title: "Microsoft Sales BOM Standardization",
    subtitle: "MBA consulting project: standardizing Sales BOM creation and governance",
    categories: ["Consulting", "MBA Projects"],
    company: "Microsoft",
    timeframe: "2024–2025",
    featured: true,
    summary:
      "MBA consulting project focused on improving Sales BOM creation through standardization, governance, and AI-assisted workflow concepts.",
    problem:
      "Sales BOM creation was inconsistent across teams, review cycles were slow, templates were fragmented, and ownership across seller roles needed clearer structure. This led to rework, delayed deal progression, and inconsistent customer proposals.",
    users: ["Microsoft sales teams", "Sales engineers", "Solution architects", "Sales operations"],
    role:
      "MBA Consultant — led analysis, developed recommendations, designed governance framework, and delivered executive presentation.",
    approach: [
      "Conducted stakeholder interviews with sellers, managers, and operations teams",
      "Audited existing BOM templates and creation workflows across teams",
      "Benchmarked BOM standardization practices from industry research",
      "Identified root causes: template fragmentation, unclear ownership, no feedback loops",
      "Designed tiered BOM structure (S/M/L) to reduce complexity and improve speed",
      "Proposed AI-assisted first-draft workflow to accelerate BOM creation",
    ],
    solution: [
      "Standardized Sales BOM structure with S/M/L sizing model",
      "Unified asset taxonomy and naming conventions",
      "Post-launch governance structure with defined ownership",
      "Seller feedback loops and BOM quality scoring",
      "AI-assisted draft generation concept with human review",
      "Usage monitoring and seller adoption tracking framework",
    ],
    impact: [
      "Delivered prioritized recommendations accepted by Microsoft stakeholders",
      "Proposed governance structure addresses root cause of inconsistency",
      "AI-assisted draft concept reduces estimated creation time",
    ],
    metrics: [],
    skills: [
      "MBA Consulting",
      "Sales Enablement Strategy",
      "Process Design",
      "Stakeholder Alignment",
      "AI Workflow Ideation",
      "Enterprise Operating Model Design",
    ],
    tags: ["MBA Consulting", "Sales Enablement", "Process Design", "AI-Assisted Workflow", "Microsoft"],
    lessonsLearned:
      "In enterprise consulting, the quality of the recommendation matters less than the quality of the stakeholder alignment. Recommendations that don't map to how people actually work get ignored. Grounding proposals in seller behavior data — not just process theory — made our recommendations credible and actionable.",
  },
  {
    slug: "amazon-payments-strategy",
    title: "Amazon Business Mexico Payments Strategy",
    subtitle: "MBA consulting: payment rails and SMB segmentation for B2B growth",
    categories: ["Consulting", "MBA Projects"],
    company: "Amazon Business",
    timeframe: "2024–2025",
    featured: true,
    summary:
      "MBA consulting project analyzing market dynamics, competitive landscape, and payment rail adoption to support Amazon Business Mexico SMB growth.",
    problem:
      "SMB customers in Mexico include banked, underbanked, and cash-first segments with different payment preferences and adoption barriers. Amazon Business needed a payment strategy that could support acquisition and retention across these diverse segments.",
    users: ["Amazon Business Mexico SMB customers", "Payment product team", "B2B commerce leadership"],
    role:
      "MBA Consultant — led market research, customer segmentation analysis, payment rail evaluation, and strategic recommendations.",
    approach: [
      "Sized the Mexico B2B payments market across SMB segments",
      "Mapped payment rail options: cards, bank transfer, cash vouchers, embedded finance",
      "Analyzed customer segments: banked, underbanked, and cash-first SMBs",
      "Benchmarked competitor payment options in Mexican B2B commerce",
      "Evaluated embedded finance opportunities for Amazon Business ecosystem",
      "Modeled payment adoption rates and acquisition lift by segment",
    ],
    solution: [
      "Customer segmentation framework for Mexico SMB payment preferences",
      "Payment rail prioritization matrix by segment and acquisition stage",
      "Embedded finance opportunity analysis for long-term growth",
      "Cash-to-digital conversion pathway for cash-first SMBs",
      "Competitive benchmarking of payment options across B2B platforms",
      "Go-to-market recommendations with sequenced rollout approach",
    ],
    impact: [
      "Delivered strategic recommendations to Amazon Business payments team",
      "Segmentation framework provides actionable acquisition targeting",
      "Embedded finance analysis opens new long-term growth avenues",
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
    tags: ["Payments Strategy", "Market Research", "B2B Commerce", "SMB Segmentation", "Amazon Business"],
    lessonsLearned:
      "Payment behavior is deeply cultural and contextual. Bringing in field research and qualitative signals alongside market sizing data produced a more nuanced and credible segmentation than quantitative analysis alone. The most valuable insight was that the underbanked segment — often overlooked — represented the largest addressable growth opportunity.",
  },
  {
    slug: "revenue-splitting-automation",
    title: "Revenue Splitting Automation",
    subtitle: "Automated revenue attribution across business lines at Citi",
    categories: ["FinTech", "Engineering"],
    company: "Citibank",
    timeframe: "2022–2023",
    featured: false,
    summary:
      "Automated revenue attribution and splitting workflow replacing manual reconciliation processes across Citi business lines.",
    problem:
      "Revenue splitting across business lines was a manual, error-prone process requiring significant analyst time. Disputes and reconciliation delays created reporting inaccuracies and operational bottlenecks.",
    users: ["Finance teams", "Revenue analysts", "Business line managers"],
    role:
      "Technical Product Manager — defined requirements, aligned stakeholders across business lines, and drove engineering delivery.",
    approach: [
      "Mapped current-state manual revenue splitting workflow with finance teams",
      "Identified data sources and attribution rules across business lines",
      "Aligned on automated splitting logic with finance and accounting stakeholders",
      "Drove engineering delivery with bi-weekly sprint reviews",
    ],
    solution: [
      "Automated revenue attribution engine with configurable splitting rules",
      "Integration with existing finance reporting systems",
      "Audit trail for all automated splits",
      "Exception handling workflow for edge cases requiring manual review",
    ],
    impact: [
      "Eliminated manual reconciliation for the majority of revenue splits",
      "Reduced reporting errors and dispute resolution time",
      "Freed analyst capacity for higher-value work",
    ],
    metrics: [],
    skills: ["Technical Product Management", "Finance Process Automation", "Stakeholder Alignment", "Workflow Design"],
    tags: ["FinTech", "Automation", "Revenue Management", "Product Management"],
    lessonsLearned:
      "Finance automation projects require deep stakeholder trust before rollout. Running parallel processing (automated + manual) for a full quarter before cutover was essential to building confidence with the finance team.",
  },
  {
    slug: "forecasting-ride-demand",
    title: "Forecasting Ride Demand & Surge Pricing",
    subtitle: "ML-based demand forecasting and dynamic pricing model",
    categories: ["Data Analytics", "Engineering"],
    timeframe: "2023",
    featured: false,
    summary:
      "Machine learning model for forecasting ride demand and optimizing surge pricing strategies based on historical patterns and contextual features.",
    problem:
      "Static pricing models fail to capture the dynamic relationship between demand, supply, time, and location, leading to revenue loss during high-demand periods and poor driver utilization during low-demand periods.",
    users: ["Operations analysts", "Pricing strategy team", "Driver supply team"],
    role:
      "Data science and modeling — built the forecasting model, feature engineering pipeline, and pricing optimization logic.",
    approach: [
      "Explored historical trip data for temporal and spatial demand patterns",
      "Engineered features: time-of-day, day-of-week, weather, events, location clusters",
      "Evaluated multiple model approaches: regression, gradient boosting, time series",
      "Validated model accuracy against held-out test periods",
      "Designed surge pricing tiers based on demand-supply elasticity",
    ],
    solution: [
      "Demand forecasting model with <10% MAPE on test data",
      "Feature engineering pipeline for real-time demand signals",
      "Surge pricing tier recommendations based on predicted demand",
      "Visualization dashboard for demand patterns and pricing scenarios",
    ],
    impact: [
      "Improved forecast accuracy versus baseline heuristic model",
      "Identified underserved high-demand windows for operational focus",
      "Enabled data-driven surge pricing strategy",
    ],
    metrics: [],
    skills: ["R", "Machine Learning", "Time Series Forecasting", "Feature Engineering", "Data Analysis"],
    tags: ["Data Analytics", "Machine Learning", "Forecasting", "Pricing Strategy", "Engineering"],
    lessonsLearned:
      "Feature engineering contributed more to model performance than algorithm choice. Simple, interpretable models with rich features outperformed complex models with basic features. Communicating model uncertainty to business stakeholders required as much effort as building the model itself.",
  },
  {
    slug: "predictive-maintenance-rul",
    title: "Predictive Maintenance RUL Estimation",
    subtitle: "ML model for Remaining Useful Life estimation of industrial equipment",
    categories: ["Data Analytics", "Engineering"],
    timeframe: "2023",
    featured: false,
    summary:
      "Machine learning model for estimating Remaining Useful Life (RUL) of industrial equipment to support predictive maintenance decisions.",
    problem:
      "Reactive maintenance leads to unplanned downtime and high repair costs. Scheduled maintenance wastes resources on equipment that doesn't yet need service. Predictive models enable maintenance at the right time.",
    users: ["Maintenance engineers", "Operations managers", "Reliability teams"],
    role:
      "Data scientist — built the RUL estimation model, feature pipeline, and validation framework.",
    approach: [
      "Analyzed sensor time series data to identify degradation signals",
      "Applied dimensionality reduction to extract key degradation features",
      "Evaluated LSTM, random forest, and regression models for RUL estimation",
      "Validated model performance using RMSE and early/late warning metrics",
    ],
    solution: [
      "RUL estimation model trained on sensor degradation patterns",
      "Feature extraction pipeline from multivariate sensor time series",
      "Uncertainty quantification for RUL predictions",
      "Alert threshold recommendations based on RUL confidence intervals",
    ],
    impact: [
      "Improved RUL prediction accuracy versus baseline mean estimation",
      "Identified equipment near failure threshold earlier than reactive indicators",
      "Provided actionable maintenance scheduling recommendations",
    ],
    metrics: [],
    skills: ["Python", "Machine Learning", "LSTM", "Time Series Analysis", "Predictive Maintenance"],
    tags: ["Data Analytics", "Machine Learning", "Predictive Maintenance", "Engineering", "IoT"],
    lessonsLearned:
      "Domain expertise is irreplaceable in predictive maintenance. Understanding which sensor signals correlate with physical degradation mechanisms required close collaboration with maintenance engineers. Pure ML approaches without domain grounding produced models that were accurate on training data but brittle in deployment.",
  },
];

export const categories = [
  "All",
  "AI",
  "Product Management",
  "FinTech",
  "Healthcare",
  "Consulting",
  "Data Analytics",
  "Engineering",
  "Personal Projects",
  "MBA Projects",
];
