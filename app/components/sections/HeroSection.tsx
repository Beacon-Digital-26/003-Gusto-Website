import Link from "next/link";
import {
  ArrowRightIcon,
  DropIcon,
  ExpandIcon,
  LayersIcon,
  MoneyBagIcon,
} from "../Icons";
import { ImageSlot } from "../ImageSlot";
import { Reveal } from "../Reveal";
import { images, type IconComponent } from "../../lib/site-data";

export function HeroSection() {
  return (
    <>
      <Hero />
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
        className="font-display pointer-events-none absolute inset-y-0 right-0 flex select-none flex-col justify-center pr-[2vw] text-right text-[233px] leading-[0.85] md:text-[160px] lg:text-[233px] tracking-[14%] text-white/15"
      >
        <span>GUSTO</span>
        <span>PRO</span>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-32 pt-[75px] sm:px-8 lg:px-10 md:grid-cols-2 md:pb-40 md:pt-[91px]">
        <Reveal className="relative z-10 md:col-start-1 xl:-ml-[50px]">
          <h1 className="font-display text-6xl leading-[90px] text-white uppercase sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
            Trash
            <br />
            Bag
            <br />
            Built
            <br />
            Tough
          </h1>
          <p className="mt-6 text-base text-white/80 sm:text-lg">
            Manufactured by Heng Heng Plastic Trading Malaysia
          </p>
          <Link
            href="/#products"
            className="mt-8 inline-flex h-[56px] w-[231px] items-center justify-center gap-2 rounded-full bg-gusto-orange-dark font-wide text-sm font-semibold uppercase text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-[#e04f00] md:text-xs lg:text-sm"
          >
            Shop Gusto Now
            <ArrowRightIcon className="size-4" />
          </Link>
        </Reveal>

        <Reveal
          delay={150}
          className="relative z-10 flex justify-center md:absolute md:right-[-4%] md:top-1/2 md:w-[min(608.24px,50vw)] md:-translate-y-[calc(50%+5px)] lg:-translate-x-[100px] md:justify-end"
        >
          <ImageSlot
            src={images.heroProduct}
            alt="Gusto Pro heavy duty garbage bag roll"
            label="Hero product image"
            sizes="(min-width: 768px) 609px, 300px"
            preload
            className="aspect-[608.24/722.41] w-[300px] max-w-full drop-shadow-2xl md:w-[min(608.24px,50vw)]"
          />
        </Reveal>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 sm:px-8 lg:px-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
        <div className="lg:order-last lg:-ml-[calc(14rem-90px)]">
          <Reveal
            as="h2"
            className="font-display text-5xl leading-[0.9] tracking-[-1.12px] text-gusto-orange uppercase sm:text-6xl lg:text-[84px] lg:leading-[62px]"
          >
            Why
            <br />
            <span className="whitespace-nowrap">Choose Us?</span>
          </Reveal>

          <div className="lg:translate-x-10">
            <div className="mt-10 grid gap-5 sm:grid-cols-[1.6fr_1fr]">
              <Reveal as="div">
                <FeatureCard
                  icon={LayersIcon}
                  title="3-Layer Film"
                  description="Advanced co-extrusion cross-lamination prevents lateral split initiation even under sharp stress."
                  large
                />
              </Reveal>
              <Reveal as="div" delay={80} className="sm:mt-8 sm:self-center">
                <FeatureCard icon={ExpandIcon} title="Holds 35KG" />
              </Reveal>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_1.6fr]">
              <Reveal as="div" delay={160} className="sm:self-start">
                <FeatureCard icon={DropIcon} title="Water Resistant" />
              </Reveal>
              <Reveal as="div" delay={240}>
                <FeatureCard
                  icon={MoneyBagIcon}
                  title="Affordable"
                  description="Three layers. Zero leaks. Lower price. Stronger than standard bags, without the premium cost."
                  large
                />
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal
          delay={150}
          className="relative -ml-6 flex justify-start sm:-ml-8 lg:order-first lg:ml-[calc(min((80rem_-_100vw)/2,0px)_-_2.5rem)]"
        >
          <ImageSlot
            src={images.whyChooseUs}
            alt="Hand holding a tied black Gusto Pro garbage bag"
            label="Hand holding bag image"
            sizes="(min-width: 1280px) 700px, (min-width: 1024px) 56vw, 320px"
            className="aspect-[873/1222] w-[320px] max-w-full text-gusto-slate lg:w-[min(700px,calc(55.56vw_-_207px))] xl:w-[700px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

type FeatureCardProps = {
  icon: IconComponent;
  title: string;
  description?: string;
  large?: boolean;
};

function FeatureCard({
  icon: FeatureIcon,
  title,
  description,
  large,
}: FeatureCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(255,122,0,0.38)]">
      <span className="flex size-9 items-center justify-center rounded-full bg-gusto-orange/10 text-gusto-orange">
        <FeatureIcon className="size-4" />
      </span>
      <h3
        className={`mt-5 font-extrabold uppercase leading-none text-gusto-slate text-2xl ${
          large ? "sm:text-4xl" : ""
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
