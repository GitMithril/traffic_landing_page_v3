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

function TimelineDot({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <span
      className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--color-surface-warm)] transition-colors duration-500"
      style={{
        backgroundColor: inView ? "var(--color-accent)" : "var(--color-line)",
        transitionDelay: `${delay}ms`,
      }}
      aria-hidden
    />
  );
}

function TimelineLine({ inView }: { inView: boolean }) {
  return (
    <>
      <div
        aria-hidden
        className="absolute left-3 top-3 h-[calc(100%-1.5rem)] w-px bg-[var(--color-line)]"
      />
      <div
        aria-hidden
        className="absolute left-3 top-3 w-px origin-top bg-[var(--color-accent)] transition-transform duration-[1800ms] ease-out"
        style={{
          height: "calc(100% - 1.5rem)",
          transform: `scaleY(${inView ? 1 : 0})`,
        }}
      />
    </>
  );
}

export function HowWeWork() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="work" className="w-full bg-[var(--color-surface-warm)] py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-[90rem] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          {/* Left pane — what we do */}
          <div>
            <h2 className="max-w-[20ch] text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[var(--color-ink)]">
              Everything needed to keep your brand moving.
            </h2>

            <ol className="relative mt-12 flex flex-col gap-10">
              <TimelineLine inView={inView} />
              {DISCIPLINES.map((d, i) => (
                <li key={d.name} className="relative pl-10">
                  <TimelineDot inView={inView} delay={i * 140} />
                  <div
                    className="transition-all duration-700 ease-out"
                    style={{
                      transitionDelay: `${i * 140}ms`,
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(0.75rem)",
                    }}
                  >
                    <h3 className="text-[1.2rem] font-bold leading-snug text-[var(--color-ink)]">
                      {d.name}
                    </h3>
                    <p className="mt-2 max-w-[38ch] text-[1rem] leading-[1.55] text-[var(--color-ink-muted)]">
                      {d.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <CtaButton href="#pricing" variant="outline">
                See If We&rsquo;re a Fit
              </CtaButton>
            </div>
          </div>

          {/* Right pane — how we do it */}
          <div className="border-t border-[var(--color-line)] pt-14 md:border-t-0 md:border-l md:pl-16 md:pt-0">
            <h2 className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-[var(--color-ink)]">
              How we work
            </h2>

            <ol className="relative mt-12 flex flex-col gap-10">
              <TimelineLine inView={inView} />
              {STEPS.map((step, i) => (
                <li key={step.n} className="relative pl-10">
                  <TimelineDot inView={inView} delay={i * 140} />
                  <div
                    className="transition-all duration-700 ease-out"
                    style={{
                      transitionDelay: `${i * 140}ms`,
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(0.75rem)",
                    }}
                  >
                    <span className="text-[0.85rem] font-semibold tabular-nums text-[var(--color-accent-deep)]">
                      {step.n}
                    </span>
                    <h3 className="mt-2 text-[1.2rem] font-bold leading-snug text-[var(--color-ink)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[38ch] text-[1rem] leading-[1.55] text-[var(--color-ink-muted)]">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-10 max-w-[42ch] text-[1rem] leading-[1.55] text-[var(--color-ink)]">
              No endless handoffs. No disconnected teams. No creative sitting
              in folders for three weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
