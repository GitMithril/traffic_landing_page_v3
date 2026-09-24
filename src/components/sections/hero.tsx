import GradientWaves from "@/components/GradientWaves";
import { CtaButton } from "@/components/ui/cta-button";
import { HeroMediaStack } from "@/components/ui/hero-media-stack";
import FadeContent from "@/components/FadeContent";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[88svh] w-full flex-col overflow-hidden bg-[var(--color-surface)] pt-[4.5rem]"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <GradientWaves
          horizonColor="#FFE4D1"
          waveColor="#FF8A4C"
          crestColor="#FF4400"
          speed={0.24}
          amplitude={2.1}
          waveScale={0.62}
          waveRatio={0.85}
          swell={30}
          turbulence={16}
          tilt={1.15}
          zoom={0.88}
          height={4.2}
          fogDepth={17}
          detail="high"
          brightness={1.05}
          opacity={0.9}
          mouseInteraction
          parallaxStrength={0.35}
          grain
          grainIntensity={0.04}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(100deg,#ffffff_0%,#ffffff_34%,rgba(255,255,255,0.55)_52%,rgba(255,255,255,0.08)_72%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-center gap-14 px-6 py-16 md:px-10 md:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        <FadeContent
          className="max-w-3xl"
          blur
          duration={1100}
          delay={80}
          threshold={0.05}
          ease="power2.out"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/60 px-3.5 py-1.5 text-[0.8rem] font-semibold tracking-[-0.01em] text-[var(--color-accent-deep)] backdrop-blur-sm">
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
            />
            For scaling founders
          </span>

          <h1 className="mt-5 max-w-[24ch] text-[clamp(2.5rem,5.2vw,4.25rem)] font-medium leading-[1.02] tracking-[-1px] md:tracking-[-3.5px] text-[var(--color-ink)]">
            Stop managing 5 different people just to get one campaign out.
          </h1>

          <p className="mt-3 max-w-[62ch] text-[1.1rem] leading-[1.55] text-[var(--color-ink)]">
            One team for content, creative direction, Meta advertising and
            digital execution &mdash; connected from the first idea to launch.
          </p>

          <div className="mt-9 flex flex-col items-start gap-4">
            <CtaButton
              href="#book"
              size="lg"
              className="max-md:w-full max-md:justify-center max-md:py-3!"
            >
              Book a call
            </CtaButton>

            <div className="flex items-center gap-2.5 rounded-full bg-[var(--color-accent-deep)]/8 py-2 pr-4 pl-2.5 max-md:w-full max-md:justify-center">
              <span className="flex h-7 items-center justify-center rounded-full bg-[var(--color-accent-deep)] px-2.5 text-[0.95rem] font-bold text-white">
                3x
              </span>
              <span className="text-[0.9rem] font-semibold leading-snug text-[var(--color-ink)]">
                conversion boost in the next 30 days
              </span>
            </div>

            <p className="max-w-[42ch] text-[0.85rem] leading-snug text-[var(--color-ink-muted)]">
              Tell us what you&rsquo;re trying to grow &mdash; we&rsquo;ll
              show you where it&rsquo;s falling short.
            </p>
          </div>
        </FadeContent>

        <FadeContent
          className="flex justify-center lg:translate-x-12 lg:justify-end"
          blur
          duration={1100}
          delay={260}
          threshold={0.05}
          ease="power2.out"
        >
          <HeroMediaStack />
        </FadeContent>
      </div>
    </section>
  );
}
