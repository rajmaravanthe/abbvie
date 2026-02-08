import { LibraryItem, BiteItem } from "@/types";

export const mockLibraryItems: LibraryItem[] = [
  {
    id: "1",
    title: "Clinical Trial Design Best Practices",
    description:
      "Comprehensive guide to designing effective clinical trials with modern methodologies",
    category: "Clinical Research",
    tags: ["Clinical Trials", "Research", "Methodology"],
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "12 min",
    isFeatured: true,
    isTrending: true,
    views: 1250,
    likes: 89,
  },
  {
    id: "2",
    title: "Regulatory Compliance Framework",
    description:
      "Understanding FDA regulations and compliance requirements for pharmaceutical development",
    category: "Regulatory",
    tags: ["FDA", "Compliance", "Regulations"],
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400",
    author: "Michael Chen",
    date: "2024-01-20",
    readTime: "15 min",
    isFeatured: true,
    views: 980,
    likes: 67,
  },
  {
    id: "3",
    title: "Patient Recruitment Strategies",
    description:
      "Innovative approaches to patient recruitment and retention in clinical studies",
    category: "Patient Engagement",
    tags: ["Recruitment", "Patients", "Strategy"],
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
    author: "Emily Rodriguez",
    date: "2024-01-18",
    readTime: "10 min",
    isTrending: true,
    views: 1450,
    likes: 102,
  },
  {
    id: "4",
    title: "Data Analytics in Drug Development",
    description:
      "Leveraging big data and AI for accelerated drug discovery and development",
    category: "Data Science",
    tags: ["Analytics", "AI", "Drug Development"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    author: "Dr. James Wilson",
    date: "2024-01-22",
    readTime: "18 min",
    isFeatured: true,
    isTrending: true,
    views: 2100,
    likes: 156,
  },
  {
    id: "5",
    title: "Quality Assurance Protocols",
    description:
      "Essential QA protocols for maintaining high standards in pharmaceutical manufacturing",
    category: "Quality",
    tags: ["QA", "Manufacturing", "Standards"],
    imageUrl:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    author: "Lisa Anderson",
    date: "2024-01-25",
    readTime: "14 min",
    views: 750,
    likes: 54,
  },
  {
    id: "6",
    title: "Pharmacovigilance Best Practices",
    description:
      "Monitoring and reporting adverse drug reactions in post-market surveillance",
    category: "Safety",
    tags: ["Safety", "Monitoring", "Adverse Events"],
    imageUrl:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    author: "Dr. Robert Kim",
    date: "2024-01-28",
    readTime: "16 min",
    isTrending: true,
    views: 1320,
    likes: 91,
  },
  {
    id: "7",
    title: "Digital Health Technologies",
    description:
      "Exploring the impact of digital health tools on patient outcomes and care delivery",
    category: "Digital Health",
    tags: ["Digital", "Technology", "Innovation"],
    imageUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400",
    author: "Dr. Amanda Foster",
    date: "2024-01-30",
    readTime: "13 min",
    isFeatured: true,
    views: 1680,
    likes: 112,
  },
  {
    id: "8",
    title: "Market Access Strategies",
    description:
      "Navigating payer negotiations and formulary positioning for optimal market access",
    category: "Market Access",
    tags: ["Payers", "Reimbursement", "Strategy"],
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
    author: "Thomas Lee",
    date: "2024-02-01",
    readTime: "17 min",
    isTrending: true,
    views: 1540,
    likes: 98,
  },
  {
    id: "9",
    title: "Real-World Evidence Generation",
    description:
      "Leveraging real-world data to support regulatory decisions and market access",
    category: "Evidence",
    tags: ["RWE", "Data", "Research"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    author: "Dr. Rachel Green",
    date: "2024-02-03",
    readTime: "15 min",
    isFeatured: true,
    isTrending: true,
    views: 1920,
    likes: 134,
  },
  {
    id: "10",
    title: "Supply Chain Resilience",
    description:
      "Building robust pharmaceutical supply chains to ensure continuous product availability",
    category: "Supply Chain",
    tags: ["Logistics", "Operations", "Risk Management"],
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400",
    author: "Kevin Zhang",
    date: "2024-02-05",
    readTime: "14 min",
    views: 1230,
    likes: 87,
  },
  {
    id: "11",
    title: "Precision Medicine Approaches",
    description:
      "Tailoring treatments based on genetic profiles and biomarker analysis",
    category: "Precision Medicine",
    tags: ["Genomics", "Biomarkers", "Personalized"],
    imageUrl:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400",
    author: "Dr. Maria Santos",
    date: "2024-02-07",
    readTime: "19 min",
    isFeatured: true,
    views: 2340,
    likes: 167,
  },
  {
    id: "12",
    title: "Medical Affairs Excellence",
    description:
      "Best practices for medical affairs teams in scientific engagement and education",
    category: "Medical Affairs",
    tags: ["Medical", "Education", "Engagement"],
    imageUrl:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400",
    author: "Dr. John Miller",
    date: "2024-02-09",
    readTime: "16 min",
    isTrending: true,
    views: 1470,
    likes: 103,
  },
  {
    id: "13",
    title: "Oncology Drug Development Pipeline",
    description:
      "Comprehensive overview of oncology drug development strategies and clinical trial design",
    category: "Oncology",
    tags: ["Oncology", "Drug Development", "Clinical Trials"],
    imageUrl:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400",
    author: "Dr. Lisa Anderson",
    date: "2024-02-11",
    readTime: "20 min",
    isFeatured: true,
    views: 2580,
    likes: 189,
  },
  {
    id: "14",
    title: "Patient-Centric Clinical Trials",
    description:
      "Innovative approaches to designing clinical trials with patient experience at the center",
    category: "Clinical Research",
    tags: ["Patient-Centric", "Clinical Trials", "Innovation"],
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
    author: "Jennifer Martinez",
    date: "2024-02-13",
    readTime: "14 min",
    isFeatured: true,
    isTrending: true,
    views: 1890,
    likes: 142,
  },
];

export const mockBites: BiteItem[] = [
  {
    id: "b1",
    title: "Quick Guide: Protocol Amendments",
    description:
      "Learn the essential steps for submitting protocol amendments efficiently",
    category: "Regulatory",
    duration: "5 min",
    imageUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300",
    author: "Regulatory Team",
    date: "2024-02-01",
  },
  {
    id: "b2",
    title: "Understanding ICH Guidelines",
    description:
      "A brief overview of International Council for Harmonisation standards",
    category: "Standards",
    duration: "7 min",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300",
    author: "Compliance Team",
    date: "2024-02-02",
  },
  {
    id: "b3",
    title: "Patient Consent Forms 101",
    description: "Key elements every informed consent form must include",
    category: "Ethics",
    duration: "6 min",
    imageUrl:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=300",
    author: "Ethics Committee",
    date: "2024-02-03",
  },
  {
    id: "b4",
    title: "Data Integrity Essentials",
    description: "Maintaining ALCOA+ principles in clinical data management",
    category: "Data Management",
    duration: "8 min",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300",
    author: "Data Team",
    date: "2024-02-04",
  },
];

export const categories = [
  "Clinical Research",
  "Regulatory",
  "Patient Engagement",
  "Data Science",
  "Quality",
  "Safety",
  "Standards",
  "Ethics",
  "Data Management",
];

export const tags = [
  "Clinical Trials",
  "Research",
  "Methodology",
  "FDA",
  "Compliance",
  "Regulations",
  "Recruitment",
  "Patients",
  "Strategy",
  "Analytics",
  "AI",
  "Drug Development",
  "QA",
  "Manufacturing",
  "Standards",
  "Safety",
  "Monitoring",
  "Adverse Events",
];
