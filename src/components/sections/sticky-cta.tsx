"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { GlareSurface } from "@/components/ui/glare-surface";

export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const closingCta = document.getElementById("book");
    if (!hero || !closingCta) return;

    const heroPast = { current: false };
    const closingReached = { current: false };
    const update = () => setVisible(heroPast.current && !closingReached.current);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroPast.current = !entry.isIntersecting;
        update();
      },
      { rootMargin: "-64px 0px 0px 0px" }
    );
    const closingObserver = new IntersectionObserver(
      ([entry]) => {
        closingReached.current = entry.isIntersecting;
        update();
      },
      { rootMargin: "0px 0px -50% 0px" }
    );
    heroObserver.observe(hero);
    closingObserver.observe(closingCta);
    return () => {
      heroObserver.disconnect();
      closingObserver.disconnect();
    };
  }, []);

  const show = visible && !dismissed;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 transition-[opacity,transform] duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:inset-x-auto md:right-6 md:bottom-6 md:px-0 md:pb-0"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(150%)",
        pointerEvents: show ? "auto" : "none",
      }}
      aria-hidden={!show}
    >
      <div className="flex w-full max-w-lg items-center gap-3 rounded-full border border-[var(--color-line-on-black)] bg-[var(--color-surface-black)]/75 py-1.5 pl-5 pr-1.5 shadow-[0_16px_48px_-14px_rgba(10,10,10,0.5)] backdrop-blur-md md:w-auto">
        <span className="flex-1 text-[0.95rem] font-medium text-[var(--color-ink-on-black)] md:flex-none">
          Ready to grow?
        </span>
        <Link
          href="#book"
          className="group relative inline-flex shrink-0 items-center overflow-hidden rounded-full bg-[var(--color-accent-deep)] px-5 py-2 text-[0.9rem] font-semibold text-white transition-[filter] duration-300 hover:brightness-90"
        >
          <GlareSurface glareColor="#ffffff" glareOpacity={0.22} />
          <span className="pointer-events-none">Book a call</span>
        </Link>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[var(--color-ink-on-black-muted)] transition-colors duration-300 hover:text-[var(--color-ink-on-black)]"
        >
          <X className="h-4 w-4" aria-hidden strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
