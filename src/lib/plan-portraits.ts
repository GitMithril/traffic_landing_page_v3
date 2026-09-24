export interface PlanPortrait {
  id: string;
  name: string;
  image: string;
  glowFrom: string;
  glowTo: string;
}

export const PLAN_PORTRAITS: PlanPortrait[] = [
  {
    id: "essentials",
    name: "The Essentials",
    image: "/the_essentials.jpg",
    glowFrom: "#D8220C",
    glowTo: "#FF8A4C",
  },
  {
    id: "amplifier",
    name: "The Amplifier",
    image: "/the_amplifier.avif",
    glowFrom: "#FF4400",
    glowTo: "#FFC24C",
  },
  {
    id: "overdrive",
    name: "The Overdrive",
    image: "/hero-warrior.webp",
    glowFrom: "#6E0800",
    glowTo: "#FF4400",
  },
];
