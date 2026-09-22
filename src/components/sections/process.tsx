"use client";

import { useInView } from "@/hooks/use-in-view";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    body: "We start with your business, audience, offer and what you're trying to achieve.",
  },
  {
    n: "02",
    title: "Create",
    body: "Strategy, concepts, design, video and campaign assets are developed under one direction.",
  },
  {
    n: "03",
    title: "Launch",
    body: "Content gets published. Campaigns go live. The work gets into the market.",
  },
  {
    n: "04",
    title: "Improve",
    body: "We use performance to decide what gets tested, changed and created next.",
  },
];

export function Process() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section id="work" className="w-full bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)]">
          How we work
        </h2>

        <div ref={ref} className="relative mt-16 md:mt-20">
          <div
            aria-hidden
            className="absolute left-3 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-[var(--color-line)] md:block"
          />
          <div
            aria-hidden
            className="absolute left-3 top-3 hidden w-px origin-top bg-[var(--color-accent)] transition-transform duration-[1400ms] ease-out md:block"
            style={{
              height: "calc(100% - 1.5rem)",
              transform: `scaleY(${inView ? 1 : 0})`,
            }}
          />

          <ol className="flex flex-col gap-10 md:gap-14">
            {STEPS.map((step, i) => (
              <li key={step.n} className="relative pl-10">
                <span
                  className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--color-surface)] text-[0] transition-colors duration-500"
                  style={{
                    backgroundColor: inView
                      ? "var(--color-accent)"
                      : "var(--color-line)",
                    transitionDelay: `${i * 220}ms`,
                  }}
                  aria-hidden
                />
                <div
                  className="transition-all duration-700 ease-out"
                  style={{
                    transitionDelay: `${i * 220}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(0.75rem)",
                  }}
                >
                  <span className="text-[0.85rem] font-semibold tabular-nums text-[var(--color-accent-deep)]">
                    {step.n}
                  </span>
                  <h3 className="mt-2 text-[1.3rem] font-bold leading-snug text-[var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[46ch] text-[1.05rem] leading-[1.55] text-[var(--color-ink-muted)]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-16 max-w-[56ch] text-[1.05rem] leading-[1.55] text-[var(--color-ink)] md:mt-20">
          No endless handoffs. No disconnected teams. No creative sitting in
          folders for three weeks.
        </p>
      </div>
    </section>
  );
}
