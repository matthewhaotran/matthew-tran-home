"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "toolbox", label: "Toolbox" },
  { id: "projects", label: "Projects" },
];

export default function ScrollNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Sections" className="mt-16 hidden lg:block">
      <ul className="space-y-4">
        {items.map(({ id, label }) => {
          const on = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`group flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                  on ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                <span
                  className={`h-px transition-all ${
                    on ? "w-16 bg-zinc-100" : "w-8 bg-zinc-600 group-hover:w-16 group-hover:bg-zinc-200"
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
