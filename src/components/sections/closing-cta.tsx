import Link from "next/link";
import FadeContent from "@/components/FadeContent";
import { GlareSurface } from "@/components/ui/glare-surface";
import CardFanCarousel from "@/components/ui/card-fan-carousel";

const WORK_CARDS = [
  { imgUrl: "/work/vix-cut-resistant.jpg", alt: "Vix cut-resistant apparel product photography" },
  { imgUrl: "/work/wedding-function.jpg", alt: "Wedding recessional, guests throwing confetti" },
  { imgUrl: "/work/studio-lights.jpg", alt: "Behind-the-scenes studio lighting setup" },
  { imgUrl: "/work/suited-couple.jpg", alt: "Wedding reception, champagne tower pour" },
  { imgUrl: "/work/vix-stretchable.jpg", alt: "Vix stretchable fabric product detail" },
  { imgUrl: "/work/team-working-at-the-table-in-well-lit-office.jpg", alt: "Team working together in a sunlit studio" },
  { imgUrl: "/work/cake-cutting-photoshoot.jpg", alt: "Wedding cake-cutting at golden hour" },
  { imgUrl: "/work/podcast-studio.jpg", alt: "Podcast studio setup with mixed lighting" },
  { imgUrl: "/work/man-wearing-cut-resistant-leggings.jpg", alt: "Vix cut-resistant leggings product photography" },
  { imgUrl: "/work/wedding-photoshoot.jpg", alt: "Wedding couple portrait beside a classic car" },
  { imgUrl: "/work/portrait-shot-of-person.jpg", alt: "Outdoor coastal portrait" },
  { imgUrl: "/work/couple-corridor-shot.jpg", alt: "Wedding couple portrait in a period hallway" },
  { imgUrl: "/work/ambient-light-bts.jpg", alt: "Behind-the-scenes desk setup with ambient lighting" },
];

export function ClosingCta() {
  return (
    <section
      id="book"
      className="relative isolate w-full overflow-hidden bg-[var(--color-surface-black)] pt-28 pb-24 md:pt-36 md:pb-32"
    >
      {/* One continuous glow field spanning the whole merged section —
          no seam between the CTA and the work strip below it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 42% at 78% 8%, rgba(255,68,0,0.26) 0%, rgba(216,34,12,0.12) 45%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 38% at 8% 42%, rgba(255,68,0,0.18) 0%, rgba(216,34,12,0.09) 42%, transparent 74%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 34% at 18% 76%, rgba(255,68,0,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[90rem] px-6 md:px-10">
        <FadeContent className="max-w-2xl" blur duration={1200} delay={100} ease="power2.out" threshold={0.2}>
          <p className="text-[1.1rem] leading-[1.6] text-[var(--color-ink-on-black-muted)]">
            No account-manager telephone game.
            <br />
            No bouncing between agencies.
            <br />
            No creative direction getting lost halfway through execution.
          </p>
          <p className="mt-6 text-[1.15rem] font-semibold leading-[1.5] text-[var(--color-ink-on-black)]">
            Just the people doing the thinking, making and launching the
            work.
          </p>

          <p className="mt-10 text-[0.95rem] font-medium text-[var(--color-ink-on-black-muted)]">
            Based in Islamabad. Working with brands everywhere.
          </p>

          <h2 className="mt-8 text-[clamp(2.75rem,6vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.035em] text-[var(--color-ink-on-black)]">
            Create like there&rsquo;s no tomorrow.
          </h2>

          <div className="mt-12">
            <Link
              href="#book"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[var(--color-ink-on-black)] px-6 py-3.5 text-[0.95rem] font-semibold tracking-[-0.01em] text-[var(--color-surface-black)] transition-[background-color,color,transform] duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:bg-[var(--color-accent-deep)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
            >
              <GlareSurface glareColor="#FF4400" glareOpacity={0.2} />
              <span className="pointer-events-none">
                Boost your conversion 3x in the next 30 days.
              </span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="pointer-events-none h-[0.9em] w-[0.9em] shrink-0 transition-transform duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                aria-hidden
              >
                <path
                  d="M4 10h12M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </FadeContent>
      </div>

      <FadeContent
        className="relative mt-24 md:mt-32"
        duration={700}
        ease="power2.out"
        threshold={0.2}
      >
        <div className="mx-auto max-w-[90rem] px-6 text-center md:px-10">
          <h2 className="mx-auto max-w-[20ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink-on-black)]">
            A body of work always in motion.
          </h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-[1.05rem] leading-[1.55] text-[var(--color-ink-on-black-muted)]">
            Campaign stills, product shoots and behind-the-scenes from
            projects we&rsquo;ve shipped.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-[90rem] md:mt-16">
          <CardFanCarousel cards={WORK_CARDS} />
        </div>
      </FadeContent>
    </section>
  );
}
