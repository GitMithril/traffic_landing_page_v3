"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "@/components/AnimatedContent";
import { PLAN_PORTRAITS } from "@/lib/plan-portraits";

interface Plan {
  id: string;
  name: string;
  price: string;
  features: { label: string; detail: string }[];
}

const PLANS: Plan[] = [
  {
    id: "essentials",
    name: "The Essentials",
    price: "$1,250",
    features: [
      {
        label: "Content Included",
        detail: "8 Reels + 8 Static Graphics per Month",
      },
      {
        label: "Ad Management",
        detail: "Up to 2 Meta Ad Campaigns per Month",
      },
      {
        label: "Content Calendar",
        detail:
          "Custom Content Calendar with Proactive Planning and Ideation",
      },
      {
        label: "Performance Reports",
        detail:
          "Monthly Performance Report with Insights and Recommendations",
      },
      {
        label: "Consultation",
        detail: "Weekly Strategy Meeting & Consultation",
      },
    ],
  },
  {
    id: "amplifier",
    name: "The Amplifier",
    price: "$1,750",
    features: [
      {
        label: "Content Included",
        detail: "16 Reels + 12 Static Graphics per Month",
      },
      {
        label: "Ad Management",
        detail: "Up to 4 Meta Ad Campaigns per Month",
      },
      {
        label: "Content Calendar",
        detail:
          "Custom Content Calendar with Proactive Planning and Ideation",
      },
      {
        label: "Performance Reports",
        detail:
          "Monthly Performance Report with Insights and Recommendations",
      },
      {
        label: "Consultation",
        detail:
          "Weekly Strategy Meeting & Creative Consultation + Scripting & Content Planning",
      },
    ],
  },
  {
    id: "overdrive",
    name: "The Overdrive",
    price: "$2,500",
    features: [
      {
        label: "Content Included",
        detail:
          "High-Speed Content Creation (Volume Based on Up to 160 Hours/Month)",
      },
      {
        label: "Ad Management",
        detail:
          "Full Paid Ad Management & Optimization Across Meta, Google, and More",
      },
      {
        label: "Content Calendar",
        detail:
          "Custom Content Calendar with Proactive Planning and Ideation",
      },
      {
        label: "Performance Reports",
        detail:
          "Monthly Performance Report with Insights and Recommendations",
      },
      {
        label: "Consultation",
        detail:
          "Weekly Strategy & Performance Meetings + Priority Turnaround & Creative Direction",
      },
    ],
  },
];

const TEXT_LINK =
  "group relative inline-flex items-center py-1 text-[1.05rem] font-semibold tracking-[-0.01em] text-[var(--color-ink)] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-100 after:bg-[var(--color-accent)] after:transition-transform after:duration-[420ms] after:ease-[cubic-bezier(0.22,1,0.36,1)] after:content-[''] hover:text-[var(--color-accent-deep)] hover:after:bg-[var(--color-accent-deep)]";

export function Pricing() {
  const [activeId, setActiveId] = useState(PLANS[0].id);
  const plan = PLANS.find((p) => p.id === activeId) ?? PLANS[0];
  const portrait =
    PLAN_PORTRAITS.find((p) => p.id === activeId) ?? PLAN_PORTRAITS[0];

  return (
    <section
      id="pricing"
      className="w-full bg-[var(--color-surface)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <AnimatedContent
          distance={22}
          duration={0.7}
          ease="power2.out"
          threshold={0.15}
        >
          <h2 className="max-w-[24ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[var(--color-ink)]">
            Need consistent creative without building an in-house team?
          </h2>

          <div className="mt-14 grid gap-10 border-t border-[var(--color-line)] pt-14 md:mt-16 md:grid-cols-[0.85fr_1.15fr_1fr] md:gap-10 md:pt-16">
            {/* Portrait panel — placeholder until real per-tier imagery is supplied */}
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0A0A0A]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(120% 130% at 50% 15%, ${portrait.glowTo} 0%, ${portrait.glowFrom} 45%, transparent 78%)`,
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[#0A0A0A]/45"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                    <Image
                      src="/doomsday-mark.png"
                      alt=""
                      width={56}
                      height={68}
                      className="h-12 w-auto opacity-70"
                    />
                    <p className="text-[0.8rem] font-medium tracking-[-0.01em] text-white/60">
                      Portrait reserved for {plan.name}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Plan switcher + price */}
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] p-1">
                {PLANS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveId(p.id)}
                    className={`rounded-full px-4 py-2 text-[0.85rem] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                      p.id === activeId
                        ? "bg-[var(--color-surface-black)] text-white"
                        : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              <p className="mt-8 max-w-[16ch] text-[clamp(1.6rem,2.8vw,2.1rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink-muted)]">
                Simple pricing. Limitless disruption. Nothing hidden.
              </p>

              <AnimatePresence mode="wait">
                <motion.p
                  key={plan.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-6 flex items-baseline gap-2"
                >
                  <span className="text-[clamp(2.75rem,5.5vw,3.75rem)] font-extrabold leading-none tracking-[-0.03em] text-[var(--color-ink)]">
                    {plan.price}
                  </span>
                  <span className="text-[1.05rem] font-medium text-[var(--color-ink-muted)]">
                    /month
                  </span>
                </motion.p>
              </AnimatePresence>

              <p className="mt-4 text-[0.9rem] text-[var(--color-ink-muted)]">
                <span className="text-[var(--color-accent-deep)]">*</span>{" "}
                Minimum booking period &mdash; 2 months.
              </p>
              <p className="mt-6 max-w-[30ch] text-[0.95rem] leading-[1.55] text-[var(--color-ink-muted)]">
                Schedule a brief call if you need further clarification.
              </p>

              <div className="mt-8 flex items-center gap-8">
                <Link href="#book" className={TEXT_LINK}>
                  select plan
                </Link>
                <Link href="#book" className={TEXT_LINK}>
                  quick call
                </Link>
              </div>
            </div>

            {/* Feature checklist */}
            <AnimatePresence mode="wait">
              <motion.ul
                key={plan.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col divide-y divide-[var(--color-line)] border-b border-[var(--color-line)]"
              >
                {plan.features.map((feature) => (
                  <li key={feature.label} className="group flex gap-3 py-4">
                    <Check
                      aria-hidden
                      className="mt-1 h-[1.1rem] w-[1.1rem] shrink-0 text-[var(--color-accent-deep)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                      strokeWidth={2.5}
                    />
                    <span>
                      <span className="block text-[1.02rem] font-semibold text-[var(--color-ink)]">
                        {feature.label}
                      </span>
                      <span className="mt-0.5 block text-[0.92rem] leading-[1.5] text-[var(--color-ink-muted)]">
                        {feature.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </AnimatedContent>

        <p className="mt-16 max-w-[50ch] text-[1rem] leading-[1.55] text-[var(--color-ink-muted)]">
          Need something fully custom? Full brand builds, websites and
          standalone campaign projects are available separately.
        </p>
      </div>
    </section>
  );
}
