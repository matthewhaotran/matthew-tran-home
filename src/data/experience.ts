export type Role = {
  id: string;
  title: string;
  /** Organization shown after the title when it differs from the employer. */
  org?: string;
  when: string;
  bullets?: string[];
  body?: string;
  tags?: string[];
};

export type Employer = {
  id: string;
  company: string;
  /** Former name, shown in parentheses. */
  formerly?: string;
  when: string;
  summary?: string;
  roles: Role[];
};

export const employers: Employer[] = [
  {
    id: "nice",
    company: "NICE CXone Knowledge",
    formerly: "MindTouch",
    when: "Jan 2019 – Present",
    summary:
      "An enterprise knowledge-management SaaS that grew from a wiki powering support sites into the knowledge layer for omnichannel experiences like chatbots and AI.",
    roles: [
      {
        id: "swe",
        title: "Software Engineer",
        when: "Apr 2021 – Present",
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
        title: "QA Engineer",
        when: "Nov 2019 – Apr 2021",
        body: "Embedded QA engineer automating tests for new features with Selenium, C#, JavaScript, Jenkins, Codeship, Docker and AWS. I learned to see the product the way it breaks, and that instinct still shapes how I build and review code.",
      },
      {
        id: "support",
        title: "Support Agent, then Technical Customer Success Agent",
        when: "Jan 2019 – Nov 2019",
        body: "On the front line of user pain points, the foundation for how I prioritize and ship.",
      },
    ],
  },
  {
    id: "madcap",
    company: "MadCap Software",
    when: "Dec 2017 – Jan 2019",
    roles: [
      {
        id: "madcap-support",
        title: "Technical Support Analyst",
        when: "Dec 2017 – Jan 2019",
      },
    ],
  },
  {
    id: "earlier",
    company: "Earlier experience",
    when: "2014 – 2018",
    roles: [
      {
        id: "hoopball",
        title: "Web Developer",
        org: "Hoop-ball.com (remote)",
        when: "Feb 2018 – Aug 2018",
      },
      {
        id: "origin",
        title: "Full Stack Developer",
        org: "Origin Code Academy",
        when: "Jun 2017 – Nov 2017",
      },
      {
        id: "stemedica",
        title: "Quality Control Analyst",
        org: "Stemedica Cell Technologies",
        when: "Dec 2014 – May 2017",
      },
      {
        id: "jd",
        title: "Quality Control Chemist",
        org: "J & D Laboratories",
        when: "Jul 2014 – Nov 2014",
      },
    ],
  },
];
