import type { ReactNode } from "react";
import { ArrowRightIcon, MailIcon, MapPinIcon, PhoneIcon } from "../Icons";
import { Reveal } from "../Reveal";
import { contact, type IconComponent } from "../../lib/site-data";

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
        <div className="mt-1 max-w-xs whitespace-pre-line text-gusto-slate">{children}</div>
      </div>
    </li>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-36 bg-slate-50 px-6 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <Reveal
        as="h2"
        className="font-display text-center text-5xl text-gusto-orange uppercase sm:text-7xl"
      >
        Contact Us
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-6xl gap-x-16 gap-y-16 md:grid-cols-2">
        <Reveal as="div">
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
              <div className="flex flex-col gap-1">
                {contact.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="hover:text-gusto-orange"
                  >
                    H/P: {phone.label}
                  </a>
                ))}
              </div>
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
        </Reveal>

        <Reveal as="div" delay={100} className="rounded-2xl border border-gusto-navy/10 bg-white p-6 shadow-sm sm:p-8">
          <h3 id="contact-form-heading" className="font-display text-2xl text-gusto-navy uppercase sm:text-3xl">
            Send an Enquiry
          </h3>
          <p id="contact-form-notice" className="mt-3 text-sm text-gusto-slate/80">
            Online submissions are not available yet. Please contact us by
            phone or email in the meantime.
          </p>
          <form aria-labelledby="contact-form-heading" aria-describedby="contact-form-notice" className="mt-8 space-y-5">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-semibold text-gusto-navy">
                Name <span className="text-gusto-orange" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 w-full rounded-lg border border-gusto-navy/20 bg-white px-4 py-3 text-sm text-gusto-slate focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gusto-orange"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-gusto-navy">
                  Email <span className="text-gusto-orange" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded-lg border border-gusto-navy/20 bg-white px-4 py-3 text-sm text-gusto-slate focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gusto-orange"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-semibold text-gusto-navy">
                  Phone <span className="font-normal text-gusto-slate/70">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 w-full rounded-lg border border-gusto-navy/20 bg-white px-4 py-3 text-sm text-gusto-slate focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gusto-orange"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-gusto-navy">
                Message <span className="text-gusto-orange" aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full resize-y rounded-lg border border-gusto-navy/20 bg-white px-4 py-3 text-sm text-gusto-slate focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gusto-orange"
              />
            </div>
            <button
              type="submit"
              disabled
              aria-describedby="contact-form-notice"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gusto-orange px-6 py-3 font-wide text-sm font-semibold uppercase text-white disabled:cursor-not-allowed disabled:opacity-60 md:text-xs lg:text-sm"
            >
              Send Message
              <ArrowRightIcon className="size-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
