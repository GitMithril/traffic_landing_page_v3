"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";
import { CtaButton } from "@/components/ui/cta-button";

interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
}

const PLANS: Plan[] = [
  {
    id: "essentials",
    name: "The Essentials",
    price: "$1,250",
    features: [
      "8 Reels + 8 static graphics per month",
      "Up to 2 Meta ad campaigns per month",
      "Custom content calendar & planning",
      "Monthly performance report",
      "Weekly strategy consultation",
    ],
  },
  {
    id: "amplifier",
    name: "The Amplifier",
    price: "$1,750",
    features: [
      "16 Reels + 12 static graphics per month",
      "Up to 4 Meta ad campaigns per month",
      "Custom content calendar & planning",
      "Monthly performance report",
      "Weekly strategy + creative consultation",
    ],
  },
  {
    id: "overdrive",
    name: "The Overdrive",
    price: "$2,500",
    features: [
      "High-speed content, up to 160 hrs/month",
      "Full paid ad management across Meta, Google & more",
      "Custom content calendar & planning",
      "Monthly performance report",
      "Priority turnaround & creative direction",
    ],
  },
];

export function Pricing() {
  const [activeId, setActiveId] = useState(PLANS[0].id);
  const plan = PLANS.find((p) => p.id === activeId) ?? PLANS[0];

  return (
    <section
      id="pricing"
      className="w-full bg-[var(--color-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[90rem] px-6 md:px-10">
        <AnimatedContent
          distance={22}
          duration={0.7}
          ease="power2.out"
          threshold={0.15}
        >
          <h2 className="max-w-[24ch] text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.04] tracking-[-0.015em] text-[var(--color-ink)]">
            Simple pricing.
          </h2>

          <div className="mx-auto mt-10 max-w-xl rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-surface-warm)] p-7 sm:p-9">
            <div className="inline-flex items-center gap-1 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] p-1">
              {PLANS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActiveId(p.id)}
                  className={`rounded-full px-3.5 py-2 text-[0.8rem] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
                    p.id === activeId
                      ? "bg-[var(--color-surface-black)] text-white"
                      : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={plan.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-6 flex items-baseline gap-2"
              >
                <span className="text-[clamp(2.75rem,5.5vw,3.5rem)] font-bold leading-none tracking-[-0.015em] text-[var(--color-ink)]">
                  {plan.price}
                </span>
                <span className="text-[1.05rem] font-medium text-[var(--color-ink-muted)]">
                  /month
                </span>
              </motion.p>
            </AnimatePresence>
            <p className="mt-2 text-[0.85rem] text-[var(--color-ink-muted)]">
              2-month minimum booking.
            </p>

            <AnimatePresence mode="wait">
              <motion.ul
                key={plan.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-7 flex flex-col gap-3 border-t border-[var(--color-line)] pt-7"
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      aria-hidden
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-deep)]"
                      strokeWidth={2.5}
                    />
                    <span className="text-[0.95rem] leading-[1.4] text-[var(--color-ink)]">
                      {feature}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>

            <div className="mt-8">
              <CtaButton href="#book" size="lg" className="w-full justify-center">
                Book a call
              </CtaButton>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-[46ch] text-center text-[0.9rem] leading-[1.5] text-[var(--color-ink-muted)]">
            Need something fully custom? Full brand builds, websites and
            standalone campaign projects are available separately.
          </p>
        </AnimatedContent>
      </div>
    </section>
  );
}
