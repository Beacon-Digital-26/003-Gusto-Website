"use client";

import { useEffect, useState, type MouseEvent } from "react";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Products", href: "#products", id: "products" },
  { label: "About Us", href: "#about", id: "about" },
  { label: "Contact Us", href: "#contact", id: "contact" },
];

const footerLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About Us", href: "#about", id: "about" },
  { label: "Products", href: "#products", id: "products" },
  { label: "Contact Us", href: "#contact", id: "contact" },
];

function sectionFromHash() {
  const fromHash = window.location.hash.replace("#", "");
  return navLinks.some((link) => link.id === fromHash) ? fromHash : "home";
}

function goToSection(
  event: MouseEvent<HTMLAnchorElement>,
  id: string,
  href: string,
) {
  event.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
    return;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", "#home");
}

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    setActive(sectionFromHash());

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id) {
          setActive(id);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.2, 0.4, 0.6],
      },
    );

    for (const link of navLinks) {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    }

    return () => observer.disconnect();
  }, []);

  return { active, setActive };
}

export function SiteNav() {
  const { active, setActive } = useActiveSection();

  return (
    <nav className="grid grid-cols-4" aria-label="Primary">
      {navLinks.map((link) => {
        const isActive = active === link.id;
        return (
          <a
            key={link.id}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            onClick={(event) => {
              goToSection(event, link.id, link.href);
              setActive(link.id);
            }}
            className={`font-wide py-1.5 text-center text-[10px] font-semibold uppercase tracking-wide transition-colors sm:text-xs ${
              isActive
                ? "bg-gusto-orange text-white"
                : "text-gusto-navy hover:bg-gusto-orange/10"
            }`}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}

export function FooterNav() {
  return (
    <nav aria-label="Footer">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">
        Company Navigation
      </p>
      <ul className="mt-5 space-y-2.5 text-[13px] text-white">
        {footerLinks.map((link) => {
          const isActive = link.id === "contact";
          return (
            <li key={link.id}>
              <a
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={(event) => goToSection(event, link.id, link.href)}
                className={`transition-colors hover:text-gusto-orange ${
                  isActive
                    ? "font-semibold text-gusto-orange underline decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
