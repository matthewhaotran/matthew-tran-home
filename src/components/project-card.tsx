import Image from "next/image";
import type { Project } from "@/data/projects";
import RevealPassword from "./reveal-password";

const link =
  "rounded transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";

export default function ProjectCard({ project: pr }: { project: Project }) {
  return (
    <li className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition lg:hover:bg-white/[0.05]">
      <a
        href={pr.href}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden
        className="mb-5 block overflow-hidden rounded-lg border border-white/10 transition hover:border-cyan-400/40"
      >
        <Image
          src={pr.image}
          alt=""
          width={pr.imageSize.width}
          height={pr.imageSize.height}
          sizes="(min-width: 1280px) 520px, (min-width: 1024px) 45vw, 100vw"
          className="h-auto w-full"
        />
      </a>
      <h3 className="font-medium text-zinc-100">
        <a
          href={pr.href}
          target="_blank"
          rel="noreferrer"
          className={`group inline-flex items-baseline gap-2 ${link}`}
        >
          {pr.name}
          <span className="text-xs font-normal text-zinc-400 group-hover:text-cyan-300">
            {pr.label} ↗
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </a>
      </h3>
      <p className="mt-3 text-sm leading-relaxed">{pr.text}</p>
      {pr.stack && (
        <p className="mt-3 text-[13px] text-zinc-300">
          <span className="font-semibold">Built with:</span> {pr.stack}
        </p>
      )}
      {pr.code && (
        <a
          href={pr.code}
          target="_blank"
          rel="noreferrer"
          className={`mt-3 inline-block text-[13px] font-medium text-zinc-200 ${link}`}
        >
          View source ↗
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
      {pr.note && (
        <p className="mt-3 rounded-lg bg-white/[0.04] p-3 text-[13px] leading-relaxed">
          {pr.password && (
            <>
              Password: <RevealPassword value={pr.password} />.{" "}
            </>
          )}
          {pr.note}
        </p>
      )}
    </li>
  );
}
