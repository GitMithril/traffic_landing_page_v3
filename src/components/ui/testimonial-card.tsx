import Image from "next/image";
import { Quote } from "lucide-react";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export function TestimonialCard({ quote, name, role, image }: Testimonial) {
  return (
    <div className="relative h-[26rem] w-[19rem] shrink-0 overflow-hidden rounded-[1.5rem] transition-transform duration-500 ease-out hover:-translate-y-1.5 sm:h-[28rem] sm:w-[21rem]">
      <Image
        src={image}
        alt={name}
        fill
        sizes="336px"
        className="object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col p-6 sm:p-7">
        <Quote
          aria-hidden
          className="h-7 w-7 shrink-0 fill-white/40 text-white/40"
          strokeWidth={0}
        />
        <blockquote className="mt-2 text-[1.05rem] leading-[1.4] text-white">
          {quote}
        </blockquote>
        <p className="mt-4 text-[1.05rem] font-semibold text-white">{name}</p>
        <p className="mt-0.5 text-[0.85rem] text-white/70">{role}</p>
      </div>
    </div>
  );
}
