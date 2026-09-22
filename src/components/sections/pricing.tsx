import { Check } from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";

const FEATURES: { text: string; bold?: string }[] = [
  { text: "Short-form video and static creative" },
  { text: "Up to 2 active Meta ad campaigns", bold: "2 active Meta ad campaigns" },
  { text: "Custom content calendar" },
  { text: "Creative testing and optimization" },
  { text: "Monthly performance reporting" },
  { text: "Weekly strategy call" },
];

function renderFeature(feature: { text: string; bold?: string }) {
  if (!feature.bold) return feature.text;
  const idx = feature.text.indexOf(feature.bold);
  if (idx === -1) return feature.text;
  return (
    <>
      {feature.text.slice(0, idx)}
      <strong className="font-semibold text-[var(--color-ink)]">
        {feature.bold}
      </strong>
      {feature.text.slice(idx + feature.bold.length)}
    </>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="w-full bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <h2 className="max-w-[20ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)]">
          Need consistent creative without building an in-house team?
        </h2>

        <div className="mt-14 grid gap-12 border-t border-[var(--color-line)] pt-14 md:mt-16 md:grid-cols-[1fr_1.1fr] md:gap-16 md:pt-16">
          <div>
            <p className="text-[1.15rem] font-bold tracking-[-0.01em] text-[var(--color-ink)]">
              The Essentials
            </p>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="text-[clamp(3rem,6vw,4.5rem)] font-extrabold leading-none tracking-[-0.03em] text-[var(--color-ink)]">
                $1,250
              </span>
              <span className="text-[1.1rem] font-medium text-[var(--color-ink-muted)]">
                /month
              </span>
            </p>
            <p className="mt-6 max-w-[42ch] text-[1.05rem] leading-[1.55] text-[var(--color-ink-muted)]">
              For brands that need creative produced consistently{" "}
              <strong className="font-semibold text-[var(--color-ink)]">
                and
              </strong>{" "}
              paid campaigns actively managed.
            </p>
            <p className="mt-8 text-[0.9rem] font-medium text-[var(--color-ink-muted)]">
              Minimum 2-month engagement.
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-[1.05rem] font-semibold text-[var(--color-ink)]">
              You get:
            </p>
            <ul className="mt-4 divide-y divide-[var(--color-line)] border-b border-[var(--color-line)]">
              {FEATURES.map((feature) => (
                <li
                  key={feature.text}
                  className="flex items-center gap-3 py-4 text-[1.05rem] text-[var(--color-ink)]"
                >
                  <Check
                    aria-hidden
                    className="h-[1.1rem] w-[1.1rem] shrink-0 text-[var(--color-accent)]"
                    strokeWidth={2.5}
                  />
                  {renderFeature(feature)}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CtaButton href="#book">Book a Call</CtaButton>
            </div>
          </div>
        </div>

        <p className="mt-16 max-w-[50ch] text-[1rem] leading-[1.55] text-[var(--color-ink-muted)]">
          Need more than the Essentials? Full brand builds, websites and
          standalone campaign projects are available separately.
        </p>
      </div>
    </section>
  );
}
