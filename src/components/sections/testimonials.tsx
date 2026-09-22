import QuoteFanCarousel from "@/components/ui/quote-fan-carousel";
import FadeContent from "@/components/FadeContent";

const TESTIMONIALS = [
  {
    quote:
      "Working with Doomsday changed how consistent our brand feels online. Every piece looks like it belongs to us, not to a template.",
    name: "Victor",
    role: "CEO, Vix Protection",
  },
  {
    quote:
      "They understood the tone we wanted before we could fully explain it ourselves. The creative carries our brand better than anything we've had before.",
    name: "Tanner Perkins",
    role: "Professional Athlete",
  },
  {
    quote:
      "Our engagement and inquiries picked up noticeably once Doomsday took over. It's the first time our content actually felt intentional.",
    name: "Nick Levett",
    role: "Founder, Bespoke Events Management",
  },
];

export function Testimonials() {
  return (
    <section
      id="voices"
      className="w-full overflow-x-clip bg-[var(--color-surface-warm)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <FadeContent duration={700} ease="power2.out" threshold={0.2}>
          <h2 className="max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)]">
            The work should feel like your brand. Not your agency&rsquo;s
            template.
          </h2>
        </FadeContent>
      </div>

      <div className="mt-16 md:mt-20">
        <QuoteFanCarousel cards={TESTIMONIALS} />
      </div>
    </section>
  );
}
