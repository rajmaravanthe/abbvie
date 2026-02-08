export interface LayoutAsset {
  id: string;
  name: string;
  description: string;
  category: string;
  amountOfPages: number;
  kpisUsingChart: string[];
  previewLayout?: string;
  affiliate?: string;
  author?: string;
  date?: string;
  views?: number;
  tags?: string[];
}

export const mockLayouts: LayoutAsset[] = [
  {
    id: "layout1",
    name: "Executive Dashboard - Commercial Performance",
    description:
      "Comprehensive dashboard showing key commercial metrics including sales, market share, and revenue trends",
    category: "Commercial",
    amountOfPages: 3,
    kpisUsingChart: [
      "Market Share",
      "Revenue Growth",
      "Sales Velocity",
      "Customer Acquisition",
    ],
    affiliate: "US",
    author: "David Martinez",
    date: "Dec 16, 2024",
    views: 2100,
    tags: ["Executive", "Sales"],
  },
  {
    id: "layout2",
    name: "Patient Journey Analytics",
    description:
      "Dashboard tracking patient journey from diagnosis through treatment and outcomes",
    category: "Patient Experience",
    amountOfPages: 2,
    kpisUsingChart: [
      "Patient Adherence",
      "Treatment Outcomes",
      "Satisfaction Score",
    ],
    affiliate: "EU",
    author: "Lisa Anderson",
    date: "Dec 15, 2024",
    views: 1650,
    tags: ["Patient Journey", "Outcomes"],
  },
  {
    id: "layout3",
    name: "Clinical Trial Pipeline Overview",
    description:
      "Visual representation of clinical trial pipeline with phase progression and success metrics",
    category: "R&D",
    amountOfPages: 5,
    kpisUsingChart: [
      "Trial Success Rate",
      "Pipeline Value",
      "Time to Market",
      "Phase Progression",
      "Enrollment Rate",
    ],
    affiliate: "Global",
    author: "Dr. Robert Kim",
    date: "Dec 14, 2024",
    views: 1890,
    tags: ["Pipeline", "Clinical Trials"],
  },
  {
    id: "layout4",
    name: "HCP Engagement Dashboard",
    description:
      "Track healthcare professional interactions, engagement levels, and relationship strength",
    category: "HCP Relations",
    amountOfPages: 2,
    kpisUsingChart: ["HCP Engagement Score", "Interaction Frequency", "NPS"],
    affiliate: "APAC",
    author: "Jennifer Lee",
    date: "Dec 13, 2024",
    views: 1420,
    tags: ["HCP", "Engagement"],
  },
  {
    id: "layout5",
    name: "Market Access Performance",
    description:
      "Dashboard showing market access metrics including payer coverage, formulary status, and reimbursement rates",
    category: "Market Access",
    amountOfPages: 3,
    kpisUsingChart: [
      "Payer Coverage",
      "Formulary Tier",
      "Reimbursement Rate",
      "Prior Authorization Rate",
    ],
    affiliate: "US",
    author: "Sarah Williams",
    date: "Dec 12, 2024",
    views: 1780,
    tags: ["Market Access", "Payers"],
  },
  {
    id: "layout6",
    name: "Supply Chain Analytics",
    description:
      "Track supply chain efficiency, inventory levels, and distribution metrics across regions",
    category: "Supply Chain",
    amountOfPages: 4,
    kpisUsingChart: [
      "Inventory Turnover",
      "Order Fulfillment Rate",
      "Lead Time",
      "Stock Availability",
    ],
    affiliate: "Global",
    author: "Michael Brown",
    date: "Dec 11, 2024",
    views: 1540,
    tags: ["Supply Chain", "Logistics"],
  },
  {
    id: "layout7",
    name: "Competitive Intelligence Dashboard",
    description:
      "Monitor competitor activities, market positioning, and competitive landscape analysis",
    category: "Competitive Intelligence",
    amountOfPages: 3,
    kpisUsingChart: [
      "Market Share Comparison",
      "Competitor Pricing",
      "Launch Activity",
    ],
    affiliate: "EU",
    author: "Alexandra Chen",
    date: "Dec 10, 2024",
    views: 1920,
    tags: ["Competitive", "Market Intelligence"],
  },
  {
    id: "layout8",
    name: "Medical Affairs Dashboard",
    description:
      "Track medical education activities, publication metrics, and scientific engagement",
    category: "Medical Affairs",
    amountOfPages: 2,
    kpisUsingChart: [
      "Publication Count",
      "Congress Attendance",
      "Medical Inquiries",
    ],
    affiliate: "Global",
    author: "Dr. James Peterson",
    date: "Dec 9, 2024",
    views: 1350,
    tags: ["Medical Affairs", "Publications"],
  },
  {
    id: "layout9",
    name: "Regulatory Compliance Tracker",
    description:
      "Monitor regulatory submissions, approvals, and compliance status across markets",
    category: "Regulatory",
    amountOfPages: 4,
    kpisUsingChart: [
      "Submission Status",
      "Approval Timeline",
      "Compliance Score",
      "Inspection Results",
    ],
    affiliate: "Global",
    author: "Patricia Moore",
    date: "Dec 8, 2024",
    views: 1670,
    tags: ["Regulatory", "Compliance"],
  },
  {
    id: "layout10",
    name: "Digital Marketing Performance",
    description:
      "Analyze digital marketing campaigns, engagement metrics, and ROI across channels",
    category: "Marketing",
    amountOfPages: 3,
    kpisUsingChart: [
      "Campaign ROI",
      "Engagement Rate",
      "Conversion Rate",
      "Channel Performance",
    ],
    affiliate: "US",
    author: "Daniel Garcia",
    date: "Dec 7, 2024",
    views: 1490,
    tags: ["Digital Marketing", "ROI"],
  },
];
