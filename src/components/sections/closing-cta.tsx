import Link from "next/link";

export function ClosingCta() {
  return (
    <section
      id="book"
      className="relative isolate w-full overflow-hidden bg-[var(--color-surface-black)] py-28 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 20%, rgba(255,68,0,0.28) 0%, rgba(216,34,12,0.14) 45%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 40% at 12% 92%, rgba(255,68,0,0.16) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[90rem] px-6 md:px-10">
        <div className="max-w-2xl">
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
              className="group relative inline-flex items-center gap-2.5 rounded-full bg-[var(--color-ink-on-black)] px-6 py-3.5 text-[0.95rem] font-semibold tracking-[-0.01em] text-[var(--color-surface-black)] transition-all duration-300 ease-out hover:bg-[var(--color-accent-deep)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
            >
              <span>Boost your conversion 3x in the next 30 days.</span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-[0.9em] w-[0.9em] shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
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
        </div>
      </div>
    </section>
  );
}
