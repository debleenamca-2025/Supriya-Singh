export type CaseCategory = 'all' | 'bench' | 'forecasting' | 'deployment';

export interface KpiMetric {
  value: string;
  label: string;
  context: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  organization: string;
  period: string;
  category: Exclude<CaseCategory, 'all'>;
  categoryLabel: string;
  beforeMetric: string;
  afterMetric: string;
  metricUnit: string;
  summary: string;
  challenge: string;
  strategy: string[];
  outcome: string;
  tools: string[];
}

export interface BenchmarkBar {
  id: string;
  label: string;
  organization: string;
  beforeLabel: string;
  afterLabel: string;
  beforePct: number;
  afterPct: number;
  deltaText: string;
  direction: 'down-good' | 'up-good';
}

export interface PlaybookPillar {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  practices: string[];
  deliverables: string;
}

export interface RoleStage {
  title: string;
  period: string;
  bullets: string[];
}

export interface CareerEntry {
  id: string;
  company: string;
  shortName: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  scope: string;
  summary: string;
  highlights: string[];
  kras: {
    area: string;
    detail: string;
  }[];
  stages?: RoleStage[];
  tools: string[];
}

export interface CompetencyGroup {
  index: string;
  domain: string;
  description: string;
  items: string[];
}

export const PROFILE = {
  name: 'Supriya Singh',
  headlineTitle: 'Senior Workforce Manager & India Resource Planning Lead',
  location: 'Noida, Uttar Pradesh, India',
  experienceYears: '13.6 Years',
  email: 'supriyasingh009@gmail.com',
  phone: '+91 9591041870',
  linkedinUrl: 'https://www.linkedin.com/in/supriyasingh9',
  linkedinHandle: 'linkedin.com/in/supriyasingh9',
  photoPath: '/assets/aistudio/Supriya_Singh_b0e4fd9d.jpg',
  cvPdfPath: '/assets/aistudio/SupriyaSingh_WFM_04ae095a.pdf',
  linkedinPdfPath: '/assets/aistudio/Profile__1__6fd45686.pdf',
  languages: 'English · Hindi',
  heroHeadline: 'Turning workforce capacity into measurable enterprise performance.',
  heroSummary:
    'Workforce and Resource Management leader with over 13 years across NashTech, Axtria, Happiest Minds, Publicis Sapient, and Wipro—aligning talent supply, bench economics, and forecasting precision with global delivery goals.',
  aboutNarrative:
    'With a foundation in Computer Science Engineering and ERP implementation followed by more than a decade leading workforce strategy, I bridge business demand with actionable talent architecture. From authoring global bench charters and building PowerApps-Python resourcing tools to orchestrating 450-person capacity pods and platinum client accounts, my focus remains constant: sharper forecasting, leaner bench costs, and meaningful career deployment for every engineer.',
};

export const HERO_KPIS: KpiMetric[] = [
  {
    value: '13.6 Yrs',
    label: 'Workforce Leadership',
    context: 'Five global IT & consulting firms',
  },
  {
    value: '23% → 10.3%',
    label: 'Bench Cost Reduction',
    context: 'Structured skill mapping at NashTech',
  },
  {
    value: '73% → 94%',
    label: 'Forecasting Accuracy',
    context: 'Six-month pipeline modelling at NashTech',
  },
  {
    value: '50% → 65%',
    label: 'Internal Fulfilment',
    context: 'Inter-LOB rotation & SharePoint hub at Axtria',
  },
];

export const MARQUEE_ITEMS = [
  'Strategic Workforce Planning',
  'Bench Cost Optimisation',
  'Demand & Supply Alignment',
  'Six-Month Capacity Forecasting',
  'PowerApps & Python Automation',
  'Power BI Executive Analytics',
  'Global Account Resourcing',
  'Inter-LOB Talent Rotation',
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nashtech-bench',
    title: 'India Bench Cost Turnaround & Skill Readiness',
    organization: 'NashTech India',
    period: 'Jul 2025 – Present',
    category: 'bench',
    categoryLabel: 'Bench & Cost',
    beforeMetric: '23.0%',
    afterMetric: '10.3%',
    metricUnit: 'Bench Cost Ratio',
    summary:
      'Lowered India bench cost from 23% down to 10.3% through structured skill mapping, internal redeployment, and targeted bench upskilling.',
    challenge:
      'Elevated non-billable bench carry across India delivery units created margin pressure while open project demands required faster internal skill matching.',
    strategy: [
      'Conducted granular skill-gap audits across bench engineers and mapped profiles directly to upcoming delivery pipelines.',
      'Instituted end-to-end training and development plans for bench cohorts to accelerate billable readiness.',
      'Partnered with delivery heads and HR on proactive internal movements, shift roster governance, and continuous engagement.',
    ],
    outcome:
      'Cut bench costs by more than half (from 23% to 10.3%–11.3% operational range) while safeguarding delivery SLA readiness.',
    tools: ['Skill Mapping Matrix', 'Roster & Shift Governance', 'Bench Upskilling Plans'],
  },
  {
    id: 'nashtech-forecast',
    title: 'Six-Month Predictive Workforce Forecasting Engine',
    organization: 'NashTech India',
    period: 'Jul 2025 – Present',
    category: 'forecasting',
    categoryLabel: 'Forecasting & Tools',
    beforeMetric: '73%',
    afterMetric: '94%',
    metricUnit: 'Forecasting Accuracy',
    summary:
      'Raised workforce forecasting precision by 21 percentage points by integrating release schedules, seasonality, and demand pipelines.',
    challenge:
      'Reactive hiring and fragmented visibility into upcoming project roll-offs led to alternating cycles of overstaffing and last-minute talent shortages.',
    strategy: [
      'Analysed historical labour volume trends, seasonal patterns, and business cycles across Indian delivery centres.',
      'Consolidated resource availability, project roll-off dates, and future staffing commitments into a unified forward six-month forecast.',
      'Aligned national headcount targets and attendance compliance tracking with executive leadership reviews.',
    ],
    outcome:
      'Improved workforce forecasting accuracy from 73% to 94%, giving management a reliable six-month horizon for hiring and bench decisions.',
    tools: ['6-Month Capacity Model', 'Demand-Supply Analytics', 'Attendance Compliance'],
  },
  {
    id: 'axtria-rise-sharepoint',
    title: 'Rise@Axtria Automation & SharePoint Demand Hub',
    organization: 'Axtria — Ingenious Insights',
    period: 'Nov 2023 – Jul 2025',
    category: 'forecasting',
    categoryLabel: 'Forecasting & Tools',
    beforeMetric: '50%',
    afterMetric: '65%',
    metricUnit: 'Internal Fulfilment Rate',
    summary:
      'Guided development of Rise@Axtria (PowerApps + Python) and a SharePoint demand platform while lifting internal fulfilment from 50% to 65%.',
    challenge:
      'Decentralised resourcing workflows and manual weekly reporting obscured cross-LOB bench visibility and slowed internal fulfilment.',
    strategy: [
      'Co-authored the Global Bench Policy and GWFM Charter to standardise governance across all business units.',
      'Guided the architecture of Rise@Axtria using Microsoft PowerApps and Python to streamline allocations and automate weekly/monthly reporting.',
      'Launched a SharePoint-based demand management portal, revamped pricing sheet capacity templates, and initiated dynamic Power BI dashboards.',
    ],
    outcome:
      'Increased internal fulfilment from 50% to 65%, reduced Axtria bench cost from 13.5% to 10.5%, and replaced manual tracking with real-time executive visibility.',
    tools: ['Microsoft PowerApps', 'Python', 'Power BI', 'SharePoint'],
  },
  {
    id: 'wipro-global-scale',
    title: 'Multi-Geography Rapid Deployment & Platinum Account',
    organization: 'Wipro Limited',
    period: 'May 2015 – Apr 2022',
    category: 'deployment',
    categoryLabel: 'Global Scale',
    beforeMetric: '100+',
    afterMetric: '30 Days',
    metricUnit: 'Global Resources Mobilised',
    summary:
      'Mobilised 100+ resources across multiple international geographies inside one month, earning Supply Chain Champion recognition.',
    challenge:
      'High-stakes Platinum Client expansion and new deal ramp-ups demanded rapid cross-border staffing without diluting seniority mix or proposal coverage.',
    strategy: [
      'Led a 3-member resourcing pod managing end-to-end demand fulfilment, proposal coverage, and financial budget alignment for a Platinum account.',
      'Orchestrated strategic rotations of senior engineers into flagship deal roles while deploying lateral and rookie virtual benches.',
      'Maintained tight SLA governance with global client partners, delivery heads, and regional Talent Acquisition teams.',
    ],
    outcome:
      'Successfully deployed 100+ professionals globally within 30 days and won both Supply Chain Champion and Best Supply Chain Team Player honours.',
    tools: ['Global Talent Rotation', 'Proposal Coverage', 'Executive SLA Reporting'],
  },
];

export const BENCHMARK_BARS: BenchmarkBar[] = [
  {
    id: 'bench-nashtech',
    label: 'India Bench Cost Ratio',
    organization: 'NashTech India',
    beforeLabel: '23.0%',
    afterLabel: '10.3%',
    beforePct: 92,
    afterPct: 41,
    deltaText: '-12.7 pts reduction',
    direction: 'down-good',
  },
  {
    id: 'bench-axtria',
    label: 'Enterprise Bench Cost',
    organization: 'Axtria',
    beforeLabel: '13.5%',
    afterLabel: '10.5%',
    beforePct: 68,
    afterPct: 52,
    deltaText: '-3.0 pts optimisation',
    direction: 'down-good',
  },
  {
    id: 'forecast-nashtech',
    label: 'Workforce Forecast Accuracy',
    organization: 'NashTech India',
    beforeLabel: '73%',
    afterLabel: '94%',
    beforePct: 73,
    afterPct: 94,
    deltaText: '+21 pts accuracy gain',
    direction: 'up-good',
  },
  {
    id: 'fulfilment-axtria',
    label: 'Internal Demand Fulfilment',
    organization: 'Axtria',
    beforeLabel: '50%',
    afterLabel: '65%',
    beforePct: 50,
    afterPct: 65,
    deltaText: '+15 pts internal lift',
    direction: 'up-good',
  },
];

export const PLAYBOOK_PILLARS: PlaybookPillar[] = [
  {
    id: 'forecasting',
    index: '01',
    title: 'Demand & Capacity Forecasting',
    subtitle: 'Six-month forward visibility built on historical cycles',
    description:
      'Translating sales pipelines, seasonality, and project roll-off schedules into dependable headcount models before bottlenecks emerge.',
    practices: [
      'Correlate historical labour volume trends with upcoming deal wins and ramp schedules.',
      'Revamp commercial pricing sheet templates to embed proactive capacity buffers.',
      'Deliver six-month rolling bench and hiring forecasts to executive leadership.',
    ],
    deliverables: 'Six-Month Rolling Forecast · Headcount & Pricing Models',
  },
  {
    id: 'bench-governance',
    index: '02',
    title: 'Bench Governance & Cost Control',
    subtitle: 'Turning unbilled talent into ready, deployable capability',
    description:
      'Treating the bench as an active capability pipeline rather than idle inventory—combining policy rigor with empathetic talent engagement.',
    practices: [
      'Establish formal Global Bench Policies and GWFM Charters across delivery lines.',
      'Track virtual and existing benches across lateral specialists and rookie cohorts.',
      'Run structured upskilling plans, career alignment check-ins, and attrition risk flags.',
    ],
    deliverables: 'Global Bench Policy · GWFM Charter · Upskilling Roadmaps',
  },
  {
    id: 'automation',
    index: '03',
    title: 'Resourcing Automation & BI',
    subtitle: 'Replacing spreadsheet lag with real-time operational telemetry',
    description:
      'Applying an engineering background in Computer Science and ERP systems to automate reporting and build purpose-built resourcing tools.',
    practices: [
      'Guide internal tool builds such as Rise@Axtria using Microsoft PowerApps and Python.',
      'Deploy SharePoint-based demand portals for transparent cross-unit nomination tracking.',
      'Automate weekly bench, timesheet compliance, and skill-matrix dashboards in Power BI.',
    ],
    deliverables: 'PowerApps Tools · Power BI Dashboards · Automated Weekly Briefs',
  },
  {
    id: 'stakeholders',
    index: '04',
    title: 'Pod & Platinum Account Alignment',
    subtitle: 'Balancing client SLAs, business margins, and engineer aspirations',
    description:
      'Serving as a trusted advisor to delivery heads, capability leads, Talent Acquisition, and global client partners.',
    practices: [
      'Manage deployment for large capacity pods (250–450 engineers) with utilisation discipline.',
      'Orchestrate inter-LOB rotations of senior specialists for strategic new deal pursuits.',
      'Provide market intelligence on India technical talent demographics to guide hiring vs. build.',
    ],
    deliverables: 'Pod Capacity Plans · Inter-LOB Rotation Governance · TA Alignment',
  },
];

export const CAREER_TIMELINE: CareerEntry[] = [
  {
    id: 'nashtech',
    company: 'NashTech India Pvt. Ltd.',
    shortName: 'NashTech',
    role: 'Senior Workforce Manager · India Resource Planning Lead',
    period: 'Jul 2025 – Present',
    duration: 'Current Role',
    location: 'Noida, Uttar Pradesh, India',
    scope: 'National India Workforce Planning, Scheduling & Bench Governance',
    summary:
      'Leading India-wide workforce forecasting, shift and roster optimisation, bench reduction, and demand-supply alignment across delivery centres.',
    highlights: [
      'Reduced bench cost by 23%, bringing it down to 10.3% via structured skill mapping and internal redeployments.',
      'Improved workforce forecasting accuracy from 73% to 94% using availability and roll-off analytics.',
      'Delivered forward-looking six-month bench forecasts and compliance governance for India leadership.',
    ],
    kras: [
      {
        area: 'Strategic Workforce Planning',
        detail:
          'Forecasted labour demand, volume trends, seasonality, and business cycles using historical data to align staffing levels and long-term headcount with national objectives.',
      },
      {
        area: 'Scheduling & Resource Optimisation',
        detail:
          'Governed shift patterns, roster planning, and task allocation to deploy right-skilled engineers on time while preventing overstaffing or understaffing.',
      },
      {
        area: 'Training & Bench Readiness',
        detail:
          'Facilitated end-to-end training and development plans for bench employees to strengthen skill readiness and accelerate deployment.',
      },
      {
        area: 'Demand-Supply & Compliance',
        detail:
          'Monitored gaps between business demand, open opportunities, and bench capacity alongside India workforce attendance compliance.',
      },
    ],
    tools: ['6-Month Forecasting Models', 'Skill Mapping', 'Roster Governance', 'Compliance Analytics'],
  },
  {
    id: 'axtria',
    company: 'Axtria — Ingenious Insights',
    shortName: 'Axtria',
    role: 'Resource Manager',
    period: 'Nov 2023 – Jul 2025',
    duration: '1 yr 9 mos',
    location: 'Noida, Uttar Pradesh, India',
    scope: 'Enterprise Centralised WFM, Policy Charter & Resourcing Tooling',
    summary:
      'Institutionalised global bench governance, spearheaded in-house PowerApps/Python automation, and lifted internal fulfilment across business lines.',
    highlights: [
      'Guided development of Rise@Axtria using Microsoft PowerApps and Python to streamline resourcing operations.',
      'Increased internal fulfilment from 50% to 65% through a SharePoint demand platform and inter-LOB rotations.',
      'Reduced enterprise bench cost from 13.5% to 10.5% while automating bench and timesheet analytics in Power BI.',
    ],
    kras: [
      {
        area: 'Policy & Governance Framework',
        detail:
          'Developed and documented the Global Bench Policy and GWFM Charter to establish structured, auditable resource management practices.',
      },
      {
        area: 'Rise@Axtria & Reporting Automation',
        detail:
          'Guided creation of Rise@Axtria (PowerApps + Python), automated weekly/monthly bench and defaulter reports, and initiated dynamic Power BI dashboards.',
      },
      {
        area: 'Capacity & Pricing Architecture',
        detail:
          'Revamped pricing sheet templates to strengthen proactive capacity planning and headcount forecasting across deals.',
      },
      {
        area: 'Centralised Management & Fulfilment',
        detail:
          'Championed organisation-wide centralisation of resourcing and drove inter-LOB movements to raise internal fulfilment to 65%.',
      },
    ],
    tools: ['Microsoft PowerApps', 'Python', 'Power BI', 'SharePoint', 'GWFM Charter'],
  },
  {
    id: 'happiest-minds',
    company: 'Happiest Minds Technologies',
    shortName: 'Happiest Minds',
    role: 'Associate Manager — Resource Management',
    period: 'Apr 2023 – Nov 2023',
    duration: '8 mos',
    location: 'Bengaluru, Karnataka, India',
    scope: 'Infrastructure Management & Security Services (IMSS) Business Unit',
    summary:
      'Owned end-to-end fulfilment, bench career engagement, attrition risk mitigation, and TA coordination for the IMSS business unit.',
    highlights: [
      'Managed complete resourcing lifecycle and demand fulfilment for the specialised IMSS Business Unit.',
      'Conducted bench development conversations to resolve motivational concerns and flag early attrition risks.',
      'Maintained high-integrity talent records covering competencies, feedback, release dates, and travel readiness.',
    ],
    kras: [
      {
        area: 'End-to-End IMSS Fulfilment',
        detail:
          'Managed complete resourcing requirements and internal/external fulfilment pipelines for the Infrastructure Management and Security Services unit.',
      },
      {
        area: 'Bench Engagement & Retention',
        detail:
          'Engaged with bench engineers to identify internal assignments, facilitate growth discussions, and mitigate attrition risks.',
      },
      {
        area: 'Cross-Functional People Partnership',
        detail:
          'Collaborated with People Strategy, Learning & Development, capability leads, and supervisors on performance, training needs, and domain transitions.',
      },
      {
        area: 'External Hiring & Data Governance',
        detail:
          'Coordinated external requisitions with Talent Acquisition while keeping role histories, competencies, and resumes audit-ready.',
      },
    ],
    tools: ['IMSS Resourcing', 'Retention & Engagement', 'L&D Alignment', 'TA Coordination'],
  },
  {
    id: 'publicis-sapient',
    company: 'Publicis Sapient',
    shortName: 'Publicis Sapient',
    role: 'Capacity Partner · Senior Associate (Staffing Partner)',
    period: 'Apr 2022 – Jan 2023',
    duration: '10 mos',
    location: 'Gurugram, Haryana, India',
    scope: '250–450 Person Engineering Capacity Pod Deployment',
    summary:
      'Spearheaded talent deployment and utilisation for a 250–450 person pod while advising leadership with technical talent market intelligence.',
    highlights: [
      'Directed deployment of a 250–450 engineer capacity pod balancing utilisation targets with individual career aspirations.',
      'Partnered with leadership and Capacity Partners to nominate best-fit internal talent for open client engagements.',
      'Synthesised India technical talent demographics to guide internal hiring and client staffing strategy.',
    ],
    kras: [
      {
        area: 'Pod Capacity & Deployment',
        detail:
          'Spearheaded deployment of a 250–450 person pod throughout their tenure, aligning project fit, utilisation goals, and career progression.',
      },
      {
        area: 'Resource Allocation & Nominations',
        detail:
          'Submitted targeted internal candidate nominations directly in resourcing systems and coordinated with Staffing & Capacity Partners.',
      },
      {
        area: 'Market & Talent Intelligence',
        detail:
          'Developed deep intelligence on India technical talent availability and external demographics to guide internal stakeholders and client bids.',
      },
    ],
    tools: ['Pod Capacity Management', 'Staffing Systems', 'Talent Market Intelligence'],
  },
  {
    id: 'wipro',
    company: 'Wipro Limited (Wipro Technologies)',
    shortName: 'Wipro',
    role: 'Resources Manager · Senior Executive & Software Engineer',
    period: 'Apr 2013 – Apr 2022',
    duration: '9 yrs 1 mo',
    location: 'Bengaluru, Karnataka, India',
    scope: 'Platinum Client Account Resourcing & Dynamics AX ERP Engineering',
    summary:
      'Progressed from Microsoft Dynamics AX Software Engineer into leading a 3-member resourcing team for a flagship Platinum Client account.',
    highlights: [
      'Deployed 100+ resources across multiple geographies within a single month, earning Supply Chain Champion recognition.',
      'Honoured with the Best Supply Chain Team Player Award (2018/2019) for collaborative operational excellence.',
      'Built strong technical fluency through 2+ years implementing Microsoft Dynamics AX 2012 Finance and Supply Chain modules.',
    ],
    kras: [
      {
        area: 'Platinum Account Talent Leadership',
        detail:
          'Led a 3-member team managing resource forecasting, proposal coverage, and end-to-end demand fulfilment for a global Platinum Client account.',
      },
      {
        area: 'Virtual Bench & Senior Rotations',
        detail:
          'Tracked non-billed laterals and rookie hires, converting virtual benches into client-billed projects and rotating senior talent into key new deals.',
      },
      {
        area: 'Financial & Executive Governance',
        detail:
          'Maintained BU financial literacy across budgets and SLAs, monitored regional TA performance, and delivered weekly leadership analytics.',
      },
      {
        area: 'ERP Foundation (2013–2015)',
        detail:
          'Implemented Dynamics AX 2012 (AP, AR, GL, Cash & Bank, Fixed Assets), user access governance, SLA ticket resolution, and SharePoint Knowledge Portal.',
      },
    ],
    stages: [
      {
        title: 'Resources Manager / Senior Executive',
        period: 'May 2015 – Apr 2022 (6 yrs 11 mos)',
        bullets: [
          'Led 3-member resourcing pod for a Platinum Client account covering forecasting, proposal coverage, and end-to-end fulfilment.',
          'Managed virtual and existing benches across laterals and rookie hires; orchestrated senior rotations for new strategic deals.',
          'Facilitated global deployment of 100+ resources in one month (Supply Chain Champion) and won Best Supply Chain Team Player.',
        ],
      },
      {
        title: 'Software Engineer (Microsoft Dynamics AX)',
        period: 'Apr 2013 – May 2015 (2 yrs 2 mos)',
        bullets: [
          'Implemented AP, AR, General Ledger, Cash & Bank, and Fixed Assets modules in Microsoft Dynamics AX 2012.',
          'Handled vendor, customer, company, item, and user access configurations while resolving ERP support tickets within SLA.',
          'Managed technical documentation on SharePoint for the Knowledge Management Portal.',
        ],
      },
    ],
    tools: ['Platinum Account WFM', 'Dynamics AX 2012', 'SharePoint Portal', 'SLA & Budget Tracking'],
  },
];

export const COMPETENCY_GROUPS: CompetencyGroup[] = [
  {
    index: '01',
    domain: 'Workforce Planning & Forecasting',
    description: 'Translating business cycles and deal pipelines into accurate headcount models.',
    items: [
      'Strategic Workforce Planning & Capacity Management',
      'Six-Month Demand & Volume Forecasting',
      'Pricing Sheet & Headcount Modelling',
      'Shift Pattern & Roster Optimisation',
    ],
  },
  {
    index: '02',
    domain: 'Bench Economics & Fulfilment',
    description: 'Minimising non-billable carry while elevating engineer readiness and retention.',
    items: [
      'Bench Cost Optimisation & Utilisation Strategy',
      'End-to-End Demand Fulfilment & Global Deployment',
      'Inter-LOB Resource Rotation & Redeployment',
      'Bench Upskilling, Retention & Attrition Mitigation',
    ],
  },
  {
    index: '03',
    domain: 'Governance, Tooling & Stakeholders',
    description: 'Building repeatable frameworks, custom automation, and executive alignment.',
    items: [
      'Global Bench Policy & GWFM Charter Design',
      'PowerApps, Python & SharePoint Resourcing Systems',
      'Power BI Executive Dashboards & Reporting Automation',
      'Platinum Account & C-Suite Stakeholder Partnership',
    ],
  },
];

export const TECH_AND_PLATFORMS = [
  { name: 'Microsoft Power BI', role: 'Dynamic leadership & bench utilisation dashboards' },
  { name: 'Microsoft PowerApps', role: 'Rise@Axtria custom enterprise resourcing workflow' },
  { name: 'Python Automation', role: 'Automated weekly bench & defaulter reporting pipelines' },
  { name: 'SharePoint Demand Portals', role: 'Centralised internal fulfilment & knowledge hubs' },
  { name: 'Microsoft Dynamics AX 2012', role: 'ERP Finance, Trade & Logistics implementation base' },
  { name: 'Capacity & Pricing Models', role: 'Six-month forecasting & deal margin templates' },
];

export const AWARDS_AND_CREDENTIALS = {
  awards: [
    {
      title: 'Best Supply Chain Team Player Award',
      issuer: 'Wipro Technologies',
      year: '2018 / 2019',
      detail: 'Honoured for exceptional cross-functional team collaboration and supply chain execution.',
    },
    {
      title: 'Supply Chain Champion Recognition',
      issuer: 'Wipro Technologies',
      year: 'Multi-Geography Mobilisation',
      detail: 'Recognised for deploying 100+ specialists across global geographies inside one month.',
    },
  ],
  certifications: [
    {
      title: 'Microsoft Certified Technology Specialist (MCTS)',
      subtitle: 'Microsoft Dynamics Trade and Logistics 2014: Installation and Configuration',
      year: '2015',
    },
    {
      title: 'Microsoft Certified Technology Specialist (MCTS)',
      subtitle: 'Microsoft Dynamics AX 2012',
      year: '2012',
    },
  ],
  education: {
    degree: 'Bachelor of Technology (B.Tech.) — Computer Science',
    institution: 'Dr. Ambedkar Institute of Technology, Kanpur',
    affiliation: 'Affiliated to Uttar Pradesh Technical University',
    period: '2007 – 2012',
    grade: 'First Division · 73%',
  },
};
