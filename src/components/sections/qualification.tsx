import { Check, X } from "lucide-react";
import FadeContent from "@/components/FadeContent";
import { CtaButton } from "@/components/ui/cta-button";

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

export function Qualification() {
  return (
    <section className="w-full bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <FadeContent blur duration={850} ease="power2.out" threshold={0.15}>
          <h2 className="max-w-[16ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)]">
            Is Doomsday right for you?
          </h2>

          <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-success)]/25 bg-[var(--color-success-soft)] p-8 sm:p-10">
              <p className="flex items-center gap-2 text-[1.05rem] font-semibold text-[var(--color-success-deep)]">
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-success)] text-white"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                Strong fit if you:
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {FIT.map((line) => (
                  <li key={line} className="flex items-start gap-3">
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

            <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-danger)]/25 bg-[var(--color-danger-soft)] p-8 sm:p-10">
              <p className="flex items-center gap-2 text-[1.05rem] font-semibold text-[var(--color-danger-deep)]">
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-danger)] text-white"
                >
                  <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                Not a fit if you:
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {NOT_FIT.map((line) => (
                  <li key={line} className="flex items-start gap-3">
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
