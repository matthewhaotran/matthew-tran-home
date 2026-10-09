"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function ScrollNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const update = () => {
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(items[items.length - 1].id);
        return;
      }
      const line = window.innerHeight * 0.35;
      let current = items[0].id;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav aria-label="Sections" className="mt-14 hidden lg:block">
      <ul className="space-y-4">
        {items.map(({ id, label }) => {
          const on = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={on ? "location" : undefined}
                className={`group flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                  on ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                <span
                  className={`h-px transition-all ${
                    on
                      ? "w-16 bg-zinc-100"
                      : "w-8 bg-zinc-500 group-hover:w-16 group-hover:bg-zinc-200"
                  }`}
                />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
