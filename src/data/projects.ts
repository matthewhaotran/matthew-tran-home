export type Project = {
  id: string;
  name: string;
  href: string;
  label: string;
  image: string;
  imageSize: { width: number; height: number };
  featured?: boolean;
  text: string;
  stack?: string;
  code?: string;
  note?: string;
  password?: string;
};

export const projects: Project[] = [
  {
    id: "chat",
    name: "Chat",
    href: "https://chat.matthew-tran.com",
    label: "chat.matthew-tran.com",
    image: "/projects/chat.png",
    imageSize: { width: 800, height: 500 },
    featured: true,
    text: "A ChatGPT-style chat app I built end to end. Guests can jump right in, Google sign-in saves your chat history, and every model call is logged so I can compare models. It's a live proof that I practice the AI-first engineering I talk about.",
    stack:
      "Next.js · React · TypeScript · Tailwind · Baseten (LLM inference) · Supabase (Postgres + auth) · Vercel",
    code: "https://github.com/matthewhaotran/chat-matthew-tran-baseten",
    note: "It runs on a $20 monthly spend cap, so if it isn't responding the cap may have been hit. It also relies on free models, which can be rate limited or exhausted at times. If it doesn't work, try again later.",
    password: "juliette",
  },
  {
    id: "shop",
    name: "Matthew Tran Shop",
    href: "https://shop.matthew-tran.com",
    label: "shop.matthew-tran.com",
    image: "/projects/shop.png",
    imageSize: { width: 1440, height: 900 },
    featured: true,
    text: "I'm a passionate custom t-shirt maker, and every design is something I'd actually wear: minimal, personalized tees for moms and dads, printed to order. The shop is about the things that matter most to me right now: being a dad, and being an active member of my local community, including a Mira Mesa collection.",
  },
  {
    id: "unpaywall",
    name: "Unpaywall",
    href: "https://unpaywall.matthew-tran.com",
    label: "unpaywall.matthew-tran.com",
    image: "/projects/unpaywall.png",
    imageSize: { width: 720, height: 450 },
    featured: true,
    text: "A small utility that turns a pasted link into a clean, readable article. It works through a fallback chain, trying Googlebot-style access first, then archive.ph and the Wayback Machine, and is upfront when a site can't be opened. It's a good example of how I like to build: a narrow problem I ran into myself, a simple interface, and honest limits.",
    stack:
      "Next.js (App Router) · TypeScript · Vercel · SSRF guard and locked-down CSP",
    code: "https://github.com/matthewhaotran/unpaywall",
  },
  {
    id: "huckleberry",
    name: "Baby Dashboard",
    href: "https://huckleberry.matthew-tran.com",
    label: "huckleberry.matthew-tran.com",
    image: "/projects/huckleberry.png",
    imageSize: { width: 1410, height: 667 },
    featured: true,
    text: "A dashboard for the daily rhythm of life with a baby: sleep, feeds, diapers, pumping and growth in charts and a day-by-day timeline, plus an \"ask a question about your data\" box for quick answers like how many diapers today. Turning a pile of log entries into something a tired parent can read at a glance.",
    stack:
      "ECharts · unofficial Huckleberry API (refreshed every 30 minutes) · WHO growth standards · rule-based Q&A that runs in the browser",
  },
  {
    id: "upkeep",
    name: "Upkeep",
    href: "https://upkeep.matthew-tran.com",
    label: "upkeep.matthew-tran.com",
    image: "/projects/upkeep.png",
    imageSize: { width: 780, height: 500 },
    text: "A maintenance tracker for the recurring chores that are easy to forget: car, home, health and digital tasks like oil changes, HVAC filters, smoke detector tests and password reviews. Set how often each repeats and when it was last done, and it shows what's overdue or due soon. Export and import keep the data portable, and a password lock protects edits.",
  },
  {
    id: "matthewscup",
    name: "Matthew's Cup",
    href: "https://matthewscup.matthew-tran.com",
    label: "matthewscup.matthew-tran.com",
    image: "/projects/matthewscup.png",
    imageSize: { width: 720, height: 450 },
    text: "My personal rebrand of Kings Cup, the classic party game, rebuilt as a fast, mobile-first web app. Pass the phone, flip a card, follow the rule, and whoever draws the fourth king drinks the cup. Must be of legal drinking age; drink responsibly.",
    stack: "Plain HTML, CSS and vanilla JavaScript · no build step, no dependencies",
    code: "https://github.com/matthewhaotran/matthewscupv2",
  },
];
