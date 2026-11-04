"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { images } from "../lib/site-data";
import { CloseIcon, MenuIcon } from "./Icons";

const navLinks = [
  { label: "Home", href: "/", id: "home" },
  { label: "Products", href: "/#products", id: "products" },
  { label: "About Us", href: "/#about", id: "about" },
  { label: "Contact Us", href: "/#contact", id: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    const desktop = window.matchMedia("(min-width: 768px)");
    function handleResize() {
      if (desktop.matches) setMenuOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [menuOpen]);

  useEffect(() => {
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
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-30 border-b border-gusto-navy/10 bg-white shadow-sm"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-2 px-3 sm:h-22 sm:gap-6 sm:px-6 md:px-8 lg:px-10">
        <Link href="/" aria-label="Gusto Pro home" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src={images.logo}
            alt="Gusto Pro"
            width={259}
            height={114}
            preload
            className="h-auto w-28 sm:w-34 lg:w-40"
          />
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          title={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-11 shrink-0 items-center justify-center text-2xl text-gusto-navy hover:text-gusto-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gusto-orange md:hidden"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      <nav
        id="primary-navigation"
        className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100dvh-5.5rem)] flex-col items-start gap-1 overflow-y-auto border-b border-gusto-navy/10 bg-white px-6 py-3 shadow-sm md:static md:flex md:max-h-none md:flex-row md:items-center md:gap-2 md:overflow-visible md:border-0 md:p-0 md:shadow-none lg:gap-4`}
        aria-label="Primary"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <Link
              key={link.id}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                setActiveSection(link.id);
                setMenuOpen(false);
              }}
              className="group font-wide whitespace-nowrap px-3 py-3 text-center text-sm font-semibold uppercase text-gusto-navy transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gusto-orange md:text-xs lg:px-4 lg:text-sm"
            >
              <span
                className={`inline-block border-b-2 pb-1 transition-colors group-hover:border-gusto-orange ${
                  isActive ? "border-gusto-orange" : "border-transparent"
                }`}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>
      </div>
    </header>
  );
}
