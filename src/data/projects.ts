export type Project = {
  id: string;
  name: string;
  href: string;
  label: string;
  image: string;
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
    text: "I'm a passionate custom t-shirt maker, and every design is something I'd actually wear: minimal, personalized tees for moms and dads, printed to order. The shop is about the things that matter most to me right now: being a dad, and being an active member of my local community, including a Mira Mesa collection.",
  },
  {
    id: "unpaywall",
    name: "Unpaywall",
    href: "https://unpaywall.matthew-tran.com",
    label: "unpaywall.matthew-tran.com",
    image: "/projects/unpaywall.png",
    text: "A small utility that turns a pasted link into a clean, readable article. It works through a fallback chain, trying Googlebot-style access first, then archive.ph and the Wayback Machine, and is upfront when a site can't be opened. It's a good example of how I like to build: a narrow problem I ran into myself, a simple interface, and honest limits.",
    stack:
      "Next.js (App Router) · TypeScript · Vercel · SSRF guard and locked-down CSP",
    code: "https://github.com/matthewhaotran/unpaywall",
  },
];
