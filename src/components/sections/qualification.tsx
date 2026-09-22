import type { ReactNode } from "react";
import { Check, X } from "lucide-react";
import FadeContent from "@/components/FadeContent";

const FIT: ReactNode[] = [
  "Need content consistently, not once every few months",
  "Want creative and paid media working together",
  "Are tired of coordinating multiple freelancers or agencies",
  "Want a team that can take ideas through to execution",
  <>
    Care about how the brand looks{" "}
    <strong className="font-semibold">and</strong> how the work performs
  </>,
];

export function Qualification() {
  return (
    <section className="w-full bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <FadeContent blur duration={850} ease="power2.out" threshold={0.15}>
        <h2 className="max-w-[16ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)]">
          Is Doomsday right for you?
        </h2>

        <div className="mt-14 grid gap-12 md:mt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div>
            <p className="text-[1.05rem] font-semibold text-[var(--color-ink)]">
              Doomsday is a strong fit if you:
            </p>
            <ul className="mt-6 flex flex-col gap-5">
              {FIT.map((line, i) => (
                <li key={i} className="group flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={2.25} />
                  </span>
                  <span className="text-[1.1rem] leading-[1.5] text-[var(--color-ink)]">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[var(--color-line)] pt-8 md:border-t-0 md:border-l md:pl-16 md:pt-0">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-ink-muted)]/10 text-[var(--color-ink-muted)]">
              <X aria-hidden className="h-3.5 w-3.5" strokeWidth={2.25} />
            </span>
            <p className="mt-5 text-[1.1rem] leading-[1.5] text-[var(--color-ink-muted)]">
              If you&rsquo;re simply looking for the cheapest editor, designer
              or media buyer available, we&rsquo;re probably not the right
              team.
            </p>

            <p className="mt-10 max-w-[36ch] text-[0.85rem] leading-[1.55] text-[var(--color-ink-muted)]">
              That qualification is important for conversion because it
              makes the right prospect identify themselves instead of
              treating the page like a generic agency menu.
            </p>
          </div>
        </div>
        </FadeContent>
      </div>
    </section>
  );
}
