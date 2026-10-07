import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">404</p>
      <h1 className="text-3xl font-bold text-zinc-100">Page not found</h1>
      <p className="text-zinc-400">That page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
      >
        Back home
      </Link>
    </main>
  );
}
