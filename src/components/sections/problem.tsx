"use client";

import { useInView } from "@/hooks/use-in-view";

const HANDOFFS = [
  "The strategist has one idea.",
  "The designer interprets another.",
  "The editor gets a different brief.",
  "The media buyer sees the creative after it's already finished.",
];

export function Problem() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section className="w-full bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <h2 className="max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)]">
          Your creative shouldn&rsquo;t fall apart between handoffs.
        </h2>

        <p className="mt-8 max-w-[52ch] text-[1.15rem] leading-[1.55] text-[var(--color-ink)]">
          Most brands don&rsquo;t have a creativity problem. They have an{" "}
          <strong className="font-semibold text-[var(--color-accent-deep)]">
            execution problem
          </strong>
          .
        </p>

        <div ref={ref} className="mt-14 flex flex-col md:mt-16">
          {HANDOFFS.map((line, i) => (
            <p
              key={line}
              className="border-t border-[var(--color-line)] py-5 text-[1.15rem] leading-snug text-[var(--color-ink-muted)] transition-all duration-700 ease-out first:pt-0 md:text-[1.3rem]"
              style={{
                marginLeft: `${i * 1.75}rem`,
                transitionDelay: `${i * 110}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-1rem)",
              }}
            >
              {line}
            </p>
          ))}
          <p
            className="border-y border-[var(--color-line)] py-5 text-[1.15rem] font-medium leading-snug text-[var(--color-ink)] transition-all duration-700 ease-out md:text-[1.3rem]"
            style={{
              marginLeft: `${HANDOFFS.length * 1.75}rem`,
              transitionDelay: `${HANDOFFS.length * 110}ms`,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-1rem)",
            }}
          >
            By the time the campaign launches, nobody really owns the whole
            thing.
          </p>
        </div>

        <p className="mt-14 max-w-[62ch] text-[1.3rem] font-semibold leading-[1.4] tracking-[-0.01em] text-[var(--color-ink)] md:mt-16">
          At Doomsday,{" "}
          <span className="text-[var(--color-accent-deep)]">
            the people planning the work are connected to the people making
            and launching it.
          </span>
        </p>

        <p className="mt-6 max-w-[58ch] text-[1.05rem] leading-[1.55] text-[var(--color-ink-muted)]">
          So your brand stays consistent, campaigns move faster, and
          performance can actually influence what gets created next.
        </p>
      </div>
    </section>
  );
}
