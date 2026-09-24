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

const GLASS_CARD =
  "relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/45 shadow-[0_20px_45px_-24px_rgba(10,10,10,0.25)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-24px_rgba(10,10,10,0.32)]";

export function Problem() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-surface)] py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[10%] top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-accent) 0%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-accent-light) 0%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-[90rem] px-6 md:px-10">
        <p className="text-[0.85rem] font-bold tracking-[0.02em] text-[var(--color-danger)]">
          The problem
        </p>
        <h2 className="mt-3 max-w-[20ch] text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-3.5px] text-[var(--color-ink)]">
          Your creative shouldn&rsquo;t fall apart between handoffs.
        </h2>

        <p className="mt-3 max-w-[52ch] text-[1.15rem] leading-[1.55] text-[var(--color-ink)]">
          Most brands don&rsquo;t have a creativity problem. They have an{" "}
          <strong className="font-semibold text-[var(--color-danger-deep)]">
            execution problem
          </strong>
          .
        </p>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-4 md:mt-14 md:grid-cols-3"
        >
          {FRICTION_POINTS.map((point, i) => (
            <div
              key={point.title}
              className={`${GLASS_CARD} p-6`}
              style={{
                transitionDelay: inView ? undefined : `${i * 110}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? undefined : "translateY(0.75rem)",
              }}
            >
              <p className="relative text-[1.05rem] font-semibold leading-snug text-[var(--color-danger-deep)]">
                {point.title}
              </p>
              <p className="relative mt-2 text-[0.95rem] leading-[1.5] text-[var(--color-ink-muted)]">
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
