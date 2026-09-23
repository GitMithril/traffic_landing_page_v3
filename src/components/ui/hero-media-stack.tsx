"use client";

import { useState } from "react";
import Image from "next/image";

interface StackCard {
  img: string;
  alt: string;
  rotate: number;
  x: number;
  y: number;
  z: number;
}

// Real Doomsday stills, chosen to sit tonally against the hero's warm
// orange/cream gradient. Static — no auto-motion, only a hover response.
const STACK_CARDS: StackCard[] = [
  { img: "/work/suited-couple.jpg", alt: "Wedding reception photography at golden hour", rotate: -7, x: 0, y: 2, z: 1 },
  { img: "/work/vix-cut-resistant.jpg", alt: "Vix cut-resistant apparel product photography", rotate: 5, x: 4.5, y: -1, z: 2 },
  { img: "/work/studio-lights.jpg", alt: "Behind-the-scenes studio lighting setup", rotate: -2, y: 4.5, x: 8.5, z: 3 },
];

export function HeroMediaStack() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative mx-auto h-[13rem] w-[17rem] shrink-0 sm:h-[15rem] sm:w-[19.5rem] lg:mx-0 lg:h-[16.5rem] lg:w-[21rem]">
      {STACK_CARDS.map((card, i) => {
        const isHovered = hovered === i;
        const transform = isHovered
          ? `translate(${card.x}rem, ${card.y - 0.7}rem) rotate(0deg) scale(1.06)`
          : `translate(${card.x}rem, ${card.y}rem) rotate(${card.rotate}deg) scale(1)`;

        return (
          <div
            key={card.img}
            className="absolute top-0 left-0 h-[9.5rem] w-[7.5rem] overflow-hidden rounded-2xl border border-black/5 shadow-[0_24px_55px_-18px_rgba(10,10,10,0.35)] transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[11rem] sm:w-[8.75rem] lg:h-[12.5rem] lg:w-[10rem]"
            style={{ transform, zIndex: isHovered ? 20 : card.z }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image src={card.img} alt={card.alt} fill sizes="160px" priority className="object-cover" />
          </div>
        );
      })}
    </div>
  );
}
