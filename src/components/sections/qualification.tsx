"use client";

import { Check, X } from "lucide-react";
import FadeContent from "@/components/FadeContent";
import { CtaButton } from "@/components/ui/cta-button";
import { useInView } from "@/hooks/use-in-view";

const FIT = [
  "Need content consistently, not once every few months",
  "Want creative and paid media working together",
  "Are tired of coordinating multiple freelancers or agencies",
  "Want a team that can take ideas through to execution",
];

const NOT_FIT = [
  "Just looking for the cheapest editor or media buyer",
  "Need a one-off project with no ongoing cadence",
  "Want to approve every creative decision yourself",
  "Aren’t ready to commit to a 2-month minimum",
];

const GLASS_CARD =
  "relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/45 shadow-[0_20px_45px_-24px_rgba(10,10,10,0.25)] backdrop-blur-xl transition-all duration-700 ease-out";

export function Qualification() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="relative w-full overflow-hidden bg-[var(--color-surface)] py-24 md:py-32">
      {/* Soft color glows — ambient fit/not-fit cue behind the glass, without filling the cards themselves. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-24 h-[26rem] w-[26rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-success) 0%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-24 h-[26rem] w-[26rem] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-danger) 0%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-[90rem] px-6 md:px-10">
        <FadeContent blur duration={850} ease="power2.out" threshold={0.15}>
          <h2 className="max-w-[16ch] text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.04] tracking-[-0.015em] text-[var(--color-ink)]">
            Is Doomsday right for you?
          </h2>

          <div ref={ref} className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2">
            <div
              className={`${GLASS_CARD} p-8 sm:p-10`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(1rem)",
              }}
            >
              <p className="flex items-center gap-2.5 text-[1.05rem] font-semibold text-[var(--color-ink)]">
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-success)] text-white"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                Strong fit if you:
              </p>
              <ul className="mt-6 flex flex-col gap-[1.125rem] border-t border-[var(--color-line)] pt-6">
                {FIT.map((line, i) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 transition-all duration-500 ease-out"
                    style={{
                      transitionDelay: `${150 + i * 90}ms`,
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(-0.5rem)",
                    }}
                  >
                    <Check
                      aria-hidden
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-success-deep)]"
                      strokeWidth={2.5}
                    />
                    <span className="text-[1rem] leading-[1.5] text-[var(--color-ink)]">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`${GLASS_CARD} p-8 sm:p-10`}
              style={{
                transitionDelay: "90ms",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(1rem)",
              }}
            >
              <p className="flex items-center gap-2.5 text-[1.05rem] font-semibold text-[var(--color-ink)]">
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-danger)] text-white"
                >
                  <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                Not a fit if you:
              </p>
              <ul className="mt-6 flex flex-col gap-[1.125rem] border-t border-[var(--color-line)] pt-6">
                {NOT_FIT.map((line, i) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 transition-all duration-500 ease-out"
                    style={{
                      transitionDelay: `${240 + i * 90}ms`,
                      opacity: inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(-0.5rem)",
                    }}
                  >
                    <X
                      aria-hidden
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-danger-deep)]"
                      strokeWidth={2.5}
                    />
                    <span className="text-[1rem] leading-[1.5] text-[var(--color-ink)]">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <CtaButton href="#book" size="lg">
              Book a call
            </CtaButton>
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
