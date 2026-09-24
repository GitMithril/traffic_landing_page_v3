"use client";

import FadeContent from "@/components/FadeContent";
import { TestimonialCard, type Testimonial } from "@/components/ui/testimonial-card";

const QUOTES: Testimonial[] = [
  {
    quote:
      "Doomsday exceeded our high expectations. Their work quality is top-tier, but it's their 24/7 dedication and problem-solving that truly set them apart. They treat your business like their own.",
    name: "Victor",
    role: "CEO, Vix Protection",
    image: "/victor.avif",
  },
  {
    quote:
      "Doomsday built our full identity from branding and Figma design to Framer and SEO. The result is a sleek, high-performance site that truly reflects our premium events.",
    name: "Nick Levett",
    role: "Founder, Bespoke Events Management",
    image: "/nick_levett.avif",
  },
  {
    quote:
      "They built my entire brand identity and Framer site with modern, sleek visuals and flawless UX. The result perfectly reflects my journey and exceeded my expectations.",
    name: "Tanner Perkins",
    role: "Professional Athlete",
    image: "/tanner-perkins.avif",
  },
  {
    quote:
      "I couldn't be happier with my website. The team captured my vision perfectly, built a professional, easy-to-use site, and made the whole process smooth and responsive.",
    name: "Joe Hehn",
    role: "Mindset Coach",
    image: "/joe_hehn.webp",
  },
  {
    quote:
      "Working with Doomsday has been a game-changer. Their expertise, attention to detail, and commitment to our success go beyond expectations — they feel like true partners in our journey.",
    name: "Samson Silberman",
    role: "CEO, National Biz Alliance",
    image: "/samson_silberman.avif",
  },
  {
    quote:
      "Doomsday Studio transformed our digital presence with a sleek, user-friendly site. Reliable, responsive, and highly talented — an amazing team to work with!",
    name: "Hannah Burns",
    role: "CTO, Vikings Computer Parts",
    image: "/hannah_burns.avif",
  },
];

function QuoteSet({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div aria-hidden={ariaHidden} className="flex shrink-0 gap-5 pr-5">
      {QUOTES.map((t) => (
        <TestimonialCard key={t.name} {...t} />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="voices"
      className="w-full overflow-x-clip bg-[var(--color-surface)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <FadeContent duration={700} ease="power2.out" threshold={0.2}>
          <h2 className="max-w-[18ch] text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.04] tracking-[-3.5px] text-[var(--color-ink)]">
            The work should feel like your brand. Not your agency&rsquo;s
            template.
          </h2>
        </FadeContent>
      </div>

      <div className="testimonials-marquee-mask relative mt-12 md:mt-14">
        <div className="testimonials-marquee-track">
          <QuoteSet />
          <QuoteSet ariaHidden />
        </div>
      </div>
    </section>
  );
}
