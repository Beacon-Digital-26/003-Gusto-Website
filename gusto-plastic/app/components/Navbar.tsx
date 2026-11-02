"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { images } from "../lib/site-data";

const navLinks = [
  { label: "Home", href: "/", id: "home", route: "/" },
  { label: "Products", href: "/#products", id: "products", route: "/products" },
  { label: "About Us", href: "/#about", id: "about", route: "/about" },
  { label: "Contact Us", href: "/#contact", id: "contact", route: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("home");
  const [heroHidden, setHeroHidden] = useState(false);

  // Visited routes stay mounted (hidden) under Cache Components, so section ids can exist off the home page.
  useEffect(() => {
    if (!isHome) {
      return;
    }

    const hero = document.getElementById("home");
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setHeroHidden(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    if (hero) {
      heroObserver.observe(hero);
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.id;
        if (id) {
          setActiveSection(id);
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
        sectionObserver.observe(section);
      }
    }

    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [isHome]);

  return (
    <header
      className={`sticky top-0 z-30 bg-white transition-transform duration-300 ease-out ${
        isHome && heroHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex justify-center py-3">
        <Link href="/" aria-label="Gusto Pro home">
          <Image
            src={images.logo}
            alt="Gusto Pro"
            width={259}
            height={114}
            preload
            className="h-[114px] w-[259px]"
          />
        </Link>
      </div>
      <nav className="grid grid-cols-4" aria-label="Primary">
        {navLinks.map((link) => {
          const isActive = isHome
            ? activeSection === link.id
            : pathname === link.route;
          return (
            <Link
              key={link.id}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setActiveSection(link.id)}
              className={`font-wide py-1.5 text-center text-[10px] font-semibold uppercase tracking-wide transition-colors sm:text-xs ${
                isActive
                  ? "bg-gusto-orange text-white"
                  : "text-gusto-navy hover:bg-gusto-orange/10"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
