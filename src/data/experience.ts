export type Role = {
  id: string;
  when: string;
  title: string;
  company: string;
  summary?: string;
  bullets?: string[];
  body?: string;
  tags?: string[];
};

export const roles: Role[] = [
  {
    id: "swe",
    when: "Apr 2021 – Present",
    title: "Software Engineer",
    company: "NICE CXone Knowledge",
    summary:
      "An enterprise knowledge-management SaaS that grew from a wiki powering support sites into the knowledge layer for omnichannel experiences like chatbots and AI.",
    bullets: [
      "Own front-end features from requirements through release, on a team of about 15 engineers, 5 PMs, a designer and 3 QA.",
      "Delivered Filter Groups for UnifiedKnowledgeService using agentic workflows at roughly 3x speed, and was highlighted among my team.",
      "Built MCP tools and skills that track down bug root causes: they open internal endpoints, sign in to sites, query our log tools and reproduce issues on test sites.",
      "Trained 5 engineers through pairing, setup guidance and documentation.",
    ],
    tags: ["React", "Claude Code", "Playwright / Cypress"],
  },
  {
    id: "qa",
    when: "18 months",
    title: "QA Engineer",
    company: "NICE CXone Knowledge",
    body: "Moved from support into QA and learned to see the product the way it breaks. That instinct still shapes how I build and review code.",
  },
  {
    id: "support",
    when: "2 years",
    title: "Support",
    company: "NICE CXone Knowledge & MadCap Software",
    body: "Started my career in support, one year at MadCap Software and one at NICE beginning in 2019. Two years on the front line of user pain points is the foundation for how I prioritize and ship.",
  },
];
