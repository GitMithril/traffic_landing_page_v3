import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { MetricsBar } from "@/components/sections/metrics-bar";
import { Problem } from "@/components/sections/problem";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Qualification } from "@/components/sections/qualification";
import { BookingExplainer } from "@/components/sections/booking-explainer";
import { ClosingCta } from "@/components/sections/closing-cta";
import { StickyCta } from "@/components/sections/sticky-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MetricsBar />
        <Problem />
        <HowWeWork />
        <Testimonials />
        <Pricing />
        <Qualification />
        <BookingExplainer />
        <ClosingCta />
      </main>
      <StickyCta />
    </>
  );
}
