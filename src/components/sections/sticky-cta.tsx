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
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const show = visible && !dismissed;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:inset-x-auto md:right-6 md:bottom-6 md:px-0 md:pb-0"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(0.75rem)",
        pointerEvents: show ? "auto" : "none",
      }}
      aria-hidden={!show}
    >
      <div className="flex w-full max-w-sm items-center gap-3 rounded-full border border-[var(--color-line-on-black)] bg-[var(--color-surface-black)]/75 py-2 pl-5 pr-2 shadow-[0_12px_40px_-12px_rgba(10,10,10,0.45)] backdrop-blur-md md:w-auto">
        <span className="flex-1 text-[0.85rem] font-medium text-[var(--color-ink-on-black)] md:flex-none">
          Ready to grow?
        </span>
        <Link
          href="#book"
          className="group relative inline-flex shrink-0 items-center overflow-hidden rounded-full bg-[var(--color-accent-deep)] px-4 py-2 text-[0.85rem] font-semibold text-white transition-[filter] duration-300 hover:brightness-90"
        >
          <GlareSurface glareColor="#ffffff" glareOpacity={0.22} />
          <span className="pointer-events-none">Book a call</span>
        </Link>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[var(--color-ink-on-black-muted)] transition-colors duration-300 hover:text-[var(--color-ink-on-black)]"
        >
          <X className="h-3.5 w-3.5" aria-hidden strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
