import type { ReactNode } from "react";
import { MailIcon, MapPinIcon, PhoneIcon } from "../Icons";
import { ImageSlot } from "../ImageSlot";
import { contact, locations, socials, type IconComponent } from "../../lib/site-data";

function SocialLinks({
  className = "",
  itemClassName = "",
}: {
  className?: string;
  itemClassName?: string;
}) {
  return (
    <ul className={`flex gap-2 ${className}`}>
      {socials.map(({ label, href, icon: SocialIcon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex size-8 items-center justify-center rounded-full transition-colors ${itemClassName}`}
          >
            <SocialIcon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}

function ContactItem({
  icon: ItemIcon,
  label,
  children,
}: {
  icon: IconComponent;
  label: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gusto-navy/30 text-gusto-navy">
        <ItemIcon className="size-4" />
      </span>
      <div className="text-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-gusto-navy">
          {label}
        </p>
        <div className="mt-1 max-w-xs text-gusto-slate">{children}</div>
      </div>
    </li>
  );
}

function LocationCard({
  branch,
  address,
  image,
  className = "",
}: (typeof locations)[number] & { className?: string }) {
  return (
    <article className={className}>
      <div className="overflow-hidden rounded-lg border border-black/5 bg-zinc-100 shadow-sm">
        <ImageSlot
          src={image}
          alt={`Heng Heng Plastic Trading ${branch} shopfront`}
          label={`${branch} shop photo`}
          sizes="(min-width: 768px) 560px, 100vw"
          className="aspect-[16/9] w-full text-gusto-slate"
        />
      </div>
      <h4 className="mt-4 text-lg font-bold uppercase leading-tight text-gusto-navy sm:text-xl">
        Heng Heng Plastic Trading
        <br />({branch})
      </h4>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block max-w-md text-xs text-gusto-slate hover:text-gusto-orange hover:underline"
      >
        {address}
      </a>
    </article>
  );
}

export function ContactSection() {
  const [headquarters, ...branches] = locations;

  return (
    <section
      id="contact"
      className="scroll-mt-36 bg-slate-50 px-6 py-20 sm:px-10 sm:py-24"
    >
      <h2 className="font-display text-center text-5xl text-gusto-orange uppercase sm:text-7xl">
        Contact Us
      </h2>

      <div className="mx-auto mt-14 grid max-w-6xl gap-x-16 gap-y-16 md:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl text-gusto-navy uppercase sm:text-3xl">
            Get in Touch
          </h3>
          <p className="mt-3 max-w-sm text-sm text-gusto-slate/80">
            Our team of engineering experts is ready to assist you. Reach out
            to us via any of the channels below.
          </p>

          <ul className="mt-8 space-y-6">
            <ContactItem icon={MapPinIcon} label="Headquarters & Warehouse">
              {contact.hqAddress}
            </ContactItem>
            <ContactItem icon={PhoneIcon} label="Phone Services">
              <a href={contact.phoneHref} className="hover:text-gusto-orange">
                H/P: {contact.phone}
              </a>
            </ContactItem>
            <ContactItem icon={MailIcon} label="Email Correspondence">
              <a
                href={`mailto:${contact.email}`}
                className="text-gusto-orange hover:underline"
              >
                {contact.email}
              </a>
            </ContactItem>
          </ul>

          <p className="mt-10 text-sm font-bold uppercase tracking-wide text-gusto-navy">
            Other Platforms:
          </p>
          <SocialLinks className="mt-3" itemClassName="bg-gusto-navy text-white hover:bg-gusto-orange" />
        </div>

        <div>
          <h3 className="font-display text-2xl text-gusto-navy uppercase sm:text-3xl">
            Locations
          </h3>
          <p className="mt-3 max-w-sm text-sm text-gusto-slate/80">
            We have branches spread across northern Malaysia, serving
            customers throughout the region.
          </p>
          <LocationCard {...headquarters} className="mt-8" />
        </div>

        {branches.map((location) => (
          <LocationCard key={location.branch} {...location} />
        ))}
      </div>
    </section>
  );
}
