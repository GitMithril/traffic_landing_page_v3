"use client";

import { useEffect, useRef, useState } from "react";
import FadeContent from "@/components/FadeContent";
import { TestimonialCard, type Testimonial } from "@/components/ui/testimonial-card";

const QUOTES: Testimonial[] = [
  {
    quote:
      "Every piece looks like it belongs to us, not to a template.",
    name: "Victor",
    role: "CEO, Vix Protection",
    image: "/victor.avif",
  },
  {
    quote:
      "It's the first time our content actually felt intentional.",
    name: "Nick Levett",
    role: "Founder, Bespoke Events Management",
    image: "/nick_levett.avif",
  },
  {
    quote:
      "They understood our tone before we could fully explain it ourselves.",
    name: "Tanner Perkins",
    role: "Professional Athlete",
    image: "/tanner-perkins.avif",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setScrollProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="voices"
      className="w-full overflow-x-clip bg-[var(--color-surface)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <FadeContent duration={700} ease="power2.out" threshold={0.2}>
          <h2 className="max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.04] tracking-[-0.015em] text-[var(--color-ink)]">
            The work should feel like your brand. Not your agency&rsquo;s
            template.
          </h2>
        </FadeContent>

        <div className="relative mt-12 md:mt-14">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {QUOTES.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>

          {/* Scroll-position indicator */}
          <div className="pointer-events-none absolute right-0 top-0 hidden h-[24rem] w-1 rounded-full bg-[var(--color-line)] sm:block">
            <div
              className="w-1 rounded-full bg-[var(--color-accent)] transition-[top] duration-150 ease-out"
              style={{
                height: "30%",
                position: "absolute",
                top: `${scrollProgress * 70}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
