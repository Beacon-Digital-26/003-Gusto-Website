import Image from "next/image";
import type { ComponentType, ReactNode } from "react";
import {
  ArrowRightIcon,
  BedIcon,
  BuildingIcon,
  DropIcon,
  ExpandIcon,
  FacebookIcon,
  FactoryIcon,
  InstagramIcon,
  LayersIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShoppingBagIcon,
  SprayIcon,
  StarIcon,
  TikTokIcon,
  ToolsIcon,
  TruckIcon,
  WhatsAppIcon,
} from "./_components/icons";
import { ImageSlot } from "./_components/image-slot";
import { AutoHideHeader } from "./_components/auto-hide-header";
import { FooterNav, SiteNav } from "./_components/site-nav";

// Drop files into /public/images and set the paths here, e.g. "/images/logo.png".
const images: {
  logo?: string;
  heroProduct?: string;
  whyChooseUs?: string;
  aboutRolls?: string;
  aboutWatermark?: string;
} = {
  logo: "/images/logo.png",
  heroProduct: "/images/hero-product2.png",
  whyChooseUs: "/images/why-choose-us.png",
  aboutRolls: "/images/about-us-product.png",
  aboutWatermark: "/images/about-watermark.png",
};

type IconComponent = ComponentType<{ className?: string }>;

const partners: { name: string; icon: IconComponent }[] = [
  { name: "Apex Logistics", icon: TruckIcon },
  { name: "Metro Facilities", icon: BuildingIcon },
  { name: "Nordic Clean", icon: SprayIcon },
  { name: "Summit Build", icon: ToolsIcon },
  { name: "Titan Industrial", icon: FactoryIcon },
  { name: "Grand Plaza", icon: BedIcon },
];

const products: {
  size: string;
  dimensions: string;
  bagsPerRoll: number;
  image?: string;
  imageClassName?: string;
}[] = [
  { size: "S", dimensions: "19 x 22 inch", bagsPerRoll: 20, image: "/images/s-product.png" },
  { size: "M", dimensions: "22 x 34 inch", bagsPerRoll: 20, image: "/images/m-product.png", imageClassName: "object-cover scale-[1.12]" },
  { size: "L", dimensions: "28 x 35 inch", bagsPerRoll: 20, image: "/images/l-product.png", imageClassName: "object-cover scale-[1.12]" },
  { size: "XL", dimensions: "32 x 39 inch", bagsPerRoll: 15, image: "/images/xl-product.png", imageClassName: "object-cover scale-[1.12]" },
  { size: "XXL", dimensions: "36 x 48 inch", bagsPerRoll: 10, image: "/images/xxl-product.png", imageClassName: "object-cover scale-[1.12]" },
];

const testimonials = [
  {
    quote:
      "No more double bagging. Gusto bags cut our facility plastic waste in half while never splitting even under heavy liquid loads.",
    name: "Marcus T.",
    role: "Head of Facilities, Apex Logistics",
  },
  {
    quote:
      "We dump sharp metal offcuts and wet debris daily. Zero rips or leaks. Absolute tank of a bag for demolition sites.",
    name: "Ir. Dave Wong",
    role: "Site Operations Manager, Summit Construction",
  },
  {
    quote:
      "Heng Heng Plastic delivers pristine German-grade quality right on schedule. It has eliminated housekeeping leaks in all 8 hotel properties.",
    name: "Sarah Lin",
    role: "Supply Chain Director, Grand Pacific Hospitality",
  },
];

const contact = {
  phone: "012-922 5233",
  phoneHref: "tel:+60129225233",
  email: "yonghainmsb@gmail.com",
  hqAddress:
    "No. 2, 2A, 3, 3A, 4, 4A, Lot 5440, Persimpangan, Jln Taman Jeliti, Tandop, 05400 Alor Setar, Kedah",
};

// Replace "#" with the real profile/store URLs.
const socials: { label: string; href: string; icon: IconComponent }[] = [
  { label: "WhatsApp", href: "https://wa.me/60129225233", icon: WhatsAppIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "TikTok", href: "#", icon: TikTokIcon },
  { label: "Shopee", href: "#", icon: ShoppingBagIcon },
];

const locations: { branch: string; address: string; image?: string }[] = [
  { branch: "Headquarters", address: contact.hqAddress },
  {
    branch: "Sungai Petani",
    address: "No 5, Jalan Petri, Taman Pekan Baru, Sungai Petani, Malaysia, 08000",
  },
  {
    branch: "Simpang Kuala",
    address: "228A, Jalan PSK 7, Pekan Simpang Kuala, Simpang Kuala, 05400 Alor Setar, Kedah",
  },
  {
    branch: "Simpang Empat",
    address: "No. 8E, Tingkat Bawah, Jalan Pekan Simpang Empat 3, Simpang Empat, 06650 Alor Setar, Kedah",
  },
  {
    branch: "Tanah Merah",
    address: "No 70 BWH, Jalan Tanah Merah, Bandar Baru, Tanah Merah, 06700 Pendang, Kedah",
  },
];

const businessHours = [
  { day: "Mon - Fri", hours: "8:30 AM - 5:30 PM" },
  { day: "Sat", hours: "8:30 AM - 1:00 PM" },
  { day: "Sun & PH", hours: "Closed" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-gusto-slate">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <WhyChooseUs />
        <Products />
        <Testimonials />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <AutoHideHeader>
      <div className="flex justify-center py-3">
        <a href="#home" aria-label="Gusto Pro home">
          {images.logo ? (
            <Image
              src={images.logo}
              alt="Gusto Pro"
              width={259}
              height={114}
              preload
              className="h-[114px] w-[259px]"
            />
          ) : (
            <LogoFallback />
          )}
        </a>
      </div>
      <SiteNav />
    </AutoHideHeader>
  );
}

function LogoFallback() {
  return (
    <div className="relative inline-flex flex-col items-center">
      <span className="font-display rounded-t-[2rem] rounded-b-lg border-4 border-gusto-navy bg-gusto-navy px-6 pb-1 pt-1.5 text-2xl tracking-tight text-white shadow-[inset_0_0_0_3px_white] sm:text-3xl">
        GUSTO
      </span>
      <span className="font-display -mt-2 self-end rounded-md border-2 border-white bg-gusto-navy px-2 text-xs text-white">
        PRO
      </span>
    </div>
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
          <a
            href="#products"
            className="mt-8 inline-flex h-[56px] w-[231px] items-center justify-center gap-2 rounded-full bg-gusto-orange-dark text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-[#e04f00]"
          >
            Shop Gusto Now
            <ArrowRightIcon className="size-4" />
          </a>
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

function Products() {
  return (
    <section id="products" className="scroll-mt-36 bg-white px-6 pb-24 sm:px-10">
      <h2 className="font-display text-center text-[84px] leading-[62px] tracking-[-1.12px] text-gusto-orange uppercase">
        Products
      </h2>
      <ul className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-12">
        {products.map((product) => (
          <li
            key={product.size}
            className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProductCard({
  size,
  dimensions,
  bagsPerRoll,
  image,
  imageClassName,
}: (typeof products)[number]) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-100 to-zinc-200">
        <ImageSlot
          src={image}
          alt={`Gusto Pro heavy duty garbage bag, size ${size}`}
          label={`Size ${size} product image`}
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          imageClassName={imageClassName}
          className="aspect-[4/3] w-full text-gusto-slate transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-3xl font-extrabold uppercase leading-none text-gusto-slate">
            Size {size}
          </h3>
          <p className="mt-1 text-xs text-gusto-slate/70">
            {bagsPerRoll} Bags/Roll
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-medium text-gusto-slate/80">
          {dimensions}
        </span>
      </div>
      <a
        href="#contact"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-gusto-orange px-5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-orange-900/15 transition hover:-translate-y-0.5 hover:bg-gusto-orange-dark"
      >
        Buy Now
        <ShoppingBagIcon className="size-4" />
      </a>
    </article>
  );
}

function Testimonials() {
  return (
    <section className="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24">
      <p className="font-wide text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gusto-slate/80 sm:text-xs">
        Field Proven Durability
      </p>
      <h2 className="font-display mt-3 text-center text-4xl leading-[0.95] text-gusto-orange uppercase sm:text-6xl">
        Strong Bags,
        <br />
        Happy Customers
      </h2>
      <ul className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <li
            key={testimonial.name}
            className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.05)]"
          >
            <div className="flex gap-0.5 text-gusto-orange" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} className="size-3.5" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-gusto-slate/90">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <footer className="mt-8">
              <p className="text-sm font-bold text-gusto-slate">
                {testimonial.name}
              </p>
              <p className="text-[11px] text-gusto-slate/60">
                {testimonial.role}
              </p>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AboutUs() {
  return (
    <section
      id="about"
      className="relative scroll-mt-36 overflow-hidden bg-white py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[1056px] w-[1036px] -translate-y-1/2"
      >
        {images.aboutWatermark ? (
          <Image
            src={images.aboutWatermark}
            alt=""
            fill
            sizes="1036px"
            className="object-contain object-right"
          />
        ) : (
          <div className="font-display flex size-full items-center justify-center rounded-full border-[3rem] border-zinc-200/70 text-[22rem] leading-none text-zinc-200/70">
            H
          </div>
        )}
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <ImageSlot
          src={images.aboutRolls}
          alt="Stack of Gusto Pro heavy duty garbage bag rolls in sizes S to XXL"
          label="Stacked rolls image"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="mx-6 aspect-[2/3] max-w-xl bg-white text-gusto-slate lg:mx-0"
        />
        <div className="px-6 text-center sm:px-10 lg:pr-16 lg:text-right">
          <h2 className="font-display text-5xl tracking-[-1.12px] text-gusto-orange uppercase sm:text-6xl lg:text-7xl">
            About Us
          </h2>
          <div className="mt-6 space-y-5 text-right text-[18px] font-light leading-[1.7] text-[#b3b3b3] lg:ml-auto lg:max-w-xl">
            <p>
              Gusto is a trash bag brand by Heng Heng Plastic Trading. We make
              strong, reliable bags built to handle everyday household and
              commercial waste without tearing or leaking.
            </p>
            <p>
              With years of experience in the plastics trade, we focus on
              quality materials, consistent sizing, and fair prices. Whether
              you need bags for your home, shop, restaurant, or office, Gusto
              has a size and thickness to fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactUs() {
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

const footerSocials = socials.filter((item) =>
  ["WhatsApp", "Instagram", "TikTok", "Shopee"].includes(item.label),
);

function Footer() {
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
