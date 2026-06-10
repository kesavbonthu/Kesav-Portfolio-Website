export interface ConsultingProject {
  slug: string;
  client: string;
  project: string;
  context: string;
  challenge: string;
  approach: string[];
  recommendations: string[];
  impact: string[];
  skills: string[];
  tags: string[];
}

export const consultingProjects: ConsultingProject[] = [
  {
    slug: "microsoft-sales-bom",
    client: "Microsoft",
    project: "Unified Sales BOM Standardization",
    context:
      "Microsoft Unified Sales team engaged UW Foster MBA team to address inconsistencies in Sales Bill of Materials (BOM) creation across seller teams.",
    challenge:
      "Sales BOMs were created inconsistently across teams, slowing deal cycles, creating customer-facing proposal quality issues, and requiring repeated rework. Templates were fragmented, ownership was unclear, and there were no systematic feedback loops to improve quality over time.",
    approach: [
      "Conducted stakeholder interviews with sellers, managers, and sales operations",
      "Audited existing BOM templates and creation workflows",
      "Benchmarked BOM practices from industry research and analogous enterprise workflows",
      "Identified three root causes: template fragmentation, unclear ownership, no feedback loops",
      "Designed tiered BOM structure (Small/Medium/Large) matched to deal complexity",
      "Explored AI-assisted first-draft and seller feedback workflow concepts",
    ],
    recommendations: [
      "Standardized BOM structure with S/M/L sizing model based on deal scope",
      "Unified asset taxonomy and naming conventions across seller teams",
      "Governance framework with defined ownership and review checkpoints",
      "Seller feedback loops and BOM quality scoring mechanism",
      "AI-assisted first-draft concept to reduce creation time and improve consistency",
      "Usage monitoring and adoption tracking dashboard for sales operations",
    ],
    impact: [
      "Recommendations delivered to and accepted by Microsoft stakeholders",
      "Governance framework addresses structural root cause of inconsistency",
      "AI-assisted draft concept expected to reduce BOM creation time meaningfully",
    ],
    skills: [
      "MBA Consulting",
      "Sales Enablement Strategy",
      "Process Design",
      "Stakeholder Alignment",
      "AI Workflow Ideation",
      "Enterprise Operating Model",
    ],
    tags: ["Microsoft", "Sales Enablement", "Process Design", "AI", "MBA"],
  },
  {
    slug: "amazon-business-payments",
    client: "Amazon Business",
    project: "Mexico SMB Payments Strategy",
    context:
      "Amazon Business Mexico engaged UW Foster MBA team to develop a payments strategy for acquiring and retaining SMB customers across Mexico's diverse payment landscape.",
    challenge:
      "Mexico's B2B SMB market spans banked, underbanked, and cash-first customer segments with significantly different payment preferences and adoption barriers. Amazon Business needed clarity on which payment rails to prioritize, in what sequence, to maximize SMB acquisition and long-term retention.",
    approach: [
      "Sized the Mexico B2B SMB payments market by segment",
      "Mapped available payment rails: credit/debit cards, bank transfers, cash vouchers, BNPL, embedded finance",
      "Analyzed three customer segments: banked, underbanked, and cash-first SMBs",
      "Benchmarked competitor payment options across Mexican B2B commerce platforms",
      "Evaluated embedded finance opportunities within the Amazon Business ecosystem",
      "Modeled payment adoption rates and acquisition uplift by segment and rail",
    ],
    recommendations: [
      "Prioritized payment rail rollout sequence by segment addressability and adoption friction",
      "Cash-to-digital conversion pathway targeting cash-first SMBs via OXXO and convenience store rails",
      "Embedded finance partnerships to increase switching cost and lifetime value",
      "Segment-specific onboarding and incentive design for each payment rail",
      "Phased go-to-market approach with metrics to validate each stage before expansion",
    ],
    impact: [
      "Delivered strategic payment roadmap to Amazon Business payments leadership",
      "Segmentation framework provides targeting clarity for acquisition campaigns",
      "Embedded finance analysis surfaces long-term value creation opportunity",
    ],
    skills: [
      "Market Research",
      "B2B Commerce Strategy",
      "Payments Strategy",
      "Customer Segmentation",
      "Growth Modeling",
      "Consulting Communication",
    ],
    tags: ["Amazon Business", "Payments", "B2B Commerce", "Mexico", "SMB", "MBA"],
  },
];
