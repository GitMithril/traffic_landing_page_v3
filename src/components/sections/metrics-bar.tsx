import { NumberTicker } from "@/components/ui/number-ticker";
import AnimatedContent from "@/components/AnimatedContent";

const STATS: {
  value: number;
  prefix?: string;
  suffix: string;
  decimalPlaces?: number;
  label: string;
}[] = [
  { value: 42, suffix: "+", label: "Projects completed" },
  { value: 7.5, suffix: "%", decimalPlaces: 1, label: "Ad campaign CTR" },
  { value: 1, suffix: "K+", label: "Hours of content" },
  { value: 15, suffix: "M+", label: "Audience reach" },
  { value: 3.5, suffix: "x", decimalPlaces: 1, label: "Avg. ROI delivered" },
];

export function MetricsBar() {
  return (
    <section className="w-full bg-[var(--color-surface-warm)] py-20 md:py-24">
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <AnimatedContent distance={28} duration={0.8} ease="power3.out" threshold={0.2}>
          <h2 className="max-w-[24ch] text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)]">
            One team. Less friction. Better creative.
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-[var(--color-line)] pt-10 sm:grid-cols-3 md:mt-14 md:flex md:pt-12">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`md:flex-1 ${
                  i > 0 ? "md:border-l md:border-[var(--color-line)] md:pl-10" : ""
                }`}
              >
                <p className="flex items-baseline text-[clamp(2rem,3.6vw,3.5rem)] font-extrabold leading-none tracking-[-0.03em] text-[var(--color-ink)]">
                  {stat.prefix}
                  <NumberTicker
                    value={stat.value}
                    decimalPlaces={stat.decimalPlaces}
                    className="text-[var(--color-ink)] tabular-nums"
                  />
                  {stat.suffix}
                </p>
                <p className="mt-3 text-[0.95rem] leading-snug text-[var(--color-ink-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
