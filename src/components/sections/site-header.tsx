"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GlareSurface } from "@/components/ui/glare-surface";

const NAV_LINKS = [
  { href: "#work", label: "How we work" },
  { href: "#voices", label: "Client voices" },
  { href: "#pricing", label: "Pricing" },
];

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[var(--color-surface-black)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between px-6 md:px-10">
        <Link href="#top" className="flex items-center gap-2.5">
          <Image
            src="/doomsday-mark.png"
            alt=""
            width={28}
            height={34}
            className="h-7 w-auto"
            priority
          />
          <Image
            src="/doomsday-wordmark.png"
            alt="Doomsday Studios"
            width={168}
            height={20}
            className={`h-[0.95rem] w-auto transition-[filter] duration-500 ${
              scrolled ? "brightness-0 invert" : ""
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative inline-block py-1 text-[0.9rem] font-medium tracking-[-0.01em] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-[420ms] after:ease-[cubic-bezier(0.22,1,0.36,1)] after:content-[''] hover:after:scale-x-100 ${
                scrolled
                  ? "text-[var(--color-ink-on-black-muted)] after:bg-white hover:text-white"
                  : "text-[var(--color-ink-muted)] after:bg-[var(--color-ink)] hover:text-[var(--color-ink)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#book"
          className={`group relative inline-flex items-center overflow-hidden rounded-full px-5 py-2.5 text-[0.85rem] font-semibold tracking-[-0.01em] transition-colors duration-[340ms] ${
            scrolled
              ? "bg-[var(--color-accent-deep)] text-white hover:brightness-90"
              : "bg-[var(--color-surface-black)] text-[var(--color-ink-on-black)] hover:bg-[var(--color-accent-deep)] hover:text-white"
          }`}
          style={{ transitionTimingFunction: EASE }}
        >
          <GlareSurface glareColor="#ffffff" glareOpacity={0.22} />
          <span className="pointer-events-none">Book a call</span>
        </Link>
      </div>
    </header>
  );
}
