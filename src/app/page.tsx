import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { MetricsBar } from "@/components/sections/metrics-bar";
import { Problem } from "@/components/sections/problem";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { WorkShowcase } from "@/components/sections/work-showcase";
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
        <Services />
        <Process />
        <Testimonials />
        <WorkShowcase />
        <Pricing />
        <Qualification />
        <BookingExplainer />
        <ClosingCta />
      </main>
      <StickyCta />
    </>
  );
}
