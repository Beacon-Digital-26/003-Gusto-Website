"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "./Icons";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

const GAP_PX = 24;
const AUTO_SCROLL_INTERVAL_MS = 6000;

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const tablet = window.matchMedia("(min-width: 640px)");

    function update() {
      setItemsPerView(desktop.matches ? 3 : tablet.matches ? 2 : 1);
    }

    update();
    desktop.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  return itemsPerView;
}

export function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const itemsPerView = useItemsPerView();
  const isSwipe = itemsPerView === 1;
  const maxIndex = Math.max(testimonials.length - itemsPerView, 0);
  const [index, setIndex] = useState(0);
  const clampedIndex = Math.min(index, maxIndex);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const goNext = useCallback(() => {
    setIndex((current) => {
      const current0 = Math.min(current, maxIndex);
      return current0 >= maxIndex ? 0 : current0 + 1;
    });
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setIndex((current) => {
      const current0 = Math.min(current, maxIndex);
      return current0 <= 0 ? maxIndex : current0 - 1;
    });
  }, [maxIndex]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isSwipe || isPaused || maxIndex === 0 || reducedMotion) return;
    const id = setInterval(goNext, AUTO_SCROLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isSwipe, isPaused, maxIndex, goNext]);

  const itemWidth =
    containerWidth > 0
      ? (containerWidth - (itemsPerView - 1) * GAP_PX) / itemsPerView
      : 0;
  const offsetPx = clampedIndex * (itemWidth + GAP_PX);

  return (
    <div
      role="region"
      aria-label="Customer testimonials"
      className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <button
        type="button"
        onClick={goPrev}
        aria-label="Show previous testimonials"
        className="absolute left-0 top-1/2 z-10 hidden size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gusto-navy/15 bg-white text-gusto-navy shadow-md transition hover:bg-gusto-orange hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gusto-orange sm:flex sm:size-12"
      >
        <ArrowLeftIcon className="size-4" />
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Show next testimonials"
        className="absolute right-0 top-1/2 z-10 hidden size-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-gusto-navy/15 bg-white text-gusto-navy shadow-md transition hover:bg-gusto-orange hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gusto-orange sm:flex sm:size-12"
      >
        <ArrowRightIcon className="size-4" />
      </button>

      <div
        ref={containerRef}
        className={
          isSwipe
            ? "snap-x snap-mandatory overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            : "overflow-hidden"
        }
      >
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{
            gap: GAP_PX,
            transform: isSwipe ? undefined : `translateX(-${offsetPx}px)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              style={{ flex: `0 0 ${itemWidth}px` }}
              className="flex snap-center flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.05)]"
            >
              <div
                className="flex gap-0.5 text-gusto-orange"
                aria-label="5 out of 5 stars"
              >
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
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
