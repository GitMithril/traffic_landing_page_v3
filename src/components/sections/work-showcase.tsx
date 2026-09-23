import { WorkRing } from "@/components/ui/work-ring";
import FadeContent from "@/components/FadeContent";

export function WorkShowcase() {
  return (
    <section className="w-full bg-[var(--color-surface-warm)] py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <FadeContent duration={700} ease="power2.out" threshold={0.2}>
            <h2 className="max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)]">
              A body of work always in motion.
            </h2>
            <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-[1.55] text-[var(--color-ink-muted)]">
              Real campaign stills land here as work ships. For now, this
              ring marks the space they&rsquo;ll fill.
            </p>
          </FadeContent>

          <WorkRing />
        </div>
      </div>
    </section>
  );
}
