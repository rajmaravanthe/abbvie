export interface StorybookAsset {
  id: string;
  name: string;
  description: string;
  category: string;
  coupledTransitions: string[];
  applicableAffiliates: string[];
  author?: string;
  date?: string;
  views?: number;
  tags?: string[];
}

export const mockStorybooks: StorybookAsset[] = [
  {
    id: "storybook1",
    name: "Q4 Commercial Performance Presentation",
    description:
      "PowerPoint presentation with comprehensive charts showing Q4 sales performance and market trends",
    category: "Commercial",
    coupledTransitions: ["Fade", "Slide", "Zoom"],
    applicableAffiliates: ["US", "EU"],
    author: "Mark Thompson",
    date: "Dec 18, 2024",
    views: 1850,
    tags: ["Q4", "Sales"],
  },
  {
    id: "storybook2",
    name: "Patient Outcomes Analysis",
    description:
      "Visual presentation of patient outcome data with comparative analysis across treatment groups",
    category: "Patient Experience",
    coupledTransitions: ["Morph", "Fade"],
    applicableAffiliates: ["EU", "APAC"],
    author: "Dr. Anna Schmidt",
    date: "Dec 17, 2024",
    views: 1320,
    tags: ["Outcomes", "Analysis"],
  },
  {
    id: "storybook3",
    name: "Clinical Trial Results Summary",
    description:
      "PowerPoint deck summarizing Phase III trial results with efficacy and safety data visualizations",
    category: "R&D",
    coupledTransitions: ["Push", "Wipe", "Fade"],
    applicableAffiliates: ["Global"],
    author: "Dr. Patricia Wong",
    date: "Dec 16, 2024",
    views: 2240,
    tags: ["Clinical Trials", "Results"],
  },
  {
    id: "storybook4",
    name: "HCP Engagement Strategy Review",
    description:
      "Strategic presentation showing HCP engagement metrics and relationship building initiatives",
    category: "HCP Relations",
    coupledTransitions: ["Reveal", "Fade"],
    applicableAffiliates: ["US", "APAC"],
    author: "Kevin Park",
    date: "Dec 15, 2024",
    views: 1560,
    tags: ["Strategy", "HCP"],
  },
  {
    id: "storybook5",
    name: "Market Access Strategy Presentation",
    description:
      "Comprehensive presentation on payer strategies, formulary positioning, and access optimization",
    category: "Market Access",
    coupledTransitions: ["Slide", "Fade"],
    applicableAffiliates: ["US", "EU"],
    author: "Rebecca Taylor",
    date: "Dec 14, 2024",
    views: 1730,
    tags: ["Market Access", "Strategy"],
  },
  {
    id: "storybook6",
    name: "Supply Chain Optimization Review",
    description:
      "Visual presentation of supply chain improvements and efficiency gains across distribution network",
    category: "Supply Chain",
    coupledTransitions: ["Push", "Fade"],
    applicableAffiliates: ["Global"],
    author: "Christopher Davis",
    date: "Dec 13, 2024",
    views: 1450,
    tags: ["Supply Chain", "Optimization"],
  },
  {
    id: "storybook7",
    name: "Competitive Landscape Analysis",
    description:
      "PowerPoint deck analyzing competitive positioning, market dynamics, and strategic opportunities",
    category: "Competitive Intelligence",
    coupledTransitions: ["Morph", "Zoom", "Fade"],
    applicableAffiliates: ["US", "EU", "APAC"],
    author: "Sophia Martinez",
    date: "Dec 12, 2024",
    views: 1980,
    tags: ["Competitive", "Analysis"],
  },
  {
    id: "storybook8",
    name: "Medical Education Summit Deck",
    description:
      "Presentation for medical education events with latest clinical data and treatment guidelines",
    category: "Medical Affairs",
    coupledTransitions: ["Reveal", "Fade"],
    applicableAffiliates: ["Global"],
    author: "Dr. William Johnson",
    date: "Dec 11, 2024",
    views: 1620,
    tags: ["Medical Education", "Clinical Data"],
  },
  {
    id: "storybook9",
    name: "Regulatory Submission Package",
    description:
      "Comprehensive regulatory submission presentation with efficacy, safety, and quality data",
    category: "Regulatory",
    coupledTransitions: ["Slide", "Fade"],
    applicableAffiliates: ["Global"],
    author: "Elizabeth White",
    date: "Dec 10, 2024",
    views: 2150,
    tags: ["Regulatory", "Submission"],
  },
  {
    id: "storybook10",
    name: "Digital Marketing Campaign Results",
    description:
      "Results presentation showing digital campaign performance, engagement metrics, and ROI analysis",
    category: "Marketing",
    coupledTransitions: ["Zoom", "Fade"],
    applicableAffiliates: ["US", "EU"],
    author: "Andrew Miller",
    date: "Dec 9, 2024",
    views: 1540,
    tags: ["Digital Marketing", "Results"],
  },
];
