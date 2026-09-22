import GradientWaves from "@/components/GradientWaves";
import { CtaButton } from "@/components/ui/cta-button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[var(--color-surface)] pt-[4.5rem]"
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

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 flex-col justify-center px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <h1 className="max-w-[16ch] text-[clamp(2.5rem,5.6vw,4.75rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-[var(--color-ink)]">
            Stop managing five different people just to get one campaign out.
          </h1>

          <p className="mt-7 max-w-[70ch] text-[1.1rem] leading-[1.55] text-[var(--color-ink)]">
            For scaling founders, Doomsday gives growing brands{" "}
            <strong className="font-semibold">
              one team for content, creative direction, Meta advertising and
              digital execution
            </strong>
            .
          </p>
          <p className="mt-3 max-w-[70ch] text-[1.05rem] leading-[1.55] text-[var(--color-ink-muted)]">
            Strategy, design, editing, paid media and delivery stay connected
            from the first idea to the final launch.
          </p>

          <div className="mt-10 flex flex-col items-start gap-3">
            <CtaButton href="#book">Help me grow my business</CtaButton>
            <p className="max-w-[46ch] text-[1rem] leading-snug text-[var(--color-ink)]">
              Let us help you boost your conversion{" "}
              <span className="font-extrabold text-[var(--color-accent-deep)]">
                3x
              </span>{" "}
              in the next 30 days.
            </p>
            <p className="max-w-[42ch] text-[0.9rem] leading-snug text-[var(--color-ink-muted)]">
              Tell us what you&rsquo;re trying to grow. We&rsquo;ll show you
              where the creative, content or campaign is currently falling
              short.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
