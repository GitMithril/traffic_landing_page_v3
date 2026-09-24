"use client";

import { useInView } from "@/hooks/use-in-view";
import { CtaButton } from "@/components/ui/cta-button";

const DISCIPLINES = [
  {
    name: "Content",
    body: "Short-form video, social creative, editing and motion built for your brand.",
  },
  {
    name: "Paid Media",
    body: "Meta campaign management, creative testing, optimization and reporting.",
  },
  {
    name: "Brand",
    body: "Creative direction and campaign concepts that make the work recognizably yours.",
  },
  {
    name: "Web",
    body: "Landing pages and campaign experiences built to turn attention into action.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Understand",
    body: "We start with your business, audience and offer.",
  },
  {
    n: "02",
    title: "Create",
    body: "Strategy, design and assets developed under one direction.",
  },
  {
    n: "03",
    title: "Launch",
    body: "Content gets published. Campaigns go live.",
  },
  {
    n: "04",
    title: "Improve",
    body: "Performance decides what gets tested and created next.",
  },
];

const GLASS_CARD =
  "relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/45 shadow-[0_20px_45px_-24px_rgba(10,10,10,0.25)] backdrop-blur-xl transition-all duration-700 ease-out before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-transparent";

export function HowWeWork() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section
      id="work"
      className="relative w-full overflow-hidden bg-[var(--color-surface-warm)] py-24 md:py-32"
    >
      {/* Soft brand-gradient glow field — gives the glass cards above something to refract. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-16 h-[30rem] w-[30rem] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-accent-light) 0%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[6%] bottom-16 h-[30rem] w-[30rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-accent) 0%, transparent 75%)",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-[90rem] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          {/* Left pane — what you get */}
          <div>
            <h2 className="max-w-[20ch] text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.06] tracking-[-0.015em] text-[var(--color-ink)]">
              Everything needed to keep your brand moving.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {DISCIPLINES.map((d, i) => (
                <div
                  key={d.name}
                  className={`${GLASS_CARD} p-5`}
                  style={{
                    transitionDelay: `${i * 110}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(0.75rem)",
                  }}
                >
                  <h3 className="relative text-[1.1rem] font-bold leading-snug text-[var(--color-ink)]">
                    {d.name}
                  </h3>
                  <p className="relative mt-1.5 text-[0.9rem] leading-[1.45] text-[var(--color-ink-muted)]">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right pane — how we do it */}
          <div>
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-[1.06] tracking-[-0.015em] text-[var(--color-ink)]">
              How we work
            </h2>

            <div className="mt-10 flex flex-col gap-4">
              {STEPS.map((step, i) => (
                <div
                  key={step.n}
                  className={`${GLASS_CARD} flex items-baseline gap-4 p-5`}
                  style={{
                    transitionDelay: `${i * 110}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(0.75rem)",
                  }}
                >
                  <span className="relative shrink-0 text-[0.8rem] font-semibold tabular-nums text-[var(--color-accent-deep)]">
                    {step.n}
                  </span>
                  <div className="relative">
                    <h3 className="text-[1.1rem] font-bold leading-snug text-[var(--color-ink)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[0.9rem] leading-[1.45] text-[var(--color-ink-muted)]">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 text-center md:mt-20">
          <CtaButton href="#pricing" variant="outline" size="lg">
            See If We&rsquo;re a Fit
          </CtaButton>
          <p className="max-w-[42ch] text-[0.9rem] leading-[1.5] text-[var(--color-ink-muted)]">
            No endless handoffs. No disconnected teams.
          </p>
        </div>
      </div>
    </section>
  );
}
