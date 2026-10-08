import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: `Projects | ${profile.name}`,
  description: `Everything ${profile.name} has built: AI apps, dashboards, utilities and a small t-shirt shop.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-dvh overflow-x-clip bg-bg text-zinc-400">
      <div
        aria-hidden
        className="pointer-events-none fixed -left-40 -top-72 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.5),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -right-48 top-1/3 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.35),transparent_65%)]"
      />
      <main className="relative mx-auto max-w-4xl px-6 py-16 md:px-12 lg:py-24">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          <span aria-hidden className="transition group-hover:-translate-x-1">←</span>
          {profile.name}
        </Link>
        <h1 className="mt-8 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          All projects
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed">
          Things I&apos;ve built to learn, to scratch an itch, or just for fun.
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((pr) => (
            <ProjectCard key={pr.id} project={pr} />
          ))}
        </ul>
      </main>
    </div>
  );
}
