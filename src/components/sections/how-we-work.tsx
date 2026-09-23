"use client";

import { useInView } from "@/hooks/use-in-view";
import { CtaButton } from "@/components/ui/cta-button";

const DISCIPLINES = [
  {
    name: "Content",
    body: "Short-form video, social creative, editing, motion and graphics designed around your brand, not a template.",
  },
  {
    name: "Paid Media",
    body: "Meta campaign management, creative testing, optimization and reporting.",
  },
  {
    name: "Brand",
    body: "Creative direction, visual identity and campaign concepts that make the work recognizably yours.",
  },
  {
    name: "Web",
    body: "Landing pages, campaign experiences and Framer builds designed to turn attention into action.",
  },
];

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

export function HowWeWork() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="work" className="w-full bg-[var(--color-surface-warm)] py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <h2 className="max-w-[22ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)]">
          Everything needed to keep your brand moving.
        </h2>

        {/* One connected line running from what we do into how we do it —
            not two separate lists pretending to be one team. */}
        <div ref={ref} className="relative mt-16 md:mt-20">
          <div
            aria-hidden
            className="absolute left-3 top-3 h-[calc(100%-1.5rem)] w-px bg-[var(--color-line)]"
          />
          <div
            aria-hidden
            className="absolute left-3 top-3 w-px origin-top bg-[var(--color-accent)] transition-transform duration-[2200ms] ease-out"
            style={{
              height: "calc(100% - 1.5rem)",
              transform: `scaleY(${inView ? 1 : 0})`,
            }}
          />

          <ol className="flex flex-col gap-10 md:gap-12">
            {DISCIPLINES.map((d, i) => (
              <li key={d.name} className="relative pl-10">
                <span
                  className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--color-surface-warm)] transition-colors duration-500"
                  style={{
                    backgroundColor: inView
                      ? "var(--color-accent)"
                      : "var(--color-line)",
                    transitionDelay: `${i * 140}ms`,
                  }}
                  aria-hidden
                />
                <div
                  className="transition-all duration-700 ease-out"
                  style={{
                    transitionDelay: `${i * 140}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(0.75rem)",
                  }}
                >
                  <h3 className="text-[1.3rem] font-bold leading-snug text-[var(--color-ink)]">
                    {d.name}
                  </h3>
                  <p className="mt-2 max-w-[46ch] text-[1.05rem] leading-[1.55] text-[var(--color-ink-muted)]">
                    {d.body}
                  </p>
                </div>
              </li>
            ))}

            <li className="relative pl-10">
              <div
                className="transition-all duration-700 ease-out"
                style={{
                  transitionDelay: `${DISCIPLINES.length * 140}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(0.75rem)",
                }}
              >
                <h3 className="text-[1.05rem] font-semibold tracking-[-0.01em] text-[var(--color-ink-muted)]">
                  How we work
                </h3>
              </div>
            </li>

            {STEPS.map((step, i) => {
              const index = DISCIPLINES.length + 1 + i;
              return (
                <li key={step.n} className="relative pl-10">
                  <span
                    className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--color-surface-warm)] transition-colors duration-500"
                    style={{
                      backgroundColor: inView
                        ? "var(--color-accent)"
                        : "var(--color-line)",
                      transitionDelay: `${index * 140}ms`,
                    }}
                    aria-hidden
                  />
                  <div
                    className="transition-all duration-700 ease-out"
                    style={{
                      transitionDelay: `${index * 140}ms`,
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
              );
            })}
          </ol>
        </div>

        <p className="mt-16 max-w-[56ch] text-[1.05rem] leading-[1.55] text-[var(--color-ink)] md:mt-20">
          No endless handoffs. No disconnected teams. No creative sitting in
          folders for three weeks.
        </p>

        <div className="mt-10">
          <CtaButton href="#pricing" variant="outline">
            See If We&rsquo;re a Fit
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
