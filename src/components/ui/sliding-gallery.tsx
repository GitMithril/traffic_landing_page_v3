import Image from "next/image";
import { PLAN_PORTRAITS } from "@/lib/plan-portraits";

// Placeholder tiles until real project stills replace them — cycles through
// the shared brand-gradient set in src/lib/plan-portraits.ts.
const TILE_COUNT = 8;
const TILES = Array.from(
  { length: TILE_COUNT },
  (_, i) => PLAN_PORTRAITS[i % PLAN_PORTRAITS.length]
);
const DUPLICATED = [...TILES, ...TILES];

export function SlidingGallery() {
  return (
    <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent_0%,black_10%,black_90%,transparent_100%)]">
      <div className="flex w-max animate-[slide-loop_32s_linear_infinite] gap-6">
        {DUPLICATED.map((tile, i) => (
          <div
            key={`${tile.id}-${i}`}
            className="relative h-40 w-40 shrink-0 overflow-hidden rounded-xl transition-[transform,filter] duration-300 ease-out hover:scale-105 hover:brightness-110 sm:h-56 sm:w-56 md:h-64 md:w-64"
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background: `radial-gradient(120% 130% at 50% 15%, ${tile.glowTo} 0%, ${tile.glowFrom} 55%, transparent 82%)`,
              }}
            />
            <div aria-hidden className="absolute inset-0 bg-[#0A0A0A]/45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/doomsday-mark.png"
                alt=""
                width={28}
                height={34}
                className="h-8 w-auto opacity-60 sm:h-10 md:h-12"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
