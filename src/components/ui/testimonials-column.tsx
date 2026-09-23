"use client";

import Image from "next/image";
import { motion } from "motion/react";

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialCard({ quote, name, role, image }: TestimonialItem) {
  return (
    <div className="relative w-full max-w-sm shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0A0A0A] p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(120% 140% at 12% -10%, #D8220C 0%, #FF4400 42%, transparent 72%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#0A0A0A]/60" />

      <blockquote className="relative text-[0.95rem] italic leading-snug text-white">
        {quote}
      </blockquote>

      <div className="relative mt-5 flex items-center gap-3 border-t border-white/15 pt-4">
        {image ? (
          <Image
            src={image}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-full border border-white/25 object-cover"
          />
        ) : (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-xs font-semibold tracking-wide text-white">
            {initials(name)}
          </span>
        )}
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-white">{name}</span>
          <span className="text-xs text-white/60">{role}</span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsColumn({
  testimonials,
  duration = 26,
  className = "",
}: {
  testimonials: TestimonialItem[];
  duration?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-5"
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </motion.div>
    </div>
  );
}
