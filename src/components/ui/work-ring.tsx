"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { PLAN_PORTRAITS } from "@/lib/plan-portraits";

// Placeholder tiles until real project stills replace them — cycles through
// the shared brand-gradient set in src/lib/plan-portraits.ts.
const TILE_COUNT = 8;
const TILES = Array.from({ length: TILE_COUNT }, (_, i) => PLAN_PORTRAITS[i % PLAN_PORTRAITS.length]);

export function WorkRing() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[19rem] [--ring-radius:6.5rem] sm:max-w-sm sm:[--ring-radius:8rem] md:max-w-md md:[--ring-radius:9.5rem]">
      <motion.div
        className="absolute inset-0"
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        {TILES.map((tile, i) => {
          const angle = (360 / TILE_COUNT) * i;
          return (
            <div
              key={`${tile.id}-${i}`}
              className="absolute left-1/2 top-1/2 h-[3.4rem] w-[3.4rem] sm:h-[4rem] sm:w-[4rem] md:h-[4.75rem] md:w-[4.75rem]"
              style={{
                transform: `rotate(${angle}deg) translate(var(--ring-radius)) rotate(${-angle}deg)`,
              }}
            >
              <div className="relative h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/10 bg-[#0A0A0A]">
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(120% 130% at 50% 15%, ${tile.glowTo} 0%, ${tile.glowFrom} 55%, transparent 82%)`,
                  }}
                />
                <div aria-hidden className="absolute inset-0 bg-[#0A0A0A]/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/doomsday-mark.png"
                    alt=""
                    width={20}
                    height={24}
                    className="h-4 w-auto opacity-60"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] sm:h-20 sm:w-20">
          <Image
            src="/doomsday-mark.png"
            alt=""
            width={28}
            height={34}
            className="h-6 w-auto sm:h-7"
          />
        </div>
      </div>
    </div>
  );
}
