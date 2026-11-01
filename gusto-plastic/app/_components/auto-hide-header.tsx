"use client";

import { useEffect, useState, type ReactNode } from "react";

export function AutoHideHeader({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(!entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 bg-white transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {children}
    </header>
  );
}
