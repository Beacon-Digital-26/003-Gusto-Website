import Link from "next/link";
import { ShoppingBagIcon, StarIcon } from "../Icons";
import { ImageSlot } from "../ImageSlot";
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
      <Link
        href="/#contact"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-gusto-orange px-5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-orange-900/15 transition hover:-translate-y-0.5 hover:bg-gusto-orange-dark"
      >
        Buy Now
        <ShoppingBagIcon className="size-4" />
      </Link>
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
