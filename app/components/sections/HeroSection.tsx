import Link from "next/link";
import {
  ArrowRightIcon,
  DropIcon,
  ExpandIcon,
  LayersIcon,
} from "../Icons";
import { ImageSlot } from "../ImageSlot";
import { images, partners, type IconComponent } from "../../lib/site-data";

export function HeroSection() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhyChooseUs />
    </>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative -mt-px overflow-hidden bg-gradient-to-b from-gusto-orange from-60% to-white"
    >
      <div
        aria-hidden="true"
        className="font-display pointer-events-none absolute inset-y-0 right-0 flex select-none flex-col justify-center pr-[2vw] text-right text-[233px] leading-[0.85] tracking-[14%] text-white/15"
      >
        <span>GUSTO</span>
        <span>PRO</span>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-32 pt-[75px] sm:px-10 md:grid-cols-2 md:pb-40 md:pt-[91px]">
        <div className="relative z-10 -ml-[50px] md:col-start-1">
          <h1 className="font-display text-6xl leading-[90px] text-white uppercase sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
            Trash
            <br />
            Bag
            <br />
            Built
            <br />
            Tough
          </h1>
          <p className="mt-6 max-w-xs text-base text-white/80 sm:text-lg">
            Manufactured by Heng Heng Plastic Trading Malaysia
          </p>
          <Link
            href="/#products"
            className="mt-8 inline-flex h-[56px] w-[231px] items-center justify-center gap-2 rounded-full bg-gusto-orange-dark text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-[#e04f00]"
          >
            Shop Gusto Now
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <div className="relative z-10 flex justify-center md:absolute md:right-[-4%] md:top-1/2 md:w-[608.24px] md:-translate-x-[100px] md:-translate-y-[calc(50%+5px)] md:justify-end">
          <ImageSlot
            src={images.heroProduct}
            alt="Gusto Pro heavy duty garbage bag roll"
            label="Hero product image"
            sizes="609px"
            preload
            className="aspect-[608.24/722.41] w-[608.24px] max-w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="font-wide text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-gusto-navy/70 sm:text-xs">
        Trusted by leading businesses &amp; facilities across Asia-Pacific
      </p>
      <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
        {partners.map(({ name, icon: PartnerIcon }) => (
          <li key={name} className="flex items-center justify-center gap-2">
            <PartnerIcon className="size-5 shrink-0 text-gusto-orange" />
            <span className="font-wide max-w-[8rem] text-xs font-medium uppercase leading-tight text-gusto-navy sm:text-sm">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 sm:px-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="-translate-x-[30px]">
          <h2 className="font-display text-[84px] leading-[62px] tracking-[-1.12px] text-gusto-orange uppercase">
            Why
            <br />
            <span className="whitespace-nowrap">Choose Us?</span>
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-[1.6fr_1fr]">
            <FeatureCard
              icon={LayersIcon}
              title="3-Layer Film"
              description="Advanced co-extrusion cross-lamination prevents lateral split initiation even under sharp stress."
              large
            />
            <FeatureCard
              icon={ExpandIcon}
              title="Holds 35KG"
              className="sm:mt-8 sm:self-center"
            />
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_1.6fr]">
            <FeatureCard
              icon={DropIcon}
              title="Water Resistant"
              className="sm:self-start"
            />
            <FeatureCard
              icon={LayersIcon}
              title="Affordable"
              description="Three layers. Zero leaks. Lower price. Stronger than standard bags, without the premium cost."
              large
            />
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <ImageSlot
            src={images.whyChooseUs}
            alt="Hand holding a tied black Gusto Pro garbage bag"
            label="Hand holding bag image"
            sizes="740px"
            className="aspect-[740/925] w-[740px] max-w-full -translate-x-[80px] bg-white text-gusto-slate"
          />
        </div>
      </div>
    </section>
  );
}

type FeatureCardProps = {
  icon: IconComponent;
  title: string;
  description?: string;
  large?: boolean;
  className?: string;
};

function FeatureCard({
  icon: FeatureIcon,
  title,
  description,
  large,
  className = "",
}: FeatureCardProps) {
  return (
    <article
      className={`rounded-2xl border border-black/5 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(255,122,0,0.38)] ${className}`}
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-gusto-orange/10 text-gusto-orange">
        <FeatureIcon className="size-4" />
      </span>
      <h3
        className={`mt-5 font-extrabold uppercase leading-none text-gusto-slate ${
          large ? "text-3xl sm:text-4xl" : "text-2xl"
        }`}
      >
        {title}
      </h3>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-gusto-slate/80">
          {description}
        </p>
      )}
    </article>
  );
}
