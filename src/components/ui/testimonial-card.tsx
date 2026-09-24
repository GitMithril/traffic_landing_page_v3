import Image from "next/image";
import { Quote } from "lucide-react";
import { GlareSurface } from "@/components/ui/glare-surface";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export function TestimonialCard({ quote, name, role, image }: Testimonial) {
  return (
    <div className="relative flex h-[24rem] w-[19rem] shrink-0 snap-start flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0A0A0A] p-7 sm:w-[21rem] sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(120% 140% at 12% -10%, #D8220C 0%, #FF4400 42%, transparent 72%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#0A0A0A]/60" />
      <GlareSurface radius="1.75rem" glareColor="#ffffff" glareOpacity={0.18} />

      <Quote
        aria-hidden
        className="relative h-7 w-7 shrink-0 fill-white/25 text-white/25"
        strokeWidth={0}
      />
      <blockquote className="relative mt-4 flex-1 text-[1.1rem] font-medium leading-[1.4] text-white">
        {quote}
      </blockquote>

      <div className="relative mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/25">
          <Image src={image} alt={name} fill sizes="40px" className="object-cover" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[0.95rem] font-semibold text-white">{name}</span>
          <span className="text-[0.8rem] text-white/60">{role}</span>
        </div>
      </div>
    </div>
  );
}
