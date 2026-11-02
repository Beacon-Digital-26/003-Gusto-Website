import Image from "next/image";
import Link from "next/link";
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
        Company Navigation
      </p>
      <ul className="mt-5 space-y-2.5 text-[13px] text-white">
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
    <footer className="bg-[#001256] text-white">
      <div className="grid w-full items-start gap-12 px-[50px] pb-10 pt-14 md:grid-cols-3">
        <div>
          <Image
            src="/images/logo-footer.png"
            alt="Gusto Pro"
            width={777}
            height={342}
            unoptimized
            className="h-auto w-[220px]"
          />
          <p className="mt-6 max-w-[280px] text-[13px] leading-relaxed text-white">
            Manufactured with German engineering discipline by Heng Heng
            Plastic Trading Malaysia. Toughest in the industry. Trusted by
            many.
          </p>
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-gusto-orange">
            Headquarters
          </p>
          <p className="mt-2 max-w-[280px] text-[13px] leading-relaxed text-white">
            {contact.hqAddress}
          </p>
        </div>

        <div className="justify-self-center">
          <FooterNav />
          <div className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">
              Social Media
            </p>
            <ul className="mt-4 flex gap-4">
              {footerSocials.map(({ label, href, icon: SocialIcon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-colors hover:text-gusto-orange"
                  >
                    <SocialIcon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="justify-self-end">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em]">
            Business Hours
          </p>
          <dl className="mt-5 space-y-2 text-[13px]">
            {businessHours.map(({ day, hours }) => (
              <div key={day} className="flex gap-1">
                <dt className="whitespace-nowrap">{day}:</dt>
                <dd>{hours}</dd>
              </div>
            ))}
          </dl>
          <a
            href={contact.phoneHref}
            className="mt-8 block w-[260px] bg-white/10 px-5 py-4 transition-colors hover:bg-white/15"
          >
            <span className="block text-[11px] font-semibold uppercase tracking-[0.16em]">
              Direct Sales HP
            </span>
            <span className="mt-2 block text-lg tracking-wide">
              {contact.phone}
            </span>
          </a>
        </div>
      </div>

      <p className="px-[50px] pb-6 text-[10px] uppercase tracking-[0.12em] text-white/70">
        &copy; 2026 Heng Heng Plastic Trading Malaysia. All Rights Reserved.
        ISO 9001:2015 Certified.
      </p>
    </footer>
  );
}
