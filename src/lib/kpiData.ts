export interface KPIAsset {
  id: string;
  name: string;
  description: string;
  businessQuestions: string[];
  metricsDe: string;
  funcSpec: string;
  calculation: string;
  visualsAvailable: string[];
  affiliateApplicability: string[];
  author?: string;
  date?: string;
  views?: number;
  tags?: string[];
}

export const mockKPIs: KPIAsset[] = [
  {
    id: "kpi1",
    name: "Market Share by Therapeutic Area",
    description:
      "Track market share percentage across different therapeutic areas with trend analysis",
    businessQuestions: ["Market penetration", "Competitive analysis"],
    metricsDe: "Percentage",
    funcSpec: "Commercial Analytics",
    calculation: "(Our Sales / Total Market Sales) * 100",
    visualsAvailable: ["Bar Chart", "Line Chart", "Pie Chart"],
    affiliateApplicability: ["US", "EU", "Global"],
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    views: 1250,
    tags: ["Market Analysis", "Therapeutic Area"],
  },
  {
    id: "kpi2",
    name: "Patient Adherence Rate",
    description:
      "Monitor patient medication adherence rates and identify improvement opportunities",
    businessQuestions: ["Patient compliance", "Treatment effectiveness"],
    metricsDe: "Rate",
    funcSpec: "Patient Experience",
    calculation: "(Days Medication Taken / Days Prescribed) * 100",
    visualsAvailable: ["Gauge Chart", "Trend Line", "Heat Map"],
    affiliateApplicability: ["EU", "APAC"],
    author: "Michael Chen",
    date: "Dec 14, 2024",
    views: 980,
    tags: ["Patient Care", "Adherence"],
  },
  {
    id: "kpi3",
    name: "Clinical Trial Success Rate",
    description:
      "Measure the success rate of clinical trials by phase and therapeutic area",
    businessQuestions: ["R&D efficiency", "Pipeline health"],
    metricsDe: "Percentage",
    funcSpec: "R&D Operations",
    calculation: "(Successful Trials / Total Trials) * 100",
    visualsAvailable: ["Funnel Chart", "Bar Chart", "Waterfall"],
    affiliateApplicability: ["Global"],
    author: "Dr. Emily Rodriguez",
    date: "Dec 13, 2024",
    views: 1450,
    tags: ["Clinical Trials", "R&D"],
  },
  {
    id: "kpi4",
    name: "HCP Engagement Score",
    description:
      "Track healthcare professional engagement levels and interaction quality",
    businessQuestions: ["HCP satisfaction", "Relationship strength"],
    metricsDe: "Score",
    funcSpec: "HCP Relations",
    calculation:
      "Weighted average of interaction frequency, quality, and feedback",
    visualsAvailable: ["Scatter Plot", "Box Plot", "Line Chart"],
    affiliateApplicability: ["US", "APAC"],
    author: "James Wilson",
    date: "Dec 12, 2024",
    views: 875,
    tags: ["HCP", "Engagement"],
  },
  {
    id: "kpi5",
    name: "Revenue Growth Rate",
    description:
      "Monitor revenue growth across products and therapeutic areas with quarterly comparisons",
    businessQuestions: ["Revenue trends", "Product performance"],
    metricsDe: "Percentage",
    funcSpec: "Finance",
    calculation:
      "((Current Revenue - Previous Revenue) / Previous Revenue) * 100",
    visualsAvailable: ["Line Chart", "Bar Chart", "Area Chart"],
    affiliateApplicability: ["US", "EU", "Global"],
    author: "Amanda Foster",
    date: "Dec 11, 2024",
    views: 1120,
    tags: ["Revenue", "Growth"],
  },
  {
    id: "kpi6",
    name: "Drug Safety Incident Rate",
    description:
      "Track and analyze adverse event reports and safety incidents across products",
    businessQuestions: ["Safety monitoring", "Risk assessment"],
    metricsDe: "Rate",
    funcSpec: "Pharmacovigilance",
    calculation: "(Number of Incidents / Total Patients) * 1000",
    visualsAvailable: ["Heat Map", "Trend Line", "Scatter Plot"],
    affiliateApplicability: ["Global"],
    author: "Dr. Thomas Lee",
    date: "Dec 10, 2024",
    views: 1680,
    tags: ["Safety", "Adverse Events"],
  },
  {
    id: "kpi7",
    name: "Sales Force Effectiveness",
    description:
      "Measure sales representative productivity and territory performance metrics",
    businessQuestions: ["Sales productivity", "Territory optimization"],
    metricsDe: "Score",
    funcSpec: "Sales Operations",
    calculation: "Weighted score of calls, conversions, and revenue per rep",
    visualsAvailable: ["Bar Chart", "Bubble Chart", "Map"],
    affiliateApplicability: ["US", "EU", "APAC"],
    author: "Rachel Green",
    date: "Dec 9, 2024",
    views: 945,
    tags: ["Sales", "Effectiveness"],
  },
  {
    id: "kpi8",
    name: "Time to Market",
    description:
      "Track the time from drug discovery to market launch across pipeline products",
    businessQuestions: ["Development efficiency", "Pipeline velocity"],
    metricsDe: "Duration",
    funcSpec: "R&D Operations",
    calculation: "Launch Date - Discovery Start Date (in months)",
    visualsAvailable: ["Gantt Chart", "Timeline", "Waterfall"],
    affiliateApplicability: ["Global"],
    author: "Dr. Kevin Zhang",
    date: "Dec 8, 2024",
    views: 1390,
    tags: ["R&D", "Timeline"],
  },
  {
    id: "kpi9",
    name: "Patient Satisfaction Score",
    description:
      "Measure patient satisfaction with treatment experience and support services",
    businessQuestions: ["Patient experience", "Service quality"],
    metricsDe: "Score",
    funcSpec: "Patient Support",
    calculation: "Average of patient survey responses (1-10 scale)",
    visualsAvailable: ["Gauge Chart", "Bar Chart", "Trend Line"],
    affiliateApplicability: ["US", "EU", "APAC"],
    author: "Maria Santos",
    date: "Dec 7, 2024",
    views: 1025,
    tags: ["Patient Satisfaction", "Experience"],
  },
  {
    id: "kpi10",
    name: "Manufacturing Yield Rate",
    description:
      "Monitor production yield and efficiency across manufacturing facilities",
    businessQuestions: ["Production efficiency", "Quality control"],
    metricsDe: "Percentage",
    funcSpec: "Manufacturing",
    calculation: "(Acceptable Units / Total Units Produced) * 100",
    visualsAvailable: ["Line Chart", "Control Chart", "Pareto"],
    affiliateApplicability: ["Global"],
    author: "John Miller",
    date: "Dec 6, 2024",
    views: 890,
    tags: ["Manufacturing", "Quality"],
  },
];
