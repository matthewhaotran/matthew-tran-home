"use client";

import { useState } from "react";

export default function RevealPassword({ value }: { value: string }) {
  const [shown, setShown] = useState(false);
  return shown ? (
    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-cyan-300">
      {value}
    </code>
  ) : (
    <button
      type="button"
      onClick={() => setShown(true)}
      className="rounded bg-white/10 px-2 py-0.5 text-cyan-300 transition hover:bg-white/20"
    >
      Show password
    </button>
  );
}
