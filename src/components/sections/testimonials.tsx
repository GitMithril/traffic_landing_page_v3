"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import FadeContent from "@/components/FadeContent";

const QUOTES = [
  {
    quote:
      "Working with Doomsday changed how consistent our brand feels online. Every piece looks like it belongs to us, not to a template.",
    name: "Victor",
    role: "CEO, Vix Protection",
  },
  {
    quote:
      "Our engagement and inquiries picked up noticeably once Doomsday took over. It's the first time our content actually felt intentional.",
    name: "Nick Levett",
    role: "Founder, Bespoke Events Management",
  },
];

const FEATURED = {
  quote:
    "They understood the tone we wanted before we could fully explain it ourselves. The creative carries our brand better than anything we've had before.",
  name: "Tanner Perkins",
  role: "Professional Athlete",
  image: "/tanner-perkins.avif",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

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
          <h2 className="max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)]">
            The work should feel like your brand. Not your agency&rsquo;s
            template.
          </h2>
        </FadeContent>

        <div className="relative mt-12 md:mt-14">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* Featured photo card — the only testimonial with a real photo on file */}
            <div className="relative h-[26rem] w-[16rem] shrink-0 snap-start overflow-hidden rounded-[1.5rem] sm:h-[28rem] sm:w-[18rem]">
              <Image
                src={FEATURED.image}
                alt=""
                fill
                sizes="288px"
                className="object-cover"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <Quote
                  aria-hidden
                  className="h-5 w-5 shrink-0 fill-white/40 text-white/40"
                  strokeWidth={0}
                />
                <blockquote className="mt-2 text-[0.9rem] italic leading-snug text-white/90">
                  {FEATURED.quote}
                </blockquote>
                <p className="mt-4 text-[1.2rem] font-bold leading-tight text-white">
                  {FEATURED.name}
                </p>
                <p className="mt-1 text-[0.85rem] text-white/75">
                  {FEATURED.role}
                </p>
              </div>
            </div>

            {QUOTES.map((t) => (
              <div
                key={t.name}
                className="h-[26rem] w-[19rem] shrink-0 snap-start rounded-[1.5rem] bg-[var(--color-surface-warm)] p-7 sm:h-[28rem] sm:w-[21rem] sm:p-8"
              >
                <div className="flex h-full flex-col">
                  <Quote
                    aria-hidden
                    className="h-7 w-7 shrink-0 fill-[var(--color-ink-muted)]/25 text-[var(--color-ink-muted)]/25"
                    strokeWidth={0}
                  />
                  <blockquote className="mt-4 text-[1.05rem] leading-[1.55] text-[var(--color-ink)]">
                    {t.quote}
                  </blockquote>

                  <div className="mt-auto flex items-center gap-3 pt-6">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)]/10 text-xs font-semibold tracking-wide text-[var(--color-ink)]">
                      {initials(t.name)}
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[0.95rem] font-semibold text-[var(--color-ink)]">
                        {t.name}
                      </span>
                      <span className="text-[0.85rem] text-[var(--color-ink-muted)]">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll-position indicator */}
          <div className="pointer-events-none absolute right-0 top-0 hidden h-[26rem] w-1 rounded-full bg-[var(--color-line)] sm:block sm:h-[28rem]">
            <div
              className="w-1 rounded-full bg-[var(--color-accent)] transition-[top] duration-150 ease-out"
              style={{
                height: "22%",
                position: "absolute",
                top: `${scrollProgress * 78}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
