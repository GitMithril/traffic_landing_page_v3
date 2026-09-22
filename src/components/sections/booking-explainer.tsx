"use client";

import { CtaButton } from "@/components/ui/cta-button";
import { useInView } from "@/hooks/use-in-view";

const STEPS = [
  {
    n: "01",
    title: "What you're doing now",
    body: "Your content, advertising, creative process and current bottlenecks.",
  },
  {
    n: "02",
    title: "What's holding things back",
    body: "Where the issue is strategy, execution, creative consistency, campaign performance or a combination.",
  },
  {
    n: "03",
    title: "What we'd prioritize next",
    body: "The areas we'd address first and whether Doomsday Studios is actually the right team to do it.",
  },
];

export function BookingExplainer() {
  const { ref, inView } = useInView<HTMLUListElement>(0.25);

  return (
    <section className="w-full bg-[var(--color-surface-warm)] py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)]">
            What happens when you book?
          </h2>
          <p className="mt-6 text-[1.1rem] leading-[1.55] text-[var(--color-ink-muted)]">
            This isn&rsquo;t a generic agency pitch. We&rsquo;ll use the
            conversation to understand:
          </p>
        </div>

        <ul
          ref={ref}
          className="mt-14 grid gap-x-10 gap-y-12 border-t border-[var(--color-line)] pt-12 md:mt-16 md:grid-cols-3 md:pt-14"
        >
          {STEPS.map((step, i) => (
            <li
              key={step.n}
              className="transition-all duration-700 ease-out"
              style={{
                transitionDelay: `${i * 130}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(1.25rem)",
              }}
            >
              <span className="text-[0.9rem] font-semibold tabular-nums text-[var(--color-accent-deep)]">
                {step.n}
              </span>
              <h3 className="mt-3 text-[1.2rem] font-bold leading-snug text-[var(--color-ink)]">
                {step.title}
              </h3>
              <p className="mt-3 text-[1rem] leading-[1.55] text-[var(--color-ink-muted)]">
                {step.body}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-14 max-w-[52ch] text-[1.05rem] leading-[1.55] text-[var(--color-ink)] md:mt-16">
          Even if we don&rsquo;t work together, you should leave with a
          clearer idea of what needs fixing next.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4">
          <CtaButton href="#book">Book a Call</CtaButton>
          <p className="max-w-[42ch] text-[0.9rem] leading-snug text-[var(--color-ink-muted)]">
            Come with the brand, campaign or creative problem you want
            solved. We&rsquo;ll start there.
          </p>
        </div>
      </div>
    </section>
  );
}
