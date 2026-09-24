const STATS: { value: string; label: string }[] = [
  { value: "42+", label: "Projects completed" },
  { value: "7.5%", label: "Ad campaign CTR" },
  { value: "1K+", label: "Hours of content" },
  { value: "15M+", label: "Audience reach" },
  { value: "3.5x", label: "Avg. ROI delivered" },
];

function MetricSet({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center"
    >
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex shrink-0 items-baseline gap-2.5 border-l border-[var(--color-line)] px-8 first:border-l-0 sm:px-10"
        >
          <span className="text-[1.5rem] font-bold leading-none tracking-[-1px] sm:tracking-[-2px] text-[var(--color-ink)] tabular-nums sm:text-[1.75rem]">
            {stat.value}
          </span>
          <span className="text-[0.85rem] leading-snug whitespace-nowrap text-[var(--color-ink-muted)]">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function MetricsBar() {
  return (
    <section className="w-full overflow-hidden border-y border-[var(--color-line)] bg-[var(--color-surface-warm)] py-6">
      <div className="metrics-marquee-mask">
        <div className="metrics-marquee-track">
          <MetricSet />
          <MetricSet ariaHidden />
        </div>
      </div>
    </section>
  );
}
