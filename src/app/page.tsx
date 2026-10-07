import Image from "next/image";
import ScrollNav from "./scroll-nav";

const EMAIL = "matthewhaotran@gmail.com";
const GITHUB = "https://github.com/matthewhaotran";
const CHAT_PASSWORD = "juliette";

const roles = [
  {
    when: "4+ years",
    title: "Software Engineer",
    company: "NICE CXone Mpower",
    body: "I own features end to end: scoping requirements with product and design, breaking epics into shippable work, building in TypeScript and React, and supporting them in production. I run an AI-first workflow with Claude Code, Cursor and custom MCP tools, and I lean on observability and disciplined debugging to root-cause production issues instead of patching symptoms.",
    tags: ["React", "Claude Code", "Playwright / Cypress"],
  },
  {
    when: "Alongside the work",
    title: "Mentor & Team Enabler",
    company: "",
    body: "I train teammates on practical AI workflows, from prompting and agent setup to knowing when not to trust the output. I also onboard engineers, give thorough code reviews, and write down what I learn so the whole team ships faster.",
  },
  {
    when: "1 year",
    title: "QA Engineer",
    company: "",
    body: "Owned release quality and test automation, and learned to see a product the way it breaks. That instinct still shapes how I design, test and review code.",
  },
  {
    when: "2 years",
    title: "Support",
    company: "",
    body: "Spent two years on the front line of user pain points, which is the foundation for my empathy-first approach to prioritizing and shipping features.",
  },
];

const projects = [
  {
    name: "Chat",
    href: "https://chat.matthew-tran.com",
    label: "chat.matthew-tran.com",
    paragraphs: [
      "My own AI chat app: a place to put the tools and workflows I use every day into something anyone can try. It's how I keep learning by building, and a live proof that I practice the AI-first engineering I talk about.",
    ],
    note: (
      <>
        Password:{" "}
        <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-cyan-300">
          {CHAT_PASSWORD}
        </code>
        . It runs on a $20 monthly spend cap, so if it isn&apos;t responding the
        cap may have been hit. It also relies on free models, which can be
        rate limited or exhausted at times. If it doesn&apos;t work, try again
        later.
      </>
    ),
  },
  {
    name: "Matthew Tran Shop",
    href: "https://shop.matthew-tran.com",
    label: "shop.matthew-tran.com",
    paragraphs: [
      "I'm a passionate custom t-shirt maker, and every design is something I'd actually wear: minimal, personalized tees for moms and dads, printed to order. The shop is about the things that matter most to me right now: being a dad, and being an active member of my local community, including a Mira Mesa collection.",
    ],
  },
];

const toolbox = [
  {
    label: "AI tooling",
    items: ["Claude Code", "GitHub Copilot", "MCP servers & custom skills"],
  },
  {
    label: "Stack & delivery",
    items: ["React", "Vitest / Jest", "Playwright / Cypress", "Datadog / Sentry"],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
      {children}
    </li>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#07070b] text-zinc-400">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed -left-40 -top-72 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.5),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -right-48 top-1/3 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.35),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-screen-xl px-6 md:px-12 lg:flex lg:justify-between lg:gap-16 lg:px-24">
        {/* Left column */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
          <div className="pt-16 lg:pt-0">
            <Image
              src="/matthew-profile.jpeg"
              alt="Portrait of Matthew Tran"
              width={96}
              height={96}
              className="mb-8 h-24 w-24 rounded-full object-cover object-top ring-1 ring-white/15"
              priority
            />
            <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
              Matthew Tran
            </h1>
            <h2 className="mt-3 text-lg font-medium text-zinc-200 sm:text-xl">
              Software Engineer{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                building with AI
              </span>
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed">
              I own features from idea to production, build with AI-first
              workflows, and help teams do the same.
            </p>
            <ScrollNav />
          </div>

          <ul className="mt-10 flex items-center gap-6 text-sm text-zinc-300 lg:mt-0">
            <li>
              <a href={GITHUB} className="transition hover:text-cyan-300">GitHub</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="transition hover:text-cyan-300">Email</a>
            </li>
          </ul>
        </header>

        {/* Right column */}
        <main className="pb-24 pt-16 lg:w-[52%] lg:py-24">
          <section id="about" className="mb-24 scroll-mt-16 lg:mb-32">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.15em] text-zinc-200 lg:sr-only">
              About
            </h3>
            <div className="space-y-4 leading-relaxed">
              <p>
                I&apos;m a software engineer at{" "}
                <span className="font-medium text-zinc-200">NICE CXone Mpower</span>{" "}
                with 4+ years building intuitive, performant web applications.
                I started in support, moved into QA, and found my home in front
                end, so I think about the whole product lifecycle: what users
                struggle with, how it should be built, and how it holds up in
                production.
              </p>
              <p>
                I work AI-first. Claude Code, Cursor and custom MCP tooling are
                part of how I plan, build, review and debug, and I&apos;m
                deliberate about where they help and where human judgment still
                wins. I turn vague requests into scoped, shippable plans, own
                features through release, and chase production bugs down to the
                root cause.
              </p>
              <p>
                I also like leveling up the people around me: training teammates
                on AI workflows, mentoring through code review, and documenting
                what works. Away from the keyboard you&apos;ll find me playing
                pickleball, traveling, hunting for the next great meal, or at a
                concert.
              </p>
            </div>
          </section>

          <section id="experience" className="mb-24 scroll-mt-16 lg:mb-32">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.15em] text-zinc-200 lg:sr-only">
              Experience
            </h3>
            <ol className="group/list">
              {roles.map((r) => (
                <li key={r.title} className="mb-10">
                  <div className="grid gap-2 rounded-lg p-4 transition sm:grid-cols-8 sm:gap-6 lg:-mx-4 lg:hover:bg-white/[0.04]">
                    <p className="pt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2">
                      {r.when}
                    </p>
                    <div className="sm:col-span-6">
                      <h4 className="font-medium text-zinc-100">
                        {r.title}
                        {r.company && ` · ${r.company}`}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed">{r.body}</p>
                      {r.tags && (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {r.tags.map((t) => (
                            <Tag key={t}>{t}</Tag>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="projects" className="mb-24 scroll-mt-16 lg:mb-32">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.15em] text-zinc-200 lg:sr-only">
              Projects
            </h3>
            <ul className="space-y-6">
              {projects.map((pr) => (
                <li
                  key={pr.name}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition lg:hover:bg-white/[0.05]"
                >
                  <a
                    href={pr.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-baseline gap-2 font-medium text-zinc-100 transition hover:text-cyan-300"
                  >
                    {pr.name}
                    <span className="text-xs font-normal text-zinc-500 group-hover:text-cyan-400">
                      {pr.label} ↗
                    </span>
                  </a>
                  {pr.paragraphs.map((t) => (
                    <p key={t} className="mt-3 text-sm leading-relaxed">{t}</p>
                  ))}
                  {pr.note && (
                    <p className="mt-3 rounded-lg bg-white/[0.04] p-3 text-xs leading-relaxed">
                      {pr.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section id="toolbox" className="mb-24 scroll-mt-16 lg:mb-32">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.15em] text-zinc-200 lg:sr-only">
              Toolbox
            </h3>
            <dl className="space-y-4 text-sm">
              {toolbox.map(({ label, items }) => (
                <div key={label} className="grid gap-1 sm:grid-cols-8 sm:gap-6">
                  <dt className="font-medium text-zinc-200 sm:col-span-2">{label}</dt>
                  <dd className="leading-relaxed sm:col-span-6">{items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
            <h3 className="text-xl font-semibold text-zinc-100">
              Interested in working together?
            </h3>
            <p className="mt-2 text-sm leading-relaxed">
              I&apos;m always open to new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
            >
              Start a conversation
            </a>
          </section>

          <footer className="mt-16 text-xs text-zinc-600">
            © 2026 Matthew Tran. Built with Next.js &amp; Tailwind.
          </footer>
        </main>
      </div>
    </div>
  );
}
