import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { GlareSurface } from "@/components/ui/glare-surface";

type CtaButtonProps = {
  href: string;
  variant?: "solid" | "outline";
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

const EASE_SOFT = "ease-[cubic-bezier(0.22,1,0.36,1)]";

const ARROW = (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className={`pointer-events-none h-[0.9em] w-[0.9em] shrink-0 transition-transform duration-[280ms] ${EASE_SOFT} group-hover:translate-x-1`}
    aria-hidden
  >
    <path
      d="M4 10h12M11 5l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function CtaButton({
  href,
  variant = "solid",
  className = "",
  children,
  ...props
}: CtaButtonProps) {
  const base = `group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-6 py-3.5 text-[0.95rem] font-semibold tracking-[-0.01em] transition-[background-color,color,box-shadow,transform] duration-[340ms] ${EASE_SOFT} hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]`;

  const solid =
    "bg-[var(--color-surface-black)] text-[var(--color-ink-on-black)] shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_0_0_0_var(--color-accent),0_14px_32px_-10px_rgba(255,68,0,0)] hover:shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_0_0_1px_var(--color-accent),0_14px_32px_-10px_rgba(255,68,0,0.5)] hover:text-white";

  const outline =
    "border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-deep)]";

  return (
    <Link
      href={href}
      className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
      {...props}
    >
      <GlareSurface
        glareColor={variant === "solid" ? "#ffffff" : "#FF4400"}
        glareOpacity={variant === "solid" ? 0.22 : 0.16}
      />
      <span className="pointer-events-none">{children}</span>
      {ARROW}
    </Link>
  );
}
