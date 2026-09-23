export interface PlanPortrait {
  id: string;
  name: string;
  /** Placeholder gradient until real per-tier portrait photography is supplied. */
  glowFrom: string;
  glowTo: string;
}

export const PLAN_PORTRAITS: PlanPortrait[] = [
  {
    id: "essentials",
    name: "The Essentials",
    glowFrom: "#D8220C",
    glowTo: "#FF8A4C",
  },
  {
    id: "amplifier",
    name: "The Amplifier",
    glowFrom: "#FF4400",
    glowTo: "#FFC24C",
  },
  {
    id: "overdrive",
    name: "The Overdrive",
    glowFrom: "#6E0800",
    glowTo: "#FF4400",
  },
];
