import Link from "next/link";
import { ArrowRightIcon } from "../Icons";
import { ImageSlot } from "../ImageSlot";
import { Reveal } from "../Reveal";
import { TestimonialsCarousel } from "../TestimonialsCarousel";
import { products, testimonials } from "../../lib/site-data";

export function ProductsSection() {
  return (
    <>
      <Products />
      <Testimonials />
    </>
  );
}

function Products() {
  return (
    <section id="products" className="scroll-mt-36 bg-white px-6 pb-24 sm:px-8 lg:px-10">
      <Reveal
        as="h2"
        className="font-display text-center text-5xl leading-[0.9] tracking-[-1.12px] text-gusto-orange uppercase sm:text-6xl lg:text-[84px] lg:leading-[62px]"
      >
        Products
      </Reveal>
      <ul className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-12">
        {products.map((product, index) => (
          <Reveal
            as="li"
            key={product.size}
            delay={index * 80}
            className={`w-full sm:w-[calc(50%-0.75rem)] ${
              product.large
                ? "lg:w-[calc(42%-0.75rem)]"
                : "lg:w-[calc(33.333%-1rem)]"
            }`}
          >
            <ProductCard {...product} />
          </Reveal>
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
  frameClassName,
  large,
}: (typeof products)[number]) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-100 to-zinc-200">
        <ImageSlot
          src={image}
          alt={`Gusto Pro heavy duty garbage bag, size ${size}`}
          label={`Size ${size} product image`}
          sizes={
            large
              ? "(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
              : "(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          }
          imageClassName={imageClassName}
          className={`${frameClassName ?? "aspect-[4/3]"} w-full text-gusto-slate transition duration-300 group-hover:scale-105`}
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
      <Link
        href="https://my.shp.ee/FnGHdEFP"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-gusto-orange px-5 py-2 font-wide text-sm font-semibold uppercase text-white shadow-md shadow-orange-900/15 transition hover:-translate-y-0.5 hover:bg-gusto-orange-dark md:text-xs lg:text-sm"
      >
        Buy Now
        <ArrowRightIcon className="size-4" />
      </Link>
    </article>
  );
}

function Testimonials() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20 sm:py-24">
      <Reveal as="div" className="px-6 sm:px-8 lg:px-10">
        <p className="font-wide text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gusto-slate/80 sm:text-xs">
          Shopee Reviews
        </p>
        <h2 className="font-display mt-3 text-center text-4xl leading-[0.95] text-gusto-orange uppercase sm:text-6xl">
          Strong Bags,
          <br />
          Happy Customers
        </h2>
      </Reveal>
      <div className="mt-12">
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
