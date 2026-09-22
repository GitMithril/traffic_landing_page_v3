"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

export interface QuoteCardItem {
  quote: string;
  name: string;
  role: string;
}

interface QuoteFanCarouselProps {
  cards: QuoteCardItem[];
}

const MAX_VISIBLE = 7;
const HALF = 3;

const FAN_POSITIONS = [
  { rot: -21, scale: 0.7756, x: -30, y: 7.3, zIndex: 1 },
  { rot: -14, scale: 0.8498, x: -22, y: 4.0, zIndex: 2 },
  { rot: -7, scale: 0.9346, x: -11, y: 1.3, zIndex: 3 },
  { rot: 0, scale: 1.0, x: 0, y: 0.0, zIndex: 10 },
  { rot: 7, scale: 0.9346, x: 11, y: 1.3, zIndex: 3 },
  { rot: 14, scale: 0.8498, x: 22, y: 4.0, zIndex: 2 },
  { rot: 21, scale: 0.7756, x: 30, y: 7.3, zIndex: 1 },
];

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.3;
  if (width < 640) return 0.4;
  if (width < 768) return 0.52;
  if (width < 1024) return 0.78;
  return 1.0;
}

function getHeightMultiplier(width: number) {
  let idealPx: number;
  if (width < 480) idealPx = 30 * 16;
  else if (width < 640) idealPx = 32 * 16;
  else if (width < 768) idealPx = 34 * 16;
  else if (width < 1024) idealPx = 36 * 16;
  else idealPx = 38 * 16;

  const available = window.innerHeight * 0.78;
  if (available >= idealPx) return 1;
  return available / idealPx;
}

function getSlotConfig(totalCards: number, slot: number) {
  if (totalCards >= MAX_VISIBLE) return FAN_POSITIONS[slot];
  const center = totalCards >> 1;
  const distance = totalCards > 1 ? (slot - center) / center : 0;
  const absDistance = Math.abs(distance);
  return {
    rot: distance * 16,
    scale: 1.0 - 0.16 * absDistance * absDistance,
    x: distance * 34,
    y: absDistance * absDistance * 5.4,
    zIndex: 10 - Math.abs(slot - center),
  };
}

const ARROW_CLASSES =
  "relative flex items-center justify-center rounded-full border border-[#1A1A1A]/12 bg-white text-[#1A1A1A]/50 cursor-pointer shrink-0 z-30 outline-none shadow-[0_4px_20px_rgba(10,10,10,0.08)] transition-[color,border-color,transform] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:border-[#FF4400]/50 hover:text-[#FF4400] active:translate-y-0 active:opacity-70";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function QuoteFanCarousel({ cards }: QuoteFanCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);
  const directionRef = useRef<"left" | "right" | null>(null);
  const prevVisible = useRef<Set<number>>(new Set());

  const totalCards = cards.length;
  const needsPagination = totalCards > MAX_VISIBLE;
  const [centerIndex, setCenterIndex] = useState(
    needsPagination ? HALF : totalCards >> 1
  );

  const getVisibleMap = useCallback(
    (center: number) => {
      const map = new Map<number, number>();
      if (!needsPagination) {
        cards.forEach((_, i) => map.set(i, i));
        return map;
      }
      for (let slot = 0; slot < MAX_VISIBLE; slot++) {
        map.set(
          (((center + slot - HALF) % totalCards) + totalCards) % totalCards,
          slot
        );
      }
      return map;
    },
    [totalCards, needsPagination, cards]
  );

  const cycle = useCallback(
    (direction: "left" | "right") => {
      if (isAnimating.current || !needsPagination) return;
      isAnimating.current = true;
      directionRef.current = direction;
      setCenterIndex((prev) =>
        direction === "right"
          ? (prev + 1) % totalCards
          : (prev - 1 + totalCards) % totalCards
      );
    },
    [totalCards, needsPagination]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !totalCards) return;

    const cardElements = Array.from(
      container.querySelectorAll<HTMLElement>(".fan-quote-card")
    );
    if (!cardElements.length) return;

    const visibleMap = getVisibleMap(centerIndex);
    const previouslyVisible = prevVisible.current;
    const direction = directionRef.current;
    const isFirstMount = !hasEntered.current;
    const multiplier = getResponsiveMultiplier(window.innerWidth);
    const hMult = getHeightMultiplier(window.innerWidth);
    const slotCount = needsPagination ? MAX_VISIBLE : totalCards;
    const config = (slot: number) => getSlotConfig(slotCount, slot);

    if (isFirstMount) isAnimating.current = true;

    let completedCount = 0;
    const visibleCount = visibleMap.size;
    const onCardDone = () => {
      if (++completedCount >= visibleCount) {
        isAnimating.current = false;
        if (isFirstMount) hasEntered.current = true;
      }
    };

    cardElements.forEach((card, cardIndex) => {
      const slot = visibleMap.get(cardIndex);
      const wasVisible = previouslyVisible.has(cardIndex);

      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = config(slot);
        const target = {
          x: `${x * multiplier}rem`,
          y: `${y * hMult}rem`,
          rotation: rot,
          scale,
          opacity: 1,
          zIndex,
        };

        if (isFirstMount) {
          gsap.set(card, {
            x: 0,
            y: `${10 * hMult}rem`,
            rotation: 0,
            scale: 0.5,
            opacity: 0,
          });
          gsap.to(card, {
            ...target,
            duration: 1.1,
            ease: "elastic.out(1.05,.78)",
            delay: 0.15 + slot * 0.06,
            onComplete: onCardDone,
          });
        } else if (!wasVisible) {
          const enterX = direction === "right" ? 40 : -40;
          gsap.set(card, {
            x: `${enterX}rem`,
            y: `${y * hMult}rem`,
            rotation: direction === "right" ? 30 : -30,
            scale: 0.5,
            opacity: 0,
          });
          gsap.to(card, {
            ...target,
            duration: 0.6,
            ease: "power2.out",
            onComplete: onCardDone,
          });
        } else {
          gsap.to(card, {
            ...target,
            duration: 0.5,
            ease: "power2.out",
            onComplete: onCardDone,
          });
        }
      } else if (wasVisible) {
        const exitX = direction === "right" ? -40 : 40;
        gsap.to(card, {
          x: `${exitX}rem`,
          opacity: 0,
          scale: 0.5,
          rotation: direction === "right" ? -30 : 30,
          duration: 0.4,
          ease: "power2.in",
          zIndex: 0,
        });
      } else if (isFirstMount) {
        gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 });
      }
    });

    prevVisible.current = new Set(visibleMap.keys());

    const visibleEntries: { el: HTMLElement; slot: number }[] = [];
    cardElements.forEach((el, i) => {
      const slot = visibleMap.get(i);
      if (slot !== undefined) visibleEntries.push({ el, slot });
    });
    visibleEntries.sort((a, b) => a.slot - b.slot);

    let activeSlot: number | null = null;
    let leaveTimer: ReturnType<typeof setTimeout> | null = null;
    const centerSlot = visibleEntries.length >> 1;

    const updateHoverLayout = (hoveredSlot: number | null) => {
      const mult = getResponsiveMultiplier(window.innerWidth);
      const hM = getHeightMultiplier(window.innerWidth);

      visibleEntries.forEach(({ el, slot }) => {
        const base = config(slot);
        let targetX = base.x * mult;
        let targetY = base.y * hM;
        let targetRot = base.rot;
        let targetScale = base.scale;
        let delay = 0;

        if (hoveredSlot !== null) {
          const distance = Math.abs(slot - hoveredSlot);
          delay = distance * 0.02;

          if (slot === hoveredSlot) {
            targetY -= 2.2 * hM;
            targetScale *= 1.06;
          } else {
            const normalized =
              centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0;
            const pushStrength =
              8 * (1 - Math.abs(normalized)) *
              (1 + 0.2 * Math.max(0, 3 - distance));

            if (slot < hoveredSlot) {
              targetX -= pushStrength * mult;
              targetRot -= 3 / (distance + 1);
            } else {
              targetX += pushStrength * mult;
              targetRot += 3 / (distance + 1);
            }
          }
        } else {
          delay = Math.abs(slot - centerSlot) * 0.02;
        }

        gsap.to(el, {
          x: `${targetX}rem`,
          y: `${targetY}rem`,
          rotation: targetRot,
          scale: targetScale,
          duration: 0.5,
          delay,
          ease: "elastic.out(1,.75)",
          overwrite: "auto",
        });
        gsap.set(el, { zIndex: base.zIndex });
      });
    };

    const enterHandlers = visibleEntries.map(({ el, slot }) => {
      const handler = () => {
        if (isAnimating.current) return;
        if (leaveTimer) {
          clearTimeout(leaveTimer);
          leaveTimer = null;
        }
        if (activeSlot !== slot) {
          activeSlot = slot;
          updateHoverLayout(slot);
        }
      };
      el.addEventListener("mouseenter", handler);
      return { el, handler };
    });

    const onMouseLeave = () => {
      if (isAnimating.current) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => {
        activeSlot = null;
        updateHoverLayout(null);
      }, 50);
    };
    container.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => {
      if (!isAnimating.current) updateHoverLayout(activeSlot);
    };
    window.addEventListener("resize", onResize);

    return () => {
      enterHandlers.forEach(({ el, handler }) =>
        el.removeEventListener("mouseenter", handler)
      );
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [centerIndex, totalCards, getVisibleMap, needsPagination]);

  if (!totalCards) return null;

  const chevron = (direction: "left" | "right") => (
    <svg
      className="relative z-[2] h-4 w-4 md:h-5 md:w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points={direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-[90rem] items-center justify-center">
        <div
          ref={containerRef}
          className="fan-layout relative flex h-[24rem] w-full max-w-[74rem] items-center justify-center sm:h-[26rem] md:h-[28rem] lg:h-[30rem]"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="fan-quote-card absolute left-1/2 top-1/2 h-[19rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 sm:h-[20.5rem] sm:w-[15rem] md:h-[22rem] md:w-[16rem] lg:h-[23rem] lg:w-[17rem]"
            >
              <figure className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0A0A0A] p-7 text-white sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-90"
                  style={{
                    background:
                      "radial-gradient(120% 140% at 12% -10%, #D8220C 0%, #FF4400 42%, transparent 72%)",
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[#0A0A0A]/55"
                />
                <span className="relative font-serif text-5xl italic leading-none text-white/25">
                  &ldquo;
                </span>
                <blockquote className="relative -mt-4 flex-1 font-serif text-[1.05rem] italic leading-snug text-white sm:text-[1.15rem]">
                  {card.quote}
                </blockquote>
                <figcaption className="relative mt-6 flex items-center gap-3 border-t border-white/15 pt-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-xs font-semibold tracking-wide text-white">
                    {initials(card.name)}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-white">
                      {card.name}
                    </span>
                    <span className="text-xs text-white/60">{card.role}</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {needsPagination && (
        <div className="z-30 mt-6 flex items-center justify-center gap-4 md:mt-8">
          <button
            className={`${ARROW_CLASSES} h-10 w-10 md:h-12 md:w-12`}
            onClick={() => cycle("left")}
            aria-label="Previous testimonial"
          >
            {chevron("left")}
          </button>
          <div className="flex items-center gap-2">
            {cards.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === centerIndex
                    ? "scale-[1.3] bg-[#FF4400]"
                    : "bg-[#1A1A1A]/15"
                }`}
              />
            ))}
          </div>
          <button
            className={`${ARROW_CLASSES} h-10 w-10 md:h-12 md:w-12`}
            onClick={() => cycle("right")}
            aria-label="Next testimonial"
          >
            {chevron("right")}
          </button>
        </div>
      )}
    </div>
  );
}
