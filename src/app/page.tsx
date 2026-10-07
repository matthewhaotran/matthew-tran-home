import Image from "next/image";
import ScrollNav from "./scroll-nav";

const EMAIL = "matthewhaotran@gmail.com";
const GITHUB = "https://github.com/matthewhaotran";

const roles = [
  {
    when: "4+ years",
    title: "Software Engineer",
    company: "NICE CXone Mpower",
    body: "Building intuitive, performant web applications for a cloud contact-center platform. I care about UX, accessibility, performance and complex state — and use AI tools daily to write better code, faster.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    when: "1 year",
    title: "QA Engineer",
    company: "",
    body: "Owned release quality and learned to see a product the way it breaks. That instinct still shapes how I build and test.",
    tags: ["Testing", "JavaScript"],
  },
  {
    when: "2 years",
    title: "Support",
    company: "",
    body: "Spent two years on the front line of user pain points — the foundation for my empathy-first approach to shipping features.",
    tags: ["Communication", "Troubleshooting"],
  },
];

const toolbox = {
  Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "PHP", "C#"],
  Tools: ["React", "Next.js", "Tailwind CSS", "Git & GitHub", "VS Code", "Webpack"],
  "I enjoy solving": ["UX challenges", "Performance", "Accessibility", "State management"],
};

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
              I build well-crafted software with modern tools and AI, solving
              real problems for real people.
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
                with 4+ years of experience building intuitive, performant web
                applications. I started in support, moved into QA, and found my
                home in front end — shipping reliable features and caring about
                the details nobody notices until they&apos;re wrong.
              </p>
              <p>
                As an avid user of AI tools, I leverage modern technology to
                write better code faster and solve complex problems more
                efficiently. That background gives me a holistic view of the
                product lifecycle: I understand user pain points before I write
                the first line.
              </p>
              <p>
                Away from the keyboard you&apos;ll find me playing pickleball,
                traveling, hunting for the next great meal, or at a concert.
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
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {r.tags.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="toolbox" className="mb-24 scroll-mt-16 lg:mb-32">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.15em] text-zinc-200 lg:sr-only">
              Toolbox
            </h3>
            <div className="space-y-8">
              {Object.entries(toolbox).map(([label, list]) => (
                <div key={label}>
                  <p className="mb-3 text-sm font-medium text-zinc-200">{label}</p>
                  <ul className="flex flex-wrap gap-2">
                    {list.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
