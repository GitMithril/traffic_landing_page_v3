---
name: Doomsday Studios
description: One connected creative + performance team, proven through an unbroken editorial throughline
colors:
  surface: "#ffffff"
  surface-warm: "#f7f6f4"
  surface-black: "#0a0a0a"
  ink: "#2b2b2e"
  ink-muted: "#6f6d72"
  ink-on-black: "#f5f3f0"
  ink-on-black-muted: "#a9a6a3"
  line: "#e7e5e2"
  line-on-black: "rgba(245, 243, 240, 0.14)"
  accent: "#ff4400"
  accent-deep: "#d8220c"
  accent-light: "#f4631e"
typography:
  display:
    fontFamily: "var(--font-sans)"
    fontSize: "clamp(2.75rem, 6vw, 5.25rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-3.5px"
  headline:
    fontFamily: "var(--font-sans)"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-3.5px"
  title:
    fontFamily: "var(--font-sans)"
    fontSize: "1.1rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "var(--font-sans)"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "var(--font-sans)"
    fontSize: "0.85rem"
    fontWeight: 600
    letterSpacing: "normal"
  pull-quote:
    fontFamily: "var(--font-sans)"
    fontSize: "1.1rem"
    fontWeight: 500
    fontStyle: "italic"
    lineHeight: 1.35
    letterSpacing: "normal"
rounded:
  pill: "999px"
  card: "1.75rem"
  chip: "50%"
spacing:
  section-y: "6rem"
  section-y-lg: "8rem"
  gap-sm: "0.75rem"
  gap-md: "2.5rem"
  gap-lg: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.surface-black}"
    textColor: "{colors.ink-on-black}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.surface-black}"
    textColor: "#ffffff"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.5rem"
  button-outline-hover:
    textColor: "{colors.accent-deep}"
  quote-card:
    backgroundColor: "{colors.surface-black}"
    textColor: "#ffffff"
    rounded: "{rounded.card}"
    padding: "1.75rem"
  gradient-wash-card:
    backgroundColor: "{colors.surface-black}"
    textColor: "#ffffff"
    rounded: "{rounded.card}"
    padding: "2rem"
---

# Design System: Doomsday Studios

## Overview

**Creative North Star: "The Unbroken Line"**

Doomsday's landing page argues one connected team over a disconnected vendor stack, and the design carries that argument structurally: a single hairline rule runs through the services list, a single accent-colored progress line fills through the process steps, and every section shares the same warm-white/near-black/brand-orange register with no visual seams between them. The register is editorial and restrained — warm-white paper grounds, near-black ink, hairline dividers, flat surfaces — with the brand gradient (`#D8220C → #FF4400 → #F4631E`) deployed at full commitment only where it is structurally earned: the hero's GradientWaves field, dark gradient-wash cards (testimonials, qualification, pricing portrait), the hero's photo marquee, and the closing CTA band's radial glow. True black (`#0A0A0A`) is reserved for primary buttons, the nav's scrolled state, gradient-wash card grounds, and the full-bleed closing band — never as the page's resting section background.

This is a code-led, no-comp build: the direction contract pinned palette, mode, typography, and section order before any layout decision, leaving composition (not identity) as the open variable. A finish-review pass removed one violation before ship — a generic gray eyebrow/kicker above the hero headline — replacing it with the ICP claim woven directly into the hero's body copy. That is not a system rule to preserve going forward; it is a defect the build avoided, and no kicker/eyebrow pattern exists anywhere in the shipped surfaces.

Since the first build, the typography system was simplified to a single Inter-only voice (Playfair Display was removed entirely, including from testimonial quotes), and the dark gradient-wash card — originally scoped to testimonials only — was confirmed as a reusable content pattern now shared by testimonials, the qualification "fit" card, and the pricing portrait panel. A new hero photo-marquee and a rebuilt 3-tier pricing selector both reuse this same placeholder-portrait treatment (radial brand-gradient wash over true black, centered brand mark, no fabricated photography) rather than inventing a new visual language.

**Key Characteristics:**
- Warm-white paper grounds (`#FFFFFF` / `#F7F6F4`) with near-black ink (`#1A1A1A`), never pure black for body text
- Brand gradient carried at full saturation only in the hero canvas, dark gradient-wash cards, and the closing CTA glow — never as gradient text
- True black (`#0A0A0A`) reserved structurally: primary buttons, header-on-scroll, gradient-wash card grounds, closing CTA band
- Flat, editorial register: hairline 1px dividers do the separating work; no drop-shadow card scaffolding outside the gradient-wash card family
- Inter is the sole typeface (400–800, including real italic 400–500) for every heading, UI element, and quoted/emphasized text — no second typeface

## Colors

A warm-white editorial base with true black and a single warm-orange gradient held in reserve for high-conviction moments.

### Primary
- **Doomsday Orange** (`#ff4400`): the accent token. Used for interactive accents — focus rings, selection color, hover states, small dot/rule markers, the "3x" emphasis word, checkmarks.
- **Doomsday Orange Deep** (`#d8220c`): the deeper gradient stop. Used for emphasized inline text (execution problem, connected-work claim), scrolled-nav CTA fill, sticky-bar CTA fill, process-step numerals, pricing feature checkmarks.
- **Doomsday Orange Light** (`#f4631e`): the lightest gradient stop, used only within the three-stop brand gradient (GradientWaves crest color, gradient-wash card washes, closing-band radial), never standalone as a UI color.

### Neutral
- **Paper White** (`#ffffff`): primary section background (hero, problem, pricing).
- **Warm Paper** (`#f7f6f4`): alternating section background (metrics, services, testimonials, booking explainer, qualification's not-fit card) — the tonal shift that separates sections without a border or shadow.
- **Near-Black Ink** (`#1a1a1a`): primary text color on light surfaces. Never pure `#000`.
- **Muted Ink** (`#6f6d72`): secondary/supporting text on light surfaces (subheads, captions, stat labels).
- **True Black** (`#0a0a0a`): structural black — primary button fill, header-on-scroll fill, gradient-wash card ground, closing CTA band background.
- **Ink on Black** (`#f5f3f0`): primary text on the true-black surfaces.
- **Muted Ink on Black** (`#a9a6a3`): secondary text on true-black surfaces.
- **Hairline** (`#e7e5e2`): all dividers, borders, and the services/process rule lines on light surfaces.
- **Hairline on Black** (`rgba(245,243,240,0.14)`): dividers on true-black surfaces (sticky CTA bar border).

### Named Rules
**The Reserved Black Rule.** True black (`#0a0a0a`) is not a background default; it appears only at structural points (primary buttons, header once scrolled, gradient-wash cards, the closing full-bleed band). Everywhere else the ground is warm white or warm paper.

**The No-Gradient-Text Rule.** The brand gradient renders as a field, wash, or glow — never as a text-fill effect. Confirmed by the direction contract and consistent across every shipped section (closing headline uses solid ink-on-black, not a gradient clip).

## Typography

**Display Font:** Inter (variable, weights 400–800, `normal` and `italic` styles loaded via `next/font/google`), with ui-sans-serif/system-ui fallback
**Body Font:** Inter, same stack

**Character:** A restrained medium-weight grotesque (Inter at 500) carries every headline and card title, deliberately lighter than a bold/extrabold display voice per direct client correction; Inter's own italic (400–500) is the system's one emphasis register, used for quoted client language so it still reads as a distinct "other person's words" voice without introducing a second typeface.

### Hierarchy
- **Display** (500, `clamp(2.75rem, 6vw, 5.25rem)`, line-height 0.98, tracking -3.5px): closing CTA headline only.
- **Headline** (500, `clamp(2rem, 4vw, 3.25rem)`, line-height 1.04, tracking -3.5px): section headlines (problem, services, testimonials, pricing, qualification, booking explainer). Hero headline uses the same weight at a slightly tighter clamp (`clamp(2.5rem, 5.2vw, 4.25rem)`, 24ch max width) as the largest first-viewport instance. The -3.5px tracking is a flat pixel value (not em-scaled) — client-specified, applied only to headline/display-scale text since it would over-tighten smaller sizes.
- **Title** (500, ~1.1–1.2rem, normal tracking): card/step titles (service discipline names, process step titles).
- **Body** (400, ~1–1.15rem, line-height 1.55, 65–75ch measure): paragraph copy; hero sub-paragraph is explicitly held to the 65–75ch contract measure (`max-w-[70ch]`).
- **Label** (600, ~0.85–0.95rem, tabular-nums where numeric): step numerals (01–04), stat labels, nav links.
- **Pull-quote** (Inter, 400–500 real italic, ~1.05–1.15rem, line-height ~1.35): testimonial quotes only, always on the true-black gradient-wash card.

### Named Rules
**The Inter-Only Rule.** Inter is the only typeface in the system — display, body, label, and quoted/pull-quote text all resolve to the same family, differentiated by weight, size, and (for quotes only) real italic style. There is no second/accent typeface anywhere in the build.

## Layout

Single max-width container (`max-w-[90rem]`, `px-6` mobile / `px-10` desktop) reused across every section. Sections alternate between white and warm-paper backgrounds as the only tonal separator between them — no borders or shadows mark section boundaries. Vertical rhythm was tightened per direct client request: `py-16`–`py-20` for most content sections (previously `py-24`–`py-32`), keeping sections closer together. Hairline horizontal or vertical rules (`border-[var(--color-line)]`) still thread the metrics-bar dividers and pricing/qualification internal rules, expressing the "unbroken line" thesis structurally; the services and process lists, the problem section's friction points, and the booking-explainer steps now use the Glass Card pattern instead of the bare connecting-line treatment (client-directed). Two/three-column splits (`md:grid-cols-[1.1fr_0.9fr]`, or pricing's `md:grid-cols-[0.85fr_1.15fr_1fr]` portrait/switcher/checklist split) appear in pricing and qualification for content/detail pairs. Mobile collapses all multi-column layouts to a single stacked column.

## Elevation & Depth

The system is flat by explicit contract: no drop-shadow card scaffolding on standard content sections. Depth is conveyed through tonal layering (white vs. warm-paper section backgrounds, true-black bands) and hairline dividers, not shadows. Confirmed exceptions are functional or structural, not decorative: the primary CTA button gets a soft orange glow shadow only on hover/focus (a state response, not a resting elevation); the sticky CTA bar — a floating, fixed-position element that must read as detached from page flow — carries a soft ambient shadow at rest; and the hero photo-marquee's rotated placeholder cards carry a soft ambient shadow, since they represent physically stacked photo prints rather than flat page content.

### Shadow Vocabulary
- **CTA hover glow** (`box-shadow: 0 0 0 1px var(--color-accent), 0 10px 30px -8px rgba(255,68,0,0.55)`): primary button hover/focus state only.
- **Sticky bar ambient** (`box-shadow: 0 12px 40px -12px rgba(10,10,10,0.45)`): the fixed sticky CTA bar at rest, justified by its floating/overlaid position.
- **Marquee card ambient** (`box-shadow: 0 18px 40px -16px rgba(10,10,10,0.35)`): hero photo-marquee's rotated placeholder cards, justified by the stacked-photo-print silhouette they represent.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadow appears only on the primary CTA's hover/focus state and on elements that represent something physically detached from the page plane (sticky CTA bar, marquee photo cards).

## Shapes

Two recurring silhouettes: the full pill (`rounded-full` / 999px) for every clickable action (buttons, sticky-bar dismiss, carousel arrows, process-step dots, pricing's tab switcher), and a soft large rounding (`1.75rem`) reserved for the gradient-wash card family (testimonial quote cards, qualification's fit card, pricing's portrait panel) plus its lighter qualification not-fit counterpart. The hero marquee's placeholder cards use a slightly smaller rounding (`1rem`) consistent with being a smaller repeated unit, not the primary card shape. Everything else is rectilinear with no radius — section containers, dividers, the services/process line structure. Borders are hairline (1px, `#e7e5e2` on light surfaces, low-opacity white on black surfaces) and never decorative-weight.

## Components

### Buttons
- **Shape:** full pill (`border-radius: 999px`), `px-6 py-3.5` padding, `0.95rem` semibold label, small trailing arrow glyph (inline SVG, `stroke: currentColor`) that nudges right on hover.
- **Primary (solid):** true-black fill (`#0a0a0a`), `ink-on-black` text; hover adds a 1px orange ring plus a soft orange drop shadow and shifts text to white. Used for the main conversion action everywhere it appears (hero, pricing, booking explainer, closing CTA).
- **Outline/ghost:** transparent fill, hairline border, ink text; hover shifts border and text to orange-deep. Used for secondary actions (services' "See If We're a Fit").
- **On-black variant (closing CTA):** inverted — `ink-on-black` fill, true-black text, hover flips to orange-deep fill with white text.
- **Pricing tab switcher:** a pill-shaped segmented control (hairline-bordered pill container, `rounded-full p-1`); the active tab fills true-black with white text, inactive tabs are muted-ink text with no fill.

### Cards / Containers — the Gradient-Wash Card (signature pattern)
- **Corner Style:** `1.75rem` radius.
- **Background:** true black (`#0a0a0a`) with a radial brand-gradient wash (`#D8220C → #FF4400`, transparent by ~70–78%) positioned toward the top-left/top, plus a dark scrim (`#0A0A0A` at ~45–60% opacity) over it, so the gradient reads as light hitting a black surface rather than a flat gradient fill.
- **Border:** hairline white-at-10%-opacity.
- **Internal Padding:** `1.75rem`–`2rem` depending on context (mobile/sm+).
- **Reuse:** this is a system-level pattern, not a testimonial-only device. It appears in the testimonial quote card (fan carousel), the qualification section's "who this is for" fit card, and the pricing section's per-tier portrait panel. All three share the same visual grammar: true-black ground, top-anchored gradient wash, scrim, centered or top-aligned content. The pricing portrait panel and hero photo-marquee currently render this pattern as a *placeholder* — a centered brand mark + "Portrait reserved for {name}" label — standing in for real per-tier photography that has not been supplied yet; the underlying gradient/mark values live in one shared source (`src/lib/plan-portraits.ts`) so swapping in real images later is a single edit.

### Cards / Containers — the Glass Card (signature pattern, light surfaces)
- **Corner Style:** `1.5rem` (compact cards) or `1.75rem` (larger comparison cards), matching the Gradient-Wash Card's radius language.
- **Background:** translucent white (`bg-white/45`–`/50`) with `backdrop-blur-xl`, a hairline white-at-70%-opacity border, and a soft offset shadow (`0 20px 45px -24px rgba(10,10,10,0.25)`).
- **Context:** always placed over 1-2 soft, blurred brand-gradient glow shapes (`blur-3xl`, ~30-45% opacity, orange family) positioned behind the card grid so the blur has real color to refract — never placed over a flat single-color section background alone.
- **Reuse:** the light-surface equivalent of the Gradient-Wash Card, used for every card-shaped grouping on white/warm-paper backgrounds — services and process (How We Work), the problem section's friction points, the booking-explainer steps, and the qualification fit/not-fit comparison. Qualification's fit/not-fit distinction lives only in the icon chip color (green/red) plus copy — the cards themselves and their ambient glows stay in the brand orange family, not literal green/red fills.
- **Hover:** every card (glass or Gradient-Wash) carries a `GlareSurface` overlay — a soft diagonal light sweep on hover/focus, orange-tinted on light glass cards, white-tinted on dark true-black cards. Subtle by design (12-18% opacity); reuses the same primitive as the button hover glow.

### Inputs / Fields
Not present in this build — the page has no form fields; all conversion actions are link-style CTAs to the booking destination.

### Navigation
Fixed header, transparent over the hero, filling to true-black with a color-inversion of the wordmark once scrolled past 24px. Nav links are `0.9rem` medium weight, muted by default, full ink/white on hover. The "Book a call" pill is always present, top-right, solid on both header states.

### Number Ticker (signature component)
Animated count-up (`motion`/`framer-motion` spring, damping 60 / stiffness 100) triggered once each stat scrolls into view. Used only for the four metrics-bar stats; renders as `tabular-nums` inline with static prefix/suffix strings (`$`, `M+`, `K+`).

### Testimonials Marquee (signature component)
An infinite horizontal marquee of all 6 real, named client testimonials (sourced directly from doomsday.studio, each with a real profile photo), using the same duplicated-track/`translateX(-50%)` technique as the metrics-bar marquee but slower (55s) since the content is meant to be read, and pauses on hover/focus so a visitor can stop and read a card. Cards use the Gradient-Wash Card pattern with upright (non-italic) quote text and a real circular headshot in the footer, not initials. Gated behind `prefers-reduced-motion` like every other marquee.

### Photo Marquee (signature component, new)
An infinite horizontal scrolling row of rotated placeholder photo cards (`framer-motion`, linear loop, `x: 0% → -25%`, 34s duration), masked to fade at top/bottom, positioned in the lower portion of the hero between the GradientWaves background layer and the hero text content. Cards reuse the same placeholder gradient/mark treatment as the pricing portrait panel via the shared `src/lib/plan-portraits.ts` source. An own-world component (not a reactbits/magicui import); its role is atmospheric texture behind the hero copy, not interactive content.

### Pricing Selector (signature component, new)
Client-side 3-tier tabbed selector (The Essentials / The Amplifier / The Overdrive) with `framer-motion` `AnimatePresence` crossfades between tiers: the portrait panel, price, and feature checklist all crossfade together on tab change (`opacity`-only transitions, 300–400ms `easeOut`). The feature checklist is a divided list (hairline-bordered rows) with an orange checkmark chip per row, consistent with the qualification section's fit-list treatment.

## Do's and Don'ts

### Do:
- **Do** alternate white (`#ffffff`) and warm-paper (`#f7f6f4`) backgrounds section-to-section as the only separator; don't add a border or shadow at the seam.
- **Do** run a single hairline rule or accent progress-line through any sequential/ordered list of items (services, process) rather than boxing each item in its own card.
- **Do** hold body paragraph measure to 65–75ch.
- **Do** use the Gradient-Wash Card pattern (true black + top-anchored brand-gradient wash + scrim, `1.75rem` radius) for any dark, high-conviction content surface — testimonials, pricing portraits, and future surfaces of the same kind — rather than a plain solid-black or bordered-only card.
- **Do** use the Glass Card pattern (translucent white, backdrop-blur, hairline border, soft shadow, over a blurred brand-gradient glow field) for card-shaped groupings on light backgrounds — services, process, problem's friction points, booking steps, qualification — per direct client request; this superseded the earlier connecting-line-only treatment for services/process.
- **Do** give every card (glass or gradient-wash) a subtle `GlareSurface` hover sweep, consistent with the button hover treatment.
- **Do** keep the brand gradient as a field/wash/glow (hero canvas, gradient-wash cards, glass-card ambient glows, closing-band glow, marquee cards), never as a gradient-clipped headline.
- **Do** gate any WebGL/animated background loop behind `prefers-reduced-motion`.
- **Do** label placeholder imagery honestly (centered brand mark + "reserved for {name}" caption) rather than fabricating stock photography, per the pricing portrait panel and hero marquee.
- **Do** keep card ambient glows and ring/icon accents in the brand orange family even where a section has a green/red semantic meaning (e.g. qualification) — color-code only the icon chip, not the card fill or background glow.

### Don't:
- **Don't** use a gray eyebrow/kicker label above a headline. The one instance drafted for the hero was removed in finish review and folded into body copy; the pattern is not part of this system.
- **Don't** use true black (`#0a0a0a`) as a section's resting background outside its structural placements (buttons, scrolled nav, gradient-wash cards, closing band).
- **Don't** introduce a second typeface. Inter (including its real italic style) is the sole family; do not reach for a serif or display face for quotes, headlines, or any other register.
- **Don't** use font-weight above 500 (medium) for headline/title-scale text, or tracking looser than `-3.5px` on that same scale — both are direct, repeated client corrections against an earlier bolder/looser pass.
