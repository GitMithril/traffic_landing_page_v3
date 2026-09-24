"use client";

import { useInView } from "@/hooks/use-in-view";

const FRICTION_POINTS = [
  {
    title: "Ideas get reinterpreted",
    body: "The strategist has one idea. By the time it reaches the designer and editor, it's a different brief.",
  },
  {
    title: "Media sees creative last",
    body: "The media buyer only sees the creative once it's already finished — too late to shape it.",
  },
  {
    title: "Nobody owns the outcome",
    body: "By the time the campaign launches, no single person owns the whole thing.",
  },
];

export function Problem() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="w-full bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <p className="text-[0.85rem] font-bold tracking-[0.02em] text-[var(--color-danger)]">
          The problem
        </p>
        <h2 className="mt-3 max-w-[20ch] text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.04] tracking-[-0.015em] text-[var(--color-ink)]">
          Your creative shouldn&rsquo;t fall apart between handoffs.
        </h2>

        <p className="mt-6 max-w-[52ch] text-[1.15rem] leading-[1.55] text-[var(--color-ink)]">
          Most brands don&rsquo;t have a creativity problem. They have an{" "}
          <strong className="font-semibold text-[var(--color-danger-deep)]">
            execution problem
          </strong>
          .
        </p>

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 divide-y divide-[var(--color-line)] border-t border-[var(--color-line)] md:mt-16 md:grid-cols-3 md:divide-x md:divide-y-0 md:border-t-0"
        >
          {FRICTION_POINTS.map((point, i) => (
            <div
              key={point.title}
              className="py-6 transition-all duration-700 ease-out md:px-8 md:py-2 md:first:pl-0 md:last:pr-0"
              style={{
                transitionDelay: `${i * 110}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(0.75rem)",
              }}
            >
              <p className="text-[1.05rem] font-semibold leading-snug text-[var(--color-danger-deep)]">
                {point.title}
              </p>
              <p className="mt-2 max-w-[30ch] text-[0.95rem] leading-[1.5] text-[var(--color-ink-muted)]">
                {point.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center text-center md:mt-20">
          <p className="max-w-[46ch] text-[1.4rem] font-semibold italic leading-[1.4] tracking-[-0.01em] text-[var(--color-success-deep)] md:text-[1.6rem]">
            &ldquo;At Doomsday, the people planning the work are connected to
            the people making and launching it.&rdquo;
          </p>

          <p className="mt-5 max-w-[50ch] text-[0.95rem] leading-[1.55] text-[var(--color-ink-muted)]">
            So your brand stays consistent, campaigns move faster, and
            performance can actually influence what gets created next.
          </p>
        </div>
      </div>
    </section>
  );
}
