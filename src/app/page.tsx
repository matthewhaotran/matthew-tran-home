import Image from "next/image";
import Link from "next/link";
import ScrollNav from "@/components/scroll-nav";
import Tag from "@/components/tag";
import { profile, SITE_URL } from "@/data/site";
import { employers } from "@/data/experience";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import { toolbox } from "@/data/toolbox";

const sectionTitle =
  "mb-6 text-xs font-bold uppercase tracking-[0.15em] text-zinc-200 lg:sr-only";
const link =
  "rounded transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";

const featured = projects.filter((p) => p.featured);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
  },
  email: `mailto:${profile.email}`,
  image: `${SITE_URL}/profile-wide.jpeg`,
  description: profile.description,
  worksFor: { "@type": "Organization", name: profile.company },
  knowsAbout: [
    "React",
    "TypeScript",
    "Vue.js",
    "C#",
    "AWS",
    "Full-stack web development",
    "Test automation",
    "AI-assisted software development",
    "Model Context Protocol (MCP)",
  ],
  sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-x-clip bg-bg text-zinc-400">
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
        <header className="lg:sticky lg:top-0 lg:flex lg:h-dvh lg:w-[44%] lg:flex-col lg:justify-between lg:gap-10 lg:overflow-y-auto lg:py-24">
          <div className="pt-16 lg:pt-0">
            <div className="w-fit">
              <Image
                src="/profile-wide.jpeg"
                alt="Portrait of Matthew Tran"
                width={960}
                height={640}
                sizes="(min-width: 640px) 385px, 300px"
                className="mb-8 aspect-[3/2] [@media(max-height:800px)]:aspect-[2/1] w-0 min-w-full rounded-2xl object-cover object-top ring-1 ring-white/15"
                priority
              />
              <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                {profile.name}
              </h1>
            </div>
            <p className="mt-3 text-lg font-medium text-zinc-200 sm:text-xl">
              {profile.headline}{" "}
              <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                building with AI
              </span>
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              {profile.location} · {profile.workStyle}
            </p>
            <p className="mt-4 max-w-sm leading-relaxed">
              I own features from idea to production, build with AI-first
              workflows, and help teams do the same.
            </p>
            <ScrollNav />
          </div>

          <ul className="mt-10 flex items-center gap-6 text-sm text-zinc-300 lg:mt-0 lg:shrink-0">
            <li>
              <a href={profile.github} className={link}>GitHub</a>
            </li>
            <li>
              <a href={profile.linkedin} className={link}>LinkedIn</a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className={link}>Email</a>
            </li>
          </ul>
        </header>

        {/* Right column */}
        <main id="main" className="pb-24 pt-16 lg:w-[52%] lg:py-24">
          <section id="about" className="mb-24 scroll-mt-16 lg:mb-32">
            <h2 className={sectionTitle}>About</h2>
            <div className="space-y-4 leading-relaxed">
              <p>
                I&apos;m a software engineer at{" "}
                <span className="font-medium text-zinc-200">{profile.company}</span>{" "}
                with 5 years of building for the web. I came to software from
                bioscience, with a chemistry degree and lab quality control.
                I started in technical support, moved into QA automation, found
                my home in front end, and now work across the backend too, so I think
                about the whole product lifecycle: what users struggle with, how
                it should be built, and how it holds up once it ships.
              </p>
              <p>
                I work AI-first. Claude Code, Cursor and custom MCP tooling are
                part of how I plan, build, review and debug, and I&apos;m
                deliberate about where they help and where human judgment still
                wins. My MCP tools and skills help me find the root cause of
                bugs faster, and I scope work with product and design so it
                ships.
              </p>
              <p>
                I also like leveling up the people around me: I train and
                mentor teammates through pairing, setup guidance and docs. Away from
                the keyboard you&apos;ll find me playing pickleball, traveling,
                hunting for the next great meal, or at a concert.
              </p>
            </div>
          </section>

          <section id="experience" className="mb-24 scroll-mt-16 lg:mb-32">
            <h2 className={sectionTitle}>Experience</h2>
            <ol>
              {employers.map((e) => (
                <li key={e.id} className="mb-10">
                  <div className="grid gap-2 rounded-lg p-4 transition sm:grid-cols-8 sm:gap-6 lg:-mx-4 lg:hover:bg-white/[0.04]">
                    <p className="pt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2">
                      {e.when}
                    </p>
                    <div className="sm:col-span-6">
                      <h3 className="font-medium text-zinc-100">
                        {e.company}
                        {e.formerly && (
                          <span className="font-normal text-zinc-400"> (formerly {e.formerly})</span>
                        )}
                      </h3>
                      {e.summary && (
                        <p className="mt-2 text-sm leading-relaxed">{e.summary}</p>
                      )}
                      <ul className="mt-5 space-y-6">
                        {e.roles.map((r) => (
                          <li key={r.id}>
                            <h4 className="text-sm font-medium text-zinc-200">
                              {r.title}
                              {r.org && <span className="font-normal text-zinc-400"> · {r.org}</span>}
                            </h4>
                            <p className="mt-0.5 text-xs text-zinc-400">{r.when}</p>
                            {r.bullets && (
                              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed marker:text-zinc-600">
                                {r.bullets.map((b) => (
                                  <li key={b}>{b}</li>
                                ))}
                              </ul>
                            )}
                            {r.body && (
                              <p className="mt-2 text-sm leading-relaxed">{r.body}</p>
                            )}
                            {r.tags && (
                              <ul className="mt-4 flex flex-wrap gap-2">
                                {r.tags.map((t) => (
                                  <Tag key={t}>{t}</Tag>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="skills" className="mb-24 scroll-mt-16 lg:mb-32">
            <h2 className={sectionTitle}>Skills</h2>
            <dl className="space-y-4 text-sm">
              {toolbox.map(({ label, items }) => (
                <div key={label} className="grid gap-1 sm:grid-cols-8 sm:gap-6">
                  <dt className="font-medium text-zinc-200 sm:col-span-2">{label}</dt>
                  <dd className="leading-relaxed sm:col-span-6">{items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="projects" className="mb-24 scroll-mt-16 lg:mb-32">
            <h2 className={sectionTitle}>Projects</h2>
            <ul className="space-y-6">
              {featured.map((pr) => (
                <ProjectCard key={pr.id} project={pr} />
              ))}
            </ul>
            <Link
              href="/projects"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-cyan-300/60 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              See all projects
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
            </Link>
          </section>

          <section
            id="contact"
            className="scroll-mt-16 rounded-2xl border border-white/10 bg-white/[0.04] p-8"
          >
            <h2 className="text-xl font-semibold text-zinc-100">
              Say hello
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              I&apos;m always happy to talk about engineering, AI workflows, or
              what you&apos;re building.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Start a conversation
            </a>
            <p className="mt-4 text-[13px]">
              or email{" "}
              <a href={`mailto:${profile.email}`} className={`text-zinc-200 underline ${link}`}>
                {profile.email}
              </a>
            </p>
          </section>

          <footer className="mt-16 text-xs text-zinc-500">
            © {new Date().getFullYear()} Matthew Tran. Built with Next.js &amp;
            Tailwind.{" "}
            <a href={profile.repo} className={`underline ${link}`}>
              View source
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
