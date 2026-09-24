import Image from "next/image";
import Link from "next/link";
import FadeContent from "@/components/FadeContent";
import { GlareSurface } from "@/components/ui/glare-surface";

const PROOF_POINTS = [
  "No account-manager telephone game.",
  "No bouncing between agencies.",
  "No creative direction lost in execution.",
];

export function ClosingCta() {
  return (
    <>
      <section
        id="book"
        className="relative isolate w-full overflow-hidden bg-[var(--color-surface-black)] pt-28 pb-24 md:pt-32 md:pb-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 0%, rgba(255,68,0,0.22) 0%, rgba(216,34,12,0.1) 45%, transparent 75%)",
          }}
        />

        <div className="relative mx-auto max-w-[90rem] px-6 text-center md:px-10">
          <FadeContent blur duration={1000} ease="power2.out" threshold={0.2}>
            <h2 className="mx-auto max-w-[18ch] text-[clamp(2.5rem,5.5vw,4.75rem)] font-bold leading-[0.98] tracking-[-0.015em] text-[var(--color-ink-on-black)]">
              Create like there&rsquo;s no tomorrow.
            </h2>

            <p className="mx-auto mt-6 max-w-[46ch] text-[1.1rem] leading-[1.5] text-[var(--color-ink-on-black-muted)]">
              Just the people doing the thinking, making and launching the
              work.
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                href="#book"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[var(--color-ink-on-black)] px-8 py-4.5 text-[1.05rem] font-semibold tracking-[-0.01em] text-[var(--color-surface-black)] transition-[background-color,color,transform] duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:bg-[var(--color-accent-deep)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
              >
                <GlareSurface glareColor="#FF4400" glareOpacity={0.2} />
                <span className="pointer-events-none">Book a call</span>
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

            <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-4 border-t border-[var(--color-line-on-black)] pt-8 sm:grid-cols-3">
              {PROOF_POINTS.map((point) => (
                <p
                  key={point}
                  className="text-[0.9rem] leading-snug text-[var(--color-ink-on-black-muted)]"
                >
                  {point}
                </p>
              ))}
            </div>
          </FadeContent>
        </div>
      </section>

      <footer className="w-full bg-[var(--color-surface-black)]">
        <div className="mx-auto flex max-w-[90rem] flex-col items-center gap-4 border-t border-[var(--color-line-on-black)] px-6 py-10 text-center md:flex-row md:justify-between md:px-10 md:text-left">
          <div className="flex items-center gap-2.5">
            <Image
              src="/doomsday-mark.png"
              alt=""
              width={22}
              height={27}
              className="h-5 w-auto"
            />
            <Image
              src="/doomsday-wordmark.png"
              alt="Doomsday Studios"
              width={140}
              height={17}
              className="h-[0.8rem] w-auto brightness-0 invert"
            />
          </div>
          <p className="text-[0.85rem] text-[var(--color-ink-on-black-muted)]">
            Based in Islamabad. Working with brands everywhere.
          </p>
          <p className="text-[0.8rem] text-[var(--color-ink-on-black-muted)]">
            &copy; {new Date().getFullYear()} Doomsday Studios.
          </p>
        </div>
      </footer>
    </>
  );
}
