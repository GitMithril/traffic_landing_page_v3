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
  { img: "/work/suited-couple.jpg", alt: "Wedding reception photography at golden hour", rotate: -7, x: 0, y: 4, z: 1 },
  { img: "/work/vix-cut-resistant.jpg", alt: "Vix cut-resistant apparel product photography", rotate: 5, x: 9, y: -2, z: 2 },
  { img: "/work/studio-lights.jpg", alt: "Behind-the-scenes studio lighting setup", rotate: -2, y: 9, x: 17, z: 3 },
];

export function HeroMediaStack() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative mx-auto h-[26rem] w-[34rem] shrink-0 sm:h-[30rem] sm:w-[39rem] lg:mx-0 lg:h-[33rem] lg:w-[42rem]">
      {STACK_CARDS.map((card, i) => {
        const isHovered = hovered === i;
        const transform = isHovered
          ? `translate(${card.x}rem, ${card.y - 1.4}rem) rotate(0deg) scale(1.06)`
          : `translate(${card.x}rem, ${card.y}rem) rotate(${card.rotate}deg) scale(1)`;

        return (
          <div
            key={card.img}
            className="absolute top-0 left-0 h-[19rem] w-[15rem] overflow-hidden rounded-2xl border border-black/5 shadow-[0_24px_55px_-18px_rgba(10,10,10,0.35)] transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[22rem] sm:w-[17.5rem] lg:h-[25rem] lg:w-[20rem]"
            style={{ transform, zIndex: isHovered ? 20 : card.z }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image src={card.img} alt={card.alt} fill sizes="320px" priority className="object-cover" />
          </div>
        );
      })}
    </div>
  );
}
