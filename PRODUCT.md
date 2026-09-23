# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (App Router, TypeScript, Turbopack), Tailwind CSS v4, shadcn/ui (`new-york` style, RSC, `@/*` aliases). Already scaffolded in this repo; not a greenfield stack decision.

## Users

Scaling founders and growing brands (the ICP named in the source content brief) who need content, creative direction, and Meta advertising running together. They are currently coordinating multiple freelancers or separate agencies for strategy, design, editing, and paid media, and are frustrated by handoffs where nobody owns the whole campaign end to end.

## Product Purpose

Doomsday Studios is a creative + performance-marketing agency that gives growing brands one connected team — content, creative direction, Meta advertising, and digital execution — instead of five disconnected vendors. This site is its marketing/lead-gen landing page: the job is to get the right prospect to book a call.

## Positioning

Unified execution: the people planning the work (strategy) are the same people making and launching it (design, editing, paid media). Competing agencies and freelancer stacks hand work off between disconnected people, losing creative intent and campaign context at each handoff; Doomsday keeps one team across the whole idea-to-launch cycle.

## Operating Context

Single-page marketing site (App Router `/` route). Primary conversion action is booking a call ("Help me grow my business" / "Book a Call"), repeated at multiple points down the page plus a persistent CTA. No auth, no app shell — pure Persuade-mode surface.

## Capabilities and Constraints

- All page copy is sourced from `content.md` in the repo root (client-provided brief) — do not invent or alter claims, numbers, or testimonial content.
- Brand assets on hand: `public/doomsday-mark.png` (hourglass mark), `public/doomsday-wordmark.png`, favicon set. No other imagery exists yet.
- No client logos or work-sample/case-study images exist yet for the named testimonials (Vix Protection, Bespoke Events Management) or past campaigns. Per the user: build clearly-labeled placeholder slots for these (logo strip, work-sample panels) so real assets can be dropped in later — do not fabricate stock photography or invented logos to fill the gap.
- Pricing (`$1,250/month`, 2-month minimum engagement) and the three testimonials/stats in `content.md` are real, confirmed content, not placeholders.

## Brand Commitments

- Name: Doomsday Studios. Wordmark and hourglass mark are final assets, not placeholders.
- Palette is binding, user-specified: black + orange, brand gradient sampled from the mark (`#D8220C → #FF4400 → #F4631E`), rendered in **light mode** (white/off-white surfaces, near-black ink; black reserved structurally, not as the page background).
- Typography: Inter only (`next/font/google`, weights 400–800, including real italic for quoted/emphasis text) — user directed a switch away from the earlier Inter + Playfair Display pairing to a single-typeface system.
- Reference site for tone, spacing, and layout rhythm: doomsday.studio.
- Required component integrations (user-specified, not open decisions): reactbits `GradientWaves` (`@react-bits` registry, WebGL/`ogl`) as the hero background; the fan-carousel component supplied in `component.md`, adapted to render branded quote cards (no fabricated stock photos of the named testimonial-givers) for the testimonials section; MagicUI components used as supporting UI accents.
- Tone: bold, cinematic, qualification-forward copy ("Create like there's no tomorrow") — confident agency voice, not generic SaaS marketing tone.

## Evidence on Hand

- Full page copy and section structure: `content.md`.
- Stats: 4M+ audience reach, 550+ hours of content, 20+ projects completed, $50K+ ad spend managed.
- Testimonials (real, named): Victor (CEO, Vix Protection), Tanner Perkins (Professional Athlete), Nick Levett (Founder, Bespoke Events Management).
- Pricing: The Essentials, $1,250/month, minimum 2-month engagement.
- Location: Based in Islamabad, working with brands everywhere.
- Absence to respect: no client logos, no work-sample/case-study imagery, no headshots exist — future work must not fabricate these; placeholder slots stand in until the user supplies real assets.

## Product Principles

1. One connected team, not a vendor stack — every section should reinforce "no handoffs," never read as a generic agency template.
2. Qualify, don't just sell — the page should help the wrong-fit prospect self-select out (per content.md's explicit qualification section), not just chase conversions.
3. Content truth over decoration — no fabricated stats, logos, or photos; placeholders are honestly labeled, never disguised as real proof.
4. Craft matches the claim — a studio selling creative excellence cannot ship a templated-looking site; motion, type, and layout must read as bespoke.

## Accessibility & Inclusion

No project-specific requirement established beyond standard WCAG AA practice (contrast, keyboard/focus handling, reduced-motion respect for the WebGL background and scroll animations).
