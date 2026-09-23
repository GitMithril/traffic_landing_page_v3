import { SlidingGallery } from "@/components/ui/sliding-gallery";
import FadeContent from "@/components/FadeContent";

export function WorkShowcase() {
  return (
    <section className="relative isolate w-full overflow-hidden border-t border-white/10 bg-[var(--color-surface-black)] py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 15% 0%, rgba(255,68,0,0.16) 0%, rgba(216,34,12,0.08) 40%, transparent 72%)",
        }}
      />

      <FadeContent
        className="relative"
        duration={700}
        ease="power2.out"
        threshold={0.2}
      >
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
