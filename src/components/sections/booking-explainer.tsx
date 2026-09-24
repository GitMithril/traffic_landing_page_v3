"use client";

import { CtaButton } from "@/components/ui/cta-button";
import { useInView } from "@/hooks/use-in-view";

const STEPS = [
  {
    n: "01",
    title: "What you're doing now",
    body: "Your content, advertising and current bottlenecks.",
  },
  {
    n: "02",
    title: "What's holding things back",
    body: "Strategy, execution, consistency or performance.",
  },
  {
    n: "03",
    title: "What we'd prioritize next",
    body: "What to fix first, and if we're the right team for it.",
  },
];

const GLASS_CARD =
  "relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/50 shadow-[0_20px_45px_-24px_rgba(10,10,10,0.25)] backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-24px_rgba(10,10,10,0.32)]";

export function BookingExplainer() {
  const { ref, inView } = useInView<HTMLUListElement>(0.25);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-surface-warm)] py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[15%] top-10 h-[24rem] w-[24rem] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-accent-light) 0%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[15%] bottom-0 h-[24rem] w-[24rem] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-accent) 0%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-[90rem] px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-1px] md:tracking-[-3.5px] text-[var(--color-ink)]">
            What happens when you book?
          </h2>
          <p className="mt-3 text-[1.1rem] leading-[1.55] text-[var(--color-ink-muted)]">
            This isn&rsquo;t a generic agency pitch. We&rsquo;ll use the
            conversation to understand:
          </p>
        </div>

        <ul
          ref={ref}
          className="mt-12 grid auto-rows-fr gap-4 md:mt-14 md:grid-cols-3"
        >
          {STEPS.map((step, i) => (
            <li
              key={step.n}
              className={`${GLASS_CARD} p-6`}
              style={{
                transitionDelay: inView ? undefined : `${i * 130}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? undefined : "translateY(1.25rem)",
              }}
            >
              <span className="relative block text-[0.9rem] font-semibold tabular-nums text-[var(--color-accent-deep)]">
                {step.n}
              </span>
              <h3 className="relative mt-3 text-[1.2rem] font-medium leading-snug text-[var(--color-ink)]">
                {step.title}
              </h3>
              <p className="relative mt-3 text-[1rem] leading-[1.55] text-[var(--color-ink-muted)]">
                {step.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-start gap-4 md:mt-16">
          <CtaButton href="#book" size="lg">
            Book a call
          </CtaButton>
          <p className="max-w-[46ch] text-[0.9rem] leading-snug text-[var(--color-ink-muted)]">
            Come with the problem you want solved. Even if we&rsquo;re not a
            fit, you&rsquo;ll leave with a clearer next step.
          </p>
        </div>
      </div>
    </section>
  );
}
