import { CtaButton } from "@/components/ui/cta-button";
import FadeContent from "@/components/FadeContent";

const DISCIPLINES = [
  {
    name: "Content",
    body: "Short-form video, social creative, editing, motion and graphics designed around your brand, not a template.",
  },
  {
    name: "Paid Media",
    body: "Meta campaign management, creative testing, optimization and reporting.",
  },
  {
    name: "Brand",
    body: "Creative direction, visual identity and campaign concepts that make the work recognizably yours.",
  },
  {
    name: "Web",
    body: "Landing pages, campaign experiences and Framer builds designed to turn attention into action.",
  },
];

export function Services() {
  return (
    <section className="w-full bg-[var(--color-surface-warm)] py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <FadeContent duration={900} ease="power2.out" threshold={0.15}>
        <h2 className="max-w-[20ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)]">
          Everything needed to keep your brand moving.
        </h2>

        {/* One team, one connected line running through every discipline —
            not four separate service cards. */}
        <div className="relative mt-16 md:mt-20">
          <div
            aria-hidden
            className="absolute left-0 top-0 hidden h-px w-full bg-[var(--color-line)] md:block"
          />
          <div
            aria-hidden
            className="absolute left-0 top-0 h-full w-px bg-[var(--color-line)] md:hidden"
          />
          <ol className="flex flex-col md:flex-row">
            {DISCIPLINES.map((d) => (
              <li
                key={d.name}
                className="group relative flex-1 border-t border-[var(--color-line)] pl-8 pt-8 pb-2 first:border-t-0 md:border-t-0 md:border-l md:pl-8 md:pt-10 md:first:border-l-0 md:first:pl-0"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-8 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.4] md:block md:top-0"
                />
                <span
                  aria-hidden
                  className="absolute left-0 top-8 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.4] md:hidden"
                />
                <h3 className="text-[1.4rem] font-bold tracking-[-0.01em] text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-accent-deep)]">
                  {d.name}
                </h3>
                <p className="mt-3 max-w-[30ch] text-[1rem] leading-[1.55] text-[var(--color-ink-muted)]">
                  {d.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 md:mt-20">
          <CtaButton href="#pricing" variant="outline">
            See If We&rsquo;re a Fit
          </CtaButton>
        </div>
        </FadeContent>
      </div>
    </section>
  );
}
