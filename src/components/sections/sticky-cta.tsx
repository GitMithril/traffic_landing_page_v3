"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

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
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 transition-all duration-500 ease-out md:inset-x-auto md:right-6 md:bottom-6 md:px-0 md:pb-0"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(0.75rem)",
        pointerEvents: show ? "auto" : "none",
      }}
      aria-hidden={!show}
    >
      <div className="flex w-full max-w-sm items-center gap-3 rounded-full border border-[var(--color-line-on-black)] bg-[var(--color-surface-black)] py-2 pl-5 pr-2 shadow-[0_12px_40px_-12px_rgba(10,10,10,0.45)] md:w-auto">
        <span className="flex-1 text-[0.85rem] font-medium text-[var(--color-ink-on-black)] md:flex-none">
          Ready to grow?
        </span>
        <Link
          href="#book"
          className="inline-flex shrink-0 items-center rounded-full bg-[var(--color-accent-deep)] px-4 py-2 text-[0.85rem] font-semibold text-white transition-colors duration-300 hover:brightness-90"
        >
          Book a call
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
