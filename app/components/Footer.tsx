import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { businessHours, contact, footerSocials } from "../lib/site-data";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Contact Us", href: "/#contact" },
];

function FooterNav() {
  return (
    <nav aria-label="Footer">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">
        Navigation
      </p>
      <ul className="mt-5 space-y-3 text-[13px] text-white/80">
        {footerLinks.map((link) => {
          const isHighlighted = link.href === "/#contact";
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-gusto-orange ${
                  isHighlighted
                    ? "font-semibold text-gusto-orange underline decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#001256] px-6 text-white sm:px-8 lg:px-10">
      <div className="grid items-start gap-x-10 gap-y-10 pb-7 pt-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1.25fr_1fr]">
        <Reveal as="div">
          <Image
            src="/images/logo-footer.png"
            alt="Gusto Pro"
            width={777}
            height={342}
            unoptimized
            className="h-auto w-[160px] max-w-full"
          />
          <p className="mt-4 max-w-[360px] text-[13px] leading-relaxed text-white/80">
            {contact.hqAddress}
          </p>
          <ul className="mt-5 flex gap-3">
            {footerSocials.map(({ label, href, icon: SocialIcon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gusto-orange focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gusto-orange"
                >
                  <SocialIcon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="div" delay={100}>
          <FooterNav />
        </Reveal>

        <Reveal as="div" delay={200}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">
            Working Hours
          </p>
          <dl className="mt-5 space-y-3 text-[13px] text-white/80">
            {businessHours.map(({ day, hours }) => (
              <div key={day} className="grid grid-cols-[auto_1fr] gap-x-4">
                <dt className="min-w-[78px] whitespace-nowrap">{day}:</dt>
                <dd className="whitespace-nowrap">{hours}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal as="div" delay={300}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">
            Contact Numbers
          </p>
          <p className="mt-5 flex gap-3 text-[13px] text-white/80">
            <span>H/P:</span>
            <a href={contact.phoneHref} className="transition-colors hover:text-gusto-orange">
              {contact.phone}
            </a>
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 py-5 text-[10px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; 2026 Heng Heng Plastic Trading Malaysia. All Rights Reserved.
        </p>
        <p className="uppercase tracking-[0.16em] text-white/80">
          Powered by Beacon Studio
        </p>
      </div>
    </footer>
  );
}
