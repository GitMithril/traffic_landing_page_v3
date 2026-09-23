import { SlidingGallery } from "@/components/ui/sliding-gallery";
import FadeContent from "@/components/FadeContent";

export function WorkShowcase() {
  return (
    <section className="w-full overflow-hidden bg-[var(--color-surface-black)] py-24 md:py-32">
      <FadeContent duration={700} ease="power2.out" threshold={0.2}>
        <div className="mx-auto max-w-[90rem] px-6 text-center md:px-10">
          <h2 className="mx-auto max-w-[20ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink-on-black)]">
            A body of work always in motion.
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-[1.05rem] leading-[1.55] text-[var(--color-ink-on-black-muted)]">
            Real campaign stills land here as work ships. For now, this strip
            marks the space they&rsquo;ll fill.
          </p>
        </div>

        <div className="mt-14 md:mt-16">
          <SlidingGallery />
        </div>
      </FadeContent>
    </section>
  );
}
