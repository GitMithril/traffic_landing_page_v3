import GlareHover from "@/components/GlareHover";

interface GlareSurfaceProps {
  radius?: string;
  glareColor?: string;
  glareOpacity?: number;
}

/**
 * Brand-tuned overlay wrapper around the reactbits GlareHover primitive —
 * transparent, absolutely positioned, sized to fill its relative parent.
 * Kept deliberately soft (low opacity, slow sweep) per the "subtle, not
 * flashy" brief.
 */
export function GlareSurface({
  radius = "9999px",
  glareColor = "#ffffff",
  glareOpacity = 0.22,
}: GlareSurfaceProps) {
  return (
    <GlareHover
      width="100%"
      height="100%"
      background="transparent"
      borderColor="transparent"
      borderRadius={radius}
      glareColor={glareColor}
      glareOpacity={glareOpacity}
      glareAngle={-30}
      glareSize={220}
      transitionDuration={750}
      className="!absolute !inset-0 !border-0"
    />
  );
}
