"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = {
  src: string;
  name: string;
  width: number;
  height: number;
};

export default function ProjectImage({ src, name, width, height }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`View larger preview of ${name}`}
        className="group relative mb-5 block w-full cursor-zoom-in overflow-hidden rounded-lg border border-white/10 transition hover:border-cyan-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        <Image
          src={src}
          alt={`Screenshot of ${name}`}
          width={width}
          height={height}
          sizes="(min-width: 1280px) 340px, (min-width: 1024px) 45vw, 100vw"
          className="h-auto w-full"
        />
        <span
          aria-hidden
          className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-medium text-zinc-100 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          Click to enlarge
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${name} preview`}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto max-h-[92vh] max-w-[95vw] overflow-visible bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <div className="relative">
          <Image
            src={src}
            alt={`Screenshot of ${name}`}
            width={width}
            height={height}
            sizes="95vw"
            className="h-auto max-h-[88vh] w-auto max-w-[95vw] rounded-xl border border-white/15 object-contain shadow-2xl"
          />
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close preview"
            className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-semibold leading-none text-black shadow-lg transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            ×
          </button>
        </div>
      </dialog>
    </>
  );
}
