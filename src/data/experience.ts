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
      "An enterprise knowledge-management SaaS (formerly MindTouch) that grew from a wiki powering support sites into the knowledge layer for omnichannel experiences like chatbots and AI.",
    bullets: [
      "Own features from requirements through release, across the front end in React, TypeScript and Vue.js and, now, the backend in C# on AWS, working closely with product, design and QA.",
      "Delivered Filter Groups for UnifiedKnowledgeService using agentic workflows, 3x faster than the estimate, and was highlighted among my team.",
      "Built MCP tools and skills that track down bug root causes: they open internal endpoints, sign in to sites, query our log tools and reproduce issues on test sites.",
      "Train and mentor teammates on AI-assisted workflows through pairing, setup guidance and documentation.",
    ],
    tags: ["React", "TypeScript", "Vue.js", "C#", "AWS"],
  },
  {
    id: "qa",
    when: "Nov 2019 – Apr 2021",
    title: "QA Engineer",
    company: "MindTouch",
    body: "Embedded QA engineer automating tests for new features with Selenium, C#, JavaScript, Jenkins, Codeship, Docker and AWS. I learned to see the product the way it breaks, and that instinct still shapes how I build and review code.",
  },
  {
    id: "support",
    when: "Dec 2017 – Nov 2019",
    title: "Technical Support",
    company: "MadCap Software & MindTouch",
    body: "Two years on the front line of user pain points as a Technical Support Analyst at MadCap Software, then a Support and Technical Customer Success Agent at MindTouch. It's the foundation for how I prioritize and ship.",
  },
  {
    id: "earlier",
    when: "2014 – 2018",
    title: "Quality Control to Web Development",
    company: "Stemedica, Origin Code Academy & Hoop-ball.com",
    body: "Started in lab quality control, then switched to software: Full Stack Developer at Origin Code Academy and Web Developer at Hoop-ball.com.",
  },
];
