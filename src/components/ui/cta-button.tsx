import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type CtaButtonProps = {
  href: string;
  variant?: "solid" | "outline";
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

const ARROW = (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className="h-[0.9em] w-[0.9em] shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
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
  const base =
    "group relative inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold tracking-[-0.01em] transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]";

  const solid =
    "bg-[var(--color-surface-black)] text-[var(--color-ink-on-black)] shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] hover:shadow-[0_0_0_1px_var(--color-accent),0_10px_30px_-8px_rgba(255,68,0,0.55)] hover:text-white";

  const outline =
    "border border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-deep)]";

  return (
    <Link
      href={href}
      className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {ARROW}
    </Link>
  );
}
